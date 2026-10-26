const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace text-neutral-800 dark:text-neutral-200 with text-white
const targetText = 'text-neutral-800 dark:text-neutral-200 group-hover:text-[#0077ED]';
const replacementText = 'text-white group-hover:text-[#0077ED] drop-shadow-sm';

const targetBorder = 'border-neutral-700 dark:border-neutral-300 group-hover:border-[#0077ED]';
const replacementBorder = 'border-white/80 group-hover:border-[#0077ED]';

if (content.includes(targetText)) {
    content = content.replace(targetText, replacementText);
    if (content.includes(targetBorder)) {
        content = content.replace(targetBorder, replacementBorder);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated Scroll to Explore text to white!');
} else {
    console.error('Target text not found in Hero.tsx');
    process.exit(1);
}
