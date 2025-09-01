import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Обмен USDT ↔ Наличные рубли в Ярославле | Быстрый курс без комиссий',
  description: 'Обменник USDT на наличные рубли в Ярославле. Два офиса: ул. Титова, 20 и Корабельная ул., 1с9. Курьер по городу. Прозрачные курсы, быстрые сделки.',
  keywords: 'обмен USDT, криптообмен Ярославль, USDT рубли, обменник криптовалют',
  openGraph: {
    title: 'Обмен USDT ↔ Наличные рубли в Ярославле',
    description: 'Быстрый и безопасный обмен USDT на наличные рубли в Ярославле',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}