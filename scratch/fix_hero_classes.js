const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace posDesktop and posMobile with static posClass
content = content.replace(
`          posDesktop: "top-[3%] left-[5%]",
          posMobile: "top-[4%] left-[6%]",`,
`          posClass: "top-[3%] left-[5%] lg:top-[4%] lg:left-[6%]",`
);

content = content.replace(
`          posDesktop: "top-[5%] left-[40%]",
          posMobile: "top-[4%] left-[40%]",`,
`          posClass: "top-[4%] left-[42%] lg:top-[5%] lg:left-[43%]",`
);

content = content.replace(
`          posDesktop: "top-[2%] right-[5%]",
          posMobile: "top-[4%] right-[6%]",`,
`          posClass: "top-[3%] right-[5%] lg:top-[4%] lg:right-[6%]",`
);

content = content.replace(
`          posDesktop: "top-[27%] left-[10%]",
          posMobile: "top-[28%] left-[16%]",`,
`          posClass: "top-[27%] left-[18%] lg:top-[28%] lg:left-[18%]",`
);

content = content.replace(
`          posDesktop: "top-[25%] right-[10%]",
          posMobile: "top-[28%] right-[16%]",`,
`          posClass: "top-[27%] right-[18%] lg:top-[28%] lg:right-[18%]",`
);

content = content.replace(
`          posDesktop: "top-[50%] left-[4%]",
          posMobile: "top-[52%] left-[6%]",`,
`          posClass: "top-[51%] left-[5%] lg:top-[52%] lg:left-[6%]",`
);

content = content.replace(
`          posDesktop: "top-[48%] left-[40%]",
          posMobile: "top-[52%] left-[40%]",`,
`          posClass: "top-[50%] left-[42%] lg:top-[51%] lg:left-[43%]",`
);

content = content.replace(
`          posDesktop: "top-[52%] right-[4%]",
          posMobile: "top-[52%] right-[6%]",`,
`          posClass: "top-[51%] right-[5%] lg:top-[52%] lg:right-[6%]",`
);

content = content.replace(
`          posDesktop: "top-[75%] left-[12%]",
          posMobile: "top-[76%] left-[16%]",`,
`          posClass: "top-[76%] left-[18%] lg:top-[76%] lg:left-[18%]",`
);

content = content.replace(
`          posDesktop: "top-[75%] right-[12%]",
          posMobile: "top-[76%] right-[16%]",`,
`          posClass: "top-[75%] right-[18%] lg:top-[76%] lg:right-[18%]",`
);

// Update JSX className
content = content.replace(
`className={\`absolute \${item.posMobile} lg:\${item.posDesktop} group flex items-center justify-center cursor-pointer\`}`,
`className={\`absolute \${item.posClass} group flex items-center justify-center cursor-pointer\`}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Hero.tsx with static, non-overlapping posClass!');
