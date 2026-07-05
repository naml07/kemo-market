// ============================================================
// KEMO MARKET — Données Produits (Simulées)
// Marketplace Afro-Luxe — Lomé, Togo
// ============================================================

const KEMO_PRODUCTS = [
  // ─── MODE & VÊTEMENTS ───────────────────────────────────────
  {
    id: 1,
    name: "Ensemble Kente Prestige Homme",
    category: "mode",
    subcategory: "Homme",
    price: 45000,
    originalPrice: 62000,
    discount: 27,
    rating: 4.8,
    reviews: 134,
    sold: 342,
    stock: 15,
    images: ["mode-1.jpg"],
    emoji: "👔",
    badge: "BEST SELLER",
    badgeColor: "gold",
    description: "Ensemble deux pièces en tissu kente authentique du Ghana. Teinture naturelle, coupe moderne pour homme africain élégant.",
    tags: ["kente", "africain", "homme", "cérémonie"],
    seller: { name: "Adjo Créations", rating: 4.9, sales: 1240, verified: true, city: "Lomé" },
    delivery: { locome: 1000, upcountry: 2500, free_above: 50000 },
    featured: true, flash: false, new: false
  },
  {
    id: 2,
    name: "Robe Wax Femme \"Lumière d'Afrique\"",
    category: "mode",
    subcategory: "Femme",
    price: 28500,
    originalPrice: 35000,
    discount: 19,
    rating: 4.9,
    reviews: 287,
    sold: 891,
    stock: 8,
    images: ["mode-2.jpg"],
    emoji: "👗",
    badge: "COUP DE CŒUR",
    badgeColor: "rose",
    description: "Robe longue en wax hollandais authentique. Motifs solaires exclusifs, coupe ajustée mettant en valeur la silhouette.",
    tags: ["wax", "robe", "femme", "élégant"],
    seller: { name: "Maison Akua", rating: 4.8, sales: 3200, verified: true, city: "Lomé" },
    delivery: { locome: 800, upcountry: 2000, free_above: 50000 },
    featured: true, flash: true, new: false
  },
  {
    id: 3,
    name: "Sneakers Cuir Artisanal \"Urban Kéra\"",
    category: "mode",
    subcategory: "Chaussures",
    price: 32000,
    originalPrice: 32000,
    discount: 0,
    rating: 4.6,
    reviews: 56,
    sold: 124,
    stock: 22,
    images: ["mode-3.jpg"],
    emoji: "👟",
    badge: "NOUVEAU",
    badgeColor: "green",
    description: "Sneakers en cuir véritable de fabrication artisanale togolaise. Semelle gomme, design afro-urbain.",
    tags: ["chaussures", "cuir", "artisanal", "sneakers"],
    seller: { name: "Kéra Shoes", rating: 4.7, sales: 450, verified: true, city: "Lomé" },
    delivery: { locome: 1000, upcountry: 2500, free_above: 50000 },
    featured: false, flash: false, new: true
  },

  // ─── ÉLECTRONIQUE & HIGH-TECH ───────────────────────────────
  {
    id: 4,
    name: "Smartphone Tecno Camon 30 Pro",
    category: "electronique",
    subcategory: "Smartphones",
    price: 185000,
    originalPrice: 215000,
    discount: 14,
    rating: 4.7,
    reviews: 412,
    sold: 1820,
    stock: 30,
    images: ["tech-1.jpg"],
    emoji: "📱",
    badge: "FLASH -14%",
    badgeColor: "red",
    description: "6.8\" AMOLED 120Hz, 50MP caméra IA, 5000mAh, charge rapide 45W. Réseau 4G+, double SIM.",
    tags: ["smartphone", "tecno", "4G", "android"],
    seller: { name: "TechLomé Store", rating: 4.9, sales: 5600, verified: true, city: "Lomé" },
    delivery: { locome: 1500, upcountry: 3000, free_above: 50000 },
    featured: true, flash: true, new: false
  },
  {
    id: 5,
    name: "Écouteurs Sans-Fil Bluetooth Pro",
    category: "electronique",
    subcategory: "Audio",
    price: 18500,
    originalPrice: 25000,
    discount: 26,
    rating: 4.5,
    reviews: 198,
    sold: 567,
    stock: 45,
    images: ["tech-2.jpg"],
    emoji: "🎧",
    badge: "PROMO",
    badgeColor: "gold",
    description: "True Wireless, réduction de bruit active, 30h d'autonomie, charge rapide USB-C. Compatible tous smartphones.",
    tags: ["écouteurs", "bluetooth", "sans-fil", "audio"],
    seller: { name: "TechLomé Store", rating: 4.9, sales: 5600, verified: true, city: "Lomé" },
    delivery: { locome: 500, upcountry: 1500, free_above: 50000 },
    featured: false, flash: true, new: false
  },
  {
    id: 6,
    name: "Panneau Solaire 200W + Batterie",
    category: "electronique",
    subcategory: "Énergie Solaire",
    price: 145000,
    originalPrice: 170000,
    discount: 15,
    rating: 4.8,
    reviews: 89,
    sold: 203,
    stock: 12,
    images: ["tech-3.jpg"],
    emoji: "☀️",
    badge: "POPULAIRE",
    badgeColor: "gold",
    description: "Kit complet énergie solaire 200W monocristallin + batterie 100Ah lithium. Idéal maison, délestage.",
    tags: ["solaire", "énergie", "panneau", "batterie"],
    seller: { name: "SolaireTogo", rating: 4.8, sales: 890, verified: true, city: "Lomé" },
    delivery: { locome: 3000, upcountry: 6000, free_above: 50000 },
    featured: true, flash: false, new: false
  },

  // ─── BEAUTÉ & COSMÉTIQUES ───────────────────────────────────
  {
    id: 7,
    name: "Huile de Karité Pure Bio \"Nourissa\"",
    category: "beaute",
    subcategory: "Soins Corps",
    price: 8500,
    originalPrice: 12000,
    discount: 29,
    rating: 4.9,
    reviews: 634,
    sold: 4210,
    stock: 200,
    images: ["beaute-1.jpg"],
    emoji: "🫙",
    badge: "N°1 VENTES",
    badgeColor: "gold",
    description: "Karité pur non raffiné du Burkina Faso. 100% naturel, certifié bio. Idéal peau et cheveux africains.",
    tags: ["karité", "naturel", "bio", "soin"],
    seller: { name: "Nourissa Naturals", rating: 5.0, sales: 8900, verified: true, city: "Lomé" },
    delivery: { locome: 500, upcountry: 1500, free_above: 50000 },
    featured: true, flash: false, new: false
  },
  {
    id: 8,
    name: "Kit Maquillage Teintes Africaines",
    category: "beaute",
    subcategory: "Maquillage",
    price: 25000,
    originalPrice: 32000,
    discount: 22,
    rating: 4.7,
    reviews: 178,
    sold: 892,
    stock: 35,
    images: ["beaute-2.jpg"],
    emoji: "💄",
    badge: "FLASH",
    badgeColor: "red",
    description: "Kit professionnel 20 pièces avec fond de teint adapté aux peaux noires, fards à paupières warm-tone, rouge à lèvres.",
    tags: ["maquillage", "kit", "professionnel", "peaux noires"],
    seller: { name: "Glam Africa", rating: 4.8, sales: 2100, verified: true, city: "Lomé" },
    delivery: { locome: 600, upcountry: 1800, free_above: 50000 },
    featured: false, flash: true, new: false
  },

  // ─── MAISON & DÉCO ──────────────────────────────────────────
  {
    id: 9,
    name: "Tableau Afro-Art \"Reine de Saba\"",
    category: "maison",
    subcategory: "Décoration",
    price: 35000,
    originalPrice: 35000,
    discount: 0,
    rating: 4.9,
    reviews: 43,
    sold: 67,
    stock: 5,
    images: ["deco-1.jpg"],
    emoji: "🖼️",
    badge: "ARTISANAT",
    badgeColor: "gold",
    description: "Œuvre originale peinte à la main par artiste togolais. Format 80x60cm, châssis bois massif, techniques mixtes.",
    tags: ["art", "tableau", "africain", "déco", "original"],
    seller: { name: "Atelier Koffi", rating: 4.9, sales: 340, verified: true, city: "Lomé" },
    delivery: { locome: 2000, upcountry: 4000, free_above: 50000 },
    featured: true, flash: false, new: false
  },
  {
    id: 10,
    name: "Climatiseur Inverter 1.5CV",
    category: "maison",
    subcategory: "Électroménager",
    price: 245000,
    originalPrice: 290000,
    discount: 16,
    rating: 4.6,
    reviews: 156,
    sold: 312,
    stock: 18,
    images: ["maison-2.jpg"],
    emoji: "❄️",
    badge: "FLASH -16%",
    badgeColor: "red",
    description: "Climatiseur Inverter A++ 1.5CV. Économie d'énergie 50%, installation incluse, garantie 2 ans pièces et main d'œuvre.",
    tags: ["climatiseur", "inverter", "froid", "électroménager"],
    seller: { name: "Électro Plus", rating: 4.7, sales: 1800, verified: true, city: "Lomé" },
    delivery: { locome: 5000, upcountry: null, free_above: 50000 },
    featured: true, flash: true, new: false
  },

  // ─── ALIMENTATION ───────────────────────────────────────────
  {
    id: 11,
    name: "Café Robusta Togo Premium 500g",
    category: "alimentation",
    subcategory: "Boissons",
    price: 6500,
    originalPrice: 8000,
    discount: 19,
    rating: 4.8,
    reviews: 234,
    sold: 1560,
    stock: 150,
    images: ["food-1.jpg"],
    emoji: "☕",
    badge: "LOCAL",
    badgeColor: "green",
    description: "Café robusta des plateaux togolais, torréfaction artisanale. Arômes intenses, force 8/10. Moulu ou en grains.",
    tags: ["café", "togolais", "robusta", "local"],
    seller: { name: "Café des Plateaux", rating: 4.9, sales: 4200, verified: true, city: "Kpalimé" },
    delivery: { locome: 500, upcountry: 1200, free_above: 50000 },
    featured: false, flash: false, new: false
  },
  {
    id: 12,
    name: "Panier Épicerie Fine Africaine",
    category: "alimentation",
    subcategory: "Épicerie",
    price: 42000,
    originalPrice: 55000,
    discount: 24,
    rating: 4.7,
    reviews: 87,
    sold: 234,
    stock: 25,
    images: ["food-2.jpg"],
    emoji: "🧺",
    badge: "CADEAU IDÉAL",
    badgeColor: "gold",
    description: "Panier premium avec 12 produits sélectionnés : épices rares, miel de forêt, noix de cajou premium, huile de palme rouge bio.",
    tags: ["épicerie", "panier", "cadeau", "premium"],
    seller: { name: "Terroir Togo", rating: 4.8, sales: 780, verified: true, city: "Lomé" },
    delivery: { locome: 1000, upcountry: 2500, free_above: 50000 },
    featured: true, flash: true, new: false
  }
];

// ─── CATÉGORIES ─────────────────────────────────────────────────
const KEMO_CATEGORIES = [
  { id: "tous", label: "Tous les produits", icon: "🏪", count: KEMO_PRODUCTS.length },
  { id: "mode", label: "Mode & Style", icon: "👗", count: 3 },
  { id: "electronique", label: "High-Tech", icon: "📱", count: 3 },
  { id: "beaute", label: "Beauté & Soins", icon: "💄", count: 2 },
  { id: "maison", label: "Maison & Déco", icon: "🏠", count: 2 },
  { id: "alimentation", label: "Alimentation", icon: "🥗", count: 2 }
];

// ─── HELPER FUNCTIONS ───────────────────────────────────────────
function getProductById(id) {
  return KEMO_PRODUCTS.find(p => p.id === parseInt(id));
}

function getProductsByCategory(cat) {
  if (cat === "tous") return KEMO_PRODUCTS;
  return KEMO_PRODUCTS.filter(p => p.category === cat);
}

function getFeaturedProducts() {
  return KEMO_PRODUCTS.filter(p => p.featured);
}

function getFlashProducts() {
  return KEMO_PRODUCTS.filter(p => p.flash);
}

function formatPrice(price) {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}

function searchProducts(query) {
  const q = query.toLowerCase();
  return KEMO_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q)) ||
    p.category.toLowerCase().includes(q)
  );
}
