import { Card, CardContent } from '@/components/ui/card';
import { FileText, CheckCircle, MapPin, HandCoins } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Заявка',
    description: 'Где обменять USDT в Ярославле? Указываете сумму и выбираете офис обмена USDT или курьер обмен USDT',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    step: 2,
    title: 'Подтверждение',
    description: 'Фиксируем выгодный курс обмена и детали сделки для срочного обмена USDT',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600',
  },
  {
    step: 3,
    title: 'Встреча',
    description: 'Встреча в офисе криптообмена (Титова 20 / Корабельная 1с9) или обмен криптовалюты с курьером',
    icon: MapPin,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    step: 4,
    title: 'Расчёт',
    description: 'Конфиденциальность сделки: передача USDT/наличных рублей по согласованным условиям',
    icon: HandCoins,
    color: 'bg-orange-100 text-orange-600',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Как обменять USDT в Ярославле
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Как работает криптообмен Ярославль: простой процесс в 4 шага для безопасного обмена криптовалюты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.step} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="font-semibold text-blue-800">Обмен USDT быстро: среднее время 5 минут</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}