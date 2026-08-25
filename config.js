/*
 * ===========================================
 * EASY CUSTOMIZATION - EDIT THIS FILE ONLY
 * ===========================================
 * 
 * This is the ONLY file you need to edit to customize your storefront.
 * Change the theme, business name, logo, services, and about page content below.
 * 
 * THEME OPTIONS: "cyber" | "luxe" | "artisan"
 * - cyber: Dark theme with blue accents (tech/modern)
 * - luxe: Light theme with gold accents (elegant/premium)
 * - artisan: Light theme with orange accents (warm/craft)
 * 
 * NICHE OPTIONS: "services" | "food"
 * - services: For booking-based businesses (salon, spa, services)
 * - food: For ordering-based businesses (restaurant, cafe, food delivery)
 */

/* ---------- THEME SELECTION ---------- */
const THEME = "cyber"; // Change this to "cyber", "luxe", or "artisan"

/* ---------- NICHE SELECTION ---------- */
const NICHE = "services"; // Change this to "services" or "food"

/* ---------- BUSINESS INFO ---------- */
const BUSINESS = {
  name: "example",                    // Your business name
  tagline: "example", // Tagline/slogan
  logo: "",                              // Logo image URL (leave empty for text initials)
  status: "Find us",                      // Badge text (shown next to map icon)
  mapLink: "https://maps.google.com/", // Google Maps link (click on map icon)
  pageTitle: NICHE === "food"
    ? "Studio Sora"  // Food niche page title
    : "Studio Sora", // Services niche page title for SEO
  description: NICHE === "food"
    ? "Browse the menu, see the total, then send your order to us on WhatsApp." // Food niche description
    : "Pick your services, see the total, then send the booking to us on WhatsApp.", // Services niche description
  shareImage: "",                        // Social media share image URL
};

/* ---------- WHATSAPP SETTINGS ---------- */
const WHATSAPP = {
  phone: "60102697127",                  // Your WhatsApp number (with country code, no +)
  greeting: NICHE === "food"
    ? "Hi {business_name}! I'd like to order:" // Food niche greeting
    : "Hi {business_name}! I'd like to book:", // Services niche greeting ({business_name} will be replaced automatically with business name)
};

/* ---------- BUTTON LABELS ---------- */
// Labels change automatically based on niche selection
const LABELS = NICHE === "food" 
  ? {
      cta: "Order on WhatsApp",          // Main call-to-action button text (food niche)
      emptyHint: "Tap a service to start your ordering", // Hint when no services selected (food niche)
      reviewsCta: "Ask us on WhatsApp",  // Call-to-action on reviews page
    }
  : {
      cta: "Book on WhatsApp",          // Main call-to-action button text (services niche)
      emptyHint: "Tap a service to start your booking.", // Hint when no services selected (services niche)
      reviewsCta: "Ask us on WhatsApp",  // Call-to-action on reviews page
    };

/* ---------- CURRENCY SETTINGS ---------- */
const CURRENCY = {
  symbol: "RM",                          // Currency symbol (RM, $, €, etc.)
  locale: "en-US",                       // Locale for formatting (en-MY, en-US, etc.)
  decimals: 2,                           // Decimal places for prices
};

/* ---------- FEES & MINIMUM ORDER ---------- */
const FEES = [];                          // Additional fees: [{ label: "Service Fee", amount: 5 }]
const MINIMUM_ORDER = 0;                  // Minimum order amount (0 for no minimum)

/* ---------- SERVICES / CATEGORIES ---------- */
const CATEGORIES = [
  {
    id: "category-1",
    label: "example",
    items: [
      { id: "item-1-1", name: "example", desc: "example", price: 65 },
      { id: "item-1-2", name: "example", desc: "example", price: 130 },
      { id: "item-1-3", name: "example", desc: "example", price: 380 },
    ],
  },
  {
    id: "category-2",
    label: "example",
    items: [
      { id: "item-2-1", name: "example", desc: "example", price: 65 },
      { id: "item-2-2", name: "example", desc: "example", price: 130 },
      { id: "item-2-3", name: "example", desc: "example", price: 380 },
    ],
  },
  {
    id: "category-3",
    label: "example",
    items: [
      { id: "item-3-1", name: "example", desc: "example", price: 65 },
      { id: "item-3-2", name: "example", desc: "example", price: 130 },
      { id: "item-3-3", name: "example", desc: "example", price: 380 },
    ],
  },
];

/* ---------- SOCIAL MEDIA LINKS ---------- */
const SOCIALS = [
  { label: "Instagram", url: "https://instagram.com/" },
  { label: "TikTok", url: "https://tiktok.com/" },
];

/* ===========================================
 * DO NOT EDIT BELOW THIS LINE
 * =========================================== */

// Build the configuration object used by the app
const CONFIG = {
  theme: THEME,
  niche: NICHE,
  business: BUSINESS,
  whatsapp: WHATSAPP,
  labels: LABELS,
  currency: CURRENCY,
  fees: FEES,
  minimumOrder: MINIMUM_ORDER,
  categories: CATEGORIES,
  socials: SOCIALS,
};
