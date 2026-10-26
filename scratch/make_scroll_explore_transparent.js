const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the pill container classes to have transparent background and no background overlay
const targetStr = 'className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center cursor-pointer group select-none py-1.5 px-3.5 rounded-full bg-white/75 dark:bg-[#0c121e]/75 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-[#0077ED]/50 dark:hover:border-[#0077ED]/50 transition-all duration-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-[#0077ED]/15 hover:-translate-y-0.5 active:scale-95"';

const replacementStr = 'className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center cursor-pointer group select-none py-1.5 px-3 bg-transparent hover:-translate-y-0.5 active:scale-95 transition-all duration-300"';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated Scroll to Explore container to transparent background!');
} else {
    console.error('Target string not found in Hero.tsx');
    process.exit(1);
}
