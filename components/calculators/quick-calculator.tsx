'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, ArrowUpDown, Copy } from 'lucide-react';
import { useExchangeRates } from '@/hooks/use-exchange-rates';
import { toast } from 'sonner';
import Link from 'next/link';

export function QuickCalculator() {
  const { rates } = useExchangeRates();
  const [direction, setDirection] = useState<'rub-to-usdt' | 'usdt-to-rub'>('rub-to-usdt');
  const [inputAmount, setInputAmount] = useState<string>('10000');
  const [precision, setPrecision] = useState<2 | 6>(2);

  const calculateResult = () => {
    const amount = parseFloat(inputAmount) || 0;
    if (direction === 'rub-to-usdt') {
      return (amount / rates.usdtToCash).toFixed(precision);
    } else {
      return (amount * rates.cashToUsdt).toFixed(precision);
    }
  };

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(calculateResult());
      toast.success('Результат скопирован в буфер обмена');
    } catch (error) {
      toast.error('Не удалось скопировать');
    }
  };

  const toggleDirection = () => {
    setDirection(direction === 'rub-to-usdt' ? 'usdt-to-rub' : 'rub-to-usdt');
    setInputAmount('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Быстрый калькулятор
          </h2>
          <p className="text-gray-600">
            Рассчитайте сумму обмена и оставьте заявку
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Calculator className="w-6 h-6" />
              <span>Калькулятор обмена</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleDirection}
                  className="flex items-center space-x-2"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Изменить направление</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    {direction === 'rub-to-usdt' ? 'Хочу получить USDT' : 'Хочу получить рублей'}
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder={direction === 'rub-to-usdt' ? '1000' : '100'}
                      value={inputAmount}
                      onChange={(e) => setInputAmount(e.target.value)}
                      className="text-xl py-6 pr-16"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                      {direction === 'rub-to-usdt' ? '₽' : 'USDT'}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-semibold">
                    {direction === 'rub-to-usdt' ? 'Нужно отправить' : 'Нужно наличными'}
                  </Label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={calculateResult()}
                      readOnly
                      className="text-xl py-6 pr-20 bg-gray-50 font-bold text-blue-600"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <span className="text-gray-500 font-semibold">
                        {direction === 'rub-to-usdt' ? 'USDT' : '₽'}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyResult}
                        className="p-1"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Label className="text-sm">Точность расчёта</Label>
                  <Select
                    value={precision.toString()}
                    onValueChange={(value) => setPrecision(parseInt(value) as 2 | 6)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 знака</SelectItem>
                      <SelectItem value="6">6 знаков</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    Курс: {direction === 'rub-to-usdt' ? rates.usdtToCash : rates.cashToUsdt} ₽
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {direction === 'rub-to-usdt' ? 'USDT → CASH' : 'CASH → USDT'}
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-center">
                  <Button className="py-6 px-12 bg-blue-600 hover:bg-blue-700 text-xl font-semibold" asChild>
                    <Link href="/contact">
                      Оставить заявку
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Курс подтверждается менеджером при согласовании заявки.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}