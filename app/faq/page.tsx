'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько времени занимает сделка?',
    answer: 'Обычно сделка занимает около 5 минут с момента встречи. Время может увеличиться в зависимости от загруженности сети блокчейна.',
  },
  {
    question: 'Как фиксируется курс обмена?',
    answer: 'Курс фиксируется в момент подтверждения заявки нашим менеджером. После фиксации курс не изменяется до завершения сделки, независимо от колебаний на рынке.',
  },
  {
    question: 'Можно только USDT менять?',
    answer: 'Мы также обмениваем BTC, ETH, USDC. Курс уточняйте через телеграмм.',
  },
  {
    question: 'Есть ли минимальная сумма для обмена?',
    answer: 'Минимальная сумма составляет 50,000 рублей или эквивалент в USDT для встречи в офисе и курьерской доставки.',
  },
  {
    question: 'Нужны ли документы для обмена?',
    answer: 'До 600,000 рублей документы не требуются. При обмене больших сумм может потребоваться паспорт в соответствии с требованиями валютного законодательства РФ.',
  },
  {
    question: 'Как обеспечивается безопасность сделки?',
    answer: 'Все встречи проходят в наших официальных офисах или с проверенными курьерами. Мы проверяем подлинность банкнот специальными детекторами и подтверждаем все транзакции в блокчейне перед передачей средств.',
  },
  {
    question: 'Что делать, если транзакция долго не подтверждается?',
    answer: 'В случае задержки подтверждения в сети блокчейна мы ждем вместе с вами до получения необходимого количества подтверждений. Дополнительная комиссия за ускорение транзакции обсуждается отдельно.',
  },
  {
    question: 'Какие есть способы связи?',
    answer: 'Самый быстрый способ — через наш Telegram-канал или оставить заявку на сайте. Отвечаем в Telegram в течение 5-15 минут.',
  },
  {
    question: 'Есть ли ограничения по сумме обмена?',
    answer: 'Максимальная сумма обмена обсуждается индивидуально и зависит от текущих возможностей. Для крупных сумм нужно предварительно согласовать сделку.',
  },
  {
    question: 'Что если курс сильно изменился после подачи заявки?',
    answer: 'Курс фиксируется только после подтверждения заявки менеджером. До этого момента вы можете отказаться от сделки без каких-либо обязательств, если курс вас не устраивает.',
  },
  {
    question: 'Возможен ли возврат средств?',
    answer: 'После завершения сделки возврат средств не предусмотрен. Все детали сделки обсуждаются и подтверждаются заранее. В случае технических ошибок каждый случай рассматривается индивидуально.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о процессе обмена USDT на наличные рубли
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border-0 px-6"
            >
              <AccordionTrigger className="text-left hover:text-blue-600 transition-colors py-6 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-gray-600 mb-6">
              Свяжитесь с нами напрямую, и мы ответим на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3" asChild>
                <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Задать вопрос в Telegram
                </Link>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3" asChild>
                <Link href="/contact">
                  Оставить заявку
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}