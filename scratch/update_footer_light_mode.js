const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Footer.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Footer outer container
content = content.replace(
  '<footer className="w-full bg-[#070A12] text-white pt-16 pb-8 border-t border-white/5 transition-colors duration-300">',
  '<footer className="w-full bg-[#F8FAFC] dark:bg-[#070A12] text-neutral-900 dark:text-white pt-16 pb-8 border-t border-black/[0.08] dark:border-white/5 transition-colors duration-300">'
);

// 2. Monogram text
content = content.replace(
  '<span className="text-xs font-bold tracking-widest uppercase text-white font-mono leading-tight">',
  '<span className="text-xs font-bold tracking-widest uppercase text-neutral-900 dark:text-white font-mono leading-tight">'
);

// 3. Name & role
content = content.replace(
  '<h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">',
  '<h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">'
);

// 4. Bio text
content = content.replace(
  '<p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">',
  '<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">'
);

// 5. Credentials
content = content.replace(
  '<div className="space-y-2 pt-1 text-xs text-gray-400 font-mono">',
  '<div className="space-y-2 pt-1 text-xs text-gray-600 dark:text-gray-400 font-mono">'
);

// 6. Navigation links text
content = content.replace(
  /text-gray-400 hover:text-\[#0077ED\]/g,
  'text-gray-600 dark:text-gray-400 hover:text-[#0077ED]'
);

// 7. Scroll to top button
content = content.replace(
  'className="w-8 h-8 rounded-lg bg-[#0E1524] border border-white/10 hover:border-[#0077ED]/50 hover:bg-[#152036] text-gray-300 hover:text-[#0077ED] flex items-center justify-center transition-all cursor-pointer shadow-xs"',
  'className="w-8 h-8 rounded-lg bg-white dark:bg-[#0E1524] border border-black/10 dark:border-white/10 hover:border-[#0077ED]/50 hover:bg-neutral-50 dark:hover:bg-[#152036] text-gray-700 dark:text-gray-300 hover:text-[#0077ED] flex items-center justify-center transition-all cursor-pointer shadow-xs"'
);

// 8. Connect cards background and text
content = content.replace(
  /className="p-2\.5 sm:p-3 rounded-xl bg-\[#0D1322\] hover:bg-\[#121A2E\] border border-white\/5/g,
  'className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0D1322] hover:bg-neutral-50 dark:hover:bg-[#121A2E] border border-black/10 dark:border-white/5 shadow-xs'
);

content = content.replace(
  /text-xs sm:text-sm font-semibold text-white/g,
  'text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white'
);

content = content.replace(
  'text-gray-400 group-hover:text-white transition-colors shrink-0',
  'text-gray-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0'
);

// 9. Copyright footer
content = content.replace(
  '<div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">',
  '<div className="pt-6 border-t border-black/[0.06] dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Footer to support beautiful light mode!');
