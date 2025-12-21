import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import GlobalToaster from "./components/GlobalToaster";
import EngagementToast from "./components/EngagementToast";
import Preloader from "./components/Preloader";
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
    default: `${profile.name} | Full-Stack Developer & AI Enthusiast`,
    template: `%s | ${profile.name} Portfolio`,
  },
  description: `${profile.name} is a full-stack developer specializing in web development, AI, machine learning, IoT, and modern web systems. View projects and skills.`,
  keywords: [
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js Portfolio",
    "React Developer",
    "Software Engineer Sri Lanka",
    "Machine Learning Engineer",
    "AI Engineer",
    "IoT Developer",
    "Web Developer Portfolio",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Developer Vavuniya",
  "Web Application Developer",
  "Software Engineer Sri Lanka",
  "Software Engineer Vavuniya",
  "AI Engineer",
  "Machine Learning Engineer",
  "Computer Vision Developer",
  "IoT Developer",
  "Python Developer",
  "Java Developer",
  "Developer Portfolio",
  "Web Developer Portfolio",
  "Full-Stack Developer Portfolio",
  "MERN Stack Portfolio",
  "Next.js Developer Portfolio",
  "React Developer Portfolio",
  "TypeScript Developer Portfolio",
  "Open Source Contributor",
  "Tech Enthusiast",
  "Software Developer",
  "Jathushan Stark",
  "Jathushan Portfolio",
  "Jathushan Web Developer",
  "Jathushan Full-Stack Developer",
  "Jathushan AI Engineer",
  "Jathushan Machine Learning Engineer",
  "Jathushan IoT Developer",
  "Jathushan Python Developer",
  "Jathushan Java Developer",
  "Jathushan Developer Portfolio",
  "Jathushan Web Developer Portfolio",
  "Jathushan Full-Stack Developer Portfolio",
  "Jathushan MERN Stack Portfolio",
  "Jathushan Next.js Developer Portfolio,",
  "Jathushan React Developer Portfolio",
  "Jathushan TypeScript Developer Portfolio",
  ",Open Source Contributor",
  "Jathushan Tech Enthusiast",
  "Jathushan Software Developer",
  "Jathushan Portfolio",
  "Jathushan Web Developer Portfolio",


  ],
  authors: [{ name: profile.name, url: profile.portfolioURL }],
  creator: profile.name,
  publisher: profile.name,
  category: "Portfolio",
  classification: "Professional Web Developer Portfolio",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: profile.portfolioURL,
    title: `${profile.name} | Full-Stack Developer & AI Innovator`,
    description: `Explore the portfolio of ${profile.name}, focusing on web development, AI, ML, IoT and modern web systems.`,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/googlesearch.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | Full-Stack Developer & AI Innovator`,
    description: `Explore the portfolio of ${profile.name}, focusing on web development, AI, ML, IoT and modern web systems.`,
    images: ["/googlesearch.jpg"],
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
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
    "rating": "General",
    "revisit-after": "7 days",
    "format-detection": "telephone=no",
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
    <html lang="en">
      <head>


        {/* Alternate language */}
        <link rel="alternate" hrefLang="en" href={profile.portfolioURL} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Preloader />
          <GlobalToaster />
          <EngagementToast />
          {children}
        </LanguageProvider>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q27H9EQD0D"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q27H9EQD0D');
          `}
        </Script>

        {/* Structured Data - Person */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "${profile.name}",
            "url": "${profile.portfolioURL}",
            "image": "${profile.portfolioURL}/googlesearch.jpg",
            "sameAs": [
              "https://github.com/jathushan",
              "https://www.linkedin.com/in/jathushan"
            ],
            "jobTitle": "Full-Stack Developer & AI Enthusiast",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-employed"
            }
          }
          `}
        </Script>

        {/* Structured Data - Projects */}
        <Script type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              ${projects
              .map(
                (project) => `{
                  "@type": "CreativeWork",
                  "name": "${project.title}",
                  "description": "${project.description}",
                  "url": "${profile.portfolioURL}/projects",
                  "image": "${project.image}",
                  "keywords": "${project.techStack.join(", ")}",
                  "creator": {
                    "@type": "Person",
                    "name": "${profile.name}",
                    "url": "${profile.portfolioURL}"
                  }
                }`
              )
              .join(",")}
            ]
          }
          `}
        </Script>

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#0a0a0a" />
      </body>
    </html>
  );
}
