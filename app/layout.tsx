import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Обмен USDT Ярославль | Продать криптовалюту за наличные рубли',
  description: 'Обмен USDT на наличные рубли в Ярославле. Офисы на Титова 20 и Корабельной 1с9. Курьер по городу. Выгодный курс, быстрые сделки без комиссии.',
  keywords: 'обмен USDT Ярославль, обмен криптовалют наличными Ярославль, продать USDT за наличные, криптообмен Ярославль, купить USDT за рубли',
  openGraph: {
    title: 'Обмен USDT Ярославль | Криптовалютный обменник',
    description: 'Безопасный обмен USDT на наличные рубли в Ярославле. Два офиса + курьер по городу',
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