const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Move social media list a little bit to the right
content = content.replace(
  'className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-12 xl:-translate-y-16"',
  'className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-12 xl:-translate-y-16 lg:translate-x-6 xl:translate-x-10 2xl:translate-x-12"'
);

// 2. Make the card background transparent
content = content.replace(
  'className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-[#0c121e]/85 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-[#0077ED]/50 dark:hover:border-[#0077ED]/60 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/10 transition-all duration-200 cursor-pointer"',
  'className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-transparent hover:bg-black/[0.03] dark:hover:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-[#0077ED]/45 dark:hover:border-[#0077ED]/55 shadow-none hover:shadow-md hover:shadow-[#0077ED]/10 transition-all duration-200 cursor-pointer"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully moved social media list right and made card backgrounds transparent!');
