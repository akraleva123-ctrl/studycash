import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <nav className="nav">
        <Link className="logo" href="/">StudyCash</Link>
        <div className="navlinks">
          <Link href="/studio">Studio</Link>
          <Link href="/setup">Setup</Link>
          <a href="#pricing">Цени</a>
        </div>
      </nav>

      <main className="hero">
        <section>
          <span className="badge">Smart study engine</span>
          <h1>Учи по-бързо. Отговаряй по-умно.</h1>
          <p>
            Поставяш тема, конспект или лекция. StudyCash генерира кратък отговор,
            разширена разработка, тестови въпроси и флашкарти — на ясен български.
          </p>
          <Link className="btn" href="/studio">Пробвай безплатно</Link>
          <a className="btn secondary" href="#pricing">Виж Premium</a>
        </section>

        <aside className="card heroCard">
          <h2>Пример</h2>
          <p>“Пулпит” → определение, етиология, патогенеза, симптоми, диагностика, лечение + тестови въпроси.</p>
          <p className="notice">Free: 5 генерации. После Premium или Exam Pack.</p>
        </aside>
      </main>

      <section className="section">
        <h2>За кого е?</h2>
        <p>
          За студенти, които имат много теми, малко време и нужда от подреден материал.
          Особено полезно за медицина, дентална медицина, фармация, право и други тежки специалности.
        </p>
      </section>

      <section id="pricing" className="grid3">
        <div className="card">
          <h3>Free</h3>
          <p className="price">0 €</p>
          <p>5 генерации, за да пробваш дали ти върши работа.</p>
        </div>
        <div className="card">
          <h3>Premium</h3>
          <p className="price">4.99 € / месец</p>
          <p>Неограничени генерации, идеално около сесия.</p>
        </div>
        <div className="card">
          <h3>Exam Pack</h3>
          <p className="price">2.99 €</p>
          <p>Еднократен пакет за конкретен изпит.</p>
        </div>
      </section>

      <footer className="footer">
        <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/setup">Owner setup</Link>
      </footer>
    </>
  );
}
