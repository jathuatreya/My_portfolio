const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove heroTechnologies and heroSocialLinks, replace with heroSocialProfiles
const techStart = content.indexOf('const heroTechnologies = [');
const heroStart = content.indexOf('export default function Hero() {');

if (techStart === -1 || heroStart === -1) {
  console.error('Could not locate bounds in Hero.tsx');
  process.exit(1);
}

const newSocialProfiles = `const heroSocialProfiles = [
     {
          name: "LinkedIn",
          username: "in/jathushan-varnakulasingam",
          role: "Professional Network",
          href: profile.social.linkedin,
          accentColor: "#0A66C2",
          iconBoxClass: "bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20",
          icon: (
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
               </svg>
          ),
     },
     {
          name: "GitHub",
          username: "@jathuatreya",
          role: "Code & Repositories",
          href: profile.social.github,
          accentColor: "#24292e",
          iconBoxClass: "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/15",
          icon: (
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
               </svg>
          ),
     },
     {
          name: "X (Twitter)",
          username: "@jathushanstark",
          role: "Tech Thoughts & Updates",
          href: profile.social.twitter,
          accentColor: "#000000",
          iconBoxClass: "bg-black/5 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/15",
          icon: (
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>
          ),
     },
     {
          name: "Instagram",
          username: "@im_jathushan",
          role: "Creative Tech & Moments",
          href: profile.social.instagram,
          accentColor: "#E1306C",
          iconBoxClass: "bg-gradient-to-tr from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15 text-[#E1306C] border border-[#DD2A7B]/25",
          icon: (
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </svg>
          ),
     },
     {
          name: "Facebook",
          username: "@imjathushann",
          role: "Social Profile",
          href: profile.social.facebook,
          accentColor: "#1877F2",
          iconBoxClass: "bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20",
          icon: (
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
               </svg>
          ),
     },
     {
          name: "WhatsApp",
          username: "+94 70 660 1734",
          role: "Instant Messaging",
          href: profile.social.whatsapp,
          accentColor: "#25D366",
          iconBoxClass: "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/25",
          icon: (
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.894.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 6.577c-1.898 0-3.673-.518-5.205-1.42l-.373-.222-3.867 1.014 1.032-3.77-.243-.387A9.882 9.882 0 012.05 12.04c0-5.467 4.453-9.92 9.929-9.92 2.65 0 5.14 1.032 7.012 2.907a9.855 9.855 0 012.905 7.014c0 5.469-4.452 9.923-9.843 9.923zm0-18c-6.657 0-12.05 5.393-12.05 12.05 0 2.127.555 4.198 1.609 6.014L0 24l6.115-1.604a11.996 11.996 0 005.844 1.503c6.658 0 12.05-5.392 12.05-12.05 0-3.218-1.253-6.243-3.528-8.52A12.003 12.003 0 0012.053 2.96z" />
               </svg>
          ),
     },
];

`;

content = content.slice(0, techStart) + newSocialProfiles + content.slice(heroStart);

// 2. Replace Right Panel tech icons with line-by-line social media cards
const rightPanelStart = content.indexOf('{/* RIGHT PANEL: Free-Floating Random Tech Icons');
const rightPanelEnd = content.indexOf('{/* ========================================================= */}\n                {/* 6. HERO BOTTOM-LEFT CORNER');

if (rightPanelStart === -1 || rightPanelEnd === -1) {
  console.error('Could not locate rightPanel bounds');
  process.exit(1);
}

const newRightPanel = `{/* RIGHT PANEL: Social Media Channels Line-by-Line with Usernames */}
                            {/* ==================================================== */}
                            <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-12 xl:-translate-y-16">
                                 <motion.div
                                      initial={{ opacity: 0, y: 24 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6, delay: 0.8 }}
                                      className="flex items-center gap-2 mb-3.5 px-1"
                                 >
                                      <span className="w-2 h-2 rounded-full bg-[#0077ED] animate-pulse" />
                                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                                           Connect & Follow
                                      </span>
                                 </motion.div>

                                 <motion.div
                                      initial="hidden"
                                      animate="visible"
                                      variants={{
                                           hidden: { opacity: 0 },
                                           visible: {
                                                opacity: 1,
                                                transition: {
                                                     staggerChildren: 0.09,
                                                     delayChildren: 0.9,
                                                },
                                           },
                                      }}
                                      className="flex flex-col gap-2.5 sm:gap-3"
                                 >
                                      {heroSocialProfiles.map((social) => (
                                           <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variants={{
                                                     hidden: { opacity: 0, x: 24 },
                                                     visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
                                                }}
                                                whileHover={{ x: -4, transition: { duration: 0.2 } }}
                                                whileTap={{ scale: 0.98 }}
                                                className="group relative flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-[#0c121e]/85 backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-[#0077ED]/50 dark:hover:border-[#0077ED]/60 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/10 transition-all duration-200 cursor-pointer"
                                           >
                                                {/* Left: Brand Icon + Name & Username */}
                                                <div className="flex items-center gap-3 min-w-0">
                                                     <div className={\`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-110 \${social.iconBoxClass}\`}>
                                                          {social.icon}
                                                     </div>
                                                     <div className="flex flex-col min-w-0 text-left">
                                                          <div className="flex items-center gap-1.5">
                                                               <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate group-hover:text-[#0077ED] transition-colors">
                                                                    {social.name}
                                                               </span>
                                                          </div>
                                                          <span className="text-[11px] sm:text-xs font-mono text-[#0077ED] dark:text-[#38bdf8] truncate font-medium">
                                                               {social.username}
                                                          </span>
                                                     </div>
                                                </div>

                                                {/* Right: Subtle External Arrow */}
                                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-[#0077ED] group-hover:translate-x-0.5 transition-all shrink-0">
                                                     <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                     </svg>
                                                </div>
                                           </motion.a>
                                      ))}
                                 </motion.div>
                            </div>

                     </div>
                </div>
                `;

// Also remove bottom-left corner social dock since it's now prominently featured line-by-line on the right!
const bottomSocialBlock = `                {/* ========================================================= */}
                {/* 6. HERO BOTTOM-LEFT CORNER: Social Media Icons            */}
                {/* ========================================================= */}
                <motion.div
                     initial="hidden"
                     animate="visible"
                     variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: {
                               opacity: 1,
                               y: 0,
                               transition: {
                                    delayChildren: 1.2,
                                    staggerChildren: 0.08,
                               },
                          },
                     }}
                     className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-10 xl:left-14 z-30 flex items-center flex-wrap gap-2.5 sm:gap-3"
                >
                     {heroSocialLinks.map((social) => (
                          <motion.a
                               key={social.label}
                               href={social.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                               }}
                               whileHover={{ scale: 1.15, y: -3 }}
                               whileTap={{ scale: 0.95 }}
                               className={\`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-[#0c121e]/90 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-md shadow-black/5 dark:shadow-black/30 transition-all duration-300 \${social.buttonClass}\`}
                               aria-label={social.label}
                               title={social.label}
                          >
                               {social.icon}
                          </motion.a>
                     ))}
                </motion.div>`;

content = content.slice(0, rightPanelStart) + newRightPanel + content.slice(content.indexOf('</section>'));

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced hero tech icons with line-by-line social media handles!');
