import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator, MapPin, MessageCircle, Phone, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

function ArrowLogo() {
  return (
    <div className="flex flex-col items-center justify-center w-8 h-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
      <ArrowRight className="w-4 h-4 text-blue-600 -mb-0.5" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
      <ArrowLeft className="w-4 h-4 text-blue-600" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ArrowLogo />
              <span className="font-bold text-xl">Криптообмен Ярославль</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Быстрый и безопасный обмен USDT на наличные рубли в Ярославле. 
              Два офиса и курьерская служба по всему городу.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram-канал
                </Link>
              </Button>
              <Button className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Оставить заявку
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link href="/rates" className="block text-gray-400 hover:text-white transition-colors">
                Курсы и калькулятор
              </Link>
              <Link href="/how-it-works" className="block text-gray-400 hover:text-white transition-colors">
                Как работаем
              </Link>
              <Link href="/locations" className="block text-gray-400 hover:text-white transition-colors">
                Офисы и курьер
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Контакты
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Офисы</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Офис 1</div>
                  <div className="text-sm">ул. Титова, 20</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Офис 2</div>
                  <div className="text-sm">Корабельная ул., 1с9</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Криптообмен Ярославль. Все права защищены.
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}