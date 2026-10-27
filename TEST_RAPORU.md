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

### 3. tur değişiklikleri — doğrulama
- **Jeton ekonomisi zorlaştırıldı:** seviye ödülü 25–45 jeton (önce 76–130), günlük ödül 20–80, görev/başarım ödülleri ~%60 düşürüldü, başlangıç 60 jeton. Test: seviye ödülü ve günlük ödül değerleri e2e ile doğrulandı.
- **Gerçek parayla jeton:** mağazada Jeton sekmesi ve `iap.js` adaptörü var. `IAP.mode='off'` iken satın alma çalışmıyor ve jeton verilmiyor (test edildi). **Play Faturalandırma yolu hiç çalıştırılmadı**, eklenti API'si doğrulanmadı.
- **Minibüsler:** 6+ seviyelerde 109 minibüs (3/5 koltuk); 40 seviye yeniden üretilip çözücü + motor tekrarıyla doğrulandı; tümü e2e'de oynanarak kazanıldı. Koltuk ekleme (+1, 60 jeton) test edildi.
- **Çağır (seçerek):** yolu kapalı bir otobüs seçilip park alanına çağrıldı (stoktan ve jetonla 120) — test edildi. Reklam yolu test reklamıyla aynı `requestAd` hattını kullanır.
- **Modern ve Lüks otobüs:** satın alma/kuşanma ve seviyede çizim test edildi; ekran görüntüsü ile kontrol edildi (tavan rengi korunuyor, renk eşleşmesi okunabilir).
- Regresyon: `npm test` 21/21, `e2e` 18/18, `e2e2` 26/26 (40 seviye gerçek oyunda kazanıldı).
- **Dikkat:** 36, 39 ve 40. seviyelerin ilk aşamasında rastgele oyun kazanma oranı ≈ %0 (çözülebilir ama çok zor); zorluk dengesi gerçek oyuncuyla denenmedi.

### 4. tur değişiklikleri — doğrulama
- **Eğitim yalnızca 1. seviyede**; VIP tanıtımı ilk VIP'li seviyede **bir kez** açılıyor, yeniden başlatınca açılmıyor (e2e). Park yeri teklifi sadeleştirildi: iki büyük düğme (jeton / ücretsiz reklam) + isteğe bağlı kalıcı alan.
- **Peş peşe otobüs:** yoldayken ikinci otobüse dokunmak çalışıyor, iki otobüs aynı anda yolda ve sorunsuz park ediyor (e2e). Aynı yönde gidenler takip mesafesi koruyor. Karşılıklı yönlerdeki otobüslerin kısa süre üst üste geçmesi görsel olarak mümkün.
- **Kapı penceresi (ilk 3 yolcu):** motor testleri (pencere içi biner, pencere dışı binmez, sarı+kırmızı yan yana ikisi de dolar). **Önemli bulgu:** kapı kuralı her zaman oyunu kolaylaştırmaz; bir otobüsün hangi yolcuyla dolacağını değiştirdiği için küçük bir otobüs boş kalıp park yeri işgal edebiliyor (40. seviye 1. aşamada yakalandı). Bu yüzden **çözücü motorla birebir aynı kurala yeniden yazıldı** ve 40 seviye tekrar üretilip doğrulandı. 41+ seviyeler yine yalnızca tanık sırası tekrarıyla doğrulanıyor.
- Regresyon: `npm test` 23/23, `e2e` 18/18, `e2e2` 26/26 (40 seviye oynanarak kazanıldı).

### Testlerin bulduğu ve düzelttiği hatalar
- Kayıt temizleme (`sanitize`) varsayılan nesneyi aliaslıyordu → yeniden açılışta `stats`/`powerups` boşalıyordu. Düzeltildi, testle doğrulandı.
- Varış olayı hiç tetiklenmiyordu, `hidden` özniteliğini CSS eziyordu, iç mekân opak çiziliyordu vb. (geliştirme sırasında düzeltildi).

## Yapılmayanlar / doğrulanamayanlar (açık beyan)
- **APK üretilmedi.** Bu ortamda Android SDK/Maven (dl.google.com, maven.google.com) erişimi engelli; APK'yı üretemedim ve üretilmiş gibi sunmuyorum. Capacitor Android projesi (`android/`) oluşturuldu, web varlıkları senkronlandı; derleme **denenmedi**.
- **Gerçek cihaz testi yok.** Dokunmatik his, performans (FPS), pil, titreşim, ses, farklı Android sürümleri doğrulanmadı. Testler masaüstü Chromium + yazılım GL'de yapıldı; gerçek GPU'da performans bilinmiyor. Düşük/orta/yüksek kalite ayarı var ama cihazda ayarlanmadı.
- **Gerçek AdMob doğrulanmadı.** `ads.js` AdMob yolu yazıldı fakat eklenti kurulmadı/çalıştırılmadı. Varsayılan "test" modu açıkça etiketli sahte geliştirme reklamıdır, gerçek reklam değildir.
- **Gerçek parayla satın alma (IAP) yok.** Mağaza yalnızca oyun içi jetonla çalışır; "Premium" yalnızca jetonla alınan kalıcı park yeridir.
- **Seviye içi durum kaydedilmiyor:** uygulama seviye ortasında kapanırsa seviye baştan başlar (ilerleme, jeton, satın almalar kaydedilir).
- Zorluk dengesi gerçek oyuncuyla denenmedi; kapı kuralı oyunu kolaylaştırdı (rastgele oyunla kazanma oranı arttı), seviyeler bu kurala göre yeniden üretildi. 36–40. seviyeler hâlâ en zorlar.
- Seviyeler 41+ çözücüyle değil, yalnızca tanık sırası tekrarıyla doğrulanıyor.
- Modeller prosedürel (düşük poligon); özel sanatçı üretimi varlıklar ve gerçek ses dosyaları yok (sesler WebAudio ile sentezlendi).
- Uygulama ikonu / açılış ekranı Capacitor varsayılanıdır, özelleştirilmedi.
- Referans ZIP (başka bir stüdyonun ticari Unity APK'sı) değiştirilmedi ve kullanılmadı; birlikte karar verildiği üzere oyun sıfırdan yazıldı.

## v3 test sonuçları
- Motor: 39/39, sunucu+HttpBackend (gerçek HTTP, yerel): 41/41, e2e: 18/18, e2e2: 26/26, e2e3: 27/27.
- Test EDİLMEDİ: gerçek AdMob/Play Billing, sunucunun internete dağıtımı, gerçek cihazda ikon/native splash, gerçek oyuncuyla denge.
- Bilinen sınırlar: VIP seviye içinde isteğe bağlı joker (kullanılınca normal otobüs kısmen dolu kalabilir); sunucu skoru hamle tekrarını doğrulamaz, yalnızca yıldız/puanı yeniden hesaplar. Yazılım-GPU'da bazı ekran görüntüleri zaman aşımına uğradı (test aracı sorunu).

## v4 test sonuçları
- Motor 45/45 (VIP hakkı kuyruğun derininden doldurma, Karıştır yerleşimi, paketler, 40 seviyede boş/yarım otobüs kalmaması), sunucu 41/41.
- Tarayıcı testleri: e2e 18/18, e2e2 26/26, e2e3 (VIP hakkı/jeton/yönlendirme dahil), e2e4 11/11 (geri alma hatası, VIP doldurma, Karıştır, paketler, tasarım çeşitliliği).
- Geri alma hatası düzeltmesi geri alınıp test koşulunca test BAŞARISIZ oluyor (testin hatayı gerçekten yakaladığı doğrulandı).
- Test EDİLMEDİ: gerçek AdMob/Play Billing, gerçek cihazda dokunuş hissi ve performans, dengesi gerçek oyuncuyla; kanatlı uçuş efekti yalnızca ekran görüntüsüyle görüldü.
- Bilinen sınırlar: yolcu penceresi (ilk 3 yolcu) aynı; farklı tahta şekilleri (yıldız/spiral gibi serbest açılı yerleşim) yapılmadı; seviyeler VIP olmadan yeniden üretildi ve zorluğu oyuncuyla denenmedi.

## v5 testleri
- `tools/e2e5.mjs` (23): kalkış sırasında yolcu binmeye devam ediyor (27 olay), yürüyen yolcu varken kalkış başlıyor; 2x video düğmesi ilk sırada ve ödül reklam bitince; zorunlu reklam aralığı 4/5; 2x izlenince, reklamsız alınınca, ilk seviyelerde atlanıyor; reklamsız teklifi IAP yokken çıkmıyor, sahte satın alma yok; bildirimler sahte eklentiyle planlanıyor/iptal ediliyor.
- `tools/test-notifyplan.mjs` (7): bildirim zamanları.
- Cihazda doğrulanmadı: gerçek bildirim, AdMob interstitial, Play satın alma.


## v6 testleri (hamle sınırı / ek hamle / 100 seviye)
Hepsi **headless Chromium + sahte (test) reklam** ile yapıldı; gerçek cihaz, gerçek AdMob ve Play Faturalandırma ile **test EDİLMEDİ**.
- `npm test` 45/45, `test-server` 41/41, e2e 20/20, e2e2 26/26, e2e4 11/11, e2e5 33/33, e2e6 18/18, **e2e7 25/25** (yeni), bot/bildirim planı testleri geçti.
- e2e7 kapsamı: süre yok (2 dk bekleme kaybettirmez), her seviyede (1–120) sınır, geçerli hamle −1, 0'da hamle reddi, pencerenin 4 seçeneği, 60 para ile tam 60 düşüş (+1 hamle), 59 parada devre dışı/reddedilir, reklam iptal/hata → ödül yok, reklam başarı → tam +1 (çift tetikte tek ödül), ek hamle sonraki seviyeye taşınmaz, eşzamanlı iki satın alma → tek işlem, yeniden başlat, ana menü, jeton/ilerleme kalıcılığı, eski kayıt uyumu.
- Seviyeler: 1–40 birebir değişmedi; 41–100 üretildi, her biri çözüm dizisi motorda oynatılarak doğrulandı.
- Test edilmeyenler: gerçek reklam/ödeme, düşük performanslı cihazlarda FPS, bildirimlerin cihazda gelmesi, sunucu tarafı satın alma doğrulaması, Lucky Patcher koruması.
