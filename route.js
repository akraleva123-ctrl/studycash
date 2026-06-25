* { box-sizing: border-box; }
:root {
  --bg: #0f1020;
  --panel: #181a2f;
  --panel2: #20233d;
  --text: #f6f7ff;
  --muted: #b7bdd8;
  --accent: #8b5cf6;
  --green: #22c55e;
  --border: rgba(255,255,255,.12);
}
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(139,92,246,.35), transparent 32%),
    radial-gradient(circle at bottom right, rgba(34,197,94,.18), transparent 34%),
    var(--bg);
  color: var(--text);
}
a { color: inherit; text-decoration: none; }
.nav {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 7vw;
  border-bottom: 1px solid var(--border);
  background: rgba(15,16,32,.78);
  backdrop-filter: blur(12px);
  position: sticky; top: 0; z-index: 20;
}
.logo { font-size: 24px; font-weight: 950; }
.navlinks { display: flex; gap: 18px; color: var(--muted); }
.hero {
  min-height: 72vh;
  display: grid; grid-template-columns: 1.25fr .75fr; gap: 30px;
  padding: 70px 7vw 35px; align-items: center;
}
.badge {
  display: inline-block; padding: 8px 13px; border-radius: 999px;
  border: 1px solid var(--border); background: rgba(139,92,246,.12); color: #ddd1ff;
  font-weight: 800;
}
h1 { font-size: clamp(42px, 6vw, 78px); line-height: .95; margin: 18px 0; }
h2 { font-size: 34px; margin-top: 0; }
p { color: var(--muted); line-height: 1.6; }
.hero p { font-size: 18px; max-width: 790px; }
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 13px 18px; border-radius: 14px; border: 0;
  background: var(--accent); color: white; font-weight: 900; cursor: pointer;
  margin: 8px 8px 8px 0;
}
.btn.secondary { background: rgba(255,255,255,.08); }
.card, .panel {
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.035));
  border: 1px solid var(--border);
  border-radius: 26px;
  padding: 26px;
  box-shadow: 0 20px 60px rgba(0,0,0,.24);
}
.heroCard { transform: rotate(2deg); }
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 20px 7vw 60px; }
.section { padding: 40px 7vw; }
.price { font-size: 30px; color: #86efac; font-weight: 950; margin: 8px 0; }
.studio {
  display: grid; grid-template-columns: .95fr 1.05fr; gap: 22px;
  padding: 34px 7vw 70px;
}
textarea, select, input {
  width: 100%;
  background: #101226; color: white;
  border: 1px solid var(--border); border-radius: 16px;
  padding: 14px; font-size: 15px; outline: none;
}
textarea { min-height: 300px; resize: vertical; line-height: 1.5; }
label { display: block; margin: 14px 0 8px; color: #ddd1ff; font-weight: 800; }
pre {
  white-space: pre-wrap; word-wrap: break-word; line-height: 1.55;
  background: #101226; border: 1px solid var(--border);
  border-radius: 16px; padding: 18px; min-height: 420px;
}
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.notice {
  padding: 13px 14px; border: 1px solid rgba(255,255,255,.16);
  border-radius: 14px; background: rgba(255,255,255,.06); color: var(--muted);
}
.footer { padding: 30px 7vw 50px; border-top: 1px solid var(--border); color: var(--muted); }
@media (max-width: 850px) {
  .hero, .studio, .grid3 { grid-template-columns: 1fr; }
  .navlinks { display: none; }
  .row { grid-template-columns: 1fr; }
}
