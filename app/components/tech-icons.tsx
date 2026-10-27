import React from "react";

export function getTechIcon(name: string): React.ReactNode {
  switch (name) {
    case "Custom Software Development":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );

    case "Python":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
          <path fill="#3776AB" d="M11.927 0C6.074 0 6.444 2.548 6.444 2.548l.006 2.639h5.578v.831H4.218S0 5.56 0 11.458c0 5.898 3.682 5.679 3.682 5.679h2.197v-3.088s-.119-3.682 3.623-3.682h5.548s3.444.059 3.444-3.325V2.548S19.068 0 11.927 0zM8.887 1.838a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z"/>
          <path fill="#FFD43B" d="M12.073 24c5.853 0 5.483-2.548 5.483-2.548l-.006-2.639h-5.578v-.831h7.81s4.218.458 4.218-5.44c0-5.898-3.682-5.679-3.682-5.679h-2.197v3.088s.119 3.682-3.623 3.682H8.98s-3.444-.059-3.444 3.325v4.459S4.932 24 12.073 24zm3.04-1.838a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z"/>
        </svg>
      );

    case "Java":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA2D2E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.667.72c2.247.264 3.768.219 6.541-.326 0 0 .564.356 1.344.672-4.975 1.954-10.42-.162-8.552-1.066m-.815-3.047s-1.042.748 1.157.943c2.738.243 5.452.203 9.072-.416 0 0 .392.396.962.631-5.666 1.767-13.064.297-11.191-1.158m6.877-4.223c.792.891-.218 1.802-.218 1.802s2.613-1.346 1.406-2.673c-1.168-1.287-2.257-1.92-4.574-3.326 0 0 2.455.97 3.386 4.197m-4.138-7.29s3.049 2.059.04 4.811c-2.406 2.2-1.03 3.485-.02 4.95-.91-1.168-1.841-2.237-.871-3.406 1.366-1.643 3.128-2.614.851-6.355M17.41 18.06c3.485-.97 1.821-2.93 1.821-2.93s-.594.614-1.841.97c-1.505.416-3.821.574-6.098.594-3.148.02-6.574-.337-6.574-.337s-.455.337.891.653c2.613.614 6.949.693 9.782.356 1.485-.178 2.019-.297 2.019-.297z"/>
        </svg>
      );

    case "JavaScript":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6 17.5c.5.8 1.3 1.4 2.5 1.4 1.4 0 2.2-.7 2.2-2.3v-6.9H8.7v6.8c0 .7-.3 1.1-.9 1.1-.5 0-.8-.3-1-.7l-1.8 1.1zm8.8.1c.8.6 1.8 1 3 1 1.9 0 3-.9 3-2.4 0-1.4-.8-2-2.3-2.6l-.8-.3c-.9-.4-1.4-.7-1.4-1.3 0-.6.5-1.1 1.4-1.1.8 0 1.5.3 2 .8l1.1-1.3c-.8-.7-1.8-1.1-3.1-1.1-1.8 0-3 1-3 2.5 0 1.3.8 2 2.1 2.5l.8.3c1 .4 1.6.8 1.6 1.4 0 .7-.6 1.2-1.6 1.2-1.1 0-2-.5-2.6-1.2l-1.2 1.5z" fill="#000000" />
        </svg>
      );

    case "TypeScript":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 13.5H9.2v6.5H7.5v-6.5H5.2V12h6.3v1.5zm3.8 2.3c.7.4 1.4.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1.1-2.1-2.2 0-1.3 1.1-2.3 2.8-2.3 1 0 1.8.3 2.4.7l-.6 1.3c-.6-.4-1.2-.6-1.8-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.4.5 2.1 1.2 2.1 2.3 0 1.4-1.1 2.3-3 2.3-1.1 0-2.1-.3-2.8-.8l.7-1.3z" fill="#ffffff" />
        </svg>
      );

    case "SQL":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case "Bash":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#4EAA25" />
          <path d="M6 8l5 4-5 4M13 16h5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "MERN Stack":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );

    case "Next.js":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black dark:text-white" viewBox="0 0 180 180" fill="currentColor">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" className="dark:fill-black" />
          <rect fill="white" height="72" width="12" x="115" y="54" className="dark:fill-black" />
        </svg>
      );

    case "Node.js":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#5FA04E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.986 16.147L12 22.684l-7.986-4.537V8.927L12 4.39l7.986 4.537v9.22z"/>
        </svg>
      );

    case "Express.js":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 dark:text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.8 13.5l-2.2-3.3-2.2 3.3H9.8l3.1-4.6-3-4.4h1.7l2.1 3.2 2.1-3.2h1.6l-3 4.4 3.1 4.6z"/>
        </svg>
      );

    case "Laravel":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.2 5.3l-8.6-5a1.2 1.2 0 0 0-1.2 0l-8.6 5a1.2 1.2 0 0 0-.6 1v10.3c0 .4.2.8.6 1l8.6 5c.4.2.8.2 1.2 0l8.6-5c.4-.2.6-.6.6-1V6.3c0-.4-.2-.8-.6-1zm-9.2 14.5L4.8 15.6V7.7l7.2 4.2v7.9zm1-8.9L5.8 6.7l6.2-3.6 6.2 3.6-5.2 4.2zm6.2 4.7l-5.2 3v-7.8l5.2-4.2v9z"/>
        </svg>
      );

    case "Spring Boot":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 12.3c-.6 5-4.5 9-9.5 9.5a10 10 0 0 1-10.4-10.4C2.1 6.4 6 2.5 11 .8c.4-.1.8.2.7.6-.8 3.5.7 6.4 3.5 8.3 2 1.3 4.3 2 6.1 2.3.4.1.4.6-.2.9zM12 4.4C8 5.7 5.2 9.4 5.2 13.7c0 4.8 3.9 8.7 8.7 8.7 4.1 0 7.6-2.9 8.6-6.8-2.6-.3-5.3-1.4-7.4-3.1-2.4-1.9-4-4.8-3.1-8.1z"/>
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF8533]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
        </svg>
      );

    case "HTML5":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.1 5.3H5.4l.4 4.2h11.9l-.5 5.5-5.2 1.4-5.2-1.4-.3-3.2H4.2l.6 5.5L12 20.7l7.2-2.4 1-9.9.4-3.1z"/>
        </svg>
      );

    case "CSS3":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.7 5.3H5.4l.3 3.6h9.5l-.3 3.5H5.8l.3 3.6h8.8l-.5 4.8-4.4 1.2-4.4-1.2-.2-2.4H3.5l.5 4.6 8 2.2 8-2.2 1.2-13.7.2-3.6z"/>
        </svg>
      );

    case "MongoDB":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.18-4.223-7.707-4.59-8.016a.933.933 0 0 0-1.206 0c-.367.309-3.326 2.836-4.59 8.016-1.42 5.825 1.056 10.382 4.795 12.359.183.097.387.145.591.145.204 0 .408-.048.591-.145 3.739-1.977 6.215-6.534 4.409-12.359zm-5.193 11.23V2.42c.792.83 3.498 3.993 4.218 8.618.995 6.402-2.735 9.176-4.218 9.747z"/>
        </svg>
      );

    case "MySQL":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#4479A1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.5 14.5c-1.5 1-3.5 1.2-5 .5s-2.5-2.2-2.5-3.8c0-2.5 2-4.2 4.5-4.2 1.8 0 3.2.8 4 2.2l-1.5.9c-.5-.9-1.4-1.4-2.5-1.4-1.5 0-2.7 1.1-2.7 2.5s1.2 2.5 2.7 2.5c.8 0 1.6-.4 2.2-1v-1.2h-2.2v-1.6H18v3.6h-1.5z"/>
        </svg>
      );

    case "PostgreSQL":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A6 6 0 0 1 6.07 13H6v-2h.07A6 6 0 0 1 11 6.07V6h2v.07A6 6 0 0 1 17.93 11H18v2h-.07A6 6 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/>
        </svg>
      );

    case "RESTful APIs":
    case "JAX-RS":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="4" />
          <path d="M6 12h4m4 0h4" />
        </svg>
      );

    case "Postman":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l3 3 5-6" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "Git & GitHub":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.7 11.2l-8.9-8.9a2.3 2.3 0 0 0-3.3 0L7.3 4.5l3.2 3.2a2.3 2.3 0 0 1 2.8 2.8l3.1 3.1a2.3 2.3 0 1 1-1.6 1.6l-2.9-2.9v4.2a2.3 2.3 0 1 1-2.3 0V9.8a2.3 2.3 0 0 1-1.2-3L5 4.3 2.3 7a2.3 2.3 0 0 0 0 3.3l8.9 8.9a2.3 2.3 0 0 0 3.3 0l7.2-7.2a2.3 2.3 0 0 0 0-3.8z"/>
        </svg>
      );

    case "Docker":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zM23.978 11.7a3.486 3.486 0 0 0-1.898-1.574c-.468-.184-.969-.28-1.487-.282a5.577 5.577 0 0 0-1.87.319c-.38-.857-1.049-1.532-1.905-1.916V8.18H1.36a1.36 1.36 0 0 0-1.36 1.36v2.308c0 3.235 1.572 6.069 4.14 7.785 1.765 1.176 3.864 1.867 6.12 1.867 6.46 0 11.967-4.475 13.518-10.42.067-.28.1-.567.1-.856 0-.175-.034-.347-.1-.504z"/>
        </svg>
      );

    case "VS Code":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 1.5l-9.8 9.1L4.2 8 1.5 9.3l4.5 3.7-4.5 3.7 2.7 1.3 3.5-2.6 9.8 9.1 5-2.5V4l-5-2.5zm1.5 16.5l-6-5 6-5v10z"/>
        </svg>
      );

    case "npm":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#CB3837]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 1.5v21h21V1.5H1.5zm16.5 16.5h-4.5V9h-3v9H4.5V6h13.5v12z"/>
        </svg>
      );

    case "Machine Learning":
    case "Fine-Tuning Models":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
      );

    case "RAG (Retrieval-Augmented Generation) Applications":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );

    case "OpenCV":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="6" r="3.2" stroke="#EA2F29" strokeWidth="2.4"/>
          <circle cx="6.8" cy="16" r="3.2" stroke="#37A837" strokeWidth="2.4"/>
          <circle cx="17.2" cy="16" r="3.2" stroke="#2562DC" strokeWidth="2.4"/>
        </svg>
      );

    case "MediaPipe":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A0E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );

    case "AI Integration":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
      );

    case "IoT & Hardware":
    case "MicroPython":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
        </svg>
      );

    case "Servo Motors":
    case "DC Motors":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
        </svg>
      );

    case "Ultrasonic Sensors":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="10" rx="3" />
          <circle cx="8" cy="12" r="2.5" />
          <circle cx="16" cy="12" r="2.5" />
        </svg>
      );

    case "Networking":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M5 9v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M12 13v2" />
        </svg>
      );

    case "Data Structures & Algorithms":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="10" y1="7" x2="6.5" y2="16.5" />
          <line x1="14" y1="7" x2="17.5" y2="16.5" />
        </svg>
      );

    case "Robotics":
    case "AI & Robotics Projects":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="8.5" cy="16" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="16" r="1.5" fill="currentColor" />
          <path d="M12 2v4M8 6h8M2 15h1M21 15h1" />
        </svg>
      );

    case "Automation":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );

    case "Computer":
    case "Basics of computer":
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );

    case "Full-Stack Development":
    default:
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}
