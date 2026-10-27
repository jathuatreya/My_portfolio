"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Ultra-fluid 120fps hardware-accelerated spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] sm:h-[3.5px] w-full bg-black/[0.04] dark:bg-white/[0.06] pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-[#FF6700] relative shadow-[0_0_14px_rgba(255, 103, 0,0.8)]"
      >
        {/* Glowing Leading Head in Primary Color */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#FF6700,0_0_20px_#FF6700] animate-pulse" />
      </motion.div>
    </div>
  );
}
