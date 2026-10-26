const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Footer.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  '<div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto">',
  '<div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully removed left and right margins from footer!');
