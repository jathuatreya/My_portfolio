// --------------------------------------
// 💰 PRICING PACKAGES & DATA
// --------------------------------------

export interface PricingFeatureItem {
  text: string;
  iconName?:
    | "monitor"
    | "database"
    | "phone"
    | "sparkles"
    | "layers"
    | "barcode"
    | "boxes"
    | "message"
    | "headphones"
    | "key"
    | "shield"
    | "store"
    | "globe"
    | "laptop";
}

export interface PricingPlan {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  priceUSD?: number;
  priceDisplay: string;
  priceUnit: string;
  priceSubtext: string;
  priceSubtextType?: "default" | "green";
  pricePrefix?: string;
  priceType?: string;
  popular?: boolean;
  badge?: string;
  badgeType?: "blue" | "green";
  primaryButtonText: string;
  primaryButtonStyle: "dark" | "white" | "blue" | "primary";
  deliveryTime?: string;
  category: string;
  features: string[];
  featureItems?: PricingFeatureItem[];
  ctaText?: string;
  whatsappMessage: string;
}

// 🌐 1. Web & Custom Software Packages (Default USD)
export const portfolioPricingPlans: PricingPlan[] = [
  {
    id: "web-portal",
    tier: "Go",
    name: "Web Portal & Business Site",
    tagline: "High-performance responsive web portal with product showcase, booking engine & live POS catalog sync.",
    priceUSD: 150,
    priceDisplay: "$150",
    priceUnit: "/ package",
    priceSubtext: "+ Free custom domain & cloud setup included",
    priceSubtextType: "default",
    pricePrefix: "Fixed Package",
    priceType: "Flat Fee",
    popular: false,
    primaryButtonText: "Choose Web Portal",
    primaryButtonStyle: "dark",
    deliveryTime: "3 – 5 Days",
    category: "Personal Brand & Web Showcase",
    featureItems: [
      { text: "Modern Next.js 16 & React responsive web application", iconName: "globe" },
      { text: "Online product catalog & live POS stock sync integration", iconName: "monitor" },
      { text: "Direct WhatsApp ordering & instant customer inquiries", iconName: "message" },
      { text: "100% SEO optimized, SSL secured & fast global cloud hosting", iconName: "shield" },
      { text: "Domain connection, email setup & walk-through guide", iconName: "sparkles" },
    ],
    features: [
      "Modern Next.js 16 & React responsive web application",
      "Online product catalog & live POS stock sync integration",
      "Direct WhatsApp ordering & instant customer inquiries",
      "100% SEO optimized, SSL secured & fast global cloud hosting",
      "Domain connection, email setup & walk-through guide",
    ],
    ctaText: "Choose Web Portal",
    whatsappMessage:
      "Hi Jathushan, I'm interested in the Web Portal & Business Site package ($150) with POS catalog sync. Let's discuss my project!",
  },
  {
    id: "custom-web-pos",
    tier: "Plus",
    badge: "MOST POPULAR",
    badgeType: "blue",
    name: "Custom Web App & Cloud POS",
    tagline: "Full-stack web application with role-based admin dashboard, cloud POS billing & real-time inventory.",
    priceUSD: 250,
    priceDisplay: "$250",
    priceUnit: "/ starting scope",
    priceSubtext: "+ 30-Day priority support & deployment",
    priceSubtextType: "default",
    pricePrefix: "Starting from",
    priceType: "Starting Scope",
    popular: true,
    primaryButtonText: "Build Web & POS System",
    primaryButtonStyle: "white",
    deliveryTime: "1 – 2 Weeks",
    category: "Full-Stack Web App & Cloud POS",
    featureItems: [
      { text: "Custom administrative dashboard & multi-user role access", iconName: "laptop" },
      { text: "Cloud-synced POS billing with thermal print & invoice generator", iconName: "barcode" },
      { text: "Multi-branch real-time inventory tracking & sales analytics", iconName: "boxes" },
      { text: "Payment gateway integration (Stripe, PayHere & card checkout)", iconName: "layers" },
      { text: "Automated daily cloud backups & database synchronization", iconName: "database" },
      { text: "Priority WhatsApp & AnyDesk remote support hotline", iconName: "headphones" },
    ],
    features: [
      "Custom administrative dashboard & multi-user role access",
      "Cloud-synced POS billing with thermal print & invoice generator",
      "Multi-branch real-time inventory tracking & sales analytics",
      "Payment gateway integration (Stripe, PayHere & card checkout)",
      "Automated daily cloud backups & database synchronization",
      "Priority WhatsApp & AnyDesk remote support hotline",
    ],
    ctaText: "Build Web & POS System",
    whatsappMessage:
      "Hi Jathushan, I want to build a Custom Web Application with Cloud POS & Inventory management ($250). Let's talk!",
  },
  {
    id: "enterprise-custom-software",
    tier: "Pro",
    badge: "0 MAINT. FOREVER",
    badgeType: "green",
    name: "Enterprise Software & AI Suite",
    tagline: "Bespoke enterprise cloud software, offline-first POS engine, AI business agents & 100% code ownership.",
    priceUSD: 500,
    priceDisplay: "$500",
    priceUnit: "/ starting scope",
    priceSubtext: "One-time payment • $0 maintenance forever",
    priceSubtextType: "green",
    pricePrefix: "Starting from",
    priceType: "Starting Scope",
    popular: false,
    primaryButtonText: "Choose Full Ownership",
    primaryButtonStyle: "primary",
    deliveryTime: "2 – 4 Weeks",
    category: "Enterprise Cloud, Offline POS & AI",
    featureItems: [
      { text: "100% full administrative access & complete source code ownership", iconName: "key" },
      { text: "Offline-first continuous billing with hybrid cloud database sync", iconName: "monitor" },
      { text: "Custom private AI assistants & automated business workflows", iconName: "sparkles" },
      { text: "Hardware integrations (Barcode scanners, weighing scales, printers)", iconName: "store" },
      { text: "Enterprise security, custom REST APIs & multi-branch architecture", iconName: "shield" },
      { text: "Comprehensive staff training & lifetime SLA deployment", iconName: "headphones" },
    ],
    features: [
      "100% full administrative access & complete source code ownership",
      "Offline-first continuous billing with hybrid cloud database sync",
      "Custom private AI assistants & automated business workflows",
      "Hardware integrations (Barcode scanners, weighing scales, printers)",
      "Enterprise security, custom REST APIs & multi-branch architecture",
      "Comprehensive staff training & lifetime SLA deployment",
    ],
    ctaText: "Choose Full Ownership",
    whatsappMessage:
      "Hi Jathushan, I have an Enterprise Software & Custom AI/POS project (starting from $500) and require full source code ownership. Let's schedule a discussion!",
  },
];

// 🏬 2. Retail POS Billing Packages (Exact LKR / Rs. Edition from reference)
export const posRetailPricingPlans: PricingPlan[] = [
  {
    id: "pos-go",
    tier: "Go",
    name: "Expanded access",
    tagline: "Single PC checkout billing for stationery, bookshops, and small grocery counters.",
    priceDisplay: "Rs. 1,000",
    priceUnit: "/ month",
    priceSubtext: "+ Rs. 40,000 standard setup fee",
    priceSubtextType: "default",
    popular: false,
    primaryButtonText: "Choose Small Business",
    primaryButtonStyle: "dark",
    deliveryTime: "Instant / 24 Hours",
    category: "Small Counter Retail",
    featureItems: [
      { text: "Single PC counter billing & 100% offline database", iconName: "monitor" },
      { text: "Automated daily cloud backups & 1-click restore", iconName: "database" },
      { text: "Remote phone & AnyDesk support hotline", iconName: "phone" },
      { text: "10-Day Free Trial & staff training included", iconName: "sparkles" },
    ],
    features: [
      "Single PC counter billing & 100% offline database",
      "Automated daily cloud backups & 1-click restore",
      "Remote phone & AnyDesk support hotline",
      "10-Day Free Trial & staff training included",
    ],
    ctaText: "Choose Small Business",
    whatsappMessage:
      "Hi Jathushan, I'm interested in the Go (Rs. 1,000/mo) retail POS billing plan. Let's discuss onboarding!",
  },
  {
    id: "pos-plus",
    tier: "Plus",
    badge: "MOST POPULAR",
    badgeType: "blue",
    name: "Your retail partner",
    tagline: "Tailored for growing supermarkets, pharmacies, cafes, and multi-counter retail stores.",
    priceDisplay: "Rs. 2,500",
    priceUnit: "/ month",
    priceSubtext: "+ Rs. 40,000 standard setup fee",
    priceSubtextType: "default",
    popular: true,
    primaryButtonText: "Choose Medium Business",
    primaryButtonStyle: "white",
    deliveryTime: "2 – 4 Days",
    category: "Multi-Counter Retail",
    featureItems: [
      { text: "Multi-counter LAN synchronization & register balancing", iconName: "layers" },
      { text: "Weighing scale, barcode scanner & thermal printer sync", iconName: "barcode" },
      { text: "Batch & expiry tracking with FIFO dispatch alerts", iconName: "boxes" },
      { text: "WhatsApp & SMS digital receipts integration", iconName: "message" },
      { text: "Priority AnyDesk & WhatsApp remote support hotline", iconName: "headphones" },
    ],
    features: [
      "Multi-counter LAN synchronization & register balancing",
      "Weighing scale, barcode scanner & thermal printer sync",
      "Batch & expiry tracking with FIFO dispatch alerts",
      "WhatsApp & SMS digital receipts integration",
      "Priority AnyDesk & WhatsApp remote support hotline",
    ],
    ctaText: "Choose Medium Business",
    whatsappMessage:
      "Hi Jathushan, I want to deploy the Plus (Rs. 2,500/mo) Retail Partner POS plan. Please share demo details!",
  },
  {
    id: "pos-pro",
    tier: "Pro",
    badge: "0 MAINT. FOREVER",
    badgeType: "green",
    name: "Dedicated Full Ownership",
    tagline: "100% full administrative owner access, dedicated software build & database under owner control.",
    priceDisplay: "Rs. 150,000",
    priceUnit: "(1.5 Lakhs)",
    priceSubtext: "One-time payment • Rs. 0 maintenance forever",
    priceSubtextType: "green",
    popular: false,
    primaryButtonText: "Choose Full Ownership",
    primaryButtonStyle: "primary",
    deliveryTime: "Custom Deployment",
    category: "Lifetime Ownership",
    featureItems: [
      { text: "100% full administrative access directly to owner", iconName: "key" },
      { text: "Local database hosted completely under owner control", iconName: "database" },
      { text: "Dedicated software build compiled for your shop", iconName: "shield" },
      { text: "100% offline-first continuous billing with zero lock-in", iconName: "monitor" },
      { text: "Comprehensive staff training & priority deployment", iconName: "store" },
    ],
    features: [
      "100% full administrative access directly to owner",
      "Local database hosted completely under owner control",
      "Dedicated software build compiled for your shop",
      "100% offline-first continuous billing with zero lock-in",
      "Comprehensive staff training & priority deployment",
    ],
    ctaText: "Choose Full Ownership",
    whatsappMessage:
      "Hi Jathushan, I want the Pro Dedicated Full Ownership plan (Rs. 150,000). Let's schedule deployment!",
  },
];

// Default export adheres to user request (existing web & software packages)
export const pricingPlans: PricingPlan[] = portfolioPricingPlans;
