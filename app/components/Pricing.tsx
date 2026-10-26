"use client";

import { CheckCircle2, Clock, DollarSign, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { pricingPlans } from "../data/portfolio-data";
import { ScrollReveal } from "./ScrollReveal";
import { MagicCard, MagicContainer } from "./MagicCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="w-[85%] xl:w-[80%] mx-auto relative z-10">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
            <DollarSign size={16} className="text-primary" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
              Transparent Pricing (USD)
            </span>
          </div>

          <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Predictable Investment, <span className="text-primary">Exceptional Results</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Fixed-scope development packages designed for professionals and growing businesses. Transparent pricing in US Dollars, clear delivery milestones, and clean source code ownership.
          </p>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <MagicContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.popular;
            const whatsappLink = `https://wa.me/94706601734?text=${encodeURIComponent(plan.whatsappMessage)}`;

            return (
              <ScrollReveal key={plan.id} delay={index * 0.12} className="h-full">
                <MagicCard
                  className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 transition-all duration-300 h-full backdrop-blur-sm ${
                    isPopular
                      ? "bg-[#FAFBFD] dark:bg-[#0E1526] border-2 border-[#0077ED] shadow-xl shadow-[#0077ED]/15"
                      : "bg-[#FAFBFD] dark:bg-[#111624] border border-black/[0.08] dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#0077ED]/40"
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0077ED] text-white text-[11px] font-mono font-black uppercase tracking-wider shadow-md shadow-[#0077ED]/30 flex items-center gap-1.5">
                      <Sparkles size={12} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Top Category & Delivery Estimate */}
                    <div className="flex items-center justify-between text-xs font-mono mb-4">
                      <span className="text-[#0077ED] font-semibold tracking-wider uppercase">
                        {plan.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-md">
                        <Clock size={12} />
                        {plan.deliveryTime}
                      </span>
                    </div>

                    {/* Plan Name & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[42px]">
                      {plan.tagline}
                    </p>

                    {/* Price in USD */}
                    <div className="pt-2 pb-6 border-y border-black/[0.06] dark:border-white/10 mb-6 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1D1D1F] dark:text-white tracking-tight">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        USD / Flat Fee
                      </span>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#1D1D1F]/50 dark:text-white/40 font-bold block mb-3">
                        What&apos;s Included:
                      </span>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-[#0077ED] shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                        isPopular
                          ? "bg-[#0077ED] hover:bg-[#0066CC] text-white shadow-[#0077ED]/25 hover:shadow-[#0077ED]/40 hover:-translate-y-0.5"
                          : "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:-translate-y-0.5"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] font-mono text-gray-400">
                      <ShieldCheck size={13} className="text-emerald-500" />
                      <span>100% Satisfaction & Milestone Guaranteed</span>
                    </div>
                  </div>
                </MagicCard>
              </ScrollReveal>
            );
          })}
        </MagicContainer>

        {/* Bottom Custom Scope Notice */}
        <ScrollReveal delay={0.35} className="mt-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0077ED]/10 via-primary/5 to-purple-500/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Zap size={22} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white">
                  Have a custom requirement, AI integration, or enterprise scope?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  Get a personalized architectural breakdown and fixed estimate within 24 hours.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20my%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white dark:bg-[#161f30] border border-primary/30 text-primary font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition-all shrink-0 cursor-pointer shadow-sm"
            >
              Request Custom Estimate
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
