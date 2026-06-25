import "./globals.css";

export const metadata = {
  title: "StudyCash — AI изпитен генератор",
  description: "Генерирай изпитни теми, тестове и флашкарти за секунди.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body>{children}</body>
    </html>
  );
}
