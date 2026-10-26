"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollController() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollY(currentScrollY);
      setIsVisible(currentScrollY > 150);

      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, Math.round((currentScrollY / totalHeight) * 100))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center bg-white/85 dark:bg-[#0c111d]/85 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full p-1 sm:p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40">
        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-[#0077ED] hover:text-white transition-all cursor-pointer group"
        >
          <ArrowUp
            size={15}
            strokeWidth={2.4}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </button>

        {/* Small Scroll Progress Percentage Indicator */}
        <div className="py-0.5 sm:py-1 px-1 flex flex-col items-center select-none pointer-events-none">
          <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#0077ED] leading-none">
            {scrollProgress}%
          </span>
          <div className="w-3 sm:w-4 h-[2px] bg-black/10 dark:bg-white/10 rounded-full mt-0.5 sm:mt-1 overflow-hidden">
            <div
              className="h-full bg-[#0077ED] transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Scroll To Bottom Button */}
        <button
          type="button"
          onClick={scrollToBottom}
          title="Scroll to bottom"
          aria-label="Scroll to bottom"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-[#0077ED] hover:text-white transition-all cursor-pointer group"
        >
          <ArrowDown
            size={15}
            strokeWidth={2.4}
            className="group-hover:translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
