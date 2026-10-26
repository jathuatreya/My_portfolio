const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add Link import if not present
if (!content.includes('import Link from "next/link";')) {
  content = content.replace(
    'import Image from "next/image";',
    'import Image from "next/image";\nimport Link from "next/link";'
  );
}

// 2. Add Projects & Blogs buttons after the Typewriter role
const typewriterMarker = `                                         <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0077ED] tracking-tight">
                                              {t.hero.role_prefix}{" "}
                                              <span>{displayText}</span>
                                              <span className="inline-block w-[3px] h-6 sm:h-7 bg-[#0077ED] ml-1 animate-pulse align-middle"></span>
                                         </p
                                    ></motion.div>`;

const buttonsMarkup = `                                         <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0077ED] tracking-tight">
                                              {t.hero.role_prefix}{" "}
                                              <span>{displayText}</span>
                                              <span className="inline-block w-[3px] h-6 sm:h-7 bg-[#0077ED] ml-1 animate-pulse align-middle"></span>
                                         </p
                                    ></motion.div>

                                   {/* 4. Action CTA Buttons: Projects & Blogs */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
                                        className="flex items-center gap-3 pt-2 sm:pt-3"
                                   >
                                        <Link
                                             href="/projects"
                                             className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0077ED] hover:bg-[#0062C4] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#0077ED]/25 hover:shadow-xl hover:shadow-[#0077ED]/35 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                                        >
                                             <span>Projects</span>
                                             <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                             </svg>
                                        </Link>

                                        <Link
                                             href="/blogs"
                                             className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 text-neutral-800 dark:text-neutral-100 font-semibold text-sm sm:text-base border border-black/10 dark:border-white/15 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 backdrop-blur-md cursor-pointer"
                                        >
                                             <span>Blogs</span>
                                             <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                             </svg>
                                        </Link>
                                   </motion.div>`;

if (content.includes(typewriterMarker)) {
  content = content.replace(typewriterMarker, buttonsMarkup);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully added Projects and Blogs CTA buttons to Hero.tsx!');
} else {
  // Regex fallback
  const regex = /<p className="text-xl sm:text-2xl md:text-3xl font-medium text-\[#0077ED\] tracking-tight">[\s\S]*?<\/p\s*><\/motion\.div>/;
  if (regex.test(content)) {
    const match = content.match(regex)[0];
    content = content.replace(match, match + '\n\n' + buttonsMarkup.slice(buttonsMarkup.indexOf('{/* 4.')));
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully added Projects and Blogs CTA buttons to Hero.tsx via regex!');
  } else {
    console.error('Could not find typewriter section in Hero.tsx');
    process.exit(1);
  }
}
