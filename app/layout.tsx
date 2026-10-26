import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import GlobalToaster from "./components/GlobalToaster";
import EngagementToast from "./components/EngagementToast";
import FloatingActions from "./components/FloatingActions";
import { LanguageProvider } from "./context/LanguageContext";
import { profile, projects } from "./data/portfolio-data";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ✅ Metadata
export const metadata: Metadata = {
  title: {
    default: "Jathushan Varnakulasingam | Full-Stack Developer",
    template: `%s | ${profile.name}`,
  },
  description:
    "Jathushan Varnakulasingam is a Freelance Full-Stack Developer specializing in Next.js, React, Node.js, AI integrations, and smart automation. Delivering high-performance, scalable web solutions worldwide.",
  keywords: [
    "Full-Stack Developer Vavuniya",
    "Software Engineer Sri Lanka",
    "MERN Stack Developer Sri Lanka",
    "AI & IoT Innovator Vavuniya",
    "Next.js Developer Sri Lanka",
    "React Developer Vavuniya",

    "Machine Learning Engineer Sri Lanka",
    "Python Developer Vavuniya",
    "Java Developer Vavuniya",
    "Informatics Institute of Technology IIT Alumni",
    "University of Westminster Computer Science",
    "Automobile Engineering Technical College",
    "Northern Province Developer",
    "Jathushan Stark",
    "Jathushan Varnakulasingam",
    "Freelance Web Developer Sri Lanka",
    "Top Web Developers in Vavuniya",
    "AI Solution Architect Sri Lanka",
    "Robotics Explorer Sri Lanka",
    "Node.js Developer",
    "TypeScript Expert",
    "Web Application Development",
    "Mobile App Developer",
    "Cloud Computing",
    "Custom Web Development Sri Lanka",
    "E-commerce Solutions Vavuniya",
    "Business Automation Sri Lanka",
    "AI Chatbot Development Sri Lanka",
    "Mobile App Development Vavuniya",
    "SEO Optimization Services Sri Lanka",
    "Digital Transformation Vavuniya",
    "Tech Consultant Sri Lanka",
    "Software Development Company Vavuniya",

    "Best Web Developer in Vavuniya",
    "Freelance Software Engineer Sri Lanka",
    "Web Design Services Vavuniya",
    "CMS Development Sri Lanka",
    "Portfolio Website Builder Sri Lanka"
  ],
  authors: [{ name: profile.name, url: profile.portfolioURL }],
  creator: profile.name,
  publisher: profile.name,
  category: "Professional Services",
  classification: "Full-Stack Developer & AI Solutions",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: profile.portfolioURL,
    title: "Jathushan Varnakulasingam | Full-Stack Developer",
    description:
      "Freelance Full-Stack Developer specializing in Next.js, React, Node.js, AI integrations, and smart automation. Delivering high-performance digital products for clients worldwide.",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} - Freelance Full-Stack Developer & AI Solutions`,
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - Freelance Full-Stack Developer & AI Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jathushan Varnakulasingam | Full-Stack Developer",
    description:
      "Freelance Full-Stack Developer specializing in Next.js, React, Node.js, AI integrations, and smart automation.",
    images: ["/og-image.png"],
    creator: "@jathushanstark",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(profile.portfolioURL),
  alternates: { 
    canonical: "/",
    languages: {
      "en-LK": "/en",
      "ta-LK": "/ta",
      "si-LK": "/si"
    },
    types: {
      "text/markdown": "/llms.txt"
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  other: {
    "geo.region": "LK-41", // Northern Province
    "geo.placename": "Vavuniya",
    "geo.position": "8.7514;80.4971",
    "ICBM": "8.7514, 80.4971",
    "rating": "General",
    "revisit-after": "30 days",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

// ✅ RootLayout with full SEO
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="alternate" hrefLang="en" href={profile.portfolioURL} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <GlobalToaster />
          <EngagementToast />
          <FloatingActions />
          {children}
        </LanguageProvider>

        {/* Structured Data - LocalBusiness */}
        <Script type="application/ld+json" strategy="afterInteractive" id="json-ld-localbusiness">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "${profile.name}",
            "image": "${profile.portfolioURL}og-image.png",
            "@id": "${profile.portfolioURL}",
            "url": "${profile.portfolioURL}",
            "telephone": "${profile.contact.phone}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vavuniya Town",
              "addressLocality": "Vavuniya",
              "addressRegion": "Northern Province",
              "addressCountry": "LK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 8.7514,
              "longitude": 80.4971
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          }
          `}
        </Script>

        {/* Structured Data - Breadcrumbs */}
        <Script type="application/ld+json" strategy="afterInteractive" id="json-ld-breadcrumbs">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${profile.portfolioURL}"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "${profile.portfolioURL}#projects"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Experience",
                "item": "${profile.portfolioURL}#experience"
              }
            ]
          }
          `}
        </Script>

        {/* Structured Data - Person */}
        <Script type="application/ld+json" strategy="afterInteractive" id="json-ld-person">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${profile.name}",
            "url": "${profile.portfolioURL}",
            "image": "${profile.portfolioURL}og-image.png",
            "jobTitle": "Full-Stack Developer & AI Solutions Architect",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vavuniya",
              "addressRegion": "Northern Province",
              "addressCountry": "LK"
            },
            "sameAs": [
              "${profile.social.github}",
              "${profile.social.linkedin}",
              "${profile.social.twitter}",
              "${profile.social.instagram}"
            ]
          }
          `}
        </Script>

        {/* Structured Data - Projects */}
        <Script type="application/ld+json" strategy="afterInteractive" id="json-ld-projects">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              ${projects
              .map(
                (project) => `{
                  "@type": "SoftwareApplication",
                  "name": "${project.title}",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                  "description": "${project.description}",
                  "url": "${profile.portfolioURL}#projects",
                  "creator": {
                    "@type": "Person",
                    "name": "${profile.name}"
                  }
                }`
              )
              .join(",")}
            ]
          }
          `}
        </Script>

        {/* Web App Manifest */}
        {/* Web App Manifest - Generated by app/manifest.ts */}

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#0a0a0a" />
      </body>
    </html>
  );
}
