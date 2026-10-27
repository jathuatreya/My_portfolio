"use client";

import React, { useState, useRef } from "react";
import { Quote, MessageSquare, CheckCircle2 } from "lucide-react";
import { testimonials } from "../data/portfolio-data";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard } from "./MagicCard";
import { highlightTitle } from "../utils/highlight-text";

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Helper function to extract 1 or 2 letter initials
  const getInitials = (name: string) => {
    const parts = name.replace(/^(Dr\.|S\.)\s*/i, "").trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonials.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    if (idx !== activeSlide && idx >= 0 && idx < testimonials.length) {
      setActiveSlide(idx);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll<HTMLElement>("[data-testimonial-card]");
      cards[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveSlide(idx);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        {/* Background Ambient Glow Elements */}
        <div className="absolute -top-24 -left-48 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-32 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-300/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">{t.testimonials.tag}</span>
          </div>
          <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {highlightTitle(t.testimonials.title)}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </ScrollReveal>

        {/* Mobile Carousel & Desktop Grid */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0 relative z-10"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-testimonial-card
              className="w-[85vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center flex flex-col h-full"
            >
              <MagicCard className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#FAFBFD] dark:bg-[#111624] border-2 border-primary/40 hover:border-primary p-5 sm:p-7 shadow-md shadow-primary/10 hover:shadow-[0_0_30px_rgba(255,103,0,0.22)] transition-all duration-300 h-full backdrop-blur-sm">
                <div>
                  {/* Header: Avatar, Name, Role, and Quote Icon */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      {/* Initials Avatar Monogram */}
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-orange-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                        {getInitials(testimonial.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white truncate">
                            {testimonial.name}
                          </p>
                          <span title="Verified Client / Partner">
                            <CheckCircle2 size={14} className="text-primary shrink-0" />
                          </span>
                        </div>
                        <p className="text-xs text-primary font-medium line-clamp-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <Quote className="text-primary dark:text-primary-light opacity-85 group-hover:opacity-100 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(255, 103, 0,0.35)] transition-all shrink-0" size={30} />
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Footer: 5 Stars (Primary Color) + Verified Badge */}
                <div className="mt-6 pt-4 border-t border-black/[0.05] dark:border-white/5 flex items-center justify-between">
                  <div className="flex text-primary dark:text-primary-light gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current drop-shadow-[0_1px_4px_rgba(255, 103, 0,0.3)]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                    Verified Review
                  </span>
                </div>
              </MagicCard>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="p-2 min-h-[44px] min-w-[28px] flex items-center justify-center cursor-pointer"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "w-7 bg-primary"
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
