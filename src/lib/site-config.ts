/**
 * CANABISA — Central Site Configuration
 * Update this file to change business details across the entire website.
 * No need to edit individual components.
 */

export const siteConfig = {
  // ─── Brand ────────────────────────────────────────────────────────────────
  name: "CANABISA",
  tagline: "Cannabis · Drinks · Social Lounge",
  concept: "ร้านกัญชาบรรยากาศสบายๆ เหมือนแวะมานั่งเล่นบ้านเพื่อน",

  // ─── Location ─────────────────────────────────────────────────────────────
  location: {
    area: "Patong",
    city: "Phuket",
    country: "Thailand",
    display: "Patong, Phuket, Thailand",
    eyebrow: "PATONG · PHUKET · THAILAND",
    // Real business information
    address: "Coffee Shop Cannabisa Cafe Weed & Bar, Patong, Phuket, Thailand",
    // Real phone number
    phone: "+66 63 416 3552",
    // TODO: Replace with real opening hours when available
    hours: {
      weekdays: "TBC",
      weekends: "TBC",
      note: "Open late",
    },
  },

  // ─── Google Maps ──────────────────────────────────────────────────────────
  maps: {
    // Provided by owner
    directionsUrl: "https://maps.app.goo.gl/hRfSRSQaZKXxwQpKA",
    // TODO: Replace with embeddable iframe src when exact address confirmed
    embedUrl: "",
  },

  // ─── Social ───────────────────────────────────────────────────────────────
  social: {
    // TODO: Replace with real handles/URLs
    instagram: "https://instagram.com/cannabisacafe",
    facebook: "https://facebook.com/cannabisacafe",
    instagramHandle: "@cannabisacafe",
    facebookHandle: "cannabisacafe",
  },

  // ─── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    defaultLang: "en",
    siteUrl: "https://canabisa.com",
    title: "Coffee Shop Cannabisa Cafe Weed & Bar — Cannabis & Social Lounge in Patong, Phuket",
    description:
      "Coffee Shop Cannabisa Cafe Weed & Bar - A relaxed cannabis shop and social lounge in Patong, Phuket. Good-quality products, fair prices, friendly recommendations, drinks and a welcoming late-night atmosphere.",
    ogImage: "/images/og-image.jpg",
    keywords: [
      "Coffee Shop Cannabisa",
      "Cannabisa Cafe",
      "cannabis shop Patong",
      "cannabis lounge Phuket",
      "social lounge Patong",
      "cannabis Thailand",
      "Patong nightlife",
      "Phuket cannabis",
      "cannabis drinks Phuket",
      "weed shop Patong",
      "Cannabisa Patong",
    ],
  },

  // ─── Images ───────────────────────────────────────────────────────────────
  // Filenames from the /public/images/ directory.
  // Roles are suggestions — swap any filename to update globally.
  images: {
    hero: "/images/1268bf3e-99a6-4681-9537-a7713aeb301e.jpg",
    interior: "/images/14f56f78-9592-40c7-8606-6f9d2c4fba10.jpg",
    products: "/images/19570354-6215-44bb-ba5f-2b6788ed4da1.jpg",
    lounge: "/images/20c45f15-6e2b-4581-8a8d-c4b3f26b227c.jpg",
    owner: "/images/285245e0-d05d-4fb9-b9f9-6f79e020ce7a.jpg",
    night: "/images/7173d1b3-893f-4597-a0a3-702e7096f378.jpg",
    drinks: "/images/856355c4-3b6a-4b0d-91c6-ebcf70995592.jpg",
    party: "/images/953bbd44-dd86-453e-aa3f-6d5f166dfa6f.jpg",
    detail: "/images/a3a67c34-f709-4edc-a584-e67480ab783b.jpg",
    lifestyle: "/images/d93fc33b-dcc3-4e19-bf38-d54a2e51d5f3.jpg",
    gallery11: "/images/ebe2fcb4-23f8-427b-b349-cd9b42b9b270.jpg",
  },

  // ─── Gallery ──────────────────────────────────────────────────────────────
  gallery: [
    {
      src: "/images/1268bf3e-99a6-4681-9537-a7713aeb301e.jpg",
      alt: "Canabisa exterior — Patong, Phuket",
      span: "tall",
    },
    {
      src: "/images/14f56f78-9592-40c7-8606-6f9d2c4fba10.jpg",
      alt: "Canabisa interior lounge",
      span: "wide",
    },
    {
      src: "/images/19570354-6215-44bb-ba5f-2b6788ed4da1.jpg",
      alt: "Product selection",
      span: "normal",
    },
    {
      src: "/images/20c45f15-6e2b-4581-8a8d-c4b3f26b227c.jpg",
      alt: "Lounge atmosphere",
      span: "tall",
    },
    {
      src: "/images/7173d1b3-893f-4597-a0a3-702e7096f378.jpg",
      alt: "Late-night vibes",
      span: "wide",
    },
    {
      src: "/images/856355c4-3b6a-4b0d-91c6-ebcf70995592.jpg",
      alt: "Drinks and atmosphere",
      span: "normal",
    },
    {
      src: "/images/953bbd44-dd86-453e-aa3f-6d5f166dfa6f.jpg",
      alt: "Party and social gathering",
      span: "wide",
    },
    {
      src: "/images/a3a67c34-f709-4edc-a584-e67480ab783b.jpg",
      alt: "Detail shot",
      span: "normal",
    },
    {
      src: "/images/d93fc33b-dcc3-4e19-bf38-d54a2e51d5f3.jpg",
      alt: "Lifestyle — Patong night",
      span: "tall",
    },
    {
      src: "/images/285245e0-d05d-4fb9-b9f9-6f79e020ce7a.jpg",
      alt: "Friendly owner",
      span: "normal",
    },
    {
      src: "/images/ebe2fcb4-23f8-427b-b349-cd9b42b9b270.jpg",
      alt: "Canabisa social lounge",
      span: "wide",
    },
  ],

  // ─── Stack Cards ──────────────────────────────────────────────────────────
  stackCards: [
    {
      number: "01",
      image: "/images/19570354-6215-44bb-ba5f-2b6788ed4da1.jpg",
      labelKey: "stackCards.goodProducts",
    },
    {
      number: "02",
      image: "/images/856355c4-3b6a-4b0d-91c6-ebcf70995592.jpg",
      labelKey: "stackCards.fairPrices",
    },
    {
      number: "03",
      image: "/images/285245e0-d05d-4fb9-b9f9-6f79e020ce7a.jpg",
      labelKey: "stackCards.friendlyPeople",
    },
    {
      number: "04",
      image: "/images/7173d1b3-893f-4597-a0a3-702e7096f378.jpg",
      labelKey: "stackCards.lateNight",
    },
    {
      number: "05",
      image: "/images/953bbd44-dd86-453e-aa3f-6d5f166dfa6f.jpg",
      labelKey: "stackCards.privateGatherings",
    },
  ],

  // ─── Product Categories ───────────────────────────────────────────────────
  // Do not invent product details — use translation keys for labels only
  productCategories: [
    { key: "flower", icon: "🌿" },
    { key: "accessories", icon: "✦" },
    { key: "selected", icon: "◈" },
    { key: "drinks", icon: "◉" },
  ],

  // ─── Legal / Compliance ───────────────────────────────────────────────────
  responsible: {
    notice:
      "Products and activities are subject to applicable local laws and regulations. Please consume responsibly and follow all applicable rules.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
