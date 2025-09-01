'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { useExchangeRates } from '@/hooks/use-exchange-rates';

export function RatesWidget() {
  const { rates } = useExchangeRates();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Курсы сегодня
          </h2>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Последнее обновление: {rates.lastUpdate}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center space-x-2">
                <span className="text-orange-600 font-bold">USDT</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="text-green-600 font-bold">CASH</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {rates.usdtToCash} ₽
              </div>
              <p className="text-gray-600">за 1 USDT</p>
              <div className="mt-4 flex items-center justify-center space-x-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Выгодно продать</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-100 hover:border-green-200 transition-colors shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center space-x-2">
                <span className="text-green-600 font-bold">CASH</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="text-orange-600 font-bold">USDT</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {rates.cashToUsdt} ₽
              </div>
              <p className="text-gray-600">за 1 USDT</p>
              <div className="mt-4 flex items-center justify-center space-x-1 text-blue-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Выгодно купить</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Курс фиксируется в момент подтверждения сделки менеджером. 
            Актуальный курс уточняйте при оформлении заявки.
          </p>
        </div>
      </div>
    </section>
  );
}