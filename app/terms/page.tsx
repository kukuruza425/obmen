export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Пользовательское соглашение
          </h1>
          
          <div className="text-gray-600 space-y-6">
            <p>
              <strong>Дата вступления в силу:</strong> [Заполнить при внедрении]
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение регулирует отношения между 
                [Указать наименование организации] и пользователями сайта при оказании 
                услуг обмена криптовалют.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Предмет соглашения</h2>
              <p>
                Мы оказываем услуги по обмену криптовалюты USDT на наличные рубли и обратно 
                на территории города Ярославль в соответствии с условиями настоящего соглашения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Порядок оказания услуг</h2>
              <p>Обмен осуществляется в следующем порядке:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Подача заявки пользователем</li>
                <li>Согласование условий и фиксация курса</li>
                <li>Встреча в офисе или с курьером</li>
                <li>Проведение обмена</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Права и обязанности сторон</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1. Обязанности исполнителя:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Провести обмен по согласованному курсу</li>
                <li>Обеспечить конфиденциальность данных</li>
                <li>Проверить подлинность получаемых средств</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2. Обязанности пользователя:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставить достоверную информацию</li>
                <li>Прибыть на встречу в согласованное время</li>
                <li>При необходимости предъявить документы</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ограничения и риски</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Минимальная сумма обмена: 50,000 рублей</li>
                <li>Курс фиксируется на момент подтверждения заявки</li>
                <li>Сроки подтверждения транзакций зависят от загруженности сети</li>
                <li>Возможны изменения в работе в связи с изменениями законодательства</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ответственность</h2>
              <p>
                Стороны несут ответственность за неисполнение или ненадлежащее исполнение 
                своих обязательств в соответствии с действующим законодательством РФ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Конфиденциальность</h2>
              <p>
                Обработка персональных данных осуществляется в соответствии с 
                Политикой конфиденциальности и требованиями ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Разрешение споров</h2>
              <p>
                Все споры решаются путем переговоров.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Заключительные положения</h2>
              <p>
                Соглашение может быть изменено в одностороннем порядке. 
                Актуальная версия размещается на сайте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Контактная информация</h2>
              <ul className="list-none space-y-2">
                <li>Адрес: [Указать юридический адрес]</li>
                <li>Telegram: [Указать контакт]</li>
                <li></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}