* { box-sizing: border-box; }

:root {
  --bg: #f7f3ff;
  --bg2: #fff7ed;
  --text: #18142c;
  --muted: #68627c;
  --panel: rgba(255,255,255,.82);
  --panel-solid: #ffffff;
  --border: rgba(80, 62, 128, .14);
  --accent: #7c3aed;
  --accent2: #ec4899;
  --green: #10b981;
  --dark: #18142c;
  --soft: #efe7ff;
  --shadow: 0 24px 70px rgba(88, 63, 148, .16);
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at 12% 10%, rgba(124, 58, 237, .22), transparent 34%),
    radial-gradient(circle at 85% 12%, rgba(236, 72, 153, .16), transparent 30%),
    radial-gradient(circle at 50% 95%, rgba(16, 185, 129, .12), transparent 34%),
    linear-gradient(135deg, var(--bg), var(--bg2));
  color: var(--text);
}

a { color: inherit; text-decoration: none; }

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 7vw;
  background: rgba(255,255,255,.72);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  font-size: 25px;
  font-weight: 950;
  letter-spacing: -1px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  color: transparent;
}

.navlinks {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-weight: 750;
}

.navlinks a:hover { color: var(--accent); }

.hero {
  min-height: 74vh;
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 30px;
  padding: 72px 7vw 48px;
  align-items: center;
}

.badge {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 9px 13px;
  border-radius: 999px;
  border: 1px solid rgba(124,58,237,.18);
  background: rgba(255,255,255,.72);
  color: var(--accent);
  font-weight: 900;
  box-shadow: 0 10px 30px rgba(124,58,237,.08);
}

h1 {
  font-size: clamp(44px, 6.8vw, 86px);
  line-height: .92;
  letter-spacing: -4px;
  margin: 18px 0;
}

h2 {
  font-size: clamp(28px, 3vw, 42px);
  letter-spacing: -1.4px;
  margin: 0 0 14px;
}

h3 { margin-top: 0; }

p {
  color: var(--muted);
  line-height: 1.62;
  font-size: 16px;
}

.hero p {
  font-size: 19px;
  max-width: 760px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 14px 19px;
  border-radius: 16px;
  border: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
  font-weight: 950;
  cursor: pointer;
  margin: 8px 8px 8px 0;
  box-shadow: 0 16px 34px rgba(124,58,237,.25);
  transition: transform .15s ease, filter .15s ease;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}

.btn.secondary {
  background: var(--panel-solid);
  color: var(--dark);
  border: 1px solid var(--border);
  box-shadow: none;
}

.card, .panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.heroCard {
  position: relative;
  overflow: hidden;
}

.heroCard::before {
  content: "";
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(circle, rgba(124,58,237,.18), transparent 36%),
    radial-gradient(circle at 80% 20%, rgba(236,72,153,.18), transparent 32%);
  z-index: -1;
}

.miniPreview {
  background: #18142c;
  color: white;
  border-radius: 24px;
  padding: 22px;
  margin-top: 20px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.08);
}

.miniPreview p { color: rgba(255,255,255,.72); }

.tagrow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 18px 0;
}

.tag {
  background: rgba(124,58,237,.10);
  color: #5b21b6;
  border: 1px solid rgba(124,58,237,.12);
  border-radius: 999px;
  padding: 8px 11px;
  font-weight: 850;
  font-size: 13px;
}

.grid3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  padding: 20px 7vw 68px;
}

.section {
  padding: 44px 7vw;
}

.price {
  font-size: 34px;
  color: var(--accent);
  font-weight: 950;
  margin: 8px 0;
}

.studio {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 22px;
  padding: 34px 7vw 70px;
}

textarea, select, input {
  width: 100%;
  background: #fbfaff;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 15px;
  font-size: 15px;
  outline: none;
}

textarea:focus, select:focus, input:focus {
  border-color: rgba(124,58,237,.45);
  box-shadow: 0 0 0 4px rgba(124,58,237,.10);
}

textarea {
  min-height: 300px;
  resize: vertical;
  line-height: 1.55;
}

label {
  display: block;
  margin: 16px 0 8px;
  color: #4c1d95;
  font-weight: 950;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.58;
  background: #18142c;
  color: #f8f7ff;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 22px;
  padding: 22px;
  min-height: 440px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.04);
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.notice {
  padding: 14px 15px;
  border: 1px solid rgba(16,185,129,.18);
  border-radius: 16px;
  background: rgba(16,185,129,.08);
  color: #065f46;
  font-weight: 760;
}

.footer {
  padding: 30px 7vw 50px;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

.kicker {
  color: var(--accent);
  font-weight: 950;
  margin-bottom: 6px;
}

@media (max-width: 900px) {
  .hero, .studio, .grid3 { grid-template-columns: 1fr; }
  .navlinks { display: none; }
  .row { grid-template-columns: 1fr; }
  h1 { letter-spacing: -2px; }
}
