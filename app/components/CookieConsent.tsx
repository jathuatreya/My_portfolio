"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check, Sliders, Shield } from "lucide-react";

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if user already made a decision
    try {
      const consent = localStorage.getItem("portfolio_cookie_consent");
      if (!consent) {
        // Smooth delayed entrance on initial load
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        "portfolio_cookie_consent",
        JSON.stringify({
          necessary: true,
          analytics: true,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setIsOpen(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(
        "portfolio_cookie_consent",
        JSON.stringify({
          necessary: true,
          analytics: false,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setIsOpen(false);
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem(
        "portfolio_cookie_consent",
        JSON.stringify({
          necessary: true,
          analytics: analyticsEnabled,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 36, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 24, x: "-50%", scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 z-50 w-[94%] sm:w-[540px] md:w-[600px] max-w-[620px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <div className="relative rounded-3xl bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 p-5 sm:p-6 shadow-2xl shadow-black/15 dark:shadow-black/70 overflow-hidden">
            {/* Subtle Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6700] via-[#6366F1] to-[#EC4899]" />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF6700]/15 to-[#EC4899]/15 dark:from-[#FF6700]/25 dark:to-[#EC4899]/25 border border-[#FF6700]/20 flex items-center justify-center text-[#FF6700] dark:text-[#FF8533] shrink-0">
                  <Cookie size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3
                    id="cookie-title"
                    className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight leading-snug"
                  >
                    Cookie Preferences
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    We value your privacy
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleEssentialOnly}
                aria-label="Decline and close"
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0 -mr-1 -mt-1"
              >
                <X size={16} strokeWidth={2.2} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
              We use cookies to ensure optimal performance, remember your language & theme preferences, and analyze traffic to improve your portfolio browsing experience.
            </p>

            {/* Preferences Accordion */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2.5 pt-2 pb-4 border-t border-black/5 dark:border-white/10 overflow-hidden"
                >
                  {/* Essential Cookies (Always Active) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <Shield size={15} className="text-emerald-500 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                          Essential Cookies
                        </p>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                          Theme, language, and core session
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      Always Active
                    </span>
                  </div>

                  {/* Analytics Cookies (Toggleable) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <Sliders size={15} className="text-[#FF6700] shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                          Analytics & Insights
                        </p>
                        <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                          Anonymous aggregate site statistics
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={analyticsEnabled}
                      onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        analyticsEnabled
                          ? "bg-[#FF6700]"
                          : "bg-neutral-300 dark:bg-neutral-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                          analyticsEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
              {showPreferences ? (
                <>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#FF6700] hover:bg-[#E65C00] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#FF6700]/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Check size={14} strokeWidth={2.5} />
                    <span>Save Preferences</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="w-full sm:w-auto py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all duration-200 cursor-pointer"
                  >
                    Back
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#FF6700] hover:bg-[#E65C00] text-white text-xs font-semibold shadow-md shadow-[#FF6700]/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Check size={14} strokeWidth={2.5} />
                    <span>Accept All</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleEssentialOnly}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    Essential Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    title="Customize cookie settings"
                    className="w-full sm:w-auto py-2.5 px-2.5 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 text-xs font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Sliders size={13} strokeWidth={2} />
                    <span className="sm:hidden">Settings</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
