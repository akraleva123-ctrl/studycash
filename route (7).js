 "use client";

import { useState } from "react";
import Link from "next/link";

export default function StudioPage() {
  const [topic, setTopic] = useState("Пулпит — определение, етиология, патогенеза, симптоми, диагностика и лечение.");
  const [mode, setMode] = useState("short");
  const [output, setOutput] = useState("Тук ще се появи резултатът.");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function generate() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ topic, mode })
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.error === "FREE_LIMIT_REACHED") {
          setMessage("Свърши free лимитът. Купи Premium или Exam Pack, за да продължиш.");
        } else {
          setMessage(data.message || "Нещо се счупи.");
        }
        return;
      }
      setOutput(data.output);
      setMessage(data.aiProvider === "gemini" ? "Готово — generated with Gemini AI." : "Готово — smart study режим.");
    } catch (e) {
      setMessage("Грешка при генерацията.");
    } finally {
      setLoading(false);
    }
  }

  async function checkout(plan) {
    setMessage("");
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ plan })
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Stripe не е настроен още. Виж Setup.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setMessage("Не може да се отвори плащане. Провери Setup.");
    }
  }

  function copy() {
    navigator.clipboard?.writeText(output);
    setMessage("Копирано.");
  }

  function download() {
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "studycash-result.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <nav className="nav">
        <Link className="logo" href="/">StudyCash</Link>
        <div className="navlinks">
          <Link href="/">Начало</Link>
          <Link href="/setup">Setup</Link>
        </div>
      </nav>

      <main className="studio">
        <section className="panel">
          <h2>Generator Studio</h2>
          <p>Постави тема, лекция или конспект. StudyCash я подрежда като изпитен отговор, тест или флашкарти.</p>

          <label>Тема / текст</label>
          <textarea value={topic} onChange={e => setTopic(e.target.value)} />

          <label>Тип резултат</label>
          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="short">Smart изпитен отговор</option>
            <option value="long">Разширена разработка</option>
            <option value="quiz">Тестови въпроси</option>
            <option value="cards">Флашкарти</option>
          </select>

          <button className="btn" onClick={generate} disabled={loading}>
            {loading ? "Генерира..." : "Генерирай"}
          </button>

          <div className="row">
            <button className="btn secondary" onClick={() => checkout("premium")}>Premium 4.99€/месец</button>
            <button className="btn secondary" onClick={() => checkout("exam")}>Exam Pack 2.99€</button>
          </div>

          {message && <p className="notice">{message}</p>}
        </section>

        <section className="panel">
          <h2>Резултат</h2>
          <pre>{output}</pre>
          <div className="row">
            <button className="btn" onClick={copy}>Копирай</button>
            <button className="btn secondary" onClick={download}>Свали .txt</button>
          </div>
        </section>
      </main>
    </>
  );
}
