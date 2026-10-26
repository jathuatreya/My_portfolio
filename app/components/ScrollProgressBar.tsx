"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Ultra-fluid 120fps hardware-accelerated spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const p = Math.min(100, Math.max(0, Math.round(latest * 100)));
      setPercent(p);
      setIsVisible(p > 0);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* 1. Ultra-sleek Glowing Top Progress Loader Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] h-[3px] sm:h-[3.5px] w-full bg-black/[0.04] dark:bg-white/[0.06] pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="h-full w-full bg-gradient-to-r from-[#0077ED] via-[#6366F1] to-[#EC4899] relative shadow-[0_0_12px_rgba(0,119,237,0.6)]"
        >
          {/* Glowing Leading Head / Laser Sparkle */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#EC4899,0_0_20px_#0077ED] animate-pulse" />
        </motion.div>
      </div>

      {/* 2. Floating Percentage Pill Badge hanging from the top edge */}
      <div
        className={`fixed top-0 right-4 sm:right-8 lg:right-12 z-[100] pointer-events-none transition-all duration-300 transform ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        aria-label={`Page scroll progress: ${percent}%`}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-b-xl bg-white/95 dark:bg-[#0c121e]/95 backdrop-blur-md border-x border-b border-black/10 dark:border-white/15 shadow-lg shadow-black/10 dark:shadow-black/40 text-neutral-800 dark:text-neutral-100 font-mono text-[11px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0077ED] animate-pulse" />
          <span className="tabular-nums">{percent}%</span>
          {percent === 100 && (
            <span className="text-emerald-500 text-[10px] ml-0.5">✓</span>
          )}
        </div>
      </div>
    </>
  );
}
