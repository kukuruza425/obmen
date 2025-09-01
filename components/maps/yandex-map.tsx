export function YandexMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши офисы на карте
          </h2>
          <p className="text-gray-600">
            Два офиса в разных районах города + курьер по всему Ярославлю
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3e909bec8edc3d1fca4ab9972849a19d7af297b24c7751f05a5fc3f0a0327331&amp;source=constructor" 
            width="600" 
            height="380" 
            frameBorder="0"
            className="w-full"
            title="Карта офисов обменника USDT в Ярославле"
          />
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-blue-50 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium">Офис — ул. Титова, 20</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Офис — Корабельная ул., 1с9</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-medium">Курьер — по всему городу</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}