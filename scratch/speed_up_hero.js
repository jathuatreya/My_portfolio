const fs = require('fs');

const filePath = 'app/components/Hero.tsx';
let c = fs.readFileSync(filePath, 'utf8');

c = c.replace(
  'transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}',
  'transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}'
);
c = c.replace(
  'transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}',
  'transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}'
);
c = c.replace(
  'transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}',
  'transition={{ duration: 0.35, delay: 0.22, ease: "easeOut" }}'
);
c = c.replace(
  'transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}',
  'transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }}'
);
c = c.replace(
  'transition={{ duration: 0.6, delay: 0.8 }}',
  'transition={{ duration: 0.35, delay: 0.2 }}'
);
c = c.replace(
  /staggerChildren:\s*0\.09,\s*delayChildren:\s*0\.9,/,
  'staggerChildren: 0.05,\r\n                                                     delayChildren: 0.25,'
);
c = c.replace(
  'transition={{ duration: 0.7, delay: 1.4 }}',
  'transition={{ duration: 0.4, delay: 0.4 }}'
);

fs.writeFileSync(filePath, c, 'utf8');
console.log('Hero animations updated successfully.');
