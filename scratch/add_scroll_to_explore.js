const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const scrollExploreMarkup = `
                {/* ========================================================= */}
                {/* 6. SCROLL TO EXPLORE INDICATOR (Bottom Center)             */}
                {/* ========================================================= */}
                <motion.div
                     initial={{ opacity: 0, y: 16 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 1.4 }}
                     onClick={() => {
                          const aboutSection = document.getElementById("about");
                          if (aboutSection) {
                               aboutSection.scrollIntoView({ behavior: "smooth" });
                          } else {
                               window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                          }
                     }}
                     className="absolute bottom-3 sm:bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center cursor-pointer group select-none py-1.5 px-3.5 rounded-full bg-white/75 dark:bg-[#0c121e]/75 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-[#0077ED]/50 dark:hover:border-[#0077ED]/50 transition-all duration-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-[#0077ED]/15 hover:-translate-y-0.5 active:scale-95"
                     role="button"
                     aria-label="Scroll to explore portfolio"
                >
                     {/* Mouse Frame with Animated Scrolling Wheel */}
                     <div className="flex items-center gap-2">
                          <div className="w-3.5 h-5 sm:w-4 sm:h-6 rounded-full border-[1.5px] border-neutral-700 dark:border-neutral-300 group-hover:border-[#0077ED] flex items-start justify-center p-0.5 transition-colors">
                               <motion.div
                                    animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1 h-1.5 rounded-full bg-[#0077ED]"
                               />
                          </div>
                          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-neutral-800 dark:text-neutral-200 group-hover:text-[#0077ED] transition-colors">
                               Scroll to Explore
                          </span>
                          <motion.span
                               animate={{ y: [0, 2, 0] }}
                               transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                               className="text-[#0077ED] text-xs font-bold"
                          >
                               ↓
                          </motion.span>
                     </div>
                </motion.div>
           </section>`;

content = content.replace('</section>', scrollExploreMarkup);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added Scroll to Explore indicator with mouse scroll animation in Hero.tsx!');
