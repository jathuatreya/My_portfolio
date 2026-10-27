"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio-data";
import { useLanguage, Language } from "../context/LanguageContext";
import { toast } from "../utils/toast";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, language, setLanguage } = useLanguage();

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  // ScrollSpy & sticky border detection
  useEffect(() => {
    const handleScroll = () => {
      const isHome = window.location.pathname === "/";
      const scrollThreshold = isHome ? 80 : 20;
      setIsScrolled(window.scrollY > scrollThreshold);

      // If currently on blog pages
      if (window.location.pathname.startsWith("/blogs")) {
        setActiveSection("blogs");
        return;
      }

      // If currently on projects page
      if (window.location.pathname.startsWith("/projects")) {
        setActiveSection("projects");
        return;
      }

      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "skills",
        "services",
        "projects",
        "pricing",
        "teaching",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          return;
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (window.location.hash === "#home") {
      window.scrollTo(0, 0);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "ta", name: "தமிழ்" },
    { code: "si", name: "සිංහල" },
  ];

  // Navigation items matching Jathushan's portfolio sections in exact page order
  const desktopNavItems: { id: string; label: string; href: string; external?: boolean }[] = [
    { id: "home", label: t.nav.home || "Home", href: "/" },
    { id: "about", label: t.nav.about === "About Me" ? "About" : (t.nav.about || "About"), href: "/#about" },
    { id: "experience", label: t.nav.experience || "Experience", href: "/#experience" },
    { id: "education", label: t.nav.education || "Education", href: "/#education" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "services", label: t.nav.services || "Services", href: "/#services" },
    { id: "testimonials", label: t.nav.testimonials || "Testimonials", href: "/#testimonials" },
    { id: "projects", label: t.nav.projects || "Projects", href: "/projects" },
    { id: "blogs", label: t.nav.blogs === "Blogs" ? "Blog" : (t.nav.blogs || "Blog"), href: "/blogs" },
  ];

  // Mobile navigation drawer links
  const mobileNavItems = desktopNavItems;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { id: string; href: string; external?: boolean }
  ) => {
    if (item.external) return;

    // Home item: Always scroll directly to true top (top: 0) with zero white space
    if (item.id === "home") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        if (window.history.pushState) {
          window.history.pushState(null, "", "/");
        }
      }
      return;
    }

    if (item.href.includes("#")) {
      const targetId = item.id;
      const element = document.getElementById(targetId);

      if (element && window.location.pathname === "/") {
        e.preventDefault();
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.08] shadow-xs"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto h-16 sm:h-20 flex items-center justify-between">
          {/* 1. Left: Brand Logo (e.g. Jathushan.) */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("home");
              }
            }}
            className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition-opacity hover:opacity-90 shrink-0"
          >
            <span>{profile.name}</span>
          </Link>

          {/* 2. Center: Navigation Links with Soft Pill Highlight */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {desktopNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-2 xl:px-3 py-1.5 text-[14px] xl:text-[15px] font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white font-semibold"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* 3. Right: Circular Theme Toggle + Language + Let's Talk CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Circular Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              {isDark ? (
                <Sun size={17} strokeWidth={2.2} className="text-amber-400" />
              ) : (
                <Moon size={17} strokeWidth={2.2} className="text-neutral-700" />
              )}
            </button>

            {/* Circular Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                aria-label="Change language"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
              >
                <Globe size={17} strokeWidth={2} />
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 z-20 overflow-hidden py-1.5 bg-white dark:bg-[#1a1a1a] backdrop-blur-md">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${
                          language === lang.code
                            ? "bg-[#FF6700]/10 text-[#FF6700]"
                            : "text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6700]" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Let's Talk Pill Button (Hidden on small mobile where hamburger drawer provides it) */}
            <a
              href="#contact"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("contact");
                }
              }}
              className="hidden sm:inline-flex rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-5 sm:px-6 py-2 sm:py-2.5 text-[14px] sm:text-[15px] font-semibold transition-all shadow-xs cursor-pointer items-center justify-center shrink-0"
            >
              Let's Talk
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 rounded-3xl bg-white dark:bg-[#141414] border border-black/5 dark:border-white/10 shadow-2xl z-50 p-5 lg:hidden max-h-[82vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              {mobileNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-full text-[15px] sm:text-[16px] font-medium transition-colors ${
                      isActive
                        ? "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10 flex flex-col gap-2.5">
              <a
                href="/#contact"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection("contact");
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="w-full py-2.5 rounded-full text-center text-sm font-bold bg-[#FF6700] text-white hover:bg-[#E65C00] transition-colors shadow-sm"
              >
                Let&apos;s Talk
              </a>
              <a
                href={profile.resumeURL}
                download="Jathushan_SE_Dev.pdf"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  toast.success("Resume downloaded successfully!");
                }}
                className="w-full py-2.5 rounded-full text-center text-sm font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                {t.nav.download_cv || "Download CV"}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
