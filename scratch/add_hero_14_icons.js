const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace heroTechnologies definition
const techArrayStart = content.indexOf('const heroTechnologies = [');
const techArrayEnd = content.indexOf('const heroSocialLinks = [');

if (techArrayStart === -1 || techArrayEnd === -1) {
  console.error('Could not locate heroTechnologies bounds');
  process.exit(1);
}

const newHeroTechnologies = `const heroTechnologies = [
     // --- ROW 1 (3 icons) ---
     {
          name: "Next.js 16",
          role: "Framework",
          posClass: "top-[2%] left-[4%] lg:top-[2%] lg:left-[4%]",
          floatY: [-4, 4, -4],
          floatX: [0, 2, 0],
          rotate: [-2, 2, -2],
          duration: 4.2,
          delay: 0,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black dark:text-white" viewBox="0 0 180 180" fill="currentColor">
                    <circle cx="90" cy="90" r="90" fill="currentColor" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" className="dark:fill-black" />
                    <rect fill="white" height="72" width="12" x="115" y="54" className="dark:fill-black" />
               </svg>
          ),
     },
     {
          name: "React 19",
          role: "Frontend UI",
          posClass: "top-[3%] left-[42%] lg:top-[3%] lg:left-[42%]",
          floatY: [4, -4, 4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 3.8,
          delay: 0.3,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                    <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
                    <g stroke="#00D8FF" strokeWidth="1" fill="none">
                         <ellipse rx="11" ry="4.2"/>
                         <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                         <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
               </svg>
          ),
     },
     {
          name: "Python",
          role: "AI & Core",
          posClass: "top-[2%] right-[4%] lg:top-[2%] lg:right-[4%]",
          floatY: [-4, 4, -4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.8,
          delay: 0.7,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24">
                    <path fill="#3776AB" d="M11.927 0C6.074 0 6.444 2.548 6.444 2.548l.006 2.639h5.578v.831H4.218S0 5.56 0 11.458c0 5.898 3.682 5.679 3.682 5.679h2.197v-3.088s-.119-3.682 3.623-3.682h5.548s3.444.059 3.444-3.325V2.548S19.068 0 11.927 0zM8.887 1.838a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z"/>
                    <path fill="#FFD43B" d="M12.073 24c5.853 0 5.483-2.548 5.483-2.548l-.006-2.639h-5.578v-.831h7.81s4.218.458 4.218-5.44c0-5.898-3.682-5.679-3.682-5.679h-2.197v3.088s.119 3.682-3.623 3.682H8.98s-3.444-.059-3.444 3.325v4.459S4.932 24 12.073 24zm3.04-1.838a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z"/>
               </svg>
          ),
     },

     // --- ROW 2 (3 icons staggered) ---
     {
          name: "TypeScript",
          role: "Typed Systems",
          posClass: "top-[21%] left-[16%] lg:top-[21%] lg:left-[16%]",
          floatY: [4, -4, 4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 4.5,
          delay: 0.2,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#3178C6" />
                    <path d="M11.5 13.5H9.2v6.5H7.5v-6.5H5.2V12h6.3v1.5zm3.8 2.3c.7.4 1.4.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1.1-2.1-2.2 0-1.3 1.1-2.3 2.8-2.3 1 0 1.8.3 2.4.7l-.6 1.3c-.6-.4-1.2-.6-1.8-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.4.5 2.1 1.2 2.1 2.3 0 1.4-1.1 2.3-3 2.3-1.1 0-2.1-.3-2.8-.8l.7-1.3z" fill="#ffffff" />
               </svg>
          ),
     },
     {
          name: "JavaScript",
          role: "Web Standard",
          posClass: "top-[19%] left-[50%] lg:top-[19%] lg:left-[50%]",
          floatY: [-4, 4, -4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.9,
          delay: 0.5,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24">
                    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
                    <path d="M7.7 18.2c.7.4 1.4.6 2.1.6 1.2 0 1.9-.6 1.9-1.5 0-.9-.6-1.3-1.8-1.7l-.6-.2c-1.8-.6-2.9-1.6-2.9-3.2 0-2 1.6-3.5 4.1-3.5 1.4 0 2.5.4 3.3.9l-.9 2c-.6-.4-1.4-.7-2.3-.7-1.1 0-1.7.5-1.7 1.2 0 .7.5 1.1 1.6 1.5l.6.2c2.1.7 3.1 1.7 3.1 3.4 0 2-1.6 3.6-4.4 3.6-1.6 0-3-.5-3.8-1.1l.8-2.1zm11.5-.2c-.6.3-1.4.5-2.2.5-1.3 0-2.1-.4-2.5-1.1-.3-.6-.3-1.5-.3-2.7V9.1h2.5v5.7c0 .9.3 1.3 1.1 1.3.5 0 .9-.1 1.2-.3v2.2z" fill="#000000"/>
               </svg>
          ),
     },
     {
          name: "Node.js",
          role: "Backend",
          posClass: "top-[21%] right-[6%] lg:top-[21%] lg:right-[6%]",
          floatY: [-4, 4, -4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 5.1,
          delay: 0.8,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.986 16.147L12 22.684l-7.986-4.537V8.927L12 4.39l7.986 4.537v9.22z"/>
               </svg>
          ),
     },

     // --- ROW 3 (3 icons) ---
     {
          name: "Tailwind CSS",
          role: "Modern UI",
          posClass: "top-[41%] left-[4%] lg:top-[41%] lg:left-[4%]",
          floatY: [4, -4, 4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.4,
          delay: 0.4,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
               </svg>
          ),
     },
     {
          name: "OpenCV",
          role: "Computer Vision",
          posClass: "top-[39%] left-[42%] lg:top-[39%] lg:left-[42%]",
          floatY: [-4, 4, -4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 5.3,
          delay: 0.1,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4.2" fill="none" stroke="#EE2A24" strokeWidth="2.4" />
                    <circle cx="6.5" cy="16.5" r="4.2" fill="none" stroke="#009944" strokeWidth="2.4" />
                    <circle cx="17.5" cy="16.5" r="4.2" fill="none" stroke="#1D71B8" strokeWidth="2.4" />
               </svg>
          ),
     },
     {
          name: "PyTorch",
          role: "Deep Learning",
          posClass: "top-[41%] right-[4%] lg:top-[41%] lg:right-[4%]",
          floatY: [4, -4, 4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.0,
          delay: 0.9,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.923 0a11.968 11.968 0 00-2.327.227l2.84 2.84a8.966 8.966 0 011.85-.192c4.958 0 8.992 4.034 8.992 8.992 0 4.958-4.034 8.992-8.992 8.992a8.966 8.966 0 01-8.992-8.992c0-1.85.56-3.57 1.516-5l-2.13-2.13A11.93 11.93 0 00.72 11.867C.72 18.498 6.09 23.867 12.72 23.867c6.63 0 12-5.37 12-12S19.553 0 12.923 0zm2.74 3.738a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
               </svg>
          ),
     },

     // --- ROW 4 (3 icons staggered) ---
     {
          name: "PostgreSQL",
          role: "SQL Database",
          posClass: "top-[61%] left-[16%] lg:top-[61%] lg:left-[16%]",
          floatY: [-4, 4, -4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 4.6,
          delay: 0.6,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A6 6 0 0 1 6.07 13H6v-2h.07A6 6 0 0 1 11 6.07V6h2v.07A6 6 0 0 1 17.93 11H18v2h-.07A6 6 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/>
               </svg>
          ),
     },
     {
          name: "MongoDB",
          role: "NoSQL DB",
          posClass: "top-[59%] left-[50%] lg:top-[59%] lg:left-[50%]",
          floatY: [4, -4, 4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.7,
          delay: 0.35,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 0a2.27 2.27 0 0 0-.256.027c-1.12.18-7.745 4.54-7.745 13.973 0 6.64 4.53 9.49 8.001 10V0zm0 0v24c3.471-.51 8.001-3.36 8.001-10 0-9.433-6.625-13.793-7.745-13.973A2.27 2.27 0 0 0 12.001 0z"/>
               </svg>
          ),
     },
     {
          name: "TensorFlow",
          role: "Machine Learning",
          posClass: "top-[61%] right-[6%] lg:top-[61%] lg:right-[6%]",
          floatY: [-4, 4, -4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 5.2,
          delay: 1.0,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.292 5.856L11.54 0v24l-4.095-2.395V7.869L3.35 10.264l-2.058-4.408zm21.416 0l-2.058 4.408-4.095-2.395v13.736L12.46 24V0l10.248 5.856z"/>
               </svg>
          ),
     },

     // --- ROW 5 (2 icons wide) ---
     {
          name: "Docker",
          role: "DevOps & Cloud",
          posClass: "top-[81%] left-[20%] lg:top-[81%] lg:left-[20%]",
          floatY: [4, -4, 4],
          floatX: [2, -2, 2],
          rotate: [-2, 2, -2],
          duration: 4.8,
          delay: 0.45,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zM23.978 11.7a3.486 3.486 0 0 0-1.898-1.574c-.468-.184-.969-.28-1.487-.282a5.577 5.577 0 0 0-1.87.319c-.38-.857-1.049-1.532-1.905-1.916V8.18H1.36a1.36 1.36 0 0 0-1.36 1.36v2.308c0 3.235 1.572 6.069 4.14 7.785 1.765 1.176 3.864 1.867 6.12 1.867 6.46 0 11.967-4.475 13.518-10.42.067-.28.1-.567.1-.856 0-.175-.034-.347-.1-.504z"/>
               </svg>
          ),
     },
     {
          name: "GitHub Actions",
          role: "CI/CD & DevOps",
          posClass: "top-[81%] right-[20%] lg:top-[81%] lg:right-[20%]",
          floatY: [-4, 4, -4],
          floatX: [-2, 2, -2],
          rotate: [2, -2, 2],
          duration: 5.4,
          delay: 0.85,
          icon: (
               <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#2088FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
               </svg>
          ),
     },
];

`;

content = content.slice(0, techArrayStart) + newHeroTechnologies + content.slice(techArrayEnd);

// Also increase container dimensions slightly so 14 icons have plenty of room
content = content.replace(
  'className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-16 xl:-translate-y-24 2xl:-translate-y-28 lg:translate-x-4 xl:translate-x-8">',
  'className="w-full lg:w-[360px] xl:w-[420px] 2xl:w-[460px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-16 xl:-translate-y-24 2xl:-translate-y-28 lg:translate-x-3 xl:translate-x-6">'
);

content = content.replace(
  'className="relative w-full h-[300px] sm:h-[340px] lg:h-[500px] xl:h-[540px]">',
  'className="relative w-full h-[340px] sm:h-[380px] lg:h-[540px] xl:h-[580px]">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully expanded Hero with 14 non-overlapping, individually floating tech icons!');
