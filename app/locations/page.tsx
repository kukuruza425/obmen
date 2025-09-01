'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Truck, Phone, Navigation } from 'lucide-react';
import { YandexMap } from '@/components/maps/yandex-map';
import Link from 'next/link';

const offices = [
  {
    id: 1,
    name: 'Офис 1',
    address: 'ул. Титова, 20',
    description: 'Красноперекопский район',
    hours: 'Ежедневно: 9:00-22:00',
    landmarks: 'Офисное здание, 1 этаж',
    coordinates: [57.617773, 39.886515],
  },
  {
    id: 2,
    name: 'Офис 2', 
    address: 'Корабельная ул., 1с9',
    description: 'Фрунзенский район',
    hours: 'Ежедневно: 9:00-22:00',
    landmarks: 'Офисное здание',
    coordinates: [57.627845, 39.823456],
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Офисы и курьер
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Встретимся в удобном для вас месте: в наших офисах или где угодно в городе
          </p>
        </div>

        {/* Офисы */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {offices.map((office) => (
            <Card key={office.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>{office.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-lg text-gray-900">{office.address}</div>
                  <div className="text-gray-600">{office.description}</div>
                  <div className="text-gray-600 text-sm">{office.landmarks}</div>
                </div>
                
                <div className="flex items-start space-x-2 text-gray-600">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="text-sm whitespace-pre-line">{office.hours}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" className="flex-1 w-full" asChild>
                    <Link href="https://yandex.ru/maps/?ol=geo&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A2%D0%B8%D1%82%D0%BE%D0%B2%D0%B0,%2020&sll=39.831452,57.582412&sspn=0.004410,0.008211&si=198a6dt71pvvjxu0g1wn3v802r" target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      Построить маршрут
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Связаться
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Курьер */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-blue-50 border-0">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <Truck className="w-7 h-7 text-purple-600" />
                <span>Курьер по Ярославлю</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-700 text-lg">
                Не можете приехать в офис? Наш курьер доставит или заберёт средства в любой точке города
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Время прибытия</div>
                    <div className="text-gray-600">30-60 минут</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Зона доставки</div>
                    <div className="text-gray-600">Весь Ярославль</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Режим работы</div>
                    <div className="text-gray-600">9:00-22:00</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Как оформить заявку на курьера:</h3>
                <div className="text-sm text-gray-600 space-y-2 text-left max-w-2xl mx-auto">
                  <div>• Укажите в заявке желание встретиться с курьером</div>
                  <div>• Назовите удобный адрес (станция метро, торговый центр, кафе)</div>
                  <div>• Согласуйте время встречи с менеджером</div>
                  <div>• Дождитесь курьера в назначенное время</div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  *Минимальная сумма для выезда курьера уточняется при оформлении заявки
                </p>
              </div>
              
              <div className="text-center">
                <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg" asChild>
                  <Link href="/contact">
                    Вызвать курьера
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Яндекс карта */}
        <YandexMap />
      </div>
    </div>
  );
}