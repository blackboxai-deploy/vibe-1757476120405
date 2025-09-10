export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  subcategory: string;
  description: string;
  details: string[];
  specifications: {
    material: string;
    purity: string;
    weight?: string;
    dimensions?: string;
    gemstones?: string;
  };
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export const products: Product[] = [
  // Contemporary Collection
  {
    id: 1,
    name: "Celestial Crescent Necklace",
    price: 2499,
    originalPrice: 3299,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26619309-99f6-4718-998c-976c94d84d12.png",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/44553fa7-cb64-4caa-b3f5-5d89d75ef16f.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/286dadc8-ba87-43dc-9895-8b31c1e13876.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9636caee-6dac-491f-a951-ec2a03314c61.png"
    ],
    category: "contemporary",
    subcategory: "necklaces",
    description: "A stunning crescent moon necklace that captures the mystique of celestial beauty. Crafted from premium 925 sterling silver with a delicate chain that sits gracefully at the collarbone.",
    details: [
      "Handcrafted 925 sterling silver",
      "Adjustable chain length 16-18 inches",
      "Crescent pendant measures 1.2 inches",
      "Hypoallergenic and tarnish-resistant",
      "Comes with elegant gift packaging"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "3.2g",
      dimensions: "Pendant: 1.2\" x 0.8\"",
    },
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ["minimalist", "celestial", "everyday", "gift"]
  },
  {
    id: 2,
    name: "Modern Infinity Ring",
    price: 1599,
    originalPrice: 1999,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a1922fc-2a89-4a08-964c-57c255f83eb1.png",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/980f6a8f-4989-44e0-bc60-2e7c73c5e1ed.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a48ba4e-891e-488c-924f-694309e7bb03.png"
    ],
    category: "contemporary",
    subcategory: "rings",
    description: "A sleek infinity ring symbolizing eternal love and connection. Features clean lines and a polished finish that reflects light beautifully.",
    details: [
      "925 sterling silver construction",
      "Infinity symbol design",
      "Available in sizes 5-9",
      "Comfortable rounded band",
      "Professional polish finish"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "2.8g",
      dimensions: "Band width: 0.25\"",
    },
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isNew: true,
    isFeatured: true,
    tags: ["infinity", "love", "minimalist", "engagement"]
  },
  {
    id: 3,
    name: "Geometric Drop Earrings",
    price: 1899,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/38593fa9-5ed3-4197-a572-21a4e24fe222.png",
    category: "contemporary",
    subcategory: "earrings",
    description: "Contemporary geometric earrings featuring angular shapes that create striking visual interest. Perfect for both casual and formal occasions.",
    details: [
      "Sterling silver with geometric design",
      "Lightweight construction",
      "Secure lever-back closure",
      "Measures 2.5 inches in length",
      "Modern angular silhouette"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "4.1g (pair)",
      dimensions: "2.5\" x 1.2\"",
    },
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    tags: ["geometric", "modern", "statement", "versatile"]
  },

  // Tribal Collection
  {
    id: 4,
    name: "Tribal Thunder Cuff",
    price: 3999,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3fca04bc-5549-4407-95db-eaa2eb123834.png",
    images: [
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad9dae36-6bb9-4e9a-85fd-cbc7fa2838c9.png",
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aff21e9c-fc0e-4360-9f85-79bf51c68d3b.png"
    ],
    category: "tribal",
    subcategory: "bracelets",
    description: "A powerful cuff bracelet inspired by ancient tribal thunder motifs. Features intricate geometric patterns that tell stories of strength and heritage.",
    details: [
      "Hand-engraved tribal patterns",
      "Solid sterling silver construction",
      "Adjustable opening design",
      "Traditional motifs with modern finish",
      "Weight: 28 grams for substantial feel"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "28g",
      dimensions: "2.5\" opening, 1.5\" width",
    },
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    isFeatured: true,
    tags: ["tribal", "bold", "statement", "traditional"]
  },
  {
    id: 5,
    name: "Bohemian Dream Earrings",
    price: 1899,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/440d6446-8278-4d72-9473-aa41b206bcfb.png",
    category: "tribal",
    subcategory: "earrings",
    description: "Enchanting bohemian earrings featuring traditional tribal motifs with cascading elements that catch and reflect light beautifully.",
    details: [
      "Traditional bohemian design",
      "Multiple dangling elements",
      "Secure hook closure",
      "Hand-finished details",
      "Length: 3.5 inches"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "6.2g (pair)",
      dimensions: "3.5\" x 1.8\"",
    },
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    isFeatured: true,
    tags: ["bohemian", "tribal", "statement", "ethnic"]
  },
  {
    id: 6,
    name: "Ancient Warrior Ring",
    price: 2299,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7635fc6f-7afe-46cb-ade9-3cdcc4559da0.png",
    category: "tribal",
    subcategory: "rings",
    description: "A bold ring inspired by ancient warrior traditions, featuring symbolic engravings and a textured band that speaks of strength and honor.",
    details: [
      "Ancient warrior-inspired design",
      "Textured band with symbols",
      "Available in sizes 7-12",
      "Oxidized finish for depth",
      "Substantial weight and presence"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "8.5g",
      dimensions: "Band width: 0.5\"",
    },
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    tags: ["warrior", "masculine", "bold", "symbolic"]
  },

  // Bridal Collection
  {
    id: 7,
    name: "Royal Heritage Necklace Set",
    price: 8999,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca078e23-31f7-443c-a667-fbebabd95c98.png",
    category: "bridal",
    subcategory: "necklace-sets",
    description: "An exquisite bridal necklace set that embodies royal elegance. Features intricate traditional patterns perfect for your special day.",
    details: [
      "Complete necklace and earring set",
      "Traditional bridal patterns",
      "Secure clasp mechanisms",
      "Suitable for all skin tones",
      "Comes with luxury presentation box"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "45g (set)",
      dimensions: "Necklace: 18\", Earrings: 2.8\"",
    },
    rating: 4.9,
    reviewCount: 234,
    inStock: true,
    isFeatured: true,
    tags: ["bridal", "traditional", "elegant", "ceremonial"]
  },
  {
    id: 8,
    name: "Pearl Blossom Tiara",
    price: 12999,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5d995c8-1e5a-4bc4-8fe2-8b6d9d20acb3.png",
    category: "bridal",
    subcategory: "tiaras",
    description: "A breathtaking tiara featuring delicate silver work with pearl accents and floral motifs, perfect for the modern bride.",
    details: [
      "Hand-set freshwater pearls",
      "Intricate floral silverwork",
      "Comfortable headband design",
      "Adjustable sizing",
      "Heirloom quality craftsmanship"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "35g",
      dimensions: "6\" x 3.5\"",
      gemstones: "Freshwater Pearls"
    },
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    tags: ["tiara", "pearls", "bridal", "floral"]
  },

  // Men's Collection
  {
    id: 9,
    name: "Executive Signet Ring",
    price: 3299,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4de41978-596c-438e-9b11-4a25c80cd39d.png",
    category: "mens",
    subcategory: "rings",
    description: "A sophisticated signet ring designed for the modern executive. Features clean lines and a substantial presence that commands respect.",
    details: [
      "Executive-style design",
      "Engraveable surface",
      "Substantial weight",
      "Available in sizes 8-13",
      "Professional finish"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "12g",
      dimensions: "Face: 0.8\" x 0.6\"",
    },
    rating: 4.7,
    reviewCount: 118,
    inStock: true,
    tags: ["mens", "executive", "professional", "signet"]
  },
  {
    id: 10,
    name: "Byzantine Chain Necklace",
    price: 4599,
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed55f387-207f-4c5d-a843-2791d4040639.png",
    category: "mens",
    subcategory: "necklaces",
    description: "A heavy Byzantine chain necklace that showcases masculine elegance. Features substantial links and expert craftsmanship.",
    details: [
      "Byzantine link construction",
      "Heavy gauge silver",
      "Secure lobster clasp",
      "Available in 20\" and 24\" lengths",
      "Substantial 42g weight"
    ],
    specifications: {
      material: "925 Sterling Silver",
      purity: "92.5%",
      weight: "42g",
      dimensions: "0.3\" width, 22\" length",
    },
    rating: 4.8,
    reviewCount: 85,
    inStock: true,
    tags: ["mens", "chain", "heavy", "byzantine"]
  }
];

export const categories = [
  { id: "contemporary", name: "Contemporary", description: "Modern minimalist designs" },
  { id: "tribal", name: "Tribal", description: "Traditional ethnic patterns" },
  { id: "bridal", name: "Bridal", description: "Elegant wedding jewelry" },
  { id: "mens", name: "Men's", description: "Masculine designs" }
];

export const subcategories = [
  { id: "necklaces", name: "Necklaces", category: "contemporary" },
  { id: "rings", name: "Rings", category: "contemporary" },
  { id: "earrings", name: "Earrings", category: "contemporary" },
  { id: "bracelets", name: "Bracelets", category: "tribal" },
  { id: "necklace-sets", name: "Necklace Sets", category: "bridal" },
  { id: "tiaras", name: "Tiaras", category: "bridal" }
];

// Utility functions
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};