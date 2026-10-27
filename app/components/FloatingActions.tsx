"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function FloatingActions() {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hoverTop, setHoverTop] = useState(false);
  const [hoverBottom, setHoverBottom] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Scroll listener to hide Scroll to Top in hero section and Scroll to Bottom at page bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide in hero section (top 350px)
      setIsPastHero(scrollY > 350);

      // Check if user is near the bottom of the page (within 200px)
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollY + windowHeight >= fullHeight - 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically show greeting tooltip on WhatsApp after 4 seconds, auto-hide after 12 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowWhatsAppTooltip(true);
      }
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowWhatsAppTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [hasInteracted]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const defaultMessage =
    "Hi Jathushan, I saw your portfolio and would like to discuss a project / work with you!";
  const whatsappUrl = `https://wa.me/94706601734?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div
      aria-label="Floating quick navigation and contact controls"
      className="fixed bottom-6 right-3.5 sm:bottom-8 sm:right-5 z-40 flex flex-col items-center gap-2 sm:gap-2.5"
    >
      {/* 1. SCROLL TO TOP SQUIRCLE BUTTON (Hidden in Hero Section, Compact Size) */}
      {isPastHero && (
        <div
          className="relative flex items-center transition-all duration-300 animate-in fade-in zoom-in-75"
          onMouseEnter={() => setHoverTop(true)}
          onMouseLeave={() => setHoverTop(false)}
        >
          {/* Tooltip */}
          <div
            className={`hidden sm:block absolute right-full mr-2.5 top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none ${
              hoverTop
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-2 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-white dark:bg-[#09101d] text-neutral-900 dark:text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg border border-black/10 dark:border-primary/40 flex items-center gap-1.5 whitespace-nowrap">
              <span>Scroll to Top</span>
              <span className="text-primary">↑</span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Scroll to top"
            className="group relative w-8 h-8 sm:w-9 sm:h-9 before:absolute before:-inset-2 before:content-[''] rounded-xl sm:rounded-[14px] bg-transparent border border-black/20 dark:border-primary/75 hover:border-primary hover:bg-primary/15 dark:hover:bg-primary/25 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-xs"
          >
            <ArrowUp
              size={15}
              strokeWidth={2.4}
              className="text-primary dark:text-primary-light group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      )}

      {/* 2. SCROLL TO BOTTOM SQUIRCLE BUTTON (Hidden at page bottom, Compact Size) */}
      {!isAtBottom && (
        <div
          className="relative flex items-center transition-all duration-300 animate-in fade-in zoom-in-75"
          onMouseEnter={() => setHoverBottom(true)}
          onMouseLeave={() => setHoverBottom(false)}
        >
          {/* Tooltip */}
          <div
            className={`hidden sm:block absolute right-full mr-2.5 top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none ${
              hoverBottom
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-2 scale-95 pointer-events-none"
            }`}
          >
            <div className="bg-white dark:bg-[#09101d] text-neutral-900 dark:text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg border border-black/10 dark:border-primary/40 flex items-center gap-1.5 whitespace-nowrap">
              <span>Scroll to Bottom</span>
              <span className="text-primary">↓</span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToBottom}
            title="Scroll to bottom"
            aria-label="Scroll to bottom"
            className="group relative w-8 h-8 sm:w-9 sm:h-9 before:absolute before:-inset-2 before:content-[''] rounded-xl sm:rounded-[14px] bg-transparent border border-black/20 dark:border-primary/75 hover:border-primary hover:bg-primary/15 dark:hover:bg-primary/25 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-xs"
          >
            <ArrowDown
              size={15}
              strokeWidth={2.4}
              className="text-primary dark:text-primary-light group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      )}

      {/* 3. WHATSAPP FLOATING BUTTON (Reduced Size) */}
      <div
        className="relative flex items-center group"
        onMouseEnter={() => setShowWhatsAppTooltip(true)}
        onMouseLeave={() => setShowWhatsAppTooltip(false)}
      >
        {/* WhatsApp Tooltip */}
        <div
          className={`hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none ${
            showWhatsAppTooltip
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-2 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-white dark:bg-[#121824] text-neutral-900 dark:text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-xl border border-black/10 dark:border-white/10 flex flex-col whitespace-nowrap shadow-black/10">
            <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
              <span>Chat with Jathushan</span>
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            </div>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
              Typically replies in minutes • WhatsApp
            </span>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 bg-white dark:bg-[#121824] border-t border-r border-black/10 dark:border-white/10 rotate-45" />
          </div>
        </div>

        {/* WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setHasInteracted(true)}
          aria-label="Chat with Jathushan on WhatsApp"
          className="relative w-10 h-10 sm:w-11 sm:h-11 before:absolute before:-inset-2 before:content-[''] rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/45 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          {/* Radar ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

          {/* Online Green Indicator Dot */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-300 border-2 border-white dark:border-[#0a0a0a] rounded-full z-10" />

          {/* WhatsApp Icon */}
          <svg
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current drop-shadow-sm group-hover:rotate-6 transition-transform duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.894.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 6.577c-1.898 0-3.673-.518-5.205-1.42l-.373-.222-3.867 1.014 1.032-3.77-.243-.387A9.882 9.882 0 012.05 12.04c0-5.467 4.453-9.92 9.929-9.92 2.65 0 5.14 1.032 7.012 2.907a9.855 9.855 0 012.905 7.014c0 5.469-4.452 9.923-9.843 9.923zm0-18c-6.657 0-12.05 5.393-12.05 12.05 0 2.127.555 4.198 1.609 6.014L0 24l6.115-1.604a11.996 11.996 0 005.844 1.503c6.658 0 12.05-5.392 12.05-12.05 0-3.218-1.253-6.243-3.528-8.52A12.003 12.003 0 0012.053 2.96z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
