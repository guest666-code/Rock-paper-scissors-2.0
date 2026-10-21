const CACHE_NAME = 'element-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

// Yükleme ve Çevrimdışı Önbellek
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});

// 4 Farklı Bildirim Mesajı (6 Saatlik Döngü)
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

// Bildirim Zamanlama Mesajı Dinleyicisi
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
      icon: './icon.svg',
      vibrate: [200, 100, 200],
      tag: 'element-battle-reminder'
    });

    // Sonraki bildirimi 6 saat sonraya planla
    scheduleNextNotification((index + 1) % NOTIFICATIONS.length);
  }, SIX_HOURS);
}
