const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Testimonials.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetHeader = `                    {/* Section Header */}
                    <div className="text-center mb-14 sm:mb-20 relative z-10">`;

const replacement = `                    {/* Section Header */}
                    <ScrollReveal className="text-center mb-14 sm:mb-20 relative z-10">`;

const targetClosing = `                         <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                              {t.testimonials.subtitle}
                         </p>
                    </div>`;

const replacementClosing = `                         <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                              {t.testimonials.subtitle}
                         </p>
                    </ScrollReveal>`;

if (content.includes(targetHeader) && content.includes(targetClosing)) {
  content = content.replace(targetHeader, replacement);
  content = content.replace(targetClosing, replacementClosing);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully added ScrollReveal to Testimonials header!');
} else {
  console.error('Target not found in Testimonials.tsx');
  process.exit(1);
}
