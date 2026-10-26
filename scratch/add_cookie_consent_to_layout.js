const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'layout.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import
if (!content.includes('CookieConsent')) {
  content = content.replace(
    'import ScrollProgressBar from "./components/ScrollProgressBar";',
    'import ScrollProgressBar from "./components/ScrollProgressBar";\nimport CookieConsent from "./components/CookieConsent";'
  );
}

// 2. Add component inside LanguageProvider
if (!content.includes('<CookieConsent />')) {
  content = content.replace(
    '<FloatingActions />',
    '<FloatingActions />\n          <CookieConsent />'
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added CookieConsent to layout.tsx!');
