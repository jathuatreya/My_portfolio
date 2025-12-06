import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GlobalToaster from "./components/GlobalToaster";
import EngagementToast from "./components/EngagementToast";
import Preloader from "./components/Preloader";
import { LanguageProvider } from "./context/LanguageContext";
import { profile } from "./data/portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Full-Stack Developer & AI Enthusiast`,
    template: `%s | ${profile.name} Portfolio`,
  },

  description:
    `${profile.name} is a Full-Stack Developer specializing in MERN, Next.js, Machine Learning, IoT systems, automation and modern web engineering. ` +
    `${profile.shortBio} — Explore projects, skills, services and achievements.`,

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
    "Best Portfolio Website",
    "Cloud Computing",
    "Automation",
    "Jathushan Varnakulasingam",
    "Jathushan Varnakulasingam Developer",
    "Jathushan Full-Stack Developer",
    "Jathushan Software Engineer",
    "Best Developer in Sri Lanka",
    "Top Full-Stack Developer Sri Lanka",
    "Best Web Developer Sri Lanka",
    "Software Engineer Sri Lanka",
    "Full-Stack Developer Sri Lanka",
    "Sri Lanka Web Developer",
    "Next.js Developer Sri Lanka",
    "React Developer Sri Lanka",
    "MERN Developer Sri Lanka",
    "AI Developer Sri Lanka",
    "Machine Learning Engineer Sri Lanka",
    "IoT Developer Sri Lanka",
    "Vavuniya Developer",
    "Best Developer in Vavuniya",
    "Top Developer Vavuniya",
    "Full-Stack Developer Vavuniya",
    "Web Developer Vavuniya",
    "Software Engineer Vavuniya",
    "Next.js Developer Vavuniya",
    "React Developer Vavuniya",
    "Portfolio Developer Sri Lanka",
    "Freelance Developer Sri Lanka",
    "Freelance Developer Vavuniya",
    "Sri Lanka Programmer",
    "Tech Talent Sri Lanka",
  ],

  authors: [{ name: profile.name, url: profile.portfolioURL }],
  creator: profile.name,
  publisher: profile.name,

  category: "Portfolio",
  classification: "Professional Web Developer Portfolio",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.portfolioURL,
    title: `${profile.name} | Full-Stack Developer, ML & IoT Enthusiast`,
    description:
      `Portfolio of ${profile.name}, a Full-Stack Developer skilled in modern web development, ` +
      `AI, ML, IoT, automation and API engineering. Explore projects, services and achievements.`,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.aboutImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} Portfolio Preview`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-Stack Developer & AI Innovator`,
    description:
      `Explore the portfolio of ${profile.name}, focusing on web development, AI, ML, IoT and modern web systems.`,
    images: [profile.aboutImage],
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
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  themeColor: "#0a0a0a",

  // 📌 Google SEO important additions
  other: {
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
    "rating": "General",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Preloader />
          <GlobalToaster />
          <EngagementToast />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
