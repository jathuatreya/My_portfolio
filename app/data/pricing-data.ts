// --------------------------------------
// 💰 PRICING PACKAGES (IN USD $)
// --------------------------------------

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  priceDisplay: string;
  pricePrefix?: string;
  priceType?: string;
  popular?: boolean;
  deliveryTime: string;
  category: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    tagline: "Sleek, high-converting digital identity for engineers, doctors, executives, and creators.",
    priceUSD: 150,
    priceDisplay: "$150",
    pricePrefix: "Fixed Package",
    priceType: "Flat Fee",
    popular: false,
    deliveryTime: "3 – 5 Days",
    category: "Personal Brand & Web",
    features: [
      "Custom Next.js & Tailwind CSS Architecture",
      "100% Responsive on Mobile, Tablet & Desktop",
      "Seamless Dark Mode & Light Mode Toggle",
      "Interactive Projects & Blog Popup Reader",
      "Direct WhatsApp & Contact Form Integration",
      "Technical SEO Optimization & Google Indexing",
      "Free Custom Domain Setup & Vercel Deployment",
      "Full Clean Source Code Delivery",
    ],
    ctaText: "discuss about this package",
    whatsappMessage:
      "Hi Jathushan, I'm interested in the Portfolio Website package ($150). Let's discuss my requirements!",
  },
  {
    id: "pos-application",
    name: "POS Application",
    tagline: "High-speed Point of Sale & inventory system built for retail, restaurants, and grocery stores.",
    priceUSD: 200,
    priceDisplay: "$200",
    pricePrefix: "Starting from",
    priceType: "Starting Scope",
    popular: true,
    deliveryTime: "1 – 2 Weeks",
    category: "Retail & Business Automation",
    features: [
      "Lightning-Fast Barcode Scanning & Checkout",
      "Real-Time Inventory & Low-Stock Alerts",
      "Thermal Receipt & PDF Invoice / Quotation Printing",
      "Sales Analytics, Revenue Reports & Daily Summaries",
      "Customer Accounts & Credit Balance Ledger",
      "Multi-User Roles (Cashier, Supervisor, Admin)",
      "Offline-Resilient Operation with Cloud Backup",
      "Staff Training & 30 Days Priority Technical Support",
    ],
    ctaText: "discuss about this pos",
    whatsappMessage:
      "Hi Jathushan, I want to implement the POS Application package (starting from $200) for my business. Let's talk!",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    tagline: "Bespoke full-stack web platforms, automated business portals, and intelligent workflow systems.",
    priceUSD: 450,
    priceDisplay: "$450",
    pricePrefix: "Starting from",
    priceType: "Starting Scope",
    popular: false,
    deliveryTime: "2 – 4 Weeks",
    category: "Full-Stack Enterprise & AI",
    features: [
      "Bespoke Architecture Tailored to Your Specific Business",
      "Scalable Tech Stack (Next.js, Node.js, Python, PostgreSQL/MongoDB)",
      "Secure RESTful APIs & Cloud Microservices",
      "Role-Based Access Control (RBAC) & Enterprise Security",
      "Payment Gateway & Third-Party API Integrations",
      "AI Automations, RAG or Smart Data Pipelines (Optional)",
      "Complete Staging, Quality Assurance & Production Launch",
      "Full Documentation & 90 Days Free Maintenance",
    ],
    ctaText: "discuss about this package",
    whatsappMessage:
      "Hi Jathushan, I have a Custom Software Development project (starting from $450). I'd love to schedule a discussion!",
  },
];
