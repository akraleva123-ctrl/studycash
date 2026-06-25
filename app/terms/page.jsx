import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="section">
      <div className="panel">
        <h1>Terms of Use</h1>
        <p>StudyCash е учебен помощник. Генерираната информация трябва да се проверява с учебници, лекции и официални материали.</p>
        <p>Не гарантираме, че всеки отговор е напълно точен или достатъчен за изпит.</p>
        <p>Потребителят носи отговорност как използва резултатите.</p>
        <Link className="btn" href="/">Назад</Link>
      </div>
    </main>
  );
}
