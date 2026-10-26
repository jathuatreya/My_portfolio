const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Target block to remove
const targetBlock = `                                   {/* 4. Third: Bio Description */}
                                   <motion.p
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.95, ease: "easeOut" }}
                                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[320px] sm:max-w-[360px] lg:max-w-[330px] xl:max-w-[380px]"
                                   >
                                        {t.hero.description}
                                   </motion.p>`;

if (content.includes(targetBlock)) {
  content = content.replace(targetBlock, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully removed hero description block!');
} else {
  // Regex fallback in case of whitespace/line ending variations
  const regex = /\{\/\* 4\. Third: Bio Description \*\/\}[\s\S]*?\{t\.hero\.description\}[\s\S]*?<\/motion\.p>/;
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully removed hero description block using regex!');
  } else {
    console.error('Could not find hero description block in Hero.tsx');
    process.exit(1);
  }
}
