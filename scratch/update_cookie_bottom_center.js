const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'CookieConsent.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update positioning and centering with Framer Motion x: "-50%"
content = content.replace(
  `        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[calc(100vw-32px)] sm:max-w-[430px]"`,
  `        <motion.div
          initial={{ opacity: 0, y: 36, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 24, x: "-50%", scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-1/2 z-50 w-[94%] sm:w-[540px] md:w-[600px] max-w-[620px]"`
);

// 2. Increase title and subtitle font size
content = content.replace(
  'className="text-base font-bold text-neutral-900 dark:text-white tracking-tight leading-snug"',
  'className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight leading-snug"'
);
content = content.replace(
  'className="text-xs text-neutral-500 dark:text-neutral-400"',
  'className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"'
);

// 3. Increase body description font size
content = content.replace(
  'className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4"',
  'className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5"'
);

// 4. Increase action button size
content = content.replace(
  'className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#0077ED] hover:bg-[#0062C4] text-white text-xs font-semibold shadow-md shadow-[#0077ED]/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"',
  'className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-[#0077ED] hover:bg-[#0062C4] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#0077ED]/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"'
);

content = content.replace(
  'className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"',
  'className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-neutral-700 dark:text-neutral-200 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 cursor-pointer"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully positioned CookieConsent in bottom-center, made wider, and increased text size!');
