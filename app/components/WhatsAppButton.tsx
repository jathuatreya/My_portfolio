"use client";

import { useState, useEffect } from "react";
import { contactInfo } from "../data/portfolio-data";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Automatically show greeting tooltip after 4 seconds to invite conversation, then auto-hide after 8 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [hasInteracted]);

  const defaultMessage =
    "Hi Jathushan, I saw your portfolio and would like to discuss a project / work with you!";
  const whatsappUrl = `https://wa.me/94706601734?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Speech Balloon / Tooltip (Hidden on very narrow mobile to avoid edge clipping) */}
      <div
        className={`hidden sm:block absolute right-full mr-3.5 bottom-1/2 translate-y-1/2 transition-all duration-300 pointer-events-none ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white dark:bg-[#121824] text-neutral-900 dark:text-white text-xs font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-black/10 dark:border-white/10 flex flex-col whitespace-nowrap shadow-black/10">
          <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
            <span>Chat with Jathushan</span>
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </div>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
            Typically replies in minutes • WhatsApp
          </span>
          {/* Triangle arrow pointer */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#121824] border-t border-r border-black/10 dark:border-white/10 rotate-45" />
        </div>
      </div>

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        aria-label="Chat with Jathushan on WhatsApp"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />

        {/* Online Green Indicator Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-300 border-2 border-white dark:border-[#0a0a0a] rounded-full z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current drop-shadow-sm group-hover:rotate-6 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.894.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 6.577c-1.898 0-3.673-.518-5.205-1.42l-.373-.222-3.867 1.014 1.032-3.77-.243-.387A9.882 9.882 0 012.05 12.04c0-5.467 4.453-9.92 9.929-9.92 2.65 0 5.14 1.032 7.012 2.907a9.855 9.855 0 012.905 7.014c0 5.469-4.452 9.923-9.843 9.923zm0-18c-6.657 0-12.05 5.393-12.05 12.05 0 2.127.555 4.198 1.609 6.014L0 24l6.115-1.604a11.996 11.996 0 005.844 1.503c6.658 0 12.05-5.392 12.05-12.05 0-3.218-1.253-6.243-3.528-8.52A12.003 12.003 0 0012.053 2.96z" />
        </svg>
      </a>
    </div>
  );
}
