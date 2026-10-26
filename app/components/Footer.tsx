"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About Me", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Skills", href: "/#skills" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Teaching", href: "/#teaching" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-[#070A12] text-neutral-900 dark:text-white py-10 border-t border-black/[0.08] dark:border-white/5 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex flex-col items-center">
        {/* Horizontal Navigation Centered */}
        <div className="w-full flex justify-center pb-8 border-b border-black/[0.06] dark:border-white/5">
          <nav aria-label="Footer Navigation" className="w-full max-w-5xl">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3.5 text-center">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0077ED] dark:hover:text-[#0077ED] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="w-full pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
          <p>© 2026 Jathushan Varnakulasingam. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            Made with <Heart size={13} className="text-red-500 fill-red-500" /> in Sri Lanka
          </p>
          <p className="text-gray-400">
            Designed & Developed by <span className="text-[#0077ED] font-semibold">Jathushan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
