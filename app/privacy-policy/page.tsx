export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Политика конфиденциальности
          </h1>
          
          <div className="text-gray-600 space-y-6">
            <p>
              <strong>Дата вступления в силу:</strong>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                информации о физических лицах (далее — «Пользователи»), использующих сайт 
                [Указать домен] и услуги обмена криптовалют.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Собираемые данные</h2>
              <p>Мы можем собирать следующую информацию:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Контактные данные (номер телефона, Telegram)</li>
                <li>Информацию о транзакциях</li>
                <li>IP-адрес и данные о браузере</li>
                <li>Данные документов (при необходимости идентификации)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Цели обработки данных</h2>
              <p>Персональные данные обрабатываются для:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Выполнения договоров обмена</li>
                <li>Связи с клиентами</li>
                <li>Соблюдения требований законодательства</li>
                <li>Предотвращения мошенничества</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Защита данных</h2>
              <p>
                Мы применяем технические и организационные меры для защиты персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Передача данных третьим лицам</h2>
              <p>
                Мы не передаем персональные данные третьим лицам, за исключением случаев, 
                предусмотренных законодательством РФ или с согласия субъекта персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Сроки хранения</h2>
              <p>
                Персональные данные хранятся не дольше, чем это необходимо для достижения 
                целей обработки, но не менее сроков, установленных законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Ваши права</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об обработке ваших данных</li>
                <li>Требовать уточнения или удаления данных</li>
                <li>Отзывать согласие на обработку</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Контакты</h2>
              <p>
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <ul className="list-none space-y-2">
                <li>Telegram: [Указать контакт]</li>
                <li>Email: [Указать email]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Изменения</h2>
              <p>
                Мы оставляем за собой право изменять настоящую Политику. 
                Актуальная версия размещается на данной странице.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}