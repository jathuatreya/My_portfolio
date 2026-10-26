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

  return (
    <section id="teaching" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Anchor for mentorship */}
      <span id="mentorship" className="sr-only" aria-hidden="true">Mentorship</span>

      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
            <GraduationCap size={16} className="text-primary" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Tech Mentorship & Tutoring
            </span>
          </div>

          <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {highlightTitle("Teaching 10+ Students in Core Engineering & Tech", 2)}
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
                className="p-4 sm:p-5 rounded-2xl bg-[#F5F5F7]/80 dark:bg-[#111624] border border-black/[0.05] dark:border-white/10 text-center shadow-xs hover:border-[#0077ED]/30 transition-all"
              >
                <div className="text-2xl sm:text-4xl font-black text-[#0077ED] tracking-tight">
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

        {/* 10 Teaching Programs Grid */}
        <MagicContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 items-stretch">
          {teachingPrograms.map((prog, index) => {
            const courseWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi Jathushan, I want to learn ${prog.title} in your 1-on-1 mentorship program. Please share the schedule and course details!`
            )}`;

            return (
              <ScrollReveal key={prog.id} delay={index * 0.05} className="h-full">
                <MagicCard
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white dark:bg-[#111624] border border-black/[0.08] dark:border-white/10 hover:border-[#0077ED]/40 dark:hover:border-[#0077ED]/40 shadow-sm hover:shadow-xl transition-all duration-300 h-full backdrop-blur-sm"
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
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#0077ED]/10 text-[#0077ED] border border-[#0077ED]/20 whitespace-nowrap">
                        {prog.badge}
                      </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors line-clamp-1 mb-1">
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
                          <CheckCircle2 size={12} className="text-[#0077ED] shrink-0" />
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077ED] hover:text-[#0066CC] dark:hover:text-[#38BDF8] group/link cursor-pointer transition-colors"
                    >
                      <span>Inquire Course</span>
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </MagicCard>
              </ScrollReveal>
            );
          })}
        </MagicContainer>

        {/* Bottom Mentorship Inquiry Banner */}
        <ScrollReveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#0077ED]/10 via-primary/5 to-emerald-500/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
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
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0077ED] hover:bg-[#0066CC] text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md shadow-[#0077ED]/25 hover:shadow-[#0077ED]/40 hover:-translate-y-0.5 shrink-0 cursor-pointer"
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
