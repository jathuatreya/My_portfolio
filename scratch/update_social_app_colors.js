const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// LinkedIn
content = content.replace(
  'iconBoxClass: "bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20",',
  'iconBoxClass: "bg-[#0A66C2] text-white shadow-sm shadow-[#0A66C2]/30",'
);

// GitHub
content = content.replace(
  'iconBoxClass: "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/15",',
  'iconBoxClass: "bg-[#24292e] text-white shadow-sm shadow-black/30 border border-white/10",'
);

// X (Twitter)
content = content.replace(
  'iconBoxClass: "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/15",',
  'iconBoxClass: "bg-black dark:bg-[#14171A] text-white shadow-sm border border-white/10",'
);

// Instagram
content = content.replace(
  'iconBoxClass: "bg-gradient-to-tr from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 text-[#E1306C] border border-[#DD2A7B]/25",',
  'iconBoxClass: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm shadow-[#DD2A7B]/30 border-0",'
);

// Facebook
content = content.replace(
  'iconBoxClass: "bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20",',
  'iconBoxClass: "bg-[#1877F2] text-white shadow-sm shadow-[#1877F2]/30",'
);

// WhatsApp
content = content.replace(
  'iconBoxClass: "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25",',
  'iconBoxClass: "bg-[#25D366] text-white shadow-sm shadow-[#25D366]/30",'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated social icons with official app brand background colors!');
