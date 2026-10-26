const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'FloatingActions.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = 'className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3"';
const replacementStr = 'className="fixed bottom-8 right-4 sm:bottom-10 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3"';

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully moved FloatingActions up to bottom-8 sm:bottom-10!');
} else {
  console.error('Target string not found in FloatingActions.tsx');
  process.exit(1);
}
