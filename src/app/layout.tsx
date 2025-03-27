import './globals.css';

export const metadata = {
  title: 'Next.js Blog',
  description: 'Динамичная блог-платформа',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}