'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    amount: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact.trim()) {
      toast.error('Укажите способ связи (Telegram или телефон)');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Формируем сообщение для Telegram
      const message = `🔄 Новая заявка на обмен USDT

👤 Имя: ${formData.name || 'Не указано'}
📱 Контакт: ${formData.contact}
💰 Сумма: ${formData.amount || 'Не указана'}
💬 Комментарий: ${formData.comment || 'Нет комментария'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

      // Отправляем в Telegram через Bot API
      const telegramBotToken = '8280206808:AAEYkIFfMYVCljtwB6eNMQ-PlZOV1mlhMps';
      const chatId = '8393391667';
      
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', contact: '', amount: '', comment: '' });
      } else {
        throw new Error('Ошибка отправки в Telegram');
      }
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      toast.error('Произошла ошибка при отправке заявки. Попробуйте еще раз или свяжитесь с нами напрямую в Telegram.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом или оставьте заявку на обмен
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма заявки */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">
                  Оставить заявку на обмен
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Как к вам обращаться"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-red-500">
                      Telegram @username или номер телефона *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="@username или 8 (900) 123-45-67"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                      className="py-3"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма обмена</Label>
                    <Input
                      id="amount"
                      placeholder="Например: 100 USDT или 10000 рублей"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      className="py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea
                      id="comment"
                      placeholder="Укажите предпочтения: офис/курьер, время встречи, особые пожелания"
                      value={formData.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Отправляем...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Контактная информация */}
          <div className="space-y-8">
            {/* Быстрые контакты */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <span>Быстрые контакты</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <a href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer">
                    Перейти в Telegram-канал
                  </a>
                </Button>
                
                <div className="text-center text-gray-600 text-sm">
                  Самый быстрый способ связи — через Telegram-канал.
                  Отвечаем в течение 5-15 минут.
                </div>
              </CardContent>
            </Card>

            {/* Офисы */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span>Наши офисы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Офис 1</div>
                  <div className="text-gray-600">ул. Титова, 20</div>
                  <div className="text-sm text-gray-500">Красноперекопский район</div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Офис 2</div>
                  <div className="text-gray-600">Корабельная ул., 1с9</div>
                  <div className="text-sm text-gray-500">Фрунзенский район</div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600 pt-4 border-t">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Ежедневно: 9:00-22:00</span>
                </div>
              </CardContent>
            </Card>

            {/* Курьер */}
            <Card className="shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span>Курьер по городу</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Приедем в любую точку Ярославля в удобное для вас время.
                  Время выезда: 30-60 минут.
                </p>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  <a href="https://t.me/obmencrypto76" target="_blank" rel="noopener noreferrer" className="w-full">
                    Вызвать курьера
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Юридическая информация */}
            <Card className="shadow-lg bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Обратите внимание:</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Курс обмена фиксируется после подтверждения заявки менеджером</p>
                  <p>• Для сумм свыше 600,000 рублей может потребоваться документ, удостоверяющий личность</p>
                  <p>• Мы работаем в соответствии с требованиями валютного законодательства РФ</p>
                  <p>• Конфиденциальность ваших данных гарантируется</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}