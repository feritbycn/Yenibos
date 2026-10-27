# 3D Bus Puzzle Deluxe

Özgün bir 3D otobüs/yolcu bulmaca oyunu. **Three.js** (3D) + **Capacitor** (Android sarmalayıcı).
Referans görsellerdeki oyun türünden esinlenilmiştir; modeller, arayüz, seviyeler ve sesler sıfırdan, özgün yazılmıştır.

> **Durum:** Oyun tarayıcıda tam çalışır ve test edilmiştir. **APK bu ortamda üretilemedi** (Android SDK/Maven sunucularına erişim engelli). Android projesi hazır; APK'yı kendi bilgisayarında 5 dakikada üretirsin (aşağıda). Ayrıntılar: `TEST_RAPORU.md`.

## Oynanış
- Üstte yolcu kuyruğu, ortada park alanı, altta bulmaca tahtası.
- Otobüse dokun veya oku yönünde sürükle. Yol açıksa park alanına gider; yoldaki otobüs engeldir.
- Yolcular **katı sırayla** (baştaki yolcu) yalnızca **aynı renkli** otobüse biner. Otobüs dolunca kalkar, park yeri boşalır.
- Park yeri dolarsa kaybedersin. **VIP** (altın) otobüs her renkten yolcu alır, kendi alanına park eder.
- Güçlendiriciler: Geri Al, İpucu, Geri Çağır, **Çağır** (tahtadan istediğin otobüsü seç, yolu kapalı olsa bile park alanına gelir: stok / reklam / 120 jeton), **Değiştir** (renk değiştir, **koltuk ekle +1** ya da **uzat +2**; reklam veya jeton), VIP çağır; ek hamle/süre; ek park yeri (reklam ya da 150 jeton, sadece o seviye).
- **Minibüsler:** 6. seviyeden itibaren bazı otobüsler 3 veya 5 koltuklu; "Değiştir" ile koltuk eklenebilir. Kuyruktaki yolcu sayısı koltuklarla birebir eşittir.
- Seviye bitince park yerinde kalan (VIP yolcuları yüzünden dolmayan) otobüsler yolcularıyla ayrılır.
- **Otobüs stilleri:** Şehir, Minibüs, Okul Servisi, Konfor, **Modern** (panoramik cam, LED şerit), **Lüks** (metalik boya, krom detaylar, koyu cam).
- **Jeton zor kazanılır** (seviye başına ~25–45 jeton); ücretli seçenekler jetonla ya da reklamla alınır.
- Mağaza (otobüs stilleri, jantlar, VIP kaplamaları, renk paletleri), koleksiyon (dönen 3D önizleme), günlük ödül, günlük görevler, başarımlar.
- 40 hazır seviye (hepsi çözücüyle doğrulanmış), 41+ sonsuz üretim. 26–30. seviyeler çok aşamalı + süreli. Seviye 1–2 parmaklı eğitim.

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
