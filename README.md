import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="panel">
        <h1>Privacy Policy</h1>
        <p>StudyCash обработва въведения от потребителя текст, за да генерира учебен резултат.</p>
        <p>Не въвеждай лични данни, медицински досиета, пароли или чувствителна информация.</p>
        <p>Плащанията се обработват от Stripe. StudyCash не съхранява банкови карти.</p>
        <Link className="btn" href="/">Назад</Link>
      </div>
    </main>
  );
}
