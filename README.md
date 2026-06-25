# StudyCash — готов web app пакет

Това е deploy-ready Next.js web app за StudyCash: студентски AI генератор за изпитни теми, тестове и флашкарти.

## Какво има
- Landing page с цени
- Studio/dashboard за генерации
- 5 безплатни генерации на браузър
- AI API endpoint с OpenAI-compatible API
- Demo fallback ако няма `OPENAI_API_KEY`
- Stripe Checkout за:
  - Premium: 4.99 EUR / месец
  - Exam Pack: 2.99 EUR
- Stripe success route, който отключва платен режим след успешен checkout
- Setup page с инструкции
- Terms + Privacy страници

## Важно честно казано
Това е реален deploy-ready app пакет, но НЕ мога да въведа твоите тайни ключове, банка или Stripe вместо теб.
За да получаваш пари:
1. Ти създаваш Stripe акаунт.
2. В Stripe добавяш твоята банка.
3. Създаваш 2 продукта и копираш Price IDs.
4. Поставяш ключовете във Vercel Environment Variables.

## Най-лесен начин за качване
1. Направи GitHub акаунт, ако нямаш.
2. Създай нов repository, примерно `studycash`.
3. Качи файловете от тази папка.
4. Влез във Vercel → New Project → Import GitHub repo.
5. Add Environment Variables от `.env.example`.
6. Deploy.

## Без AI key
App-ът ще работи в demo mode и ще връща примерни отговори.

## Без Stripe key
App-ът ще показва цени, но плащането няма да тръгне.

## Какво да рекламираш
“Прати тема → StudyCash ти прави кратък отговор, разширена разработка, тестове и флашкарти.”
