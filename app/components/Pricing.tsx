"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Headphones,
  Laptop,
  Store,
  Database,
  PhoneCall,
  Layers,
  Barcode,
  Boxes,
  MessageSquare,
  KeyRound,
  ShieldCheck,
  Globe,
  Monitor,
  CheckCircle2,
  Lock,
  BadgeCheck,
} from "lucide-react";
import {
  portfolioPricingPlans,
  posRetailPricingPlans,
  PricingPlan,
} from "../data/pricing-data";
import { ScrollReveal } from "./ScrollReveal";

function WhatsAppIcon({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.84L4.44 19.66L5.27 16.63L5.07 16.31C4.26 15.01 3.81 13.48 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.05 7.42C8.88 7.42 8.6 7.49 8.37 7.74C8.13 8 7.45 8.64 7.45 9.94C7.45 11.24 8.4 12.49 8.53 12.67C8.67 12.84 10.37 15.48 13 16.61C13.62 16.88 14.11 17.04 14.49 17.16C15.11 17.36 15.68 17.33 16.13 17.26C16.63 17.19 17.66 16.64 17.88 16.03C18.1 15.42 18.1 14.89 18.03 14.79C17.96 14.68 17.79 14.62 17.53 14.49C17.28 14.36 16.03 13.75 15.8 13.66C15.57 13.58 15.4 13.54 15.23 13.79C15.06 14.05 14.58 14.62 14.43 14.79C14.28 14.96 14.13 14.98 13.88 14.86C13.62 14.73 12.8 14.46 11.83 13.59C11.07 12.92 10.56 12.08 10.41 11.83C10.26 11.58 10.39 11.44 10.52 11.31C10.63 11.2 10.77 11.02 10.91 10.86C11.05 10.7 11.1 10.57 11.18 10.41C11.27 10.24 11.22 10.09 11.16 9.97C11.1 9.84 10.61 8.64 10.41 8.15C10.21 7.67 10.01 7.73 9.86 7.73C9.72 7.72 9.55 7.72 9.38 7.72C9.21 7.72 8.93 7.78 8.7 8.03" />
    </svg>
  );
}

function renderFeatureIcon(iconName?: string, isPopular = false) {
  const iconColor = isPopular ? "text-slate-300" : "text-slate-400";
  const size = 16;

  switch (iconName) {
    case "monitor":
      return <Monitor size={size} className={iconColor} />;
    case "laptop":
      return <Laptop size={size} className={iconColor} />;
    case "database":
      return <Database size={size} className={iconColor} />;
    case "phone":
      return <PhoneCall size={size} className={iconColor} />;
    case "sparkles":
      return <Sparkles size={size} className={iconColor} />;
    case "layers":
      return <Layers size={size} className={iconColor} />;
    case "barcode":
      return <Barcode size={size} className={iconColor} />;
    case "boxes":
      return <Boxes size={size} className={iconColor} />;
    case "message":
      return <MessageSquare size={size} className={iconColor} />;
    case "headphones":
      return <Headphones size={size} className={iconColor} />;
    case "key":
      return <KeyRound size={size} className={iconColor} />;
    case "shield":
      return <ShieldCheck size={size} className={iconColor} />;
    case "store":
      return <Store size={size} className={iconColor} />;
    case "globe":
      return <Globe size={size} className={iconColor} />;
    default:
      return <CheckCircle2 size={size} className={iconColor} />;
  }
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"usd" | "retail">("usd");
  const plans = activeTab === "usd" ? portfolioPricingPlans : posRetailPricingPlans;

  const getWhatsAppLink = (message: string) =>
    `https://wa.me/94706601734?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="pricing"
      className="py-24 sm:py-28 bg-[#090d16] text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-[#1d75f2]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[86%] xl:w-[82%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d75f2]/15 border border-[#1d75f2]/30 mb-4 shadow-sm">
            <Sparkles size={14} className="text-[#38bdf8] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#38bdf8] uppercase">
              Ownership With Zero Maintenance Forever
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            Predictable Investment,{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#1d75f2] to-[#818cf8] bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Fixed-scope development packages designed for professionals and growing businesses.
            Full administrative access, transparent pricing, and 100% clean source code ownership.
          </p>

          {/* Currency / Category Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#121824] border border-white/10 shadow-inner">
            <button
              onClick={() => setActiveTab("usd")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "usd"
                  ? "bg-[#1d75f2] text-white shadow-md shadow-[#1d75f2]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Web & Custom Software ($)
            </button>
            <button
              onClick={() => setActiveTab("retail")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "retail"
                  ? "bg-[#1d75f2] text-white shadow-md shadow-[#1d75f2]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Retail & POS Billing (Rs.)
            </button>
          </div>

          {/* Quick Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-7 text-xs sm:text-sm font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck size={16} className="text-[#38bdf8]" />
              Milestone Payments
            </span>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Lock size={15} className="text-[#38bdf8]" />
              Full Source Code Ownership
            </span>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones size={15} className="text-[#38bdf8]" />
              Direct Developer Contact
            </span>
          </div>
        </ScrollReveal>

        {/* 3-Column Modern Pricing Cards Grid Matching Reference Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch mb-16 max-w-7xl mx-auto">
          {plans.map((plan: PricingPlan, index: number) => {
            const isPopular = plan.popular;
            const whatsappLink = getWhatsAppLink(plan.whatsappMessage);

            return (
              <ScrollReveal
                key={plan.id}
                delay={index * 0.1}
                className="h-full flex flex-col"
              >
                <div
                  className={`relative flex flex-col justify-between rounded-[28px] p-6 sm:p-8 transition-all duration-300 h-full ${
                    isPopular
                      ? "bg-[#0f1624] border-2 border-[#1d75f2] shadow-[0_0_36px_rgba(29,117,242,0.24)] lg:-translate-y-2 z-10"
                      : "bg-[#0e131d] border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl"
                  }`}
                >
                  {/* Top Header Row: Tier & Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4 min-h-[28px]">
                      <span
                        className={`text-sm font-semibold tracking-wide ${
                          isPopular ? "text-[#38bdf8] font-bold" : "text-slate-400"
                        }`}
                      >
                        {plan.tier}
                      </span>

                      {plan.badge && (
                        <span
                          className={`text-[10px] sm:text-[11px] font-bold tracking-wider px-3 py-0.5 rounded-full uppercase border ${
                            plan.badgeType === "green"
                              ? "bg-[#062417] text-[#34d399] border-[#10b981]/30"
                              : "bg-[#12284c] text-[#60a5fa] border-[#1d75f2]/40"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight leading-snug mb-2">
                      {plan.name}
                    </h3>

                    {/* Tagline / Subtitle */}
                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-6 min-h-[42px]">
                      {plan.tagline}
                    </p>

                    {/* Action CTA Buttons (Directly below description) */}
                    <div className="space-y-2.5 mb-7">
                      {/* Primary Button */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer ${
                          plan.primaryButtonStyle === "white"
                            ? "bg-white hover:bg-neutral-100 text-black font-bold shadow-lg shadow-white/10 active:scale-[0.98]"
                            : plan.primaryButtonStyle === "blue"
                            ? "bg-[#1d75f2] hover:bg-[#1862ce] text-white shadow-lg shadow-[#1d75f2]/25 active:scale-[0.98]"
                            : "bg-[#1e2533] hover:bg-[#283244] text-white border border-white/10 active:scale-[0.98]"
                        }`}
                      >
                        {plan.primaryButtonStyle === "blue" && (
                          <Sparkles size={15} className="shrink-0" />
                        )}
                        <span>{plan.primaryButtonText}</span>
                      </a>

                      {/* Secondary WhatsApp Button */}
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-5 rounded-full bg-[#0d1c18] hover:bg-[#112620] text-[#25d366] border border-[#25d366]/30 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25d366]" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </div>

                    {/* Price Block (Directly below buttons) */}
                    <div className="mb-7 pb-6 border-b border-white/[0.08]">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight">
                          {plan.priceDisplay}
                        </span>
                        <span className="text-xs sm:text-sm text-slate-400 font-normal">
                          {plan.priceUnit}
                        </span>
                      </div>
                      <div
                        className={`text-xs mt-1.5 ${
                          plan.priceSubtextType === "green"
                            ? "text-[#34d399] font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        {plan.priceSubtext}
                      </div>
                    </div>

                    {/* Features List with line icons */}
                    <div className="space-y-3.5">
                      {plan.featureItems?.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-[13px] text-slate-300 leading-snug"
                        >
                          <div className="shrink-0 mt-0.5">
                            {renderFeatureIcon(item.iconName, isPopular)}
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom VIP Custom Scope Banner */}
        <ScrollReveal delay={0.3}>
          <div className="relative rounded-[28px] bg-gradient-to-r from-[#1d75f2]/15 via-indigo-600/10 to-purple-600/10 border border-[#1d75f2]/30 p-6 sm:p-10 shadow-2xl overflow-hidden group">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-80 h-80 bg-[#1d75f2]/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#1d75f2] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#1d75f2]/35">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Need a bespoke system, custom AI model, or enterprise integration?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    Have unique retail POS workflows, custom database schemas, or cloud automation needs? Get a detailed architectural roadmap and fixed quotation within 24 hours.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I%20have%20a%20custom%20software/AI%20project.%20Can%20we%20schedule%20a%20discussion%20and%20quote?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 sm:py-4 rounded-full bg-[#1d75f2] hover:bg-[#1862ce] text-white font-bold text-xs sm:text-sm tracking-wide uppercase shadow-lg shadow-[#1d75f2]/30 transition-all shrink-0 cursor-pointer hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
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
