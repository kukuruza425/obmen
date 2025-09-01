import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Готовы обменять USDT?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Оставьте заявку прямо сейчас или перейдите в наш Telegram-канал 
          для быстрой связи с менеджером
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
              asChild
            >
            <Link href="/contact">
              Оставить заявку
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-blue-600 bg-white hover:bg-gray-100 hover:text-blue-700 text-lg px-8 py-4 h-auto font-semibold"
              asChild
            >
            <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Перейти в Telegram-канал
            </Link>
          </Button>
        </div>

        <p className="text-sm text-blue-200 mt-6">
          Работаем ежедневно с 9:00 до 22:00 • Два офиса + курьер по городу
        </p>
      </div>
    </section>
  );
}