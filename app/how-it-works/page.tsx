import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, MapPin, HandCoins, Shield, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: 1,
    title: 'Оставьте заявку',
    description: 'Заполните форму с указанием суммы обмена и предпочтительного формата встречи (офис или курьер). Укажите ваш Telegram или телефон для связи.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    step: 2,
    title: 'Подтверждение сделки',
    description: 'Наш менеджер свяжется с вами в течение 5-15 минут, зафиксирует курс обмена и согласует все детали: время, место встречи и способ расчёта.',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600',
  },
  {
    step: 3,
    title: 'Встреча',
    description: 'Встречаемся в одном из наших офисов (ул. Титова, 20 или Корабельная ул., 1с9) либо наш курьер приезжает в удобную для вас точку Ярославля.',
    icon: MapPin,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    step: 4,
    title: 'Расчёт',
    description: 'Проводим обмен по зафиксированному курсу: проверяем средства, подтверждаем транзакцию и передаём USDT/наличные согласно условиям сделки.',
    icon: HandCoins,
    color: 'bg-orange-100 text-orange-600',
  },
];

const benefits = [
  {
    title: 'Быстро',
    description: 'Средняя сделка занимает около 5 минут от заявки до завершения',
    icon: Clock,
    color: 'text-blue-600',
  },
  {
    title: 'Прозрачно',
    description: 'Курс фиксируется заранее, никаких скрытых комиссий',
    icon: Eye,
    color: 'text-green-600',
  },
  {
    title: 'Конфиденциально',
    description: 'Безопасные встречи, проверенные курьеры, защита данных',
    icon: Shield,
    color: 'text-purple-600',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Как проходит обмен USDT
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Простой и прозрачный процесс в 4 шага — от заявки до получения средств
          </p>
          
          {/* Преимущества */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm">
                  <IconComponent className={`w-5 h-5 ${benefit.color}`} />
                  <span className="font-medium text-gray-800">{benefit.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 шага процесса */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.step} className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Информация о курьере */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Курьер по Ярославлю
                </h2>
                <p className="text-gray-700">
                  Если вам неудобно приезжать в офис, наш курьер приедет в любую точку города
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="font-semibold text-purple-600">Время выезда</div>
                  <div className="text-gray-700">30-60 минут после подтверждения</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-purple-600">Режим работы</div>
                  <div className="text-gray-700">Ежедневно с 9:00 до 22:00</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-purple-600">Зона обслуживания</div>
                  <div className="text-gray-700">Весь Ярославль и пригороды</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  *Минимальная сумма для курьера уточняется при оформлении заявки
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3" asChild>
                  <Link href="/contact">
                    Вызвать курьера
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Временные рамки */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="font-semibold text-blue-800">Среднее время сделки: 5 минут</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Готовы начать обмен?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4" asChild>
              <Link href="/contact">
                Оставить заявку
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4" asChild>
              <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
                Перейти в Telegram-канал
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}