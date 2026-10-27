# Test Raporu — 3D Bus Puzzle Deluxe

Tarih: 2026-10-27. Ortam: bulut Linux konteyneri, headless Chromium (SwiftShader yazılım GL), Node 22.

## Çalıştırılan testler ve sonuç
| Test | Komut | Sonuç |
|---|---|---|
| Motor birim + seviye testleri | `npm test` | **21/21 geçti** |
| Tarayıcı E2E #1 (menü, günlük ödül, 1–2. seviye eğitimi gerçek dokunuşlarla) | `node tools/e2e.mjs` | geçti |
| Tarayıcı E2E #2 (aşağıda) | `node tools/e2e2.mjs` | **21/21 geçti**, konsol hatası 0 |

### `npm test` kapsamı
- 40 hazır seviyenin her aşaması: çözücü çözüyor + kayıtlı çözüm sırası motorda oynatılınca kazanılıyor.
- 26–30. seviyeler çok aşamalı; 41–90. seviyeler çalışma anında üretilip tanık sırasıyla çözülüyor; üretim deterministik.
- Motor kuralları: engel, yol, katı renk/sıra eşleşmesi, kapasite+kalkış, park yeri doluluğu, ek park yeri, VIP joker, VIP alanı dolu, geri çağır, renk dönüştürme, çağır, hamle limiti.

### `e2e2` kapsamı (gerçek oyun, gerçek sahne, hızlandırılmış zaman)
- **1–40. seviyelerin hepsi** oyunda çözüm sırasıyla uçtan uca kazanıldı (çok aşamalı 26–30, hamle limitli ve süreli seviyeler dahil).
- Rastgele oynayınca kazanma/kayıp ekranı doğru çıkıyor.
- Kilitli alana dokunma → teklif; **reklam tamamlanmadan kapatılınca ödül yok**; tamamlanınca ek park yeri gerçekten açılıyor; geçici hak kalıcı slottan ayrı kaydediliyor; ek alan seviye içinde kullanılabiliyor.
- İpucu, Geri Al (hamle yokken hak harcanmıyor), Çağır, Geri Çağır, VIP çağır, otobüs dönüştürme.
- Mağaza satın alma/kuşanma, yetersiz jeton reddi, kalıcı slot satın alma, yeniden yükleme sonrası kayıt korunması, **bozuk kayıt dosyasında güvenli varsayılan**, görev ilerlemesi.
- Görsel kontrol: 360×640, 390×780, 412×915, 768×1024 çözünürlüklerde ekran görüntüsü alındı, düzen bozulmadı.

### 2. tur değişiklikleri (geri bildirim sonrası) — doğrulama
- **Engele çarpma:** engelli otobüs engele kadar hızlanıp çarpıyor; kıvılcım/duman halkası, kamera sarsıntısı, çarpılan otobüste sarsılma ve geri sekme. Kare kare ekran görüntüsüyle doğrulandı (otobüs ileri gidip geri dönüyor).
- **Park yeri kuralı:** sahne meşgulken (otobüs yolda / yolcular biniyor) verilen dokunuş artık yok sayılmıyor, sıraya alınıp sahne boşalınca uygulanıyor. Yer gerçekten doluysa otobüs yine çıkamıyor (uyarı).
- **Seviye bitince yarım kalan otobüsler:** VIP yolcu aldığında regüler otobüsler dolmadan kalabiliyor; seviye bitince park yerindeki tüm otobüsler yolcularıyla ayrılıyor, sonra sonuç ekranı geliyor (VIP'li seviyelerde 2, 16 için senaryo testi: bitişte park yerinde otobüs kalmadı).
- Regresyon: `npm test` 21/21, `e2e` 18/18, `e2e2` 21/21 (40 seviye).

### Testlerin bulduğu ve düzelttiği hatalar
- Kayıt temizleme (`sanitize`) varsayılan nesneyi aliaslıyordu → yeniden açılışta `stats`/`powerups` boşalıyordu. Düzeltildi, testle doğrulandı.
- Varış olayı hiç tetiklenmiyordu, `hidden` özniteliğini CSS eziyordu, iç mekân opak çiziliyordu vb. (geliştirme sırasında düzeltildi).

## Yapılmayanlar / doğrulanamayanlar (açık beyan)
- **APK üretilmedi.** Bu ortamda Android SDK/Maven (dl.google.com, maven.google.com) erişimi engelli; APK'yı üretemedim ve üretilmiş gibi sunmuyorum. Capacitor Android projesi (`android/`) oluşturuldu, web varlıkları senkronlandı; derleme **denenmedi**.
- **Gerçek cihaz testi yok.** Dokunmatik his, performans (FPS), pil, titreşim, ses, farklı Android sürümleri doğrulanmadı. Testler masaüstü Chromium + yazılım GL'de yapıldı; gerçek GPU'da performans bilinmiyor. Düşük/orta/yüksek kalite ayarı var ama cihazda ayarlanmadı.
- **Gerçek AdMob doğrulanmadı.** `ads.js` AdMob yolu yazıldı fakat eklenti kurulmadı/çalıştırılmadı. Varsayılan "test" modu açıkça etiketli sahte geliştirme reklamıdır, gerçek reklam değildir.
- **Gerçek parayla satın alma (IAP) yok.** Mağaza yalnızca oyun içi jetonla çalışır; "Premium" yalnızca jetonla alınan kalıcı park yeridir.
- **Seviye içi durum kaydedilmiyor:** uygulama seviye ortasında kapanırsa seviye baştan başlar (ilerleme, jeton, satın almalar kaydedilir).
- **37–40. seviyeler çok zor** (rastgele oynayarak kazanma oranı ≈ %0,8); çözülebilirlikleri doğrulandı ama zorluk dengesi gerçek oyuncuyla denenmedi.
- Seviyeler 41+ çözücüyle değil, yalnızca tanık sırası tekrarıyla doğrulanıyor.
- Modeller prosedürel (düşük poligon); özel sanatçı üretimi varlıklar ve gerçek ses dosyaları yok (sesler WebAudio ile sentezlendi).
- Uygulama ikonu / açılış ekranı Capacitor varsayılanıdır, özelleştirilmedi.
- Referans ZIP (başka bir stüdyonun ticari Unity APK'sı) değiştirilmedi ve kullanılmadı; birlikte karar verildiği üzere oyun sıfırdan yazıldı.
