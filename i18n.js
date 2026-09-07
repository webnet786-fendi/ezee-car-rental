// EzEe Car Rental — site translations (English is the source text in the HTML; ms = Bahasa Melayu, zh = 简体中文)
// Static text: elements carry data-i18n="key" (innerHTML), data-i18n-ph="key" (placeholder), data-i18n-title="key" (title + aria-label).
// Data text (fleet.json labels, notes, inclusions…): translated by exact English string via td(); unknown strings stay English.
var I18N = {
  langs: [{ id: 'en', label: 'EN', name: 'English' }, { id: 'ms', label: 'BM', name: 'Bahasa Melayu' }, { id: 'zh', label: '中文', name: '中文' }],
  locale: { en: 'en-GB', ms: 'ms-MY', zh: 'zh-CN' },
  ui: {
    ms: {
      'nav.rates': 'Kadar', 'nav.services': 'Perkhidmatan', 'nav.customers': 'Pelanggan', 'nav.faq': 'FAQ', 'nav.wa': 'WhatsApp',
      'site.title': 'Laman Rasmi EzEe Car Rental',
      'sbar.car': 'Kereta', 'sbar.where': 'Ke mana', 'sbar.from': 'Dari', 'sbar.until': 'Hingga',
      'sbar.ph': 'Lapangan terbang, hotel, alamat, bandar', 'sbar.go': 'Dapatkan harga di WhatsApp',
      'hero.eyebrow': 'Singapura &middot; Johor Bahru &middot; Lapangan Terbang Senai &middot; Desaru Coast',
      'hero.h1': 'Sewa &amp; Pandu Kenderaan Ekonomi Kami',
      'pillar.1': '<b>Perkhidmatan Luar Biasa</b>Sewa kereta yang anda mahu, di tempat yang anda perlukan, untuk beberapa hari, minggu atau bulan.',
      'pillar.2': '<b>Harga Terbaik</b>Sewa dengan harga terbaik di bandar.',
      'promo': 'Promosi Kereta Utama Kami Bulan Ini<a href="#quote">Toyota Vellfire ZG &middot; Tempah sekarang!</a>',
      'q.title': 'Dapatkan harga anda',
      'q.sub': 'Pilih laluan dan kami tunjukkan tambang semuanya termasuk. Satu ketikan hantar ke WhatsApp.',
      'q.car': 'Sila pilih kereta anda', 'q.route': 'Laluan atau perkhidmatan', 'q.dir': 'Arah',
      'q.zone': 'Ke mana anda akan memandu?', 'q.zone.ph': 'cth. Kuala Lumpur, Cameron Highlands, Langkawi',
      'q.deliver': 'Ke mana kereta perlu dihantar?', 'q.deliver.ph': 'Alamat anda, hotel, Lapangan Terbang Senai, CIQ JB…',
      'q.where': 'Alamat, hotel atau tempat turun', 'q.where.ph': 'cth. Hard Rock Hotel Desaru, Mid Valley Southkey',
      'q.when': 'Tarikh &amp; masa', 'q.days': 'Hari', 'q.pax': 'Penumpang',
      'q.lbl': 'Tambang semuanya termasuk', 'q.note': 'Minyak, tol, VEP & yuran pemeriksaan termasuk',
      'q.send': 'Klik untuk berunding di WhatsApp?',
      'q.fine': 'Tiada akaun, tiada kad. Deposit 50% melalui PayNow mengesahkan slot anda. Pembatalan percuma hingga 48 jam sebelum.',
      'r.eyebrow': 'Harga telus', 'r.h2': 'Setiap harga di halaman ini adalah harga muktamad.',
      'r.sub': 'Tiada yuran tempahan, tiada tambah minyak, tiada kejutan di pemeriksaan. Apa yang kami sebut di WhatsApp itulah yang anda bayar.',
      'r.th.route': 'Laluan', 'r.th.allin': 'Semuanya termasuk',
      'r.min.h3': 'Pandu sendiri: sewaan minimum mengikut destinasi',
      'z.jb': '<span>Kawasan JB</span><b>1 hari</b>', 'z.sg': '<span>Luar JB, Singapura, Melaka, Seremban, KL</span><b>2 hari</b>',
      'z.pahang': '<span>Pahang</span><b>3 hari</b>', 'z.perak': '<span>Perak, Ipoh, Cameron Highlands</span><b>4 hari</b>',
      'z.east': '<span>Pantai Timur, negeri utara</span><b>4 hari</b>', 'z.perlis': '<span>Perlis, Langkawi</span><b>5 hari</b>',
      'r.after': 'Terma penuh dan versi boleh cetak: <a href="rates.html">lihat kad kadar lengkap</a>.',
      'r.not': 'Hanya ditambah jika',
      'r.deposit': 'Deposit 50% melalui PayNow, DuitNow atau pindahan mengesahkan tempahan. Pembatalan percuma hingga 48 jam sebelum pengambilan.',
      'w.eyebrow': 'Kenapa dipandu', 'w.h2': 'Elak kerumitan, kekalkan keselesaan.',
      'w.sub': 'Memandu ke Malaysia kini bermaksud pendaftaran VEP, beratur di pemeriksaan di belakang stereng, dan risau tempat letak kereta. Atau anda boleh dipandu.',
      'w1.k': 'Tiada kertas kerja', 'w1.h': 'Kami urus VEP &amp; yuran', 'w1.p': 'Kenderaan kami berdaftar penuh untuk perjalanan rentas sempadan. Anda bawa pasport; kami bawa yang lain.',
      'w2.k': 'Tiada kejutan', 'w2.h': 'Harga tetap semuanya termasuk', 'w2.p': 'Disebut sekali di WhatsApp, tetap selamanya. Tol, minyak dan yuran pemeriksaan adalah masalah kami, bukan anda.',
      'w3.k': 'Tiada tekanan', 'w3.h': 'Berehat sepanjang kesesakan', 'w3.p': 'Kerusi pilot boleh baring, air sejuk, Wi-Fi, dan pemandu yang tahu lorong pemeriksaan mana yang bergerak.',
      's.eyebrow': 'Apa yang kami buat', 's.h2': 'Dilakukan dengan betul, apa pun keretanya.',
      's.sub': 'Perjalanan berpemandu sentiasa menggunakan Vellfire. Pelanggan pandu sendiri memilih kereta yang sesuai dengan perjalanan dan bajet.',
      's1.h': 'Pemindahan SG &harr; JB', 's1.p': 'Dari pintu ke pintu, dari mana-mana alamat Singapura atau Lapangan Terbang Changi ke mana-mana di Johor Bahru. Kami urus pemeriksaan sementara anda berehat di belakang.',
      's2.h': 'Lapangan Terbang Senai', 's2.p': 'Terbang dengan AirAsia atau Batik Air dari Senai dan bukan Changi? Kami ambil anda di Singapura dan hantar ke balai berlepas, dengan penjejakan penerbangan dua hala. Pangkalan kami sepuluh minit dari terminal.',
      's3.h': 'Desaru Coast', 's3.p': 'Pemindahan terus ke Hard Rock, Anantara, One&amp;Only dan Westin Desaru &mdash; alternatif selesa kepada bas ulang-alik.',
      's4.h': 'Golf &amp; lawatan sehari', 's4.p': 'Ambil di Singapura, kayu golf dalam but, pemandu menunggu di padang. Horizon Hills, Palm Resort, Ponderosa dan seterusnya.',
      's5.h': 'Lawatan perubatan', 's5.p': 'Perjalanan lembut dan mesra pesakit ke Gleneagles Medini, KPJ dan Regency &mdash; dengan ruang untuk keluarga dan pemandu yang menunggu.',
      's6.h': 'Perkahwinan &amp; majlis', 's6.p': 'Vellfire berhias riben untuk rombongan pengantin, dengan pemandu bersedia untuk urusan sepanjang hari.',
      's7.h': 'Sewa sehari penuh', 's7.p': 'Sepuluh jam, ikut jadual anda. Legoland bersama anak-anak, melawat kafe, lawatan kilang &mdash; kereta dan pemandu sentiasa bersama anda.',
      's8.h': 'Kontrak korporat', 's8.p': 'Untuk syarikat Singapura dengan kilang di Senai, Nusajaya atau Pasir Gudang: kadar bulanan tetap, invois SGD, seorang pemandu yang kenal laluan.',
      'h.eyebrow': 'Tempahan', 'h.h2': 'Tiga mesej untuk perjalanan yang disahkan', 'h.sub': 'Tiada apl, tiada akaun. Semuanya berlaku di WhatsApp.',
      'h1.h': 'Beritahu kami perjalanan anda', 'h1.p': 'Gunakan kotak harga di atas atau hantar sahaja tarikh, tempat ambil dan destinasi anda. Kami balas dengan sebut harga tetap semuanya termasuk, biasanya dalam beberapa minit.',
      'h2.h': 'Sahkan dengan deposit', 'h2.p': '50% melalui PayNow, DuitNow atau pindahan bank mengunci slot anda. Pembatalan percuma hingga 48 jam sebelum.',
      'h3.h': 'Kami tiba awal', 'h3.p': 'Pemandu anda menghantar mesej semasa dalam perjalanan dan menunggu di pintu. Pengambilan di lapangan terbang dijejak penerbangan.',
      'c.eyebrow': 'Pelanggan gembira', 'c.h2': 'Serahan sebenar, orang sebenar.',
      'c.sub': 'Setiap satu ini adalah pelanggan EzEe sebenar yang mengambil Vellfire yang sama seperti di atas. Wajah dikaburkan kerana kami tidak mendedahkan identiti pelanggan.',
      'c.privacy': 'Foto dikongsi dengan kebenaran pelanggan. Wajah dipiksel untuk privasi.',
      't1.p': 'Dipandu pemilik, sepuluh minit dari Lapangan Terbang Senai. Anda berurusan dengan orang yang memandu anda.',
      't2.big': '8 pagi &ndash; 11 malam', 't2.p': 'Tempahan dijawab setiap hari. Pengambilan lewat malam dan awal pagi atas permintaan.',
      't3.big': '3 bahasa', 't3.p': 'Bahasa Inggeris, Melayu dan Mandarin dituturkan dalam kereta.',
      't4.big': 'Di Facebook', 't4.a': 'Lihat halaman kami dan kiriman pelanggan',
      'f.eyebrow': 'Soalan', 'f.h2': 'Sebelum anda bertanya',
      'f1.q': 'Boleh saya bawa kereta pandu sendiri ke luar JB, atau ke Singapura?',
      'f1.a': 'Ya. Sewaan minimum bergantung pada jarak: 1 hari dalam JB, 2 hari untuk Singapura, Melaka, Seremban atau KL, 3 hari untuk Pahang, 4 hari untuk Perak, Ipoh, Cameron Highlands, Pantai Timur atau negeri utara, dan 5 hari untuk Perlis atau Langkawi. Taip destinasi anda dalam kotak harga dan bilangan hari dilaraskan secara automatik.',
      'f2.q': 'Boleh ambil dari mana-mana alamat di Singapura?',
      'f2.a': 'Ya &mdash; rumah, pejabat, hotel dan Lapangan Terbang Changi, di seluruh pulau. Harga yang sama untuk kebanyakan alamat SG; kami sahkan sebut harga tepat di WhatsApp.',
      'f3.q': 'Berapa banyak bagasi muat?',
      'f3.a': 'Selesa untuk empat penumpang dengan empat beg besar, atau enam penumpang dengan beg kabin. Beg golf dan kereta sorong bayi tiada masalah &mdash; sebut sahaja semasa menempah.',
      'f4.q': 'Ada perjalanan lewat malam atau awal pagi?',
      'f4.a': 'Ya. Pengambilan antara 11 malam dan 7 pagi dikenakan surcaj kecil S$30, dan pengambilan penerbangan malam dijejak supaya kami ada walaupun anda mendarat awal.',
      'f5.q': 'Boleh hantar saya ke Lapangan Terbang Senai untuk penerbangan AirAsia yang murah?',
      'f5.a': 'Ya, dan ini antara perjalanan paling popular kami. Ambil dari alamat Singapura anda, hantar ke balai berlepas Senai, S$150 semuanya termasuk. Kami jejak penerbangan anda: untuk berlepas awal kami cadangkan masa ambil, dan untuk pulang kami menunggu di ketibaan walaupun anda mendarat lewat.',
      'f6.q': 'Bagaimana saya bayar dari Singapura?',
      'f6.a': 'PayNow untuk deposit dan baki &mdash; tiada yuran pindahan bank, tiada kerumitan mata wang. DuitNow, pindahan bank Malaysia dan tunai juga diterima.',
      'f7.q': 'Adakah masa melintas sempadan termasuk dalam sewa?',
      'f7.a': 'Jam sewa dikira dari pengambilan hingga penghantaran. Kami jadualkan mengelak waktu puncak Tambak Johor jika boleh dan cadangkan masa berlepas terbaik semasa anda menempah.',
      'f8.q': 'Betulkah kereta yang sama?',
      'f8.a': 'Ya. Setiap kereta di halaman ini milik kami sendiri. Anda tempah kereta tertentu dan itulah yang anda dapat. Tiada penggantian armada dan tiada &ldquo;atau setara&rdquo;. Jika tidak tersedia, kami maklumkan sebelum anda bayar deposit.',
      'fin.h2': 'Perjalanan JB anda seterusnya, tanpa perlu memandu.', 'fin.p': 'Hantar tarikh anda &mdash; kami balas dengan sebut harga tetap dalam beberapa minit.',
      'fin.up': 'Dapatkan harga di atas',
      'ft.1': 'EzEe Car Rental &middot; Kulai, Johor, Malaysia', 'ft.2': 'Tempahan setiap hari 8 pagi &ndash; 11 malam &middot; WhatsApp +60 12-711 9814',
      'fab': 'Kembali ke atas',
      'm.eyebrow': 'Sebelum anda taip destinasi', 'm.h3': 'Sewaan minimum pandu sendiri',
      'm.sub': 'Semakin jauh anda memandu, semakin lama tempahan minimum. Bilangan hari dilaraskan secara automatik setelah anda taip destinasi.',
      'm.ok': 'OK, faham',
      // price-box script strings
      'j.choosecar': 'Pilih kereta anda…', 'j.choose': 'Pilih…', 'j.hot': 'Item hangat',
      'j.myonly': 'Guna di Malaysia sahaja', 'j.sgok': 'Boleh masuk Singapura',
      'j.startdt': 'Tarikh &amp; masa mula', 'j.pickdt': 'Tarikh &amp; masa ambil',
      'j.yourprice': 'Harga anda', 'j.onreq': 'Atas permintaan', 'j.tellus': 'Beritahu kami perjalanan dan kami sebut harga dalam beberapa minit',
      'j.monthly': 'Kadar bulanan', 'j.letstalk': 'Mari berbincang', 'j.monthlynote': 'Pandu sendiri jangka panjang pada kadar bulanan istimewa. Beritahu kami berapa bulan',
      'j.total': 'Jumlah sewaan', 'j.perday': ' / hari',
      'j.night': 'Termasuk surcaj ambil malam S$30 (11 malam – 7 pagi)',
      'j.minfor': 'Minimum {n} hari untuk {z}. ', 'j.mindep': 'Hari minimum bergantung pada destinasi. ', 'j.refund': 'Deposit boleh dikembalikan dikenakan',
      'j.charter': 'Kereta, pemandu dan minyak termasuk',
      'j.nosg': 'Kereta ini tidak boleh masuk Singapura. Pilih Vellfire, atau destinasi di Malaysia.',
      'j.needcar': 'Pilih kereta anda dahulu', 'j.needtime': 'Pilih tarikh & masa mula dahulu',
      'j.needcarnote': 'Sila pilih kereta anda dahulu.', 'j.needtimenote': 'Pilih tarikh dan masa mula anda. ',
      'j.fromto': 'Dari {a} ke {b}', 'j.day': 'hari', 'j.days': 'hari',
      'j.heldlbl': 'Ketersediaan', 'j.heldbtn': 'Tanya tentang tarikh ini di WhatsApp',
      'j.held': 'Sudah ditempah {from} – {to}. Hantar permintaan ini dan kami cadangkan tarikh kosong terdekat, atau pilih kereta lain.',
      // rate card
      'rc.home': '&larr; laman utama ezeecarrental', 'rc.print': 'Cetak / Simpan sebagai PDF',
      'rc.ratecard': 'Kad kadar<strong>Berkuat kuasa September 2026</strong>',
      'rc.pay.h': 'Tempahan &amp; pembayaran',
      'rc.pay.1': 'Tempah melalui WhatsApp &mdash; balasan dalam beberapa minit', 'rc.pay.2': 'Deposit 50% mengesahkan slot anda',
      'rc.pay.3': 'PayNow, DuitNow, pindahan bank, tunai', 'rc.pay.4': 'Pembatalan percuma hingga 48 jam sebelum', 'rc.pay.5': 'Penjejakan penerbangan untuk pengambilan di lapangan terbang',
      'rc.contact': 'WhatsApp &middot; tempahan setiap hari 8 pagi &ndash; 11 malam', 'rc.waus': 'WhatsApp kami',
      'rc.both': 'Berpemandu & pandu sendiri', 'rc.self': 'Pandu sendiri',
      'rc.t.hot': 'Pandu sendiri {car}', 'rc.t.transfers': 'Pemindahan Rentas Sempadan', 'rc.t.charters': 'Sewa Berpemandu',
      'rc.s.hot': 'Deposit keselamatan boleh dikembalikan dikenakan. Sewaan minimum bergantung pada destinasi (lihat di bawah).',
      'rc.s.transfers': 'Sehala, pintu ke pintu. Harga semuanya termasuk — tol, yuran pemeriksaan dan minyak. Hingga 6 penumpang.',
      'rc.s.charters': 'Kereta, pemandu profesional dan petrol termasuk. Pemandu menunggu bersama kenderaan sepanjang masa.',
      'rc.th.pkg': 'Pakej', 'rc.th.route': 'Laluan', 'rc.th.rate': 'Kadar',
      'rc.night': 'Surcaj malam, ambil 11 malam – 7 pagi', 'rc.minrent': 'Sewaan minimum mengikut destinasi: ',
      'rc.every': 'Setiap sewaan {car} termasuk',
      'rc.change': 'Kadar tertakluk kepada perubahan pada cuti umum dan tarikh acara &mdash; sebut harga WhatsApp anda adalah muktamad dan tetap.'
    },
    zh: {
      'nav.rates': '价格', 'nav.services': '服务', 'nav.customers': '客户', 'nav.faq': '常见问题', 'nav.wa': 'WhatsApp',
      'site.title': 'EzEe Car Rental 官方页面',
      'sbar.car': '车辆', 'sbar.where': '目的地', 'sbar.from': '开始', 'sbar.until': '结束',
      'sbar.ph': '机场、酒店、地址、城市', 'sbar.go': '在 WhatsApp 获取报价',
      'hero.eyebrow': '新加坡 &middot; 新山 &middot; 士乃机场 &middot; 迪沙鲁海岸',
      'hero.h1': '租赁并驾驭我们的经济型车辆',
      'pillar.1': '<b>卓越服务</b>租您想要的车，送到您需要的地方，按天、按周或按月。',
      'pillar.2': '<b>最优价格</b>全城最优惠的租车价格。',
      'promo': '本月旗舰车促销<a href="#quote">丰田 Vellfire ZG &middot; 立即预订！</a>',
      'q.title': '获取报价',
      'q.sub': '选择路线，即可看到全包价格。一键发送到 WhatsApp。',
      'q.car': '请选择您的车', 'q.route': '路线或服务', 'q.dir': '方向',
      'q.zone': '您要开往哪里？', 'q.zone.ph': '例如：吉隆坡、金马仑高原、兰卡威',
      'q.deliver': '车辆需要送到哪里？', 'q.deliver.ph': '您的地址、酒店、士乃机场、新山关卡…',
      'q.where': '下车地址、酒店或地点', 'q.where.ph': '例如：迪沙鲁硬石酒店、Mid Valley Southkey',
      'q.when': '日期与时间', 'q.days': '天数', 'q.pax': '乘客',
      'q.lbl': '全包价', 'q.note': '含油费、过路费、VEP 及关卡费',
      'q.send': '点击在 WhatsApp 上议价？',
      'q.fine': '无需账户，无需银行卡。通过 PayNow 支付 50% 定金即可确认。出发前 48 小时内可免费取消。',
      'r.eyebrow': '透明定价', 'r.h2': '本页每一个价格都是最终价格。',
      'r.sub': '没有预订费，没有加油费，关卡没有意外费用。WhatsApp 报价即是您支付的价格。',
      'r.th.route': '路线', 'r.th.allin': '全包价',
      'r.min.h3': '自驾：按目的地的最短租期',
      'z.jb': '<span>新山地区</span><b>1 天</b>', 'z.sg': '<span>新山以外、新加坡、马六甲、芙蓉、吉隆坡</span><b>2 天</b>',
      'z.pahang': '<span>彭亨</span><b>3 天</b>', 'z.perak': '<span>霹雳、怡保、金马仑高原</span><b>4 天</b>',
      'z.east': '<span>东海岸、北部各州</span><b>4 天</b>', 'z.perlis': '<span>玻璃市、兰卡威</span><b>5 天</b>',
      'r.after': '完整条款及可打印版本：<a href="rates.html">查看完整价目表</a>。',
      'r.not': '仅在以下情况加收',
      'r.deposit': '通过 PayNow、DuitNow 或转账支付 50% 定金即确认预订。取车前 48 小时内可免费取消。',
      'w.eyebrow': '为什么选择专车', 'w.h2': '省去麻烦，保留舒适。',
      'w.sub': '如今自驾进入马来西亚意味着 VEP 登记、在关卡排队和停车烦恼。或者，让我们来开车。',
      'w1.k': '无需文书', 'w1.h': 'VEP 与费用由我们处理', 'w1.p': '我们的车辆已完成跨境登记。您带护照，其余的交给我们。',
      'w2.k': '没有意外', 'w2.h': '固定全包价', 'w2.p': 'WhatsApp 报价一次，永久固定。过路费、油费和关卡费由我们承担。',
      'w3.k': '没有压力', 'w3.h': '堵车时安心休息', 'w3.p': '可躺式头等舱座椅、冰水、Wi-Fi，以及熟知哪条关卡通道最快的司机。',
      's.eyebrow': '我们的服务', 's.h2': '无论哪辆车，都做得妥妥当当。',
      's.sub': '专车服务一律使用 Vellfire。自驾客户可选择适合行程和预算的车。',
      's1.h': '新加坡 &harr; 新山接送', 's1.p': '从新加坡任何地址或樟宜机场，门到门直达新山任何地点。您在后座放松，关卡由我们搞定。',
      's2.h': '士乃机场', 's2.p': '从士乃而非樟宜搭乘亚航或 Batik Air？我们在新加坡接您，送到出发厅，往返均追踪航班。我们的基地距航站楼仅十分钟。',
      's3.h': '迪沙鲁海岸', 's3.p': '直达 Hard Rock、Anantara、One&amp;Only 和 Westin Desaru，比穿梭巴士更舒适的选择。',
      's4.h': '高尔夫与一日游', 's4.p': '新加坡接送，球具放后备箱，司机在球场待命。Horizon Hills、Palm Resort、Ponderosa 等。',
      's5.h': '医疗就诊', 's5.p': '平稳、贴心地送您前往 Gleneagles Medini、KPJ 和 Regency，家人有座位，司机全程等候。',
      's6.h': '婚礼与活动', 's6.p': '为婚礼车队准备的彩带 Vellfire，司机全天候待命。',
      's7.h': '全日包车', 's7.p': '十小时，行程由您定。带孩子去乐高乐园、逛咖啡馆、参观工厂，车和司机全程陪同。',
      's8.h': '企业长期合约', 's8.p': '适合在士乃、努沙再也或巴西古当设厂的新加坡公司：固定月费，新币开票，专属熟路司机。',
      'h.eyebrow': '预订', 'h.h2': '三条消息，确认行程', 'h.sub': '无需应用，无需账户。一切在 WhatsApp 完成。',
      'h1.h': '告诉我们行程', 'h1.p': '使用上方价格框，或直接发送日期、上车点和目的地。我们通常几分钟内回复固定全包报价。',
      'h2.h': '支付定金确认', 'h2.p': '通过 PayNow、DuitNow 或银行转账支付 50% 即锁定档期。出发前 48 小时内可免费取消。',
      'h3.h': '我们提前到达', 'h3.p': '司机出发时会给您发消息，并在门口等候。机场接机全程追踪航班。',
      'c.eyebrow': '满意客户', 'c.h2': '真实交车，真实客户。',
      'c.sub': '每一位都是真实的 EzEe 客户，取的正是上方那辆 Vellfire。为保护客户身份，面部已模糊处理。',
      'c.privacy': '照片经客户同意分享。面部已做像素化处理以保护隐私。',
      't1.p': '车主亲自驾驶，距士乃机场十分钟。您直接与司机本人联系。',
      't2.big': '早 8 点 &ndash; 晚 11 点', 't2.p': '每天回复预订。深夜及清晨接送可预约。',
      't3.big': '3 种语言', 't3.p': '车内可用英语、马来语和华语交流。',
      't4.big': 'Facebook', 't4.a': '查看我们的页面和客户帖子',
      'f.eyebrow': '常见问题', 'f.h2': '您可能想问',
      'f1.q': '自驾车可以开出新山，或开到新加坡吗？',
      'f1.a': '可以。最短租期取决于距离：新山境内 1 天；新加坡、马六甲、芙蓉或吉隆坡 2 天；彭亨 3 天；霹雳、怡保、金马仑高原、东海岸或北部各州 4 天；玻璃市或兰卡威 5 天。在价格框输入目的地，天数会自动调整。',
      'f2.q': '可以从新加坡任何地址接人吗？',
      'f2.a': '可以。住宅、办公室、酒店和樟宜机场，全岛覆盖。大多数新加坡地址价格相同，我们会在 WhatsApp 确认准确报价。',
      'f3.q': '能放多少行李？',
      'f3.a': '四位乘客加四个大行李箱，或六位乘客带登机箱，都很宽松。高尔夫球包和婴儿车也没问题，预订时说明即可。',
      'f4.q': '有深夜或清晨的行程吗？',
      'f4.a': '有。晚上 11 点至早上 7 点之间的接送加收 S$30 小额附加费；红眼航班全程追踪，即使您提前落地我们也在。',
      'f5.q': '可以送我去士乃机场搭便宜的亚航航班吗？',
      'f5.a': '可以，这是我们最受欢迎的路线之一。从您的新加坡地址接送到士乃机场出发厅，S$150 全包。我们追踪航班：早班机会建议接送时间，回程即使晚到我们也在到达厅等候。',
      'f6.q': '在新加坡如何付款？',
      'f6.a': '定金和余款用 PayNow，无转账手续费，无汇率烦恼。也接受 DuitNow、马来西亚银行转账和现金。',
      'f7.q': '包车时间包含过关时间吗？',
      'f7.a': '包车时间从上车到下车计算。我们尽量避开长堤高峰时段，并在预订时建议最佳出发时间。',
      'f8.q': '真的是同一辆车吗？',
      'f8.a': '是的。本页每辆车都是我们自有的。您预订哪辆车，就是哪辆车。没有车队替换，没有“或同级”。如遇不可用，我们会在您付定金前告知。',
      'fin.h2': '您的下一次新山之行，无需自己开车。', 'fin.p': '发送您的日期，我们几分钟内回复固定报价。',
      'fin.up': '在上方获取报价',
      'ft.1': 'EzEe Car Rental &middot; 马来西亚柔佛古来', 'ft.2': '每天早 8 点 &ndash; 晚 11 点接受预订 &middot; WhatsApp +60 12-711 9814',
      'fab': '回到顶部',
      'm.eyebrow': '输入目的地之前', 'm.h3': '自驾最短租期',
      'm.sub': '开得越远，最短租期越长。输入目的地后天数会自动调整。',
      'm.ok': '好，明白了',
      'j.choosecar': '请选择您的车…', 'j.choose': '选择…', 'j.hot': '热门',
      'j.myonly': '仅限马来西亚使用', 'j.sgok': '可进入新加坡',
      'j.startdt': '开始日期与时间', 'j.pickdt': '日期与上车时间',
      'j.yourprice': '您的价格', 'j.onreq': '另行报价', 'j.tellus': '告诉我们行程，几分钟内报价',
      'j.monthly': '月租价', 'j.letstalk': '来聊聊', 'j.monthlynote': '长期自驾享特惠月租价。告诉我们租几个月',
      'j.total': '租金总额', 'j.perday': ' / 天',
      'j.night': '含 S$30 夜间接送附加费（晚 11 点 – 早 7 点）',
      'j.minfor': '{z} 最少 {n} 天。', 'j.mindep': '最短天数取决于目的地。', 'j.refund': '需支付可退还押金',
      'j.charter': '含车、司机和油费',
      'j.nosg': '这辆车不能进入新加坡。请选择 Vellfire 或马来西亚境内目的地。',
      'j.needcar': '请先选择您的车', 'j.needtime': '请先选择开始日期与时间',
      'j.needcarnote': '请先选择您的车。', 'j.needtimenote': '请选择开始日期和时间。',
      'j.fromto': '从 {a} 到 {b}', 'j.day': '天', 'j.days': '天',
      'j.heldlbl': '可用情况', 'j.heldbtn': '在 WhatsApp 询问这些日期',
      'j.held': '{from} – {to} 已被预订。仍可发送请求，我们会提供最近的空档，或请选择另一辆车。',
      'rc.home': '&larr; ezeecarrental 首页', 'rc.print': '打印 / 保存为 PDF',
      'rc.ratecard': '价目表<strong>2026 年 9 月起生效</strong>',
      'rc.pay.h': '预订与付款',
      'rc.pay.1': '通过 WhatsApp 预订，几分钟内回复', 'rc.pay.2': '50% 定金确认档期',
      'rc.pay.3': 'PayNow、DuitNow、银行转账、现金', 'rc.pay.4': '出发前 48 小时内可免费取消', 'rc.pay.5': '机场接机追踪航班',
      'rc.contact': 'WhatsApp &middot; 每天早 8 点 &ndash; 晚 11 点接受预订', 'rc.waus': 'WhatsApp 联系我们',
      'rc.both': '专车与自驾', 'rc.self': '自驾',
      'rc.t.hot': '{car} 自驾', 'rc.t.transfers': '跨境接送', 'rc.t.charters': '专车包车',
      'rc.s.hot': '需支付可退还保证金。最短租期取决于目的地（见下文）。',
      'rc.s.transfers': '单程，门到门。价格全包，含过路费、关卡费和油费。最多 6 位乘客。',
      'rc.s.charters': '含车、专业司机和油费。司机全程随车等候。',
      'rc.th.pkg': '套餐', 'rc.th.route': '路线', 'rc.th.rate': '价格',
      'rc.night': '夜间附加费，晚 11 点 – 早 7 点接送', 'rc.minrent': '按目的地的最短租期：',
      'rc.every': '每次 {car} 租赁包含',
      'rc.change': '公共假期及活动日期价格可能调整，您的 WhatsApp 报价为最终且固定。'
    }
  },
  // Fleet data strings (exact English text from fleet.json → translation). {car} marks where the car's short name goes.
  data: {
    ms: {
      'Hot item': 'Item hangat', 'Chauffeured transfers': 'Pemindahan berpemandu', 'Charters & events': 'Sewa & majlis', 'Anything else': 'Lain-lain',
      'Self-drive, per day': 'Pandu sendiri {car}, sehari', 'Self-drive, weekly': 'Pandu sendiri {car}, mingguan', 'Monthly rental, self-drive': 'Sewaan bulanan, pandu sendiri {car}',
      'Singapore ↔ Johor Bahru': 'Singapura ↔ Johor Bahru', 'Changi Airport ↔ Johor Bahru': 'Lapangan Terbang Changi ↔ Johor Bahru',
      'Singapore ↔ Senai Airport': 'Singapura ↔ Lapangan Terbang Senai', 'Singapore ↔ Legoland / Medini': 'Singapura ↔ Legoland / Medini',
      'Singapore ↔ Desaru Coast': 'Singapura ↔ Desaru Coast', 'Cross-border day charter, 10 h': 'Sewa sehari rentas sempadan, 10 jam',
      'Johor day charter, 10 h': 'Sewa sehari Johor, 10 jam', 'Wedding package, 8 h': 'Pakej perkahwinan, 8 jam', 'Something else / multi-stop': 'Lain-lain / banyak hentian',
      'Singapore': 'Singapura', 'Changi Airport': 'Lapangan Terbang Changi', 'Senai Airport': 'Lapangan Terbang Senai',
      'refundable deposit; minimum days depend on destination, see below': 'deposit boleh dikembalikan; hari minimum bergantung pada destinasi, lihat di bawah',
      '7 days': '7 hari', 'long-term rate, negotiate on WhatsApp': 'kadar jangka panjang, berunding di WhatsApp',
      'one-way, any SG address': 'sehala, mana-mana alamat SG', 'meet &amp; greet, flight tracked': 'sambutan di ketibaan, penerbangan dijejak',
      'any SG address, flight tracked': 'mana-mana alamat SG, penerbangan dijejak', 'Puteri Harbour included': 'termasuk Puteri Harbour',
      'one-way, resort doorstep': 'sehala, ke pintu resort', '10 hours, SG pickup': '10 jam, ambil di SG',
      '10 hours with driver, extra hour RM70': '10 jam dengan pemandu, jam tambahan RM70', '8 hours, d&eacute;cor included': '8 jam, hiasan termasuk',
      '7 seats · pilot seats · auto · self-drive or chauffeured': '7 tempat duduk · kerusi pilot · auto · pandu sendiri atau berpemandu',
      '5 seats · auto · self-drive only': '5 tempat duduk · auto · pandu sendiri sahaja',
      'Included in every fare': 'Termasuk dalam setiap tambang', 'Included with the Bezza': 'Termasuk dengan Bezza',
      '<b>Professional chauffeur</b>': '<b>Pemandu profesional</b>', 'Fuel, tolls and Causeway or Second Link fees': 'Minyak, tol dan yuran Tambak Johor atau Linkedua',
      'VEP and checkpoint charges': 'VEP dan caj pemeriksaan', 'Airport meet &amp; greet with flight tracking': 'Sambutan di lapangan terbang dengan penjejakan penerbangan',
      '60 min waiting at Changi, 15 min elsewhere': 'Menunggu 60 min di Changi, 15 min di tempat lain', 'Bottled water, Wi-Fi, child seat on request': 'Air botol, Wi-Fi, kerusi kanak-kanak atas permintaan',
      'Comprehensive insurance': 'Insurans komprehensif', 'Full tank on handover, return full': 'Tangki penuh semasa serahan, pulangkan penuh', 'Unlimited mileage within Malaysia': 'Perbatuan tanpa had dalam Malaysia',
      'Night pickup 11 pm &ndash; 7 am: <b>+S$30</b>': 'Ambil malam 11 malam &ndash; 7 pagi: <b>+S$30</b>', 'Extra waiting: S$20 per 30 min': 'Menunggu tambahan: S$20 setiap 30 min',
      'Charter overrun: RM70 per hour': 'Lebihan masa sewa: RM70 sejam', 'Late return: RM20 per hour': 'Pulangan lewat: RM20 sejam', 'Singapore entry: VEP arranged on request': 'Masuk Singapura: VEP diuruskan atas permintaan',
      '2022 Toyota Vellfire ZG, 7 seats, reclining pilot seats': 'Toyota Vellfire ZG 2022, 7 tempat duduk, kerusi pilot boleh baring',
      'English / Malay / Mandarin-speaking driver': 'Pemandu bertutur Inggeris / Melayu / Mandarin', 'Bottled water & on-board Wi-Fi': 'Air botol & Wi-Fi dalam kereta',
      'Child seat on request, free': 'Kerusi kanak-kanak atas permintaan, percuma', 'All tolls, VEP & checkpoint fees': 'Semua tol, VEP & yuran pemeriksaan',
      'Perodua Bezza 1.3 AV 2023, 5 seats, automatic': 'Perodua Bezza 1.3 AV 2023, 5 tempat duduk, automatik',
      'Luggage: comfortably 4 passengers + 4 large cases, or 6 passengers with cabin bags. Waiting time beyond 15 minutes (60 minutes at Changi) is charged at S$20 per 30 minutes. Charter hours are counted from pickup to drop-off.':
        'Bagasi: selesa untuk 4 penumpang + 4 beg besar, atau 6 penumpang dengan beg kabin. Masa menunggu melebihi 15 minit (60 minit di Changi) dikenakan S$20 setiap 30 minit. Jam sewa dikira dari pengambilan hingga penghantaran.',
      'East Coast / Northern states': 'Pantai Timur / negeri utara', 'Singapore / KL / Melaka / Seremban / outside JB': 'Singapura / KL / Melaka / Seremban / luar JB', 'JB area': 'Kawasan JB'
    },
    zh: {
      'Hot item': '热门', 'Chauffeured transfers': '专车接送', 'Charters & events': '包车与活动', 'Anything else': '其他',
      'Self-drive, per day': '{car} 自驾，每天', 'Self-drive, weekly': '{car} 自驾，每周', 'Monthly rental, self-drive': '{car} 月租，自驾',
      'Singapore ↔ Johor Bahru': '新加坡 ↔ 新山', 'Changi Airport ↔ Johor Bahru': '樟宜机场 ↔ 新山',
      'Singapore ↔ Senai Airport': '新加坡 ↔ 士乃机场', 'Singapore ↔ Legoland / Medini': '新加坡 ↔ 乐高乐园 / 美迪尼',
      'Singapore ↔ Desaru Coast': '新加坡 ↔ 迪沙鲁海岸', 'Cross-border day charter, 10 h': '跨境全日包车，10 小时',
      'Johor day charter, 10 h': '柔佛全日包车，10 小时', 'Wedding package, 8 h': '婚礼套餐，8 小时', 'Something else / multi-stop': '其他 / 多站行程',
      'Singapore': '新加坡', 'Johor Bahru': '新山', 'Changi Airport': '樟宜机场', 'Senai Airport': '士乃机场', 'Legoland / Medini': '乐高乐园 / 美迪尼', 'Desaru Coast': '迪沙鲁海岸',
      'refundable deposit; minimum days depend on destination, see below': '押金可退；最短天数取决于目的地，见下文',
      '7 days': '7 天', 'long-term rate, negotiate on WhatsApp': '长期价，WhatsApp 议价',
      'one-way, any SG address': '单程，新加坡任何地址', 'meet &amp; greet, flight tracked': '接机服务，追踪航班',
      'any SG address, flight tracked': '新加坡任何地址，追踪航班', 'Puteri Harbour included': '含 Puteri Harbour',
      'one-way, resort doorstep': '单程，直达度假村门口', '10 hours, SG pickup': '10 小时，新加坡接客',
      '10 hours with driver, extra hour RM70': '10 小时含司机，加时每小时 RM70', '8 hours, d&eacute;cor included': '8 小时，含装饰',
      '7 seats · pilot seats · auto · self-drive or chauffeured': '7 座 · 头等舱座椅 · 自动 · 自驾或专车',
      '5 seats · auto · self-drive only': '5 座 · 自动 · 仅自驾',
      'Included in every fare': '每趟车费包含', 'Included with the Bezza': 'Bezza 租金包含',
      '<b>Professional chauffeur</b>': '<b>专业司机</b>', 'Fuel, tolls and Causeway or Second Link fees': '油费、过路费及长堤或第二通道费',
      'VEP and checkpoint charges': 'VEP 及关卡费', 'Airport meet &amp; greet with flight tracking': '机场接机并追踪航班',
      '60 min waiting at Changi, 15 min elsewhere': '樟宜等候 60 分钟，其他地点 15 分钟', 'Bottled water, Wi-Fi, child seat on request': '瓶装水、Wi-Fi，儿童座椅可预约',
      'Comprehensive insurance': '综合保险', 'Full tank on handover, return full': '交车满油，还车满油', 'Unlimited mileage within Malaysia': '马来西亚境内不限里程',
      'Night pickup 11 pm &ndash; 7 am: <b>+S$30</b>': '夜间接送 晚 11 点 &ndash; 早 7 点：<b>+S$30</b>', 'Extra waiting: S$20 per 30 min': '额外等候：每 30 分钟 S$20',
      'Charter overrun: RM70 per hour': '包车超时：每小时 RM70', 'Late return: RM20 per hour': '逾时还车：每小时 RM20', 'Singapore entry: VEP arranged on request': '进入新加坡：可代办 VEP',
      '2022 Toyota Vellfire ZG, 7 seats, reclining pilot seats': '2022 丰田 Vellfire ZG，7 座，可躺式头等舱座椅',
      'English / Malay / Mandarin-speaking driver': '司机会说英语 / 马来语 / 华语', 'Bottled water & on-board Wi-Fi': '瓶装水及车载 Wi-Fi',
      'Child seat on request, free': '儿童座椅可预约，免费', 'All tolls, VEP & checkpoint fees': '所有过路费、VEP 及关卡费',
      'Perodua Bezza 1.3 AV 2023, 5 seats, automatic': '2023 Perodua Bezza 1.3 AV，5 座，自动',
      'Luggage: comfortably 4 passengers + 4 large cases, or 6 passengers with cabin bags. Waiting time beyond 15 minutes (60 minutes at Changi) is charged at S$20 per 30 minutes. Charter hours are counted from pickup to drop-off.':
        '行李：4 位乘客加 4 个大行李箱，或 6 位乘客带登机箱。等候超过 15 分钟（樟宜 60 分钟）按每 30 分钟 S$20 计费。包车时间从上车到下车计算。',
      'Perlis / Langkawi': '玻璃市 / 兰卡威', 'East Coast / Northern states': '东海岸 / 北部各州', 'Perak / Ipoh / Cameron Highlands': '霹雳 / 怡保 / 金马仑高原',
      'Pahang': '彭亨', 'Singapore / KL / Melaka / Seremban / outside JB': '新加坡 / 吉隆坡 / 马六甲 / 芙蓉 / 新山以外', 'JB area': '新山地区'
    }
  }
};

(function () {
  var KEY = 'ezee-lang', lang = 'en', originals = new Map();
  function valid(l) { return I18N.langs.some(function (x) { return x.id === l }) }
  try {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    var saved = localStorage.getItem(KEY);
    if (valid(q)) lang = q; else if (valid(saved)) lang = saved;
  } catch (e) { }

  window.getLang = function () { return lang };
  /* UI string by key; {a},{b},{n},{z},{car} placeholders filled from vars. English falls back to fallback text. */
  window.t = function (key, vars, fallback) {
    var s = (lang !== 'en' && I18N.ui[lang] && I18N.ui[lang][key]) || fallback || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]) });
    return s;
  };
  /* data string (fleet.json text) by exact English value; strips {car} unless car given */
  window.td = function (text, car) {
    if (text == null) return text;
    var s = (lang !== 'en' && I18N.data[lang] && I18N.data[lang][text]) || text;
    if (s.indexOf('{car}') > -1) s = car ? s.split('{car}').join(car) : s.split('{car}').join('').replace(/\s+,/g, ',').replace(/\s{2,}/g, ' ').trim();
    return s;
  };
  window.daysT = function (n) { n = parseInt(n, 10); return lang === 'en' ? n + ' day' + (n > 1 ? 's' : '') : n + ' ' + t(n > 1 ? 'j.days' : 'j.day') };
  window.dateLocale = function () { return I18N.locale[lang] || 'en-GB' };
  /* fleet-helpers wrappers that respect the language */
  window.carLabelT = function (c) { return c.name + (c.hot ? ' — ' + t('j.hot', null, 'Hot item') : '') };
  window.rowLabelT = function (r, c) { return lang === 'en' ? rowLabel(r, c) : td(r.label, c.short) };
  window.fmtPriceT = function (r, p) { return (p == null || p === '') ? t('j.letstalk', null, 'Let’s talk') : r.cur + p };

  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!originals.has(el)) originals.set(el, el.innerHTML);
      var s = lang === 'en' ? originals.get(el) : (I18N.ui[lang][k] || originals.get(el));
      if (el.innerHTML !== s) el.innerHTML = s;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (!originals.has(el)) originals.set(el, el.placeholder);
      el.placeholder = lang === 'en' ? originals.get(el) : (I18N.ui[lang][k] || originals.get(el));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-title');
      if (!originals.has(el)) originals.set(el, el.title);
      var s = lang === 'en' ? originals.get(el) : (I18N.ui[lang][k] || originals.get(el));
      el.title = s; if (el.hasAttribute('aria-label')) el.setAttribute('aria-label', s);
    });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false') });
  }
  window.setLang = function (l) {
    if (!valid(l)) return;
    lang = l;
    try { localStorage.setItem(KEY, l) } catch (e) { }
    apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  };
  function buildSwitchers() {
    document.querySelectorAll('.lang').forEach(function (box) {
      if (box.children.length) return;
      box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Language');
      I18N.langs.forEach(function (L) {
        var b = document.createElement('button'); b.type = 'button'; b.dataset.lang = L.id; b.textContent = L.label; b.title = L.name; b.lang = L.id;
        b.addEventListener('click', function () { setLang(L.id) });
        box.appendChild(b);
      });
    });
  }
  function init() { buildSwitchers(); apply() }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
