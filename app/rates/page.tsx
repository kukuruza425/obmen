'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, Copy, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { useExchangeRates } from '@/hooks/use-exchange-rates';
import { toast } from 'sonner';
import Link from 'next/link';

export default function RatesPage() {
  const { rates } = useExchangeRates();
  const [precision, setPrecision] = useState<2 | 6>(2);
  const [rubAmount, setRubAmount] = useState<string>('10000');
  const [usdtAmount, setUsdtAmount] = useState<string>('100');

  const calculateFromRub = () => {
    const amount = parseFloat(rubAmount) || 0;
    return (amount / rates.usdtToCash).toFixed(precision);
  };

  const calculateFromUsdt = () => {
    const amount = parseFloat(usdtAmount) || 0;
    return (amount * rates.cashToUsdt).toFixed(precision);
  };

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success('Результат скопирован в буфер обмена');
    } catch (error) {
      toast.error('Не удалось скопировать');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Актуальные курсы и калькулятор
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Рассчитайте точную сумму обмена и оставьте заявку
          </p>
        </div>

        {/* Актуальные курсы */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center space-x-2">
                <span className="text-orange-600 font-bold">USDT</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="text-green-600 font-bold">CASH</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {rates.usdtToCash} ₽
              </div>
              <p className="text-gray-600 mb-4">за 1 USDT</p>
              <div className="flex items-center justify-center space-x-1 text-green-600 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Выгодно продать</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>Обновлено: {rates.lastUpdate}</span>
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
              <div className="text-5xl font-bold text-green-600 mb-2">
                {rates.cashToUsdt} ₽
              </div>
              <p className="text-gray-600 mb-4">за 1 USDT</p>
              <div className="flex items-center justify-center space-x-1 text-blue-600 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Выгодно купить</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>Обновлено: {rates.lastUpdate}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Расширенный калькулятор */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-0">
          <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Calculator className="w-7 h-7" />
              <span>Калькулятор обмена</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="get-rub" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="get-rub" className="text-lg py-3">Получить рубли</TabsTrigger>
                <TabsTrigger value="get-usdt" className="text-lg py-3">Купить USDT</TabsTrigger>
              </TabsList>
              
              <TabsContent value="get-rub" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">У меня есть USDT</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="100"
                        value={usdtAmount}
                        onChange={(e) => setUsdtAmount(e.target.value)}
                        className="text-xl py-6 pr-20"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                        USDT
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">Получу рублей</Label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={calculateFromUsdt()}
                        readOnly
                        className="text-xl py-6 pr-20 bg-gray-50 font-bold text-green-600"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                        <span className="text-gray-500 font-semibold">₽</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(calculateFromUsdt())}
                          className="p-1"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Курс: {rates.cashToUsdt} ₽ за 1 USDT
                </div>
              </TabsContent>
              
              <TabsContent value="get-usdt" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">У меня есть рублей</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="10000"
                        value={rubAmount}
                        onChange={(e) => setRubAmount(e.target.value)}
                        className="text-xl py-6 pr-16"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                        ₽
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-lg font-semibold">Получу USDT</Label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={calculateFromRub()}
                        readOnly
                        className="text-xl py-6 pr-20 bg-gray-50 font-bold text-blue-600"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                        <span className="text-gray-500 font-semibold">USDT</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(calculateFromRub())}
                          className="p-1"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Курс: {rates.usdtToCash} ₽ за 1 USDT
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-between mt-6">
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
            </div>

            <div className="border-t pt-6 mt-6">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}