import { Button } from '@/components/ui/button';
import { MessageCircle, Shield, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Обмен <span className="text-blue-600">USDT</span> ↔{' '}
            <span className="text-green-600">Наличные рубли</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
              в Ярославле
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Два офиса — ул. Титова, 20 и Корабельная ул., 1с9. 
            Курьер приедет в любую точку города.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-800">Быстро</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Eye className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-800">Прозрачно</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-800">Конфиденциально</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto shadow-lg" asChild>
              <Link href="/contact">
                Оставить заявку
              </Link>
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
                asChild
              >
              <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Перейти в Telegram-канал
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            *Прозрачные курсы. Оперативная связь. Без скрытых комиссий.
          </p>
        </div>
      </div>
    </section>
  );
}