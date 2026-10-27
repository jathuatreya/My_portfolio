"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Briefcase } from "lucide-react";
import { services } from "../data/portfolio-data";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard } from "./MagicCard";
import { highlightTitle } from "../utils/highlight-text";

export default function Services() {
  const { t } = useLanguage();
  const servicesList = services;
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el) return;
    const cardWidth = el.scrollWidth / servicesList.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    if (idx !== activeSlide && idx >= 0 && idx < servicesList.length) {
      setActiveSlide(idx);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll<HTMLElement>("[data-service-card]");
      cards[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveSlide(idx);
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Glowing Background Elements */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl opacity-35 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-25 animate-pulse-slower pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
            <Briefcase size={18} className="text-primary" />
            <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.services.tag}</span>
          </div>
          <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            {highlightTitle(t.services.title)}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-normal mt-4 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </ScrollReveal>

        {/* Mobile Carousel / Desktop Grid */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0"
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              data-service-card
              className="w-[85vw] sm:w-auto shrink-0 sm:shrink snap-center flex flex-col h-full"
            >
              <MagicCard className="flex flex-col gap-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#121212] p-6 shadow-md transition-all duration-300 hover:shadow-xl h-full">
                <service.icon className="text-[#0077ED]" size={40} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#1D1D1F] dark:text-white text-lg font-bold leading-tight">
                    {t.services.items[service.id as keyof typeof t.services.items]?.title || service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                    {t.services.items[service.id as keyof typeof t.services.items]?.desc || service.description}
                  </p>
                </div>
              </MagicCard>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex sm:hidden items-center justify-center gap-1 mt-6">
          {servicesList.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to service ${i + 1}`}
              className="p-2 min-h-[44px] min-w-[28px] flex items-center justify-center cursor-pointer"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "w-7 bg-[#0077ED]"
                    : "w-2 bg-gray-300 dark:bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
