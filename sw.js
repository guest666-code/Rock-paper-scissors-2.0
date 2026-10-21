const CACHE_NAME = 'element-savaslari-v2';

// Önbelleğe alınacak ana dosyalar (Vercel kök dizin yapısına uygun)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// 1. Service Worker Yükleme (Install) ve Önbelleğe Alma
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Dosyalar önbelleğe alınıyor...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 2. Service Worker Etkinleştirme (Activate) ve Eski Önbelleği Temizleme
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Eski önbellek siliniyor:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Ağ İsteklerini Yakalama (Offline Çalışma Desteği)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Çevrimdışıyken sayfa bulunamazsa ana sayfayı döndür
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});

// 4. 6 Saatlik Döngü İçin 4 Farklı Bildirim Mesajı
const NOTIFICATIONS = [
  {
    title: "🔥 Elementler Seni Bekliyor!",
    body: "Ejderha mı Su mu? Yeni bir maça başla ve element ustalığını göster!"
  },
  {
    title: "⚡ Bilgeliğini Test Et!",
    body: "Zaman'ın Gölge'yi yenip yenmediğini hatırlıyor musun? Ansiklopediye göz at!"
  },
  {
    title: "🎮 Yanındaki Arkadaşına Meydan Okur musun?",
    body: "2 Kişilik Modda arkadaşını yenme zamanı geldi!"
  },
  {
    title: "⚔️ Yapay Zeka Seni Bekliyor!",
    body: "Bot bugün çok iddialı. Onu yenebilecek misin?"
  }
];

// Sayfadan gelen bildirim zamanlama mesajını dinleme
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduleNextNotification(0);
  }
});

function scheduleNextNotification(index) {
  // 6 saat = 6 * 60 * 60 * 1000 ms
  const SIX_HOURS = 6 * 60 * 60 * 1000;
  
  setTimeout(() => {
    const notificationData = NOTIFICATIONS[index % NOTIFICATIONS.length];
    
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
      vibrate: [200, 100, 200],
      tag: 'element-battle-reminder'
    });

    // Sonraki bildirimi 6 saat sonraya planla
    scheduleNextNotification((index + 1) % NOTIFICATIONS.length);
  }, SIX_HOURS);
}
