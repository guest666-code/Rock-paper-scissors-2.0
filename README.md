# ⚔️ Taş Kağıt Makas 2.0: Elementler Savaşı

**Taş Kağıt Makas 2.0**, klasik taş-kağıt-makas oyununu 20 farklı element, stratejik dengeler, ses efektleri, yapay zeka ve çok oyunculu modlar ile baştan tanımlayan modern bir web oyunudur.

---

## 🚀 Özellikler

- **20 Farklı Element:** Ejderha, Lav, Hava, Su, Ateş, Sünger, Toprak, Yıldırım, Buz, Büyü, Silah, Kalkan, Zaman, Gölge, Işık, Bitki, Zehir, Metal, Zihin ve Hayalet.
- **Matematiksel Denge:** Her element tam **9 elementi yener** ve **9 elemente yenilir**.
- **Oyun Modları:**
  - **Tek Oyunculu (Bot AI):** Kolay, Normal ve Efsane zorluk seviyelerinde yapay zekaya karşı oyna.
  - **2 Oyuncu (Pass & Play):** Aynı cihazda gizli seçim ekranı ile arkadaşınla kapış.
- **Element Ansiklopedisi (Wiki):** Oyun içinde neyin neyi yendiğini açıklayan detaylı rehber.
- **Ses Efektleri & İstatistikler:** Web Audio API ile dahili ses efektleri ve detaylı istatistik takibi.
- **Tek Dosya Yapısı:** Harici bağımlılık gerektirmeden doğrudan `index.html` olarak çalışır.

---

## 🎮 20 Element Denge Tablosu

| Element | Yendiği Elementler (Örnekler) |
| :--- | :--- |
| **Ejderha** | Ateş, Bitki, Sünger, Toprak, Kalkan, Metal, Yıldırım, Buz, Silah |
| **Lav** | Ejderha, Ateş, Sünger, Toprak, Buz, Kalkan, Bitki, Metal, Zehir |
| **Hava** | Lav, Ejderha, Ateş, Sünger, Zehir, Bitki, Yıldırım, Hayalet, Gölge |
| **Su** | Lav, Ateş, Ejderha, Toprak, Yıldırım, Zehir, Işık, Zihin, Zaman |
| **Büyü** | Ejderha, Toprak, Lav, Ateş, Silah, Kalkan, Metal, Zaman, Zihin |
| *(Tüm 20 elementin detaylı eşleşme matrisi oyun içi Rehber sekmesinde mevcuttur)* |

---

## 🛠️ Ücretsiz Yayınlama (Deployment)

Bu proje tek bir HTML dosyası (`index.html`) olarak tasarlandığı için aşağıdaki platformlarda saniyeler içinde ücretsiz yayınlanabilir:

### 1. Vercel veya Netlify
1. Proje klasörünü tarayıcı üzerinden [Vercel](https://vercel.com) veya [Netlify Drop](https://app.netlify.com/drop) üzerine sürükleyip bırakın.
2. Otomatik oluşturulan bağlantı üzerinden hemen oynamaya başlayın.

### 2. GitHub Pages
1. Depo (Repository) oluşturup `index.html` ve `README.md` dosyalarını yükleyin.
2. **Settings > Pages** sekmesinden `main` dalını seçip kaydedin.

### 3. Itch.io (HTML5 Oyunu)
1. `index.html` dosyanızı `.zip` arşivine dönüştürün.
2. [Itch.io](https://itch.io) projesi oluşturup türü **HTML** seçin ve `.zip` dosyasını yükleyin.

---

## 💻 Teknolojiler

- **HTML5 & Vanilla JavaScript (ES6+)**
- **Tailwind CSS** (CDN)
- **FontAwesome Icons**
- **Web Audio API** (Dahili Ses Sentezleyici)

---

*Geliştirici: **Purpleguy***
