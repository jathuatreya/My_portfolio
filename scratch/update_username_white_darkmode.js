const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  '<span className="text-[11px] sm:text-xs font-mono text-[#0077ED] dark:text-[#38bdf8] truncate font-medium">',
  '<span className="text-[11px] sm:text-xs font-mono text-neutral-600 dark:text-white truncate font-medium transition-colors">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated username text to pure white in dark mode!');
