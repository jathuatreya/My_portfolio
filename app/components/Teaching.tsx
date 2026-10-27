"use client";

import React from "react";
import { GraduationCap, ArrowRight, CheckCircle2, MessageCircle, Sparkles, BookOpen } from "lucide-react";
import { teachingPrograms, teachingStats } from "../data/portfolio-data";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard, MagicContainer } from "./MagicCard";
import { getTechIcon } from "./tech-icons";
import { highlightTitle } from "../utils/highlight-text";

export default function Teaching() {
  const whatsappNumber = "94706601734";
  const [activeTeachingSlide, setActiveTeachingSlide] = React.useState(0);
  const teachingCarouselRef = React.useRef<HTMLDivElement>(null);

  const handleTeachingScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el) return;
    const cardWidth = el.scrollWidth / teachingPrograms.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    if (idx !== activeTeachingSlide && idx >= 0 && idx < teachingPrograms.length) {
      setActiveTeachingSlide(idx);
    }
  };

  const scrollTeachingTo = (idx: number) => {
    if (teachingCarouselRef.current) {
      const cards = teachingCarouselRef.current.querySelectorAll<HTMLElement>("[data-teaching-card]");
      cards[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveTeachingSlide(idx);
    }
  };

  return (
    <section id="teaching" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Anchor for mentorship */}
      <span id="mentorship" className="sr-only" aria-hidden="true">Mentorship</span>

      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
            <GraduationCap size={16} className="text-primary" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Teaching & Mentoring
            </span>
          </div>

          <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {highlightTitle("Empowering Students through Teaching & Mentoring", 3)}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Practical 1-on-1 and cohort mentorship guiding over 10+ students through programming languages, relational & NoSQL databases, modern full-stack web applications, and embedded robotics.
          </p>
        </ScrollReveal>

        {/* Quick Stats Row */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {teachingStats.map((stat, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#1D1D1F] border border-black/[0.05] dark:border-white/10 text-center shadow-xs hover:border-primary/30 transition-all"
              >
                <div className="text-2xl sm:text-4xl font-black text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1D1D1F] dark:text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-0.5">
                  {stat.highlight}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 10 Teaching Programs Carousel on Mobile / Grid on Desktop */}
        <div
          ref={teachingCarouselRef}
          onScroll={handleTeachingScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0"
        >
          {teachingPrograms.map((prog, index) => {
            const courseWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi Jathushan, I want to learn ${prog.title} in your 1-on-1 mentorship program. Please share the schedule and course details!`
            )}`;

            return (
              <div
                key={prog.id}
                data-teaching-card
                className="w-[82vw] sm:w-auto shrink-0 sm:shrink snap-center flex flex-col h-full"
              >
                <MagicCard
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#1D1D1F] border-2 border-primary/40 hover:border-primary shadow-md shadow-primary/10 hover:shadow-[0_0_28px_rgba(255,103,0,0.22)] transition-all duration-300 h-full backdrop-blur-sm"
                >
                  <div>
                    {/* Card Top: Number + Tech Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500">
                          {prog.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center shrink-0 border border-black/[0.04] dark:border-white/[0.04] group-hover:scale-110 transition-transform">
                          {getTechIcon(prog.iconName)}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                        {prog.badge}
                      </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors line-clamp-1 mb-1">
                      {prog.title}
                    </h3>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                      {prog.category}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 min-h-[48px]">
                      {prog.description}
                    </p>

                    {/* Key Topics List */}
                    <div className="space-y-1.5 pt-3 border-t border-black/[0.05] dark:border-white/5 mb-5">
                      {prog.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={12} className="text-primary shrink-0" />
                          <span className="truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Inquire Link */}
                    <div className="pt-2">
                    <a
                      href={courseWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Inquire about ${prog.title} course`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover dark:hover:text-primary-light group/link cursor-pointer transition-colors"
                    >
                      <span>Inquire Course</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </MagicCard>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Indicators & Course Counter */}
        <div className="flex sm:hidden items-center justify-between gap-3 px-1 mt-4 mb-2">
          <div className="text-xs font-mono font-bold text-primary">
            Course {activeTeachingSlide + 1} of {teachingPrograms.length}
          </div>
          <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar py-1">
            {teachingPrograms.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTeachingTo(i)}
                aria-label={`Go to course ${i + 1}`}
                className="p-2 min-h-[44px] min-w-[20px] flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTeachingSlide === i
                      ? "w-4 bg-primary"
                      : "w-1.5 bg-gray-300 dark:bg-white/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Mentorship Inquiry Banner */}
        <ScrollReveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-emerald-500/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0 shadow-sm">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="text-base sm:text-xl font-bold text-[#1D1D1F] dark:text-white">
                  Want to learn programming or build robotics projects from scratch?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  1-on-1 practical sessions, live code walkthroughs, and personal mentoring tailored to your learning pace.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi Jathushan, I'm interested in joining your programming & tech mentorship classes. Let's discuss!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 shrink-0 cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Inquire for Mentorship</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
