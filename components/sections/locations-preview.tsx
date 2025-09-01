import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Truck } from 'lucide-react';
import Link from 'next/link';

const offices = [
  {
    id: 1,
    name: 'Офис 1',
    address: 'ул. Титова, 20',
    description: 'Красноперекопский район',
    hours: 'Ежедневно: 9:00-22:00',
  },
  {
    id: 2,
    name: 'Офис 2',
    address: 'Корабельная ул., 1с9',
    description: 'Фрунзенский район',
    hours: 'Ежедневно: 9:00-22:00',
  },
];

export function LocationsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Офисы и курьер
          </h2>
          <p className="text-xl text-gray-600">
            Встретимся в удобном для вас месте
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <Card key={office.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{office.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-lg">{office.address}</div>
                  <div className="text-gray-600">{office.description}</div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{office.hours}</span>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                    <Link href={office.id === 1 ? "https://yandex.ru/maps/?ol=geo&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A2%D0%B8%D1%82%D0%BE%D0%B2%D0%B0,%2020&sll=39.831452,57.582412&sspn=0.004410,0.008211&si=198a6dt71pvvjxu0g1wn3v802r" : "https://yandex.ru/maps/?ol=geo&text=%D0%9A%D0%BE%D1%80%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0,%201%D1%819&sll=39.929099,57.576424&sspn=0.004410,0.008211&si=198a6dt71pvvjxu0g1wn3v802r"} target="_blank" rel="noopener noreferrer">
                    Построить маршрут
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span>Курьер по Ярославлю</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Приедем в любую точку города в удобное для вас время
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Время выезда: 30-60 минут</div>
                <div>• Работаем: 9:00-22:00</div>
                <div>• Минимальная сумма: уточняйте</div>
              </div>
              <div className="pt-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/contact">
                    Вызвать курьера
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}