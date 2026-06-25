import Link from "next/link";

export default function SetupPage() {
  return (
    <>
      <nav className="nav">
        <Link className="logo" href="/">StudyCash</Link>
        <div className="navlinks">
          <Link href="/studio">Studio</Link>
          <Link href="/">Начало</Link>
        </div>
      </nav>

      <main className="section">
        <div className="panel">
          <h1>Owner Setup</h1>
          <p>Това е страницата за Angela/собственика. Потребителите не трябва да я ползват.</p>

          <h2>1. OpenAI / AI генерации</h2>
          <p>Добави `OPENAI_API_KEY` във Vercel Environment Variables. Без него app-ът работи в demo mode.</p>

          <h2>2. Stripe / плащания</h2>
          <p>Създай Stripe акаунт, потвърди личност и добави банкова сметка за payouts.</p>
          <p>После създай 2 продукта:</p>
          <ul>
            <li>Premium — 4.99 EUR / месец</li>
            <li>Exam Pack — 2.99 EUR еднократно</li>
          </ul>
          <p>Копирай price IDs и secret key във Vercel:</p>
          <ul>
            <li>`STRIPE_SECRET_KEY`</li>
            <li>`STRIPE_PRICE_PREMIUM`</li>
            <li>`STRIPE_PRICE_EXAM_PACK`</li>
          </ul>

          <h2>3. URL / домейн</h2>
          <p>Добави `NEXT_PUBLIC_APP_URL` с реалния URL на сайта, например `https://studycash.vercel.app`.</p>

          <h2>4. Важно</h2>
          <p className="notice">
            Парите от плащанията отиват в Stripe акаунта, чийто Secret Key е въведен. 
            Значи за да получава Angela парите, ключовете трябва да са от нейния Stripe акаунт.
          </p>
        </div>
      </main>
    </>
  );
}
