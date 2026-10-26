const fs = require('fs');
const path = require('path');

// 1. Update Footer.tsx
const footerPath = path.join(__dirname, '..', 'app', 'components', 'Footer.tsx');
const newFooterContent = `"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-[#070A12] text-neutral-900 dark:text-white py-8 border-t border-black/[0.08] dark:border-white/5 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400 text-center md:text-left">
          <p>© 2026 Jathushan Varnakulasingam. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-gray-400">
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
`;
fs.writeFileSync(footerPath, newFooterContent, 'utf8');
console.log('Successfully updated Footer.tsx: removed scroll to top and section navigator!');

// 2. Update SectionNavigator.tsx to hide when in footer
const secNavPath = path.join(__dirname, '..', 'app', 'components', 'SectionNavigator.tsx');
let secNavContent = fs.readFileSync(secNavPath, 'utf8');

const oldScrollCheck = `      // Hide in hero section (top 350px or when on home)
      const isPastHero = window.scrollY > 350;
      setIsVisible(isPastHero);`;

const newScrollCheck = `      // Hide in hero section (top 350px) and hide when user reaches footer
      const isPastHero = window.scrollY > 350;
      const isAtFooter = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 220;
      setIsVisible(isPastHero && !isAtFooter);`;

if (secNavContent.includes(oldScrollCheck)) {
  secNavContent = secNavContent.replace(oldScrollCheck, newScrollCheck);
  fs.writeFileSync(secNavPath, secNavContent, 'utf8');
  console.log('Successfully updated SectionNavigator.tsx: auto-hides when reached footer!');
} else {
  console.log('Note: SectionNavigator scroll check pattern not matched or already updated.');
}
