// ─── Centralized Product Data ───────────────────────────────────────────────
const PRODUCTS = [
  // ── T-Shirts ──────────────────────────────────────────────────────────────
  {
    id: 'ts1',
    category: 'tshirts',
    title: 'Oversized Basic Tee',
    price: 599,
    image: 'images/products/tshirts/0578d26e-c712-48b1-87a6-30b4931d655f.jpeg',
    description: 'Our signature oversized silhouette in premium heavyweight cotton. The Oversized Basic Tee offers a relaxed, boxy fit with dropped shoulders and a longer body length for effortless layering. Garment-dyed for a rich, lived-in feel.',
    material: '100% Premium Egyptian Cotton — 280gsm heavyweight jersey',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Machine wash cold. Tumble dry low. Do not bleach.',
    rating: 4.7,
    reviewCount: 124,
    reviews: [
      { author: 'Ahmed M.', rating: 5, date: '2025-04-12', text: 'Best quality tee I\'ve ever owned. The fabric feels incredibly premium and the fit is perfect.' },
      { author: 'Youssef K.', rating: 5, date: '2025-03-28', text: 'Love the oversized fit. Washed it multiple times and it still looks brand new. Definitely ordering more.' },
      { author: 'Sara T.', rating: 4, date: '2025-03-10', text: 'Great quality but runs slightly larger than expected. Would recommend sizing down one.' }
    ]
  },
  {
    id: 'ts2',
    category: 'tshirts',
    title: 'NASAM Graphic Tee',
    price: 749,
    image: 'images/products/tshirts/3c5f3be0-0093-4390-9868-46877b4bcb9f.jpeg',
    description: 'Statement-making graphic tee featuring our exclusive dark-aesthetic artwork. Screen-printed with premium inks on our signature heavyweight cotton base. A wearable canvas of street culture.',
    material: '100% Combed Cotton — 240gsm midweight jersey, screen-printed graphics',
    sizes: ['S', 'M', 'L', 'XL'],
    care: 'Turn inside out before washing. Machine wash cold. Hang dry recommended.',
    rating: 4.8,
    reviewCount: 89,
    reviews: [
      { author: 'Omar H.', rating: 5, date: '2025-04-20', text: 'The print quality is insane. No cracking after multiple washes. True streetwear quality.' },
      { author: 'Layla R.', rating: 5, date: '2025-04-05', text: 'Ordered for my boyfriend and he absolutely loves it. The design is so unique.' },
      { author: 'Karim S.', rating: 4, date: '2025-03-15', text: 'Solid tee, great graphic. Wish there were more color options though.' }
    ]
  },
  {
    id: 'ts3',
    category: 'tshirts',
    title: 'Heavy Premium Tee',
    price: 849,
    image: 'images/products/tshirts/7157a3c1-5c7e-4e31-adc2-62334d8f5726.jpeg',
    description: 'The ultimate luxury tee. Cut from our heaviest cotton yet, this piece drapes with structure and weight that sets it apart. Features a ribbed crew neck, double-needle hem, and interior neck label for zero irritation.',
    material: '100% Long-Staple Egyptian Cotton — 320gsm super heavyweight',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Machine wash cold with like colors. Do not wring. Lay flat to dry.',
    rating: 4.9,
    reviewCount: 67,
    reviews: [
      { author: 'Mostafa A.', rating: 5, date: '2025-04-18', text: 'This is hands down the thickest, most luxurious tee I\'ve ever felt. Worth every piaster.' },
      { author: 'Nour B.', rating: 5, date: '2025-04-01', text: 'Bought all three colors. The weight of this fabric is unmatched. Feels like wearing a cloud made of gold.' },
      { author: 'Hassan F.', rating: 5, date: '2025-03-22', text: 'Finally a brand in Egypt that delivers true premium quality. Exceeded my expectations.' }
    ]
  },

  // ── Pants ──────────────────────────────────────────────────────────────────
  {
    id: 'p1',
    category: 'pants',
    title: 'Tactical Cargo Pants',
    price: 1199,
    image: 'images/products/pants/7dbea3860ac34b82475547fa162d97b5.jpg',
    description: 'Military-inspired cargo pants redesigned for the streets. Featuring 6 functional pockets with snap closures, adjustable ankle cuffs, and a relaxed tapered fit. Built for both utility and style.',
    material: 'Cotton-Nylon Ripstop Blend (65% Cotton, 35% Nylon) — DWR Coated',
    sizes: ['S', 'M', 'L', 'XL'],
    care: 'Machine wash cold. Do not bleach. Tumble dry low.',
    rating: 4.6,
    reviewCount: 93,
    reviews: [
      { author: 'Ali D.', rating: 5, date: '2025-04-15', text: 'These cargos are fire. The pockets are actually functional and the fit is chef\'s kiss.' },
      { author: 'Mariam N.', rating: 4, date: '2025-03-30', text: 'Great quality and very stylish. A bit stiff at first but breaks in nicely after a few wears.' },
      { author: 'Ziad G.', rating: 5, date: '2025-03-18', text: 'Exactly what I was looking for. The tactical aesthetic is on point without being too costume-y.' }
    ]
  },
  {
    id: 'p2',
    category: 'pants',
    title: 'Premium Jogger Pants',
    price: 999,
    image: 'images/products/pants/9327fe51b45af29ec1e25e6becff5bf7.jpg',
    description: 'Elevated joggers that bridge the gap between comfort and luxury. Cut from a premium French terry with a structured tapered leg, ribbed cuffs, and a hidden drawstring waistband. Perfect for both lounging and going out.',
    material: '80% Cotton, 20% Polyester — 350gsm French Terry',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Machine wash cold inside out. Tumble dry low. Do not iron on print.',
    rating: 4.5,
    reviewCount: 112,
    reviews: [
      { author: 'Tamer W.', rating: 5, date: '2025-04-22', text: 'Most comfortable joggers I own. The fabric quality is noticeably superior to anything else I\'ve tried.' },
      { author: 'Dina E.', rating: 4, date: '2025-04-08', text: 'Bought for my husband. He wears them almost every day now. Great purchase.' },
      { author: 'Amr S.', rating: 5, date: '2025-03-25', text: 'These joggers look dressed-up enough for casual dining. Love the tapered fit.' }
    ]
  },
  {
    id: 'p3',
    category: 'pants',
    title: 'Street Plaid Pants',
    price: 1099,
    image: 'images/products/pants/9d0a67dd61afa8cc46ed045e6b39af46.jpg',
    description: 'Bold plaid trousers with a streetwear edge. Featuring a wide-leg silhouette, dual front pleats, and contrast stitching. A statement piece that demands attention.',
    material: 'Woven Polyester-Viscose Blend (60% Poly, 40% Viscose)',
    sizes: ['S', 'M', 'L', 'XL'],
    care: 'Dry clean recommended. May hand wash cold. Hang dry.',
    rating: 4.4,
    reviewCount: 58,
    reviews: [
      { author: 'Khaled R.', rating: 5, date: '2025-04-10', text: 'These pants are a real head-turner. Get compliments every time I wear them.' },
      { author: 'Mona H.', rating: 4, date: '2025-03-20', text: 'Unique design that you can\'t find anywhere else in Egypt. The wide-leg fit is very trendy.' },
      { author: 'Yasser M.', rating: 4, date: '2025-03-05', text: 'Love the look. Fabric could be slightly heavier but overall a great pair of pants.' }
    ]
  },

  // ── Jackets ────────────────────────────────────────────────────────────────
  {
    id: 'j1',
    category: 'jackets',
    title: 'NASAM Bomber Jacket',
    price: 1799,
    image: 'images/products/jackets/06e3613f6ea71c3d3ffe346e85759129.jpg',
    description: 'Our iconic bomber jacket reimagined with premium details. Satin shell with quilted lining, ribbed collar, cuffs and hem. Features a YKK zip front, dual welt pockets, and an interior pocket. The definitive NASAM outerwear piece.',
    material: 'Shell: 100% Nylon Satin. Lining: Quilted Polyester. Rib: Acrylic-Wool Blend.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Dry clean only. Do not machine wash.',
    rating: 4.9,
    reviewCount: 76,
    reviews: [
      { author: 'Bassem T.', rating: 5, date: '2025-04-25', text: 'Absolutely stunning jacket. The satin finish catches light beautifully. Feel like a million bucks wearing it.' },
      { author: 'Farida K.', rating: 5, date: '2025-04-14', text: 'Bought this as a gift and ended up ordering one for myself too. The quality is unreal.' },
      { author: 'Mohamed Z.', rating: 5, date: '2025-03-29', text: 'This jacket is worth every penny. The quilted lining makes it warm enough for winter nights.' }
    ]
  },
  {
    id: 'j2',
    category: 'jackets',
    title: 'Double-Face Wind Jacket',
    price: 2299,
    image: 'images/products/jackets/749bfe5e7eb236b6738c7754865e1b38.jpg',
    description: 'Two looks in one. This reversible windbreaker features a matte technical side and a sleek satin side. Lightweight, packable, and fully wind and water-resistant. Complete with adjustable hood and elastic cuffs.',
    material: 'Side A: Matte Ripstop Nylon. Side B: Satin Nylon. DWR (Durable Water Repellent) treated.',
    sizes: ['S', 'M', 'L', 'XL'],
    care: 'Machine wash cold on gentle cycle. Hang dry. Do not dry clean.',
    rating: 4.7,
    reviewCount: 54,
    reviews: [
      { author: 'Tarek L.', rating: 5, date: '2025-04-19', text: 'Two jackets for the price of one. Both sides look completely different and equally stylish.' },
      { author: 'Rania A.', rating: 5, date: '2025-04-03', text: 'Perfect for Cairo weather — light enough for day, warm enough for evening. Love the versatility.' },
      { author: 'Hazem Y.', rating: 4, date: '2025-03-16', text: 'Great concept and execution. Only wish the hood was detachable.' }
    ]
  },
  {
    id: 'j3',
    category: 'jackets',
    title: 'Waterproof Tactical Jacket',
    price: 2099,
    image: 'images/products/jackets/f8ed4553db967bd69e9d618e5160c749.jpg',
    description: 'Engineered for all conditions. This tactical jacket features sealed seams, a waterproof membrane, and articulated sleeves for unrestricted movement. Multiple zippered pockets and a stowable hood complete this urban-ready outerwear.',
    material: '3-Layer Bonded Shell: Nylon Face, TPU Membrane, Mesh Lining. Fully taped seams.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    care: 'Machine wash warm. Do not use fabric softener. Tumble dry to restore DWR.',
    rating: 4.8,
    reviewCount: 41,
    reviews: [
      { author: 'Seif P.', rating: 5, date: '2025-04-21', text: 'Wore this through a full rainstorm and stayed completely dry. Build quality is incredible.' },
      { author: 'Lina W.', rating: 5, date: '2025-04-06', text: 'The most functional jacket I own. Every pocket is perfectly placed and the fit is impeccable.' },
      { author: 'Ayman Q.', rating: 4, date: '2025-03-12', text: 'Great waterproofing and design. Runs a bit snug in the shoulders — go one size up if muscular.' }
    ]
  }
];

// Helper: get root path prefix based on current page location
function getProductImageRoot() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

// Helper: find product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}
