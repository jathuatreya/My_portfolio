"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Section {
  id: string;
  label: string;
  shortLabel: string;
}

const SECTIONS: Section[] = [
  { id: "home", label: "Home", shortLabel: "Home" },
  { id: "about", label: "About Me", shortLabel: "About" },
  { id: "experience", label: "Experience", shortLabel: "Exp" },
  { id: "education", label: "Education", shortLabel: "Edu" },
  { id: "skills", label: "Skills & Capabilities", shortLabel: "Skills" },
  { id: "services", label: "Services", shortLabel: "Services" },
  { id: "projects", label: "Featured Projects", shortLabel: "Projects" },
  { id: "pricing", label: "Pricing Packages", shortLabel: "Pricing" },
  { id: "teaching", label: "Tech Mentorship", shortLabel: "Teaching" },
  { id: "testimonials", label: "Client Reviews", shortLabel: "Reviews" },
  { id: "contact", label: "Get In Touch", shortLabel: "Contact" },
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const goToPrevSection = () => {
    if (currentIndex > 0) {
      scrollToSection(SECTIONS[currentIndex - 1].id);
    }
  };

  const goToNextSection = () => {
    if (currentIndex < SECTIONS.length - 1) {
      scrollToSection(SECTIONS[currentIndex + 1].id);
    } else {
      // Loop back to top
      scrollToSection(SECTIONS[0].id);
    }
  };

  return (
    <nav
      aria-label="Section quick navigator"
      className="fixed right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
    >
      <div className="flex flex-col items-center bg-[#09101d]/90 dark:bg-[#070c16]/95 backdrop-blur-md border border-[#0077ED]/35 rounded-full py-2 px-1.5 shadow-2xl shadow-black/50 gap-1.5 transition-all">
        {/* Quick Prev Section Arrow */}
        <button
          type="button"
          onClick={goToPrevSection}
          disabled={currentIndex <= 0}
          title="Previous section"
          aria-label="Previous section"
          className="w-6 h-6 rounded-full flex items-center justify-center text-[#0077ED] hover:text-white hover:bg-[#0077ED]/30 disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-[#0077ED] transition-all cursor-pointer"
        >
          <ChevronUp size={14} strokeWidth={2.5} />
        </button>

        {/* Section Dots List */}
        <div className="flex flex-col items-center gap-1.5 py-1">
          {SECTIONS.map((section, idx) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                className="relative flex items-center justify-center"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Floating Tooltip to the Left */}
                <div
                  className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none ${
                    isHovered
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 translate-x-2 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="bg-[#09101d] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-[#0077ED]/50 flex items-center gap-2 whitespace-nowrap shadow-black/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0077ED]" />
                    <span>{section.label}</span>
                    <span className="text-[10px] font-mono text-[#0077ED]/80">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* The Dot / Active Capsule */}
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  aria-label={`Jump to ${section.label} section`}
                  className="group p-1 flex items-center justify-center cursor-pointer focus:outline-none"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-2.5 h-5 bg-[#0077ED] shadow-[0_0_12px_#0077ED]"
                        : "w-2 h-2 bg-white/25 hover:bg-[#0077ED]/80 hover:scale-125"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Next Section Arrow */}
        <button
          type="button"
          onClick={goToNextSection}
          title="Next section"
          aria-label="Next section"
          className="w-6 h-6 rounded-full flex items-center justify-center text-[#0077ED] hover:text-white hover:bg-[#0077ED]/30 transition-all cursor-pointer animate-pulse"
        >
          <ChevronDown size={14} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
}
