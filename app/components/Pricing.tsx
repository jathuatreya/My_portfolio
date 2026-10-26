"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Laptop,
  Store,
  Code2,
  BadgeCheck,
  Headphones,
  Lock,
} from "lucide-react";
import { pricingPlans } from "../data/portfolio-data";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard, MagicContainer } from "./MagicCard";

export default function Pricing() {
  const planIcons = [
    <Laptop key="portfolio" size={22} className="text-[#0077ED]" />,
    <Store key="pos" size={22} className="text-[#0077ED]" />,
    <Code2 key="custom" size={22} className="text-[#0077ED]" />,
  ];

  return (
    <section id="pricing" className="py-24 sm:py-28 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-[#0077ED]/10 dark:bg-[#0077ED]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-[92%] sm:w-[88%] lg:w-[84%] xl:w-[82%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0077ED]/10 dark:bg-[#0077ED]/15 border border-[#0077ED]/25 mb-4 shadow-sm">
            <Sparkles size={14} className="text-[#0077ED] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.15em] text-[#0077ED] uppercase">
              Transparent Pricing (USD)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12]">
            Predictable Investment,{" "}
            <span className="bg-gradient-to-r from-[#0077ED] via-[#38bdf8] to-[#6366F1] bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Fixed-scope development packages designed for professionals and growing businesses. Transparent pricing in US Dollars, clear delivery milestones, and 100% clean source code ownership.
          </p>

          {/* Quick Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck size={16} className="text-[#0077ED]" />
              Milestone Payments
            </span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Lock size={15} className="text-[#0077ED]" />
              Full Source Code Ownership
            </span>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones size={15} className="text-[#0077ED]" />
              Direct Developer Contact
            </span>
          </div>
        </ScrollReveal>

        {/* 3-Column Modern Pricing Cards Grid */}
        <MagicContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch mb-16">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.popular;
            const whatsappLink = `https://wa.me/94706601734?text=${encodeURIComponent(plan.whatsappMessage)}`;

            return (
              <ScrollReveal key={plan.id} delay={index * 0.12} className="h-full relative pt-4">
                {/* Popular Floating Capsule Banner */}
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 px-4 py-1 rounded-full bg-gradient-to-r from-[#0077ED] to-blue-600 text-white text-[11px] font-mono font-black uppercase tracking-wider shadow-lg shadow-[#0077ED]/35 flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={12} fill="currentColor" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <MagicCard
                  className={`group relative flex flex-col justify-between rounded-[32px] p-6 sm:p-8 transition-all duration-300 h-full ${
                    isPopular
                      ? "bg-gradient-to-b from-white via-white to-[#0077ED]/[0.03] dark:from-[#0E1526] dark:via-[#0E1526] dark:to-[#0077ED]/[0.08] border-2 border-[#0077ED] shadow-2xl shadow-[#0077ED]/15 lg:-translate-y-2"
                      : "bg-white dark:bg-[#0c121e] border border-black/10 dark:border-white/10 hover:border-[#0077ED]/45 dark:hover:border-[#0077ED]/45 shadow-lg shadow-black/5 dark:shadow-black/40 hover:shadow-2xl hover:shadow-[#0077ED]/10"
                  }`}
                >
                  <div>
                    {/* Header: Tier Icon + Category + Delivery Time */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0077ED]/10 dark:bg-[#0077ED]/15 border border-[#0077ED]/20 flex items-center justify-center shrink-0 shadow-xs">
                        {planIcons[index] || <Zap size={22} className="text-[#0077ED]" />}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#0077ED]">
                          {plan.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-black/[0.04] dark:bg-white/[0.06] px-2.5 py-1 rounded-full border border-black/5 dark:border-white/5">
                          <Clock size={11} className="text-[#0077ED]" />
                          <span>{plan.deliveryTime}</span>
                        </span>
                      </div>
                    </div>

                    {/* Plan Name & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[44px]">
                      {plan.tagline}
                    </p>

                    {/* Price Block */}
                    <div className="pt-4 pb-6 border-y border-black/[0.06] dark:border-white/10 mb-7">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0077ED]">
                          {plan.pricePrefix || "Package Investment"}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2.5 flex-wrap">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1D1D1F] dark:text-white tracking-tight">
                          ${plan.priceUSD}
                        </span>
                        <div className="flex flex-col text-left">
                          <span className="text-xs font-mono font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                            USD
                          </span>
                          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                            {plan.priceType || "Flat Fee"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3.5 mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold block mb-3">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-snug"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#0077ED]/15 text-[#0077ED] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 size={13} strokeWidth={2.5} />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-4 border-t border-black/[0.04] dark:border-white/5">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer shadow-md ${
                        isPopular
                          ? "bg-[#0077ED] hover:bg-[#0062C4] text-white shadow-[#0077ED]/30 hover:shadow-xl hover:shadow-[#0077ED]/45 hover:-translate-y-0.5 active:scale-98"
                          : "bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 shadow-black/10 hover:shadow-lg hover:-translate-y-0.5 active:scale-98"
                      }`}
                    >
                      <span className="font-bold">{plan.ctaText}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center justify-center gap-1.5 mt-3.5 text-[11px] font-mono text-gray-500 dark:text-gray-400">
                      <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                      <span>Milestone Guarantee & Secure Delivery</span>
                    </div>
                  </div>
                </MagicCard>
              </ScrollReveal>
            );
          })}
        </MagicContainer>

        {/* Bottom VIP Custom Scope & AI Architecture Banner */}
        <ScrollReveal delay={0.35}>
          <div className="relative rounded-[32px] bg-gradient-to-r from-[#0077ED]/10 via-[#6366F1]/10 to-purple-500/10 dark:from-[#0077ED]/15 dark:via-[#6366F1]/15 dark:to-purple-500/15 border border-[#0077ED]/25 p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden group">
            {/* Ambient Background Blur */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-80 h-80 bg-[#0077ED]/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#0077ED] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#0077ED]/35">
                  <Zap size={26} />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
                    Need a bespoke system, custom AI model, or enterprise integration?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-2xl leading-relaxed">
                    Have unique workflows, custom database schemas, or cloud automation needs? Get a detailed architectural roadmap and fixed quotation within 24 hours.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I%20have%20a%20custom%20software/AI%20project.%20Can%20we%20schedule%20a%20discussion%20and%20quote?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 sm:py-4 rounded-2xl bg-[#0077ED] hover:bg-[#0062C4] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-[#0077ED]/25 hover:shadow-xl hover:shadow-[#0077ED]/40 transition-all shrink-0 cursor-pointer hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                <span>Request Custom Estimate</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
