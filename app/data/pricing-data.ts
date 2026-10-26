// --------------------------------------
// 💰 PRICING PACKAGES (IN USD $)
// --------------------------------------

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  priceDisplay: string;
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
    priceUSD: 199,
    priceDisplay: "$199",
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
    ctaText: "Order Portfolio Website",
    whatsappMessage:
      "Hi Jathushan, I'm interested in the Portfolio Website package ($199). Let's discuss my requirements!",
  },
  {
    id: "pos-application",
    name: "POS Application",
    tagline: "High-speed Point of Sale & inventory system built for retail, restaurants, and grocery stores.",
    priceUSD: 499,
    priceDisplay: "$499",
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
    ctaText: "Get POS Application",
    whatsappMessage:
      "Hi Jathushan, I want to implement the POS Application package ($499) for my business. Let's talk!",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    tagline: "Bespoke full-stack web platforms, automated business portals, and intelligent workflow systems.",
    priceUSD: 899,
    priceDisplay: "Starting at $899",
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
    ctaText: "Request Custom Software",
    whatsappMessage:
      "Hi Jathushan, I have a Custom Software Development project ($899+). I'd love to schedule a discussion!",
  },
];
