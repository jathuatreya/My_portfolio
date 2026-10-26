const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Navbar.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update scroll threshold in handleScroll
content = content.replace(
  'setIsScrolled(window.scrollY > 20);',
  `const isHome = window.location.pathname === "/";
      const scrollThreshold = isHome ? 420 : 20;
      setIsScrolled(window.scrollY > scrollThreshold);`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Navbar to stay transparent in Hero section!');
