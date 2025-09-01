'use client';

import { useState, useEffect } from 'react';

interface ExchangeRates {
  usdtToCash: number;
  cashToUsdt: number;
  lastUpdate: string;
}

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRates>({
    usdtToCash: 79.76,
    cashToUsdt: 81.87,
    lastUpdate: new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    })
  });

  // В реальном проекте здесь будет загрузка курсов с API
  useEffect(() => {
    // Имитация обновления времени каждую минуту
    const interval = setInterval(() => {
      setRates(prev => ({
        ...prev,
        lastUpdate: new Date().toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        })
      }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return { rates, setRates };
}