'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StickyActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Actions */}
      <div className="fixed right-6 bottom-6 z-50 hidden lg:block">
        <div className={cn(
          "flex flex-col space-y-3 transition-all duration-300",
          isMinimized && "opacity-80 scale-90"
        )}>
          <Link href="/contact">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 text-white px-6 py-4 h-auto"
              size="lg"
            >
              <FileText className="w-5 h-5 mr-2" />
              Оставить заявку
            </Button>
          </Link>
          <Link href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="bg-white border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-4 h-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white border-t shadow-2xl p-4">
          <div className="grid grid-cols-2 gap-3">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3"
              size="lg"
            >
              <FileText className="w-4 h-4 mr-2" />
              Заявка
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 py-3"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </div>

      {/* Add bottom padding to prevent content overlap on mobile */}
      <div className="h-20 lg:h-0"></div>
    </>
  );
}