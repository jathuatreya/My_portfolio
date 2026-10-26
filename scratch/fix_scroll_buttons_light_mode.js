const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'FloatingActions.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update Scroll to Top tooltip
content = content.replace(
  '<div className="bg-[#09101d] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-[#0077ED]/40 flex items-center gap-1.5 whitespace-nowrap">',
  '<div className="bg-white dark:bg-[#09101d] text-neutral-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl shadow-black/10 border border-black/10 dark:border-[#0077ED]/40 flex items-center gap-1.5 whitespace-nowrap">'
);

// Update Scroll to Top button
content = content.replace(
  'className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] sm:rounded-[18px] bg-[#09101d] dark:bg-[#070c16] border border-[#0077ED]/60 dark:border-[#0077ED]/75 hover:border-[#0077ED] shadow-md shadow-[#0077ED]/15 hover:shadow-lg hover:shadow-[#0077ED]/30 hover:bg-[#0077ED]/15 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"',
  'className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] sm:rounded-[18px] bg-white/95 dark:bg-[#070c16] border border-black/15 dark:border-[#0077ED]/75 hover:border-[#0077ED] shadow-lg shadow-black/10 dark:shadow-md dark:shadow-[#0077ED]/20 hover:bg-[#0077ED]/10 dark:hover:bg-[#0077ED]/20 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-md"'
);

// Update Scroll to Bottom tooltip
content = content.replace(
  '<div className="bg-[#09101d] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-[#0077ED]/40 flex items-center gap-1.5 whitespace-nowrap">',
  '<div className="bg-white dark:bg-[#09101d] text-neutral-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl shadow-black/10 border border-black/10 dark:border-[#0077ED]/40 flex items-center gap-1.5 whitespace-nowrap">'
);

// Update Scroll to Bottom button
content = content.replace(
  'className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] sm:rounded-[18px] bg-[#09101d] dark:bg-[#070c16] border border-[#0077ED]/60 dark:border-[#0077ED]/75 hover:border-[#0077ED] shadow-md shadow-[#0077ED]/15 hover:shadow-lg hover:shadow-[#0077ED]/30 hover:bg-[#0077ED]/15 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"',
  'className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] sm:rounded-[18px] bg-white/95 dark:bg-[#070c16] border border-black/15 dark:border-[#0077ED]/75 hover:border-[#0077ED] shadow-lg shadow-black/10 dark:shadow-md dark:shadow-[#0077ED]/20 hover:bg-[#0077ED]/10 dark:hover:bg-[#0077ED]/20 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer backdrop-blur-md"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated FloatingActions with clean light background in light mode!');
