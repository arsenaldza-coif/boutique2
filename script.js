
/* ================= CONFIG ================= */
// Remplacez ce numéro par le vôtre au format international sans "+" ni espaces
const WHATSAPP_NUMBER = "213555000000";
const WHATSAPP_MSG_FR = "Bonjour Dar Lila, je souhaite avoir plus d'informations sur vos produits.";
const WHATSAPP_MSG_AR = "مرحباً دار ليلى، أريد المزيد من المعلومات حول منتجاتكم.";

function buildWaLink(lang){
  const msg = lang === 'ar' ? WHATSAPP_MSG_AR : WHATSAPP_MSG_FR;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function refreshWaLinks(lang){
  const link = buildWaLink(lang);
  document.querySelectorAll('#headerWaBtn, #tickerWaBtn, .hero-wa-btn, #locWaBtn, .cta-wa-btn, #floatWaBtn, #footWaIcon')
    .forEach(el => el.setAttribute('href', link));
}

/* ================= TRANSLATIONS ================= */
const translations = {
  fr: {
    brand:"Dar Lila", nav_home:"Accueil", nav_about:"Pourquoi nous", nav_shop:"Boutique", nav_gallery:"Galerie", nav_reviews:"Avis clients", nav_contact:"Contact",
    header_wa:"Commander", wa_ticker:"Rejoignez notre groupe WhatsApp", scroll:"DÉFILER",
    hero_eyebrow:"Beauté, soins & bébé",
    hero_title:"Cosmétiques et articles bébé, à portée de clic",
    hero_sub:"Parfums, soins beauté et essentiels pour bébé, sélectionnés avec soin et livrés dans les 58 wilayas.",
    hero_cta1:"Commander sur WhatsApp", hero_cta2:"Voir la collection",
    usp_eyebrow:"Pourquoi Dar Lila", usp_title:"Une expérience d'achat en toute confiance",
    usp_lead:"Chaque commande est préparée avec le même soin qu'un cadeau, du choix des matières jusqu'à la livraison chez vous.",
    usp1_t:"Fait main", usp1_p:"Confectionné avec soin par des artisans locaux, pièce après pièce.",
    usp2_t:"Livraison nationale", usp2_p:"Expédition rapide vers les 58 wilayas, suivi de commande inclus.",
    usp3_t:"Paiement à la livraison", usp3_p:"Réglez en espèces à la réception, en toute simplicité.",
    usp4_t:"Retour facile", usp4_p:"Satisfait ou remboursé sous 7 jours, sans complication.",
    serv_eyebrow:"Nos collections", serv_title:"Beauté, soins et douceur pour bébé — 8 catégories",
    serv_lead:"Découvrez nos parfums, cosmétiques et articles pour bébé, sélectionnés avec soin pour toute la famille.",
    s1_t:"Bijoux traditionnels", s1_p:"Argent, filigrane et pierres naturelles.",
    s2_t:"Vêtements brodés", s2_p:"Caftans et tenues brodées main.",
    s3_t:"Déco & poterie", s3_p:"Céramiques peintes à la main.",
    s4_t:"Accessoires en cuir", s4_p:"Sacs et sandales en cuir véritable.",
    s5_t:"Parfums", s5_p:"Des fragrances élégantes pour chaque moment.",
    s6_t:"Cosmétiques", s6_p:"Soins et beauté pour prendre soin de vous.",
    s7_t:"Articles pour bébé", s7_p:"Des essentiels doux et sûrs pour bébé.",
    s8_t:"Hygiène bébé", s8_p:"Des soins quotidiens doux pour les tout-petits.",
    pm_qty:"Quantité", pm_add:"Ajouter au panier", pm_order:"Commander cet article",
    cart_title:"Mon panier", cart_empty:"Votre panier est vide.", cart_total:"Total", cart_order:"Commander via WhatsApp",
    prod_detail:"Détails", prod_add:"Ajouter", cart_reco:"Vous aimerez aussi", cart_reco_add:"Ajouter",
    p1_n:"Collier Filigrane Argent", p1_d:"Collier artisanal en argent massif, motifs filigranés traditionnels, fait main à Alger.",
    p2_n:"Boucles d'oreilles Berbères", p2_d:"Boucles en argent ciselé, inspirées des bijoux berbères ancestraux.",
    p3_n:"Caftan Brodé Or", p3_d:"Caftan de cérémonie brodé fil d'or, tissu velours, coupe traditionnelle.",
    p4_n:"Djellaba Brodée", p4_d:"Djellaba légère brodée main, idéale pour les grandes occasions.",
    p5_n:"Théière en Cuivre Gravée", p5_d:"Théière traditionnelle en cuivre martelé et gravé à la main.",
    p6_n:"Assiette en Poterie Peinte", p6_d:"Assiette décorative en céramique, peinte à la main selon les motifs de Kabylie.",
    p7_n:"Sac à Main en Cuir", p7_d:"Sac en cuir véritable tanné artisanalement, doublure cousue main.",
    p8_n:"Sandales en Cuir", p8_d:"Sandales en cuir souple, semelle confortable, fabrication locale.",
    p9_n:"Eau de parfum Jasmin", p9_d:"Un parfum floral élégant aux notes de jasmin et de musc blanc.",
    p10_n:"Parfum Oud d’Orient", p10_d:"Une fragrance chaleureuse et profonde aux notes de oud et d’ambre.",
    p11_n:"Coffret Soin Visage", p11_d:"Coffret beauté avec nettoyant, crème hydratante et sérum.",
    p12_n:"Huile naturelle pour cheveux", p12_d:"Huile nourrissante aux plantes pour des cheveux doux et brillants.",
    p13_n:"Coffret Douceur Bébé", p13_d:"Coffret de soins doux pour la toilette et la peau délicate de bébé.",
    p14_n:"Doudou Lapin en coton", p14_d:"Doudou tout doux en coton, compagnon rassurant dès la naissance.",
    p15_n:"Brume parfumée Fleur d’oranger", p15_d:"Une brume légère et fraîche aux notes délicates de fleur d’oranger.",
    p16_n:"Coffret Parfum Élégance", p16_d:"Coffret parfum raffiné à offrir, avec une fragrance douce et longue tenue.",
    p17_n:"Crème Hydratante Douceur", p17_d:"Crème visage et corps pour une peau souple, fraîche et parfaitement hydratée.",
    p18_n:"Palette Maquillage Naturelle", p18_d:"Palette de teintes naturelles pour un maquillage élégant au quotidien.",
    p19_n:"Shampoing Doux Bébé", p19_d:"Shampoing délicat sans rinçage agressif, adapté à la peau sensible de bébé.",
    p20_n:"Cape de Bain Bébé", p20_d:"Cape de bain moelleuse et absorbante pour garder bébé bien au chaud.",
    p21_n:"Lingettes Douces Bébé", p21_d:"Lingettes délicates pour la toilette quotidienne, pratiques et douces.",
    p22_n:"Lait Nettoyant Bébé", p22_d:"Lait nettoyant doux pour le visage et le corps des tout-petits.",
    gal_eyebrow:"Galerie", gal_title:"Nos plus belles pièces",
    gal_lead:"Un aperçu de nos produits, photographiés dans notre atelier d'Alger.",
    test_eyebrow:"Avis clients", test_title:"Ce que disent nos clients",
    t1_p:"« Commande passée le soir sur WhatsApp, livrée deux jours après à Oran. La qualité dépasse les photos ! »", t1_n:"Sarah B.", t1_c:"Oran",
    t2_p:"« Le collier en argent est magnifique, exactement comme sur les photos de la galerie. Service très réactif. »", t2_n:"Yacine M.", t2_c:"Constantine",
    t3_p:"« J'ai offert un caftan brodé, l'emballage était soigné et la livraison rapide. Je recommande vivement. »", t3_n:"Lina K.", t3_c:"Alger",
    loc_eyebrow:"Nous trouver", loc_title:"Visitez notre boutique", loc_h3:"Dar Lila — Alger Centre",
    loc_addr_l:"Adresse", loc_addr:"12 Rue Didouche Mourad, Alger Centre, Algérie",
    loc_hours_l:"Horaires", loc_hours:"Dimanche – Jeudi : 9h à 18h",
    loc_phone_l:"Téléphone / WhatsApp", loc_cta:"Itinéraire & contact",
    cta_title:"Une question ? Écrivez-nous directement", cta_p:"Notre équipe répond en quelques minutes sur WhatsApp, du dimanche au jeudi.", cta_btn:"Discuter sur WhatsApp",
    foot_desc:"Boutique en ligne de parfums, cosmétiques et articles pour bébé, livrés partout en Algérie.",
    foot_nav:"Navigation", foot_loc:"Localisation", foot_contact:"Contact", foot_addr:"Alger Centre, Algérie",
    foot_rights:"© 2026 Dar Lila. Tous droits réservés.", foot_made:"Site conçu avec soin — hébergé sur GitHub Pages."
  },
  ar: {
    brand:"دار ليلى", nav_home:"الرئيسية", nav_about:"لماذا نحن", nav_shop:"المتجر", nav_gallery:"معرض الصور", nav_reviews:"آراء الزبائن", nav_contact:"اتصل بنا",
    header_wa:"اطلب الآن", wa_ticker:"انضموا إلى مجموعة واتساب الخاصة بنا", scroll:"مرر للأسفل",
    hero_eyebrow:"الجمال والعناية والطفل",
    hero_title:"مستحضرات التجميل ومستلزمات الطفل بين يديك",
    hero_sub:"عطور ومنتجات للعناية والجمال واحتياجات الطفل، مختارة بعناية وتوصّل إلى ٥٨ ولاية.",
    hero_cta1:"اطلب عبر واتساب", hero_cta2:"شاهد المجموعة",
    usp_eyebrow:"لماذا دار ليلى", usp_title:"تجربة شراء موثوقة",
    usp_lead:"كل طلبية تُحضَّر بعناية كأنها هدية، من اختيار المواد إلى التوصيل إلى باب منزلك.",
    usp1_t:"صنع يدوي", usp1_p:"مصنوعة بعناية من طرف حرفيين محليين، قطعة تلو الأخرى.",
    usp2_t:"توصيل وطني", usp2_p:"شحن سريع إلى ٥٨ ولاية، مع تتبع الطلبية.",
    usp3_t:"الدفع عند الاستلام", usp3_p:"ادفع نقدًا عند الاستلام، بكل بساطة.",
    usp4_t:"إرجاع سهل", usp4_p:"استرجاع الأموال خلال ٧ أيام دون تعقيد.",
    serv_eyebrow:"مجموعاتنا", serv_title:"الجمال والعناية والنعومة لطفلك — ٨ تصنيفات",
    serv_lead:"اكتشفوا عطورنا ومستحضرات التجميل ومستلزمات الأطفال المختارة بعناية لكل أفراد العائلة.",
    s1_t:"مجوهرات تقليدية", s1_p:"فضة وفتيلة وأحجار طبيعية.",
    s2_t:"ملابس مطرزة", s2_p:"قفاطين وأزياء مطرزة يدويًا.",
    s3_t:"ديكور وفخار", s3_p:"سيراميك مرسوم يدويًا.",
    s4_t:"إكسسوارات جلدية", s4_p:"حقائب وصنادل من الجلد الطبيعي.",
    s5_t:"عطور", s5_p:"روائح أنيقة لكل لحظة.",
    s6_t:"مستحضرات التجميل", s6_p:"منتجات للعناية والجمال.",
    s7_t:"مستلزمات الأطفال", s7_p:"احتياجات ناعمة وآمنة لطفلك.",
    s8_t:"نظافة الطفل", s8_p:"منتجات لطيفة للعناية اليومية بصغيرك.",
    pm_qty:"الكمية", pm_add:"أضف إلى السلة", pm_order:"اطلب هذا المنتج",
    cart_title:"سلتي", cart_empty:"سلتك فارغة.", cart_total:"المجموع", cart_order:"اطلب عبر واتساب",
    prod_detail:"التفاصيل", prod_add:"أضف", cart_reco:"قد يعجبك أيضًا", cart_reco_add:"أضف",
    p1_n:"قلادة فضية بالفتيلة", p1_d:"قلادة حرفية من الفضة الخالصة، بزخارف الفتيلة التقليدية، صنعت يدويًا بالجزائر العاصمة.",
    p2_n:"أقراط أمازيغية", p2_d:"أقراط من الفضة المنقوشة، مستوحاة من الحلي الأمازيغية العريقة.",
    p3_n:"قفطان مطرز بالذهب", p3_d:"قفطان احتفالي مطرز بخيط ذهبي، قماش مخملي، قصة تقليدية.",
    p4_n:"جلابة مطرزة", p4_d:"جلابة خفيفة مطرزة يدويًا، مثالية للمناسبات الكبرى.",
    p5_n:"إبريق شاي نحاسي منقوش", p5_d:"إبريق شاي تقليدي من النحاس المطروق والمنقوش يدويًا.",
    p6_n:"طبق فخاري مرسوم", p6_d:"طبق زينة من السيراميك، مرسوم يدويًا بزخارف القبائل.",
    p7_n:"حقيبة يد جلدية", p7_d:"حقيبة من الجلد الطبيعي المدبوغ حرفيًا، بطانة مخيطة يدويًا.",
    p8_n:"صنادل جلدية", p8_d:"صنادل من الجلد الطري، نعل مريح، صناعة محلية.",
    p9_n:"عطر الياسمين", p9_d:"عطر زهري أنيق بنفحات الياسمين والمسك الأبيض.",
    p10_n:"عطر عود شرقي", p10_d:"رائحة دافئة وعميقة بنفحات العود والعنبر.",
    p11_n:"طقم العناية بالوجه", p11_d:"طقم جمال يضم منظفًا وكريم ترطيب وسيروم.",
    p12_n:"زيت طبيعي للشعر", p12_d:"زيت مغذٍ بالنباتات لشعر ناعم ولامع.",
    p13_n:"طقم عناية للطفل", p13_d:"طقم عناية لطيف لبشرة الطفل الحساسة.",
    p14_n:"دمية أرنب قطنية", p14_d:"دمية ناعمة من القطن، رفيق مطمئن منذ الولادة.",
    p15_n:"رذاذ زهر البرتقال المعطر", p15_d:"رذاذ خفيف ومنعش بنفحات زهر البرتقال الرقيقة.",
    p16_n:"طقم عطر الأناقة", p16_d:"طقم عطر راقٍ كهدية، برائحة ناعمة وثبات طويل.",
    p17_n:"كريم الترطيب والنعومة", p17_d:"كريم للوجه والجسم لبشرة ناعمة ومنتعشة ورطبة.",
    p18_n:"لوحة مكياج طبيعية", p18_d:"ألوان طبيعية لمكياج أنيق في كل يوم.",
    p19_n:"شامبو لطيف للأطفال", p19_d:"شامبو لطيف مناسب لبشرة الطفل الحساسة.",
    p20_n:"منشفة استحمام للأطفال", p20_d:"منشفة ناعمة وماصة تحافظ على دفء طفلك بعد الاستحمام.",
    p21_n:"مناديل أطفال ناعمة", p21_d:"مناديل لطيفة للنظافة اليومية، عملية وناعمة.",
    p22_n:"حليب تنظيف للأطفال", p22_d:"حليب تنظيف لطيف للوجه والجسم للصغار.",
    gal_eyebrow:"معرض الصور", gal_title:"أجمل قطعنا",
    gal_lead:"لمحة عن منتجاتنا، مصوَّرة في ورشتنا بالجزائر العاصمة.",
    test_eyebrow:"آراء الزبائن", test_title:"ماذا يقول زبائننا",
    t1_p:"«طلبت مساءً عبر واتساب ووصلتني بعد يومين في وهران. الجودة تفوق الصور!»", t1_n:"سارة ب.", t1_c:"وهران",
    t2_p:"«القلادة الفضية رائعة، تمامًا كما في صور المعرض. خدمة سريعة جدًا.»", t2_n:"ياسين م.", t2_c:"قسنطينة",
    t3_p:"«أهديت قفطانًا مطرزًا، التغليف كان أنيقًا والتوصيل سريع. أنصح به بشدة.»", t3_n:"لينة ك.", t3_c:"الجزائر",
    loc_eyebrow:"موقعنا", loc_title:"زوروا متجرنا", loc_h3:"دار ليلى — وسط الجزائر العاصمة",
    loc_addr_l:"العنوان", loc_addr:"12 شارع ديدوش مراد، وسط الجزائر العاصمة",
    loc_hours_l:"أوقات العمل", loc_hours:"الأحد – الخميس: 9 صباحًا إلى 6 مساءً",
    loc_phone_l:"الهاتف / واتساب", loc_cta:"الاتجاهات والتواصل",
    cta_title:"لديك سؤال؟ راسلنا مباشرة", cta_p:"فريقنا يرد خلال دقائق عبر واتساب، من الأحد إلى الخميس.", cta_btn:"تحدث عبر واتساب",
    foot_desc:"متجر إلكتروني للعطور ومستحضرات التجميل ومستلزمات الأطفال، يصل إلى كل الجزائر.",
    foot_nav:"روابط", foot_loc:"الموقع", foot_contact:"تواصل", foot_addr:"وسط الجزائر العاصمة، الجزائر",
    foot_rights:"© 2026 دار ليلى. جميع الحقوق محفوظة.", foot_made:"موقع مصمم بعناية — مستضاف على GitHub Pages."
  }
};

/* ================= PRODUCTS ================= */
const PRODUCTS = [
  {id:'p1', cat:'s1_t', price:8500,  img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=700&auto=format&fit=crop'},
  {id:'p2', cat:'s1_t', price:4200,  img:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=700&auto=format&fit=crop'},
  {id:'p3', cat:'s2_t', price:15000, img:'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=700&auto=format&fit=crop'},
  {id:'p4', cat:'s2_t', price:9800,  img:'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=700&auto=format&fit=crop'},
  {id:'p5', cat:'s3_t', price:6500,  img:'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=700&auto=format&fit=crop'},
  {id:'p6', cat:'s3_t', price:3200,  img:'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=700&auto=format&fit=crop'},
  {id:'p7', cat:'s4_t', price:7200,  img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=700&auto=format&fit=crop'},
  {id:'p8', cat:'s4_t', price:4500,  img:'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=700&auto=format&fit=crop'},
  {id:'p9', cat:'s5_t', price:6800,  img:'assets/perfume-bottle-product-photography-neutr-2.jpg'},
  {id:'p10',cat:'s5_t', price:9200,  img:'assets/perfume-bottle-product-photography-neutr-1.webp'},
  {id:'p11',cat:'s6_t', price:5400,  img:'assets/cosmetics-skincare-products-product-phot-1.jpg'},
  {id:'p12',cat:'s6_t', price:3900,  img:'assets/cosmetics-skincare-products-product-phot-2.jpg'},
  {id:'p13',cat:'s7_t', price:4600,  img:'assets/baby-products-toys-skincare-product-phot-1.jpg'},
  {id:'p14',cat:'s7_t', price:3500,  img:'assets/baby-products-toys-skincare-product-phot-2.jpg'},
  {id:'p15',cat:'s5_t', price:3200,  img:'assets/perfume-bottle-product-photography-neutr-1.webp'},
  {id:'p16',cat:'s5_t', price:7400,  img:'assets/perfume-bottle-product-photography-neutr-2.jpg'},
  {id:'p17',cat:'s6_t', price:2800,  img:'assets/cosmetics-skincare-products-product-phot-2.jpg'},
  {id:'p18',cat:'s6_t', price:6100,  img:'assets/cosmetics-skincare-products-product-phot-1.jpg'},
  {id:'p19',cat:'s7_t', price:2900,  img:'assets/baby-products-toys-skincare-product-phot-2.jpg'},
  {id:'p20',cat:'s7_t', price:5200,  img:'assets/baby-products-toys-skincare-product-phot-1.jpg'},
  {id:'p21',cat:'s8_t', price:2100,  img:'assets/baby-products-toys-skincare-product-phot-2.jpg'},
  {id:'p22',cat:'s8_t', price:3300,  img:'assets/baby-products-toys-skincare-product-phot-1.jpg'}
];
let currentLang = 'fr';

function currency(n){
  const formatted = n.toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'fr-DZ');
  return currentLang === 'ar' ? `${formatted} دج` : `${formatted} DA`;
}
function pName(p){ return translations[currentLang][p.id + '_n']; }
function pDesc(p){ return translations[currentLang][p.id + '_d']; }
function pCat(p){ return translations[currentLang][p.cat]; }

function renderProducts(){
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card">
      <div class="product-media" data-open-detail="${p.id}">
        <img src="${p.img}" alt="${pName(p)}" loading="lazy">
        <span class="product-badge">${pCat(p)}</span>
      </div>
      <div class="product-body">
        <h3 data-open-detail="${p.id}" style="cursor:pointer;">${pName(p)}</h3>
        <div class="product-price">${currency(p.price)}</div>
        <div class="product-actions">
          <button class="btn-detail" data-open-detail="${p.id}" type="button">${translations[currentLang].prod_detail}</button>
          <button class="btn-cart-add" data-quick-add="${p.id}" type="button" aria-label="${translations[currentLang].prod_add}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h2l2.6 12.4a2 2 0 002 1.6h8a2 2 0 002-1.6L21 7H6"/><circle cx="9.5" cy="20.5" r="1.4"/><circle cx="17.5" cy="20.5" r="1.4"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-open-detail]').forEach(el=>{
    el.addEventListener('click', ()=> openProductModal(el.getAttribute('data-open-detail')));
  });
  grid.querySelectorAll('[data-quick-add]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      e.stopPropagation();
      addToCart(el.getAttribute('data-quick-add'), 1);
      el.classList.add('added');
      setTimeout(()=>el.classList.remove('added'), 900);
    });
  });
}

/* ================= PRODUCT DETAIL MODAL ================= */
const pmOverlay = document.getElementById('pmOverlay');
const productModal = document.getElementById('productModal');
let pmCurrentProduct = null;
let pmQty = 1;

function openProductModal(id){
  pmCurrentProduct = PRODUCTS.find(p => p.id === id);
  pmQty = 1;
  document.getElementById('pmImg').src = pmCurrentProduct.img;
  document.getElementById('pmImg').alt = pName(pmCurrentProduct);
  document.getElementById('pmName').textContent = pName(pmCurrentProduct);
  document.getElementById('pmPrice').textContent = currency(pmCurrentProduct.price);
  document.getElementById('pmDesc').textContent = pDesc(pmCurrentProduct);
  document.getElementById('pmQtyVal').textContent = pmQty;
  updatePmWaLink();
  pmOverlay.classList.add('active');
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeProductModal(){
  pmOverlay.classList.remove('active');
  productModal.classList.remove('active');
  document.body.style.overflow = '';
}
function updatePmWaLink(){
  if(!pmCurrentProduct) return;
  const msg = currentLang === 'ar'
    ? `مرحباً، أريد طلب: ${pName(pmCurrentProduct)} × ${pmQty} — ${currency(pmCurrentProduct.price * pmQty)}`
    : `Bonjour, je souhaite commander : ${pName(pmCurrentProduct)} × ${pmQty} — ${currency(pmCurrentProduct.price * pmQty)}`;
  document.getElementById('pmWaBtn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
document.getElementById('pmClose').addEventListener('click', closeProductModal);
pmOverlay.addEventListener('click', ()=>{ if(!document.getElementById('cartDrawer').classList.contains('active')) closeProductModal(); });
document.getElementById('pmMinus').addEventListener('click', ()=>{
  pmQty = Math.max(1, pmQty - 1);
  document.getElementById('pmQtyVal').textContent = pmQty;
  updatePmWaLink();
});
document.getElementById('pmPlus').addEventListener('click', ()=>{
  pmQty += 1;
  document.getElementById('pmQtyVal').textContent = pmQty;
  updatePmWaLink();
});
document.getElementById('pmAddCart').addEventListener('click', ()=>{
  addToCart(pmCurrentProduct.id, pmQty);
  closeProductModal();
  openCart();
});

/* ================= CART ================= */
let cart = []; // {id, qty}

function addToCart(id, qty){
  const existing = cart.find(c => c.id === id);
  if(existing){ existing.qty += qty; } else { cart.push({id, qty}); }
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  renderCart();
}
function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ removeFromCart(id); return; }
  renderCart();
}
function cartTotal(){
  return cart.reduce((sum, c)=>{
    const p = PRODUCTS.find(pr => pr.id === c.id);
    return sum + (p ? p.price * c.qty : 0);
  }, 0);
}
function renderCart(){
  const wrap = document.getElementById('cartItems');
  const countEl = document.getElementById('cartCount');
  const totalQty = cart.reduce((s,c)=>s+c.qty,0);
  countEl.textContent = totalQty;
  countEl.style.display = totalQty > 0 ? 'flex' : 'none';

  if(cart.length === 0){
    wrap.innerHTML = `<p class="cart-empty">${translations[currentLang].cart_empty}</p>`;
  } else {
    wrap.innerHTML = cart.map(c=>{
      const p = PRODUCTS.find(pr => pr.id === c.id);
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${pName(p)}">
        <div class="cart-item-info">
          <h4>${pName(p)}</h4>
          <div class="ci-price">${currency(p.price)}</div>
          <div class="ci-row">
            <div class="ci-qty">
              <button type="button" data-qty-minus="${p.id}">−</button>
              <span>${c.qty}</span>
              <button type="button" data-qty-plus="${p.id}">+</button>
            </div>
            <button class="ci-remove" type="button" data-remove="${p.id}">${currentLang==='ar' ? 'حذف' : 'Retirer'}</button>
          </div>
        </div>
      </div>`;
    }).join('');
    wrap.querySelectorAll('[data-qty-minus]').forEach(el=>el.addEventListener('click', ()=>changeQty(el.getAttribute('data-qty-minus'), -1)));
    wrap.querySelectorAll('[data-qty-plus]').forEach(el=>el.addEventListener('click', ()=>changeQty(el.getAttribute('data-qty-plus'), 1)));
    wrap.querySelectorAll('[data-remove]').forEach(el=>el.addEventListener('click', ()=>removeFromCart(el.getAttribute('data-remove'))));
  }
  if(cart.length > 0){
    const cats = new Set(cart.map(c => PRODUCTS.find(p => p.id === c.id)?.cat));
    const recos = PRODUCTS.filter(p => cats.has(p.cat) && !cart.some(c => c.id === p.id)).slice(0,4);
    if(recos.length){
      wrap.insertAdjacentHTML('beforeend', `<div class="cart-recommendations"><h4>${translations[currentLang].cart_reco}</h4><div class="reco-list">${recos.map(p => `<div class="reco-card"><img src="${p.img}" alt="${pName(p)}"><div><strong>${pName(p)}</strong><small>${currency(p.price)}</small></div><button type="button" data-reco-add="${p.id}" aria-label="${translations[currentLang].cart_reco_add}">+</button></div>`).join('')}</div></div>`);
      wrap.querySelectorAll('[data-reco-add]').forEach(el => el.addEventListener('click', () => addToCart(el.getAttribute('data-reco-add'), 1)));
    }
  }
  document.getElementById('cartTotal').textContent = currency(cartTotal());
  updateCartWaLink();
}
function updateCartWaLink(){
  if(cart.length === 0){
    document.getElementById('cartWaBtn').href = buildWaLink(currentLang);
    return;
  }
  const lines = cart.map(c=>{
    const p = PRODUCTS.find(pr => pr.id === c.id);
    return `- ${pName(p)} × ${c.qty} = ${currency(p.price * c.qty)}`;
  }).join('\n');
  const intro = currentLang === 'ar' ? 'مرحباً، أريد طلب:' : 'Bonjour, je souhaite commander :';
  const totalLabel = currentLang === 'ar' ? 'المجموع' : 'Total';
  const msg = `${intro}\n${lines}\n${totalLabel}: ${currency(cartTotal())}`;
  document.getElementById('cartWaBtn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
function openCart(){
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('cartOpenBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.addEventListener('keydown', (e)=>{
  if(e.key !== 'Escape') return;
  closeCart(); closeProductModal();
});

/* ================= LANGUAGE ================= */
function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key] !== undefined){ el.innerHTML = translations[lang][key]; }
  });
  document.getElementById('btnFr').classList.toggle('active', lang==='fr');
  document.getElementById('btnAr').classList.toggle('active', lang==='ar');
  refreshWaLinks(lang);
  renderProducts();
  renderCart();
  localStorage.setItem('darlila_lang', lang);
}

document.getElementById('btnFr').addEventListener('click', ()=>applyLang('fr'));
document.getElementById('btnAr').addEventListener('click', ()=>applyLang('ar'));

/* init language: default FR (no persistence dependency required) */
applyLang('fr');

/* ================= HERO SLIDESHOW ================= */
const heroSlides = Array.from(document.querySelectorAll('#heroBg .hero-slide'));
let heroSlideIndex = 0;
let heroTimer;
function showHeroSlide(index){
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if(slide.tagName === 'VIDEO'){
      if(i === index){ slide.currentTime = 0; slide.play().catch(() => {}); }
      else { slide.pause(); }
    }
  });
  heroSlideIndex = index;
}
function startHeroSlideshow(){
  if(heroSlides.length < 2) return;
  showHeroSlide(0);
  heroTimer = setInterval(() => showHeroSlide((heroSlideIndex + 1) % heroSlides.length), 7000);
}
startHeroSlideshow();

/* ================= HEADER SCROLL STATE ================= */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

/* ================= MOBILE MENU ================= */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', ()=>{
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  burger.classList.remove('open'); navLinks.classList.remove('open');
}));

/* ================= PARALLAX HERO ================= */
const heroBg = document.getElementById('heroBg');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReduced){
  let ticking = false;
  window.addEventListener('scroll', ()=>{
    if(!ticking){
      window.requestAnimationFrame(()=>{
        const y = window.scrollY;
        if(y < window.innerHeight * 1.2){
          heroBg.style.transform = `translateY(${y * 0.35}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
}

/* ================= SCROLL REVEAL ================= */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});
revealEls.forEach(el=>io.observe(el));

/* ================= GALLERY LIGHTBOX ================= */
const galleryImgs = Array.from(document.querySelectorAll('#galleryGrid img'));
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
let currentIndex = 0;

function openLightbox(i){
  currentIndex = i;
  lbImg.src = galleryImgs[i].src;
  lbImg.alt = galleryImgs[i].alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
function showDelta(delta){
  currentIndex = (currentIndex + delta + galleryImgs.length) % galleryImgs.length;
  lbImg.src = galleryImgs[currentIndex].src;
  lbImg.alt = galleryImgs[currentIndex].alt;
}
galleryImgs.forEach((img, i)=> img.parentElement.addEventListener('click', ()=>openLightbox(i)));
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', ()=>showDelta(-1));
document.getElementById('lbNext').addEventListener('click', ()=>showDelta(1));
lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('active')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') showDelta(document.documentElement.dir === 'rtl' ? -1 : 1);
  if(e.key === 'ArrowLeft') showDelta(document.documentElement.dir === 'rtl' ? 1 : -1);
});
