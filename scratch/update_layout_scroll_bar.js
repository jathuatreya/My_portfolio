const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'layout.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import
if (!content.includes('ScrollProgressBar')) {
  content = content.replace(
    'import FloatingActions from "./components/FloatingActions";',
    'import FloatingActions from "./components/FloatingActions";\nimport ScrollProgressBar from "./components/ScrollProgressBar";'
  );
}

// 2. Render inside LanguageProvider
if (!content.includes('<ScrollProgressBar />')) {
  content = content.replace(
    '<GlobalToaster />',
    '<ScrollProgressBar />\n          <GlobalToaster />'
  );
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated layout.tsx with ScrollProgressBar!');
