# 3D Bus Puzzle Deluxe

Özgün bir 3D otobüs/yolcu bulmaca oyunu. **Three.js** (3D) + **Capacitor** (Android sarmalayıcı).
Referans görsellerdeki oyun türünden esinlenilmiştir; modeller, arayüz, seviyeler ve sesler sıfırdan, özgün yazılmıştır.

> **Durum:** Oyun tarayıcıda tam çalışır ve test edilmiştir. **APK bu ortamda üretilemedi** (Android SDK/Maven sunucularına erişim engelli). Android projesi hazır; APK'yı kendi bilgisayarında 5 dakikada üretirsin (aşağıda). Ayrıntılar: `TEST_RAPORU.md`.

## Oynanış
- Üstte yolcu kuyruğu, ortada park alanı, altta bulmaca tahtası.
- Otobüse dokun veya oku yönünde sürükle. Yol açıksa park alanına gider; yoldaki otobüs engeldir.
- Yolcular yalnızca **aynı renkli** otobüse biner. Sıranın önündeki **KAPI**'daki ilk 3 yolcu (`QUEUE_WINDOW` = 3, `src/config.js`) uygun otobüs park etmişse aynı anda binebilir; yani sarı ve kırmızı yan yana ise ikisi de kendi otobüsüne biner. Kapı dışındakiler bekler. Otobüs dolunca kalkar, park yeri boşalır. Sahnedeki **Kalan** tabelası sıradaki yolcu sayısını gösterir.
- Otobüsler **peş peşe** gönderilebilir: açık park yeri varsa beklemeden art arda dokun; otobüsler takip mesafesi koruyarak gider.
- Park yeri dolarsa kaybedersin. **VIP** (altın) otobüs her renkten yolcu alır, kendi alanına park eder.
- Güçlendiriciler: Geri Al, İpucu, Geri Çağır, **Çağır** (tahtadan istediğin otobüsü seç, yolu kapalı olsa bile park alanına gelir: stok / reklam / 120 jeton), **Değiştir** (renk değiştir, **koltuk ekle +1** ya da **uzat +2**; reklam veya jeton), VIP çağır; ek hamle/süre; ek park yeri (reklam ya da 150 jeton, sadece o seviye).
- **Minibüsler:** 6. seviyeden itibaren bazı otobüsler 3 veya 5 koltuklu; "Değiştir" ile koltuk eklenebilir. Kuyruktaki yolcu sayısı koltuklarla birebir eşittir.
- Seviye bitince park yerinde kalan (VIP yolcuları yüzünden dolmayan) otobüsler yolcularıyla ayrılır.
- **Otobüs stilleri:** Şehir, Minibüs, Okul Servisi, Konfor, **Modern** (panoramik cam, LED şerit), **Lüks** (metalik boya, krom detaylar, koyu cam).
- **Jeton zor kazanılır** (seviye başına ~25–45 jeton); ücretli seçenekler jetonla ya da reklamla alınır.
- Mağaza (otobüs stilleri, jantlar, VIP kaplamaları, renk paletleri), koleksiyon (dönen 3D önizleme), günlük ödül, günlük görevler, başarımlar.
- 100 hazır seviye (hepsi çözücü/oyun motoruyla doğrulanmış), 101+ çalışırken üretim (her seviye yeniden oynatılarak çözülebilirliği doğrulanır). Süre sınırı YOKTUR. Parmaklı eğitim yalnızca 1. seviyede; VIP tanıtımı VIP'li ilk seviyede bir kez gösterilir.

## Geçici / kalıcı park yeri
- **Reklamla ek park yeri = yalnızca o seviye için geçici.** Kayıtta `temp.slots` olarak ayrı tutulur, sonraki seviyede sıfırlanır.
- **Kalıcı park yeri = jetonla satın alınır** (`perm.slots`, en fazla 3), kayıt dosyasında kalıcıdır.
- Reklam ödülü yalnızca reklam **gerçekten tamamlanınca** verilir; ödül jetonu bir kez kullanılır.

## Komutlar
```bash
npm install
npm test            # motor + seviye testleri (tarayıcısız)
npm run build       # src/ → www/dist/main.js
npm run serve       # http://localhost:8080 (önce build)
npm run levels      # seviyeleri yeniden üret + çözücüyle doğrula (src/levels.json)
```
Tarayıcı E2E testleri (Playwright gerekir): `node tools/e2e.mjs`, `node tools/e2e2.mjs` (Playwright yolu dosyanın başında; kendi kurulumuna göre düzenle).
Test kısayolu: `index.html?start=18` doğrudan 18. seviyeyi açar.

## Android APK üretme
Gereksinimler: Node 18+, JDK 17, Android Studio (veya Android SDK + `ANDROID_HOME`).
```bash
npm install
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug        # → android/app/build/outputs/apk/debug/app-debug.apk
# ya da: npx cap open android   (Android Studio'da Build > Build APK)
```
Yayın (release) için Android Studio'da **Build > Generate Signed Bundle / APK** ile kendi keystore'unla imzala. Uygulama kimliği: `capacitor.config.json` → `appId` (kendi paketinle değiştir). Dikey yönelim `AndroidManifest.xml`'de kilitlidir.

### GitHub ile APK (bilgisayarında Android kurmadan)
1. Projeyi GitHub'a yükle (`main` dalı). 2. Repo → **Actions → Android APK → Run workflow** (push'ta da otomatik çalışır).
3. İş bitince sayfanın altındaki **Artifacts → bus-puzzle-deluxe-debug-apk** dosyasını indir, zip'ten `app-debug.apk` çıkar, telefona kur. Debug imzalıdır; Play Store için release imzası gerekir.
Workflow üç dosya üretir: `app-debug.apk`, `app-release.apk` ve `app-release.aab`. Repo **Settings → Secrets → Actions** içine `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_ALIAS`, `KEY_PASSWORD` eklersen kendi anahtarınla imzalar. Eklemezsen her çalıştırmada rastgele bir TEST anahtarı üretilir: APK telefona kurulur ama **Play Store'a yüklenecek AAB için kendi kalıcı anahtarın şart** (aynı anahtarla güncelleme yapılır).
Not: bu workflow burada çalıştırılamadı; ilk çalıştırmada hata verirse Actions log'unu paylaş.

## Gerçek parayla jeton (Google Play Faturalandırma)
Mağaza → **Jeton** sekmesinde 4 paket vardır (`src/config.js` → `IAP`). **Varsayılan `IAP.mode = 'off'`: satın alma kapalıdır, hiçbir şekilde jeton verilmez.** Açmak için:
1. Play Console'da uygulamayı oluştur, 4 adet **tüketilebilir (managed) ürün** ekle: `coins_500`, `coins_1300`, `coins_3500`, `coins_9000`.
2. `npm i @capgo/native-purchases && npx cap sync android` (ya da başka bir Capacitor faturalandırma eklentisi; `src/iap.js` içindeki çağrıyı eklentine göre uyarla).
3. `IAP.mode = 'play'` yap, yeniden derle, Play Console'dan **iç test** kanalıyla dene.
`src/iap.js` bu eklenti için yazıldı fakat **hiç denenmedi**; üründe tüketme (consume) ve sunucu tarafı makbuz doğrulaması eklenmelidir. Fiyatlar Play'den gelir; oyun fiyat uydurmaz.

## Reklam (AdMob) entegrasyonu
Varsayılan mod `test`: ekranda "TEST REKLAMI" yazan, 3 sn'lik sahte bir geliştirme reklamı gösterilir; **gerçek reklam değildir**.
Gerçek reklam için:
1. `npm i @capacitor-community/admob` ve `npx cap sync android`.
2. `android/app/src/main/AndroidManifest.xml` içine AdMob `APPLICATION_ID` meta-data ekle (eklentinin README'sine bak).
3. `src/config.js` → `ADS.mode = 'admob'`, `ADS.admob.rewardedUnitAndroid` değerine kendi ödüllü reklam birimi kimliğini yaz (varsayılan Google test kimliğidir).
4. Yeniden `npm run build && npx cap sync android`.
`src/ads.js` bu eklenti arayüzüne göre yazıldı ama **gerçek cihazda test edilemedi**; ilk denemede cihazda doğrula. Eklenti yoksa ödül **verilmez** (sahte ödül yok). `ADS.mode = 'off'` reklamsız kurulumdur.

## Proje yapısı
```
src/engine.js     saf oyun motoru (render'dan bağımsız)
src/solver.js     DFS çözücü (seviye doğrulama, zorluk ölçümü)
src/levelgen.js   ters-inşa seviye üretici (çözülebilirlik garantili)
src/levels.json   40 doğrulanmış seviye   | src/levels.js: 41+ çalışma anı üretimi
src/scene.js      3D sahne, animasyon yönetmeni, girdi
src/models.js     prosedürel otobüs / yolcu / çevre modelleri
src/game.js       akış, HUD, güçlendiriciler, ekonomi, reklam
src/ui.js, tutorial.js, economy.js, save.js, ads.js, audio.js, fx.js, preview.js
tools/            build, serve, level üretimi, testler
android/          Capacitor Android projesi
```
## Bilinen sınırlar
Bkz. `TEST_RAPORU.md` → "Yapılmayanlar / doğrulanamayanlar".

## Yeni özellikler (v3)
- Bekleme alanı: cam korkuluklu platform, yeşil animasyonlu "ÇIKIŞ" kapısı. Taksi (4 koltuk). Kesin kapasite: her renkte koltuk = yolcu, boş otobüs yok.
- VIP: reklamla ya da 800 altınla. Kayıpta geri alma yalnızca ödüllü reklamla, seviye başına en çok 3 kez, sonra yeniden başlama.
- Açılış (splash) animasyonu, biniş/dolu otobüs efektleri, son park yerinde kırmızı alarm, hamleye göre 3/2/1 yıldız.
- Haftalık giriş sandığı, haftalık sıralama (altyapı), saat hilesine karşı korumalı zaman (Clock).

## Sunucu altyapısı
`src/config.js` içinde `BACKEND.mode`: `'local'` (varsayılan, sunucusuz) | `'http'` | `'off'`.
Referans sunucu (bağımlılıksız Node): `ADMIN_KEY=gizli PORT=8787 DATA_FILE=server/data.json node server/server.mjs`
Admin paneli: `/admin` (`x-admin-key`): kullanıcı listesi, altın/güçlendirici/eşya ekleme, yasaklama, haftayı kapatma.
API: `/v1/auth/guest`, `/v1/time`, `/v1/me`, `/v1/daily/claim`, `/v1/scores`, `/v1/leaderboard/weekly`, `/v1/inbox`, `/v1/inbox/:id/claim`.
Haftalık ödüller 1./2./3. için 500/300/150 altın (config'den değişir), gelen kutusuna düşer.
Saat hilesi: http modunda gün/hafta sunucu saatine göredir (gerçek koruma). Çevrimdışıda geri saat alma algılanır; ileri atlama çevrimdışı algılanamaz.

Testler: `npm test`, `node tools/test-server.mjs`, `node tools/e2e.mjs`, `e2e2.mjs`, `e2e3.mjs`.

## v4 değişiklikleri
- **VIP artık bir haktır**: VIP düğmesine dokun, tahtadaki istediğin otobüsü seç; yolu açıksa sürerek, kapalıysa kanatlanıp uçarak VIP alanına gelir ve kendi rengindeki yolcuları kuyruğun her yerinden alır (önce öndekiler, dolmazsa arkadakiler). İlk hak hediye; sonrası reklamla ya da 100 jetonla (`VIP_CALL_PRICE`). Jeton yetmezse jeton mağazasına yönlendirir. Seviyelerde altın VIP otobüs yoktur; kapasite birebir kalır (boş bekleyen otobüs olmaz).
- **Karıştır** hakkı: kalan otobüslerin yerlerini yeniden dizer, sonuç çözülebilirlik için çözücüyle doğrulanır.
- **Paketler** (mağaza → Paketler): jetonla alınan güç paketleri (`PACKS`, `src/config.js`). Gerçek para satın alma kapalıdır.
- **Hata düzeltmesi**: reklamla/geri alma ile konum yüklendiğinde park etmiş otobüsler "varmamış" sayılıp yolcu almıyordu; düzeltildi (e2e4 testi bu hatayı yeniden üretir ve doğrular).
- Otobüs tasarım çeşitliliği: varsayılan stilde boyuna göre minibüs, van, şehir otobüsü, konfor otobüsü ve taksi karışık gelir. Satın alınabilir yeni stiller: Ekspres, Panoramik Turist, Yarış (kart görselleri `www/img/`).
- Yeni logo ve açılış görseli (`www/splash.jpg`, Android ikonları), gerçek ilerleyen yükleme çubuğu.

## v5: Beklemeden biniş, reklam akışı, bildirimler

- **Biniş:** Sırası gelen yolcu, rengi uyan park etmiş otobüs varsa; başka yolcunun binişini, ya da bir otobüsün kalkışını beklemez (`scene.director`). Kalkış da yürüyen yolcuları beklemez.
- **Seviye sonu:** "Video izle: 2x kazan" birincil/önerilen düğmedir; ödül yalnızca reklam gerçekten bitince verilir.
- **Zorunlu reklam:** 4. seviyeden sonra her 4–5 seviyede bir (ödülsüz, `INTERSTITIAL` ayarı), en az 2 dk arayla; 2x video izlenen seviyede ve reklamsız alınmışsa atlanır. Test modunda açıkça "TEST REKLAMI" etiketlidir; AdMob modunda Google test interstitial kimliği kullanılır (yayında kendi kimliğini yaz).
- **Reklamsız teklifi:** Yalnızca gerçek satın alma (Play Faturalandırma) hazırsa, en erken 8. seviyeden sonra, en az 10 seviye ve 1 gün arayla, en çok 5 kez gösterilir. `remove_ads` ürünü Play Console'da tek seferlik ürün olarak tanımlanmalıdır. Satın alma sonucu gelmeden reklam kapanmaz.
- **Bildirimler:** `@capacitor/local-notifications`. 2. seviyeden sonra bir kez nazik izin sorusu; Ayarlar'dan açılıp kapanır. Uygulama arka plana gidince plan yenilenir: günlük ödül hatırlatması (ödül alınmadıysa bugün, yoksa yarın 19:30) ve 3/7/14 gün sonra 12:00'de davet bildirimleri. Oyuna girince eski plan yenilenir.

**Gerçek cihazda test edilmedi:** bildirimlerin gelmesi, gerçek AdMob geçiş reklamı, gerçek reklamsız satın alma. Bunlar sahte eklentilerle mantık düzeyinde test edildi (`tools/e2e5.mjs`, `tools/test-notifyplan.mjs`).


## v6: Süre yok, her seviyede hamle sınırı, ek hamle penceresi, 100 seviye
- **Süre sınırı kaldırıldı** (geri sayım, süre kaybı ve "+30 sn" yok).
- **Her seviyede hamle sınırı**: sınır = o aşamadaki otobüs sayısı + kademeye göre pay (`MOVE_SPARE` in `src/config.js`; 1–5: 12, 6–15: 8, 16–30: 5, 31–50: 4, 51+: 3). Geçerli her otobüs hamlesi kalan hamleyi 1 azaltır; 0'ın altına inmez, 0'da yeni hamle yapılmaz.
- **Hamle 0 olunca** tek bir pencere açılır: *+1 Hamle — 60 Para* (`EXTRA_MOVE_PRICE`; bakiye < 60 ise devre dışı + açıklama), *Reklam İzle — +1 Hamle* (yükleniyor/hata/tekrar dene; iptalde ödül yok; bir reklam = bir ödül), *Yeniden Başlat*, *Ana Menü*. İşlem kilidi (`moveTx`) ve "kalan hamle 0 olmalı" koşulu çift işlemi engeller. Ek hamle yalnızca o seviye içindir.
- **Zorluk kademeleri**: 1–5 eğitim, 6–15 kolay, 16–30 orta, 31–50 zor, 51–75 uzman, 76–100 usta (daha çok otobüs/renk, dar pencere, düşük rastgele kazanma oranı, çok aşamalı seviyeler), 101+ sonsuz. `node tools/gen-levels.mjs 41 100` yalnızca 41–100'ü yeniden üretir (1–40 değişmez).
- **KARAR NOTU (belirtimle çelişki)**: Belirtim "geçersiz/engelli dokunuş hamle harcamasın" diyor. Ancak her geçerli dokunuş bir otobüsü kalıcı götürdüğü ve geri alma olmadığı için, engelli dokunuşlar da sayılmazsa sınır hiç dolamazdı. Bu yüzden **engelli (yolu kapalı) dokunuşlar hamle sayılır** (yıldız mantığı değişmedi); park yeri dolu/geçersiz dokunuşlar sayılmaz. Değiştirmek istenirse `engine.js` `tap` içindeki `moves++` satırı.
- Premium/reklam kaldırma hamle sınırını **kaldırmaz**.
