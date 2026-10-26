"use client";

import { profile } from "../data/portfolio-data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { HeroBackgroundCanvas } from "./HeroBackgroundCanvas";


const heroTechnologies = [
     {
          name: "Next.js 16",
          role: "Framework",
          posDesktop: "top-[4%] left-[10%]",
          posMobile: "top-[4%] left-[4%]",
          floatY: [-14, 8, -14],
          floatX: [0, 8, 0],
          rotate: [-3, 4, -3],
          duration: 4.6,
          delay: 0,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-black dark:text-white" viewBox="0 0 180 180" fill="currentColor">
                    <circle cx="90" cy="90" r="90" fill="currentColor" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" className="dark:fill-black" />
                    <rect fill="white" height="72" width="12" x="115" y="54" className="dark:fill-black" />
               </svg>
          ),
     },
     {
          name: "Python",
          role: "AI & Core",
          posDesktop: "top-[2%] right-[8%]",
          posMobile: "top-[2%] right-[6%]",
          floatY: [12, -10, 12],
          floatX: [0, -7, 0],
          rotate: [4, -3, 4],
          duration: 5.2,
          delay: 0.3,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                    <path fill="#3776AB" d="M11.927 0C6.074 0 6.444 2.548 6.444 2.548l.006 2.639h5.578v.831H4.218S0 5.56 0 11.458c0 5.898 3.682 5.679 3.682 5.679h2.197v-3.088s-.119-3.682 3.623-3.682h5.548s3.444.059 3.444-3.325V2.548S19.068 0 11.927 0zM8.887 1.838a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z"/>
                    <path fill="#FFD43B" d="M12.073 24c5.853 0 5.483-2.548 5.483-2.548l-.006-2.639h-5.578v-.831h7.81s4.218.458 4.218-5.44c0-5.898-3.682-5.679-3.682-5.679h-2.197v3.088s.119 3.682-3.623 3.682H8.98s-3.444-.059-3.444 3.325v4.459S4.932 24 12.073 24zm3.04-1.838a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z"/>
               </svg>
          ),
     },
     {
          name: "Node.js",
          role: "Backend",
          posDesktop: "top-[23%] left-[44%]",
          posMobile: "top-[34%] left-[40%]",
          floatY: [-10, 12, -10],
          floatX: [6, -4, 6],
          rotate: [-4, 3, -4],
          duration: 4.1,
          delay: 0.7,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="#5FA04E">
                    <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.986 16.147L12 22.684l-7.986-4.537V8.927L12 4.39l7.986 4.537v9.22z"/>
               </svg>
          ),
     },
     {
          name: "PostgreSQL",
          role: "Database",
          posDesktop: "top-[25%] left-[2%]",
          posMobile: "top-[34%] left-[6%]",
          floatY: [14, -8, 14],
          floatX: [-5, 6, -5],
          rotate: [3, -5, 3],
          duration: 4.9,
          delay: 0.2,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A6 6 0 0 1 6.07 13H6v-2h.07A6 6 0 0 1 11 6.07V6h2v.07A6 6 0 0 1 17.93 11H18v2h-.07A6 6 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/>
               </svg>
          ),
     },
     {
          name: "TensorFlow",
          role: "Machine Learning",
          posDesktop: "top-[36%] right-[8%]",
          posMobile: "top-[34%] right-[6%]",
          floatY: [-16, 10, -16],
          floatX: [-7, 5, -7],
          rotate: [-5, 4, -5],
          duration: 5.6,
          delay: 0.5,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.292 5.856L11.54 0v24l-4.095-2.395V7.869L3.35 10.264l-2.058-4.408zm21.416 0l-2.058 4.408-4.095-2.395v13.736L12.46 24V0l10.248 5.856z"/>
               </svg>
          ),
     },
     {
          name: "PyTorch",
          role: "Deep Learning",
          posDesktop: "top-[48%] left-[16%]",
          posMobile: "top-[66%] left-[10%]",
          floatY: [10, -12, 10],
          floatX: [7, -6, 7],
          rotate: [4, -3, 4],
          duration: 3.9,
          delay: 0.8,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.923 0a11.968 11.968 0 00-2.327.227l2.84 2.84a8.966 8.966 0 011.85-.192c4.958 0 8.992 4.034 8.992 8.992 0 4.958-4.034 8.992-8.992 8.992a8.966 8.966 0 01-8.992-8.992c0-1.85.56-3.57 1.516-5l-2.13-2.13A11.93 11.93 0 00.72 11.867C.72 18.498 6.09 23.867 12.72 23.867c6.63 0 12-5.37 12-12S19.553 0 12.923 0zm2.74 3.738a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
               </svg>
          ),
     },
     {
          name: "OpenCV",
          role: "Computer Vision",
          posDesktop: "top-[58%] right-[20%]",
          posMobile: "top-[64%] right-[38%]",
          floatY: [-12, 14, -12],
          floatX: [-6, 8, -6],
          rotate: [-3, 5, -3],
          duration: 4.7,
          delay: 0.4,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="3.2" stroke="#EA2F29" strokeWidth="2.4"/>
                    <circle cx="6.8" cy="16" r="3.2" stroke="#37A837" strokeWidth="2.4"/>
                    <circle cx="17.2" cy="16" r="3.2" stroke="#2562DC" strokeWidth="2.4"/>
               </svg>
          ),
     },
     {
          name: "Docker",
          role: "DevOps",
          posDesktop: "top-[72%] left-[4%]",
          posMobile: "top-[68%] right-[6%]",
          floatY: [14, -10, 14],
          floatX: [6, -5, 6],
          rotate: [5, -4, 5],
          duration: 4.3,
          delay: 0.9,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zM23.978 11.7a3.486 3.486 0 0 0-1.898-1.574c-.468-.184-.969-.28-1.487-.282a5.577 5.577 0 0 0-1.87.319c-.38-.857-1.049-1.532-1.905-1.916V8.18H1.36a1.36 1.36 0 0 0-1.36 1.36v2.308c0 3.235 1.572 6.069 4.14 7.785 1.765 1.176 3.864 1.867 6.12 1.867 6.46 0 11.967-4.475 13.518-10.42.067-.28.1-.567.1-.856 0-.175-.034-.347-.1-.504z"/>
               </svg>
          ),
     },
     {
          name: "GitHub Actions",
          role: "DevOps & CI/CD",
          posDesktop: "top-[78%] right-[10%]",
          posMobile: "top-[4%] left-[44%]",
          floatY: [-10, 12, -10],
          floatX: [-5, 6, -5],
          rotate: [-4, 3, -4],
          duration: 5.4,
          delay: 0.6,
          icon: (
               <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#2088FF]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
               </svg>
          ),
     },
];

const heroSocialLinks = [
     {
          href: profile.social.linkedin,
          label: "LinkedIn",
          buttonClass: "text-[#0A66C2] border-[#0A66C2]/25 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[#0A66C2]/35",
          icon: (
               <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
               </svg>
          ),
     },
     {
          href: profile.social.github,
          label: "GitHub",
          buttonClass: "text-[#24292e] dark:text-white border-black/15 dark:border-white/20 hover:bg-[#24292e] dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-[#24292e] dark:hover:border-white hover:shadow-black/25",
          icon: (
               <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
               </svg>
          ),
     },
     {
          href: profile.social.twitter,
          label: "X (Twitter)",
          buttonClass: "text-black dark:text-white border-black/15 dark:border-white/20 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:shadow-black/25",
          icon: (
               <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>
          ),
     },
     {
          href: profile.social.facebook,
          label: "Facebook",
          buttonClass: "text-[#1877F2] border-[#1877F2]/25 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[#1877F2]/35",
          icon: (
               <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
               </svg>
          ),
     },
     {
          href: profile.social.instagram,
          label: "Instagram",
          buttonClass: "text-[#E1306C] border-[#E1306C]/25 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent hover:shadow-[#DD2A7B]/40 group/ig",
          icon: (
               <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                    <defs>
                         <linearGradient id="hero-ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f09433" />
                              <stop offset="25%" stopColor="#e6683c" />
                              <stop offset="50%" stopColor="#dc2743" />
                              <stop offset="75%" stopColor="#cc2366" />
                              <stop offset="100%" stopColor="#bc1888" />
                         </linearGradient>
                    </defs>
                    <path
                         className="group-hover/ig:fill-white transition-colors"
                         fill="url(#hero-ig-gradient)"
                         d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
               </svg>
          ),
     },
     {
          href: profile.social.whatsapp,
          label: "WhatsApp",
          buttonClass: "text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[#25D366]/35",
          icon: (
               <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.894.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 6.577c-1.898 0-3.673-.518-5.205-1.42l-.373-.222-3.867 1.014 1.032-3.77-.243-.387A9.882 9.882 0 012.05 12.04c0-5.467 4.453-9.92 9.929-9.92 2.65 0 5.14 1.032 7.012 2.907a9.855 9.855 0 012.905 7.014c0 5.469-4.452 9.923-9.843 9.923zm0-18c-6.657 0-12.05 5.393-12.05 12.05 0 2.127.555 4.198 1.609 6.014L0 24l6.115-1.604a11.996 11.996 0 005.844 1.503c6.658 0 12.05-5.392 12.05-12.05 0-3.218-1.253-6.243-3.528-8.52A12.003 12.003 0 0012.053 2.96z" />
               </svg>
          ),
     },
];

export default function Hero() {
     const { t } = useLanguage();
     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
     const [displayText, setDisplayText] = useState("");
     const [isDeleting, setIsDeleting] = useState(false);

     useEffect(() => {
          const currentRole = profile.roles[currentRoleIndex];
          const typingSpeed = isDeleting ? 30 : 50;

          const timer = setTimeout(() => {
               if (!isDeleting) {
                    if (displayText.length < currentRole.length) {
                         setDisplayText(currentRole.substring(0, displayText.length + 1));
                    } else {
                         setTimeout(() => setIsDeleting(true), 2000);
                    }
               } else {
                    if (displayText.length > 0) {
                         setDisplayText(currentRole.substring(0, displayText.length - 1));
                    } else {
                         setIsDeleting(false);
                         setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
                    }
               }
          }, typingSpeed);

          return () => clearTimeout(timer);
     }, [displayText, isDeleting, currentRoleIndex]);

     return (
          <section
               id="home"
               className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex flex-col justify-between pt-2 sm:pt-4 pb-0 bg-white dark:bg-[#0a0a0a] overflow-hidden"
          >
               {/* 1. Animated Particle Network Canvas */}
               <HeroBackgroundCanvas />

               {/* 2. Soft Ambient Lighting Behind Central Portrait */}
               <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[750px] md:w-[950px] lg:w-[1250px] xl:w-[1500px] h-[450px] sm:h-[600px] lg:h-[750px] xl:h-[880px] bg-gradient-to-t from-primary/30 via-blue-600/20 to-transparent rounded-t-full blur-3xl pointer-events-none -z-0"
               />

               {/* 3. Corner Accent Lighting */}
               <div
                    aria-hidden="true"
                    className="absolute top-8 left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-0"
               />
               <div
                    aria-hidden="true"
                    className="absolute top-10 right-6 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-0"
               />


               {/* ========================================================= */}
               {/* 5. CLEAN CENTER PORTRAIT — FLUSH ON SCREEN BOTTOM BORDER  */}
               {/* ========================================================= */}
               <div
                    className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex-col items-center justify-end pointer-events-none select-none"
               >
                    <Image
                         src="/jathushan.png"
                         alt={profile.name}
                         width={1536}
                         height={1024}
                         priority
                         className="w-auto h-[750px] lg:h-[880px] xl:h-[980px] 2xl:h-[1100px] max-h-[86vh] xl:max-h-[89vh] max-w-[95vw] object-contain object-bottom block drop-shadow-[0_20px_55px_rgba(0,119,237,0.28)] dark:drop-shadow-[0_25px_70px_rgba(0,119,237,0.4)]"
                    />
               </div>

               {/* ========================================================= */}
               {/* 5. MAIN CONTENT WRAPPER: LEFT & RIGHT FLANKING PANELS     */}
               {/* ========================================================= */}
               <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-20 my-auto pt-4 sm:pt-6 lg:pt-8 pb-4 lg:pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 w-full">
                         {/* ==================================================== */}
                         {/* LEFT PANEL: Exact Match to Screenshot Typography    */}
                         {/* ==================================================== */}
                         <div className="w-full lg:w-[380px] xl:w-[440px] 2xl:w-[500px] flex flex-col justify-center text-left items-start space-y-5 sm:space-y-7 shrink-0 translate-y-0 lg:-translate-y-20 xl:-translate-y-28 2xl:-translate-y-32">
                              <div className="w-full space-y-3 sm:space-y-4">
                                   {/* 1. First: Animated "Hi 👋," */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                                   >
                                        <span className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12] block mb-1 sm:mb-2">
                                             Hi <span className="animate-wave inline-block origin-[70%_70%] select-none">👋</span>,
                                        </span>
                                   </motion.div>

                                   {/* 2. Second: Animated Name "I'm Jathushan Varnakulasingam" */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
                                   >
                                        <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12] break-words">
                                             <span className="block">
                                                  I&apos;m <span className="text-[#0077ED]">Jathushan</span>
                                             </span>
                                             <span className="text-[#0077ED] block">
                                                  Varnakulasingam
                                             </span>
                                        </h1>
                                   </motion.div>

                                   {/* 3. Typewriter Role */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                                        className="min-h-[32px] sm:min-h-[40px] flex items-center"
                                   >
                                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0077ED] tracking-tight">
                                             {t.hero.role_prefix}{" "}
                                             <span>{displayText}</span>
                                             <span className="inline-block w-[3px] h-6 sm:h-7 bg-[#0077ED] ml-1 animate-pulse align-middle"></span>
                                        </p
                                   ></motion.div>

                                   {/* 4. Third: Bio Description */}
                                   <motion.p
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.95, ease: "easeOut" }}
                                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[320px] sm:max-w-[360px] lg:max-w-[330px] xl:max-w-[380px]"
                                   >
                                        {t.hero.description}
                                   </motion.p>

                                    </div>
                          </div>

                          {/* ==================================================== */}
                         {/* MOBILE/TABLET CENTER PORTRAIT (< lg)                 */}
                         {/* ==================================================== */}
                         <div className="lg:hidden flex flex-col justify-end items-center relative w-full pt-2 pb-0">
                              <ScrollReveal className="relative w-full flex justify-center items-end" delay={0.12}>
                                   <Image
                                        src="/jathushan.png"
                                        alt={profile.name}
                                        width={1536}
                                        height={1024}
                                        priority
                                        className="w-full max-w-[680px] sm:max-w-[780px] h-auto object-contain object-bottom block select-none drop-shadow-[0_20px_50px_rgba(0,119,237,0.25)]"
                                   />
                              </ScrollReveal>
                         </div>
                           {/* ==================================================== */}
                            {/* RIGHT PANEL: Free-Floating Random Tech Icons (No Rigid Box) */}
                            {/* ==================================================== */}
                            <div className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] shrink-0 lg:ml-auto flex flex-col lg:self-start translate-y-0 lg:-translate-y-16 xl:-translate-y-24 2xl:-translate-y-28 lg:translate-x-4 xl:translate-x-8">
                                 <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[480px] xl:h-[520px]">
                                      {heroTechnologies.map((item, index) => (
                                           <motion.div
                                                key={item.name}
                                                initial={{ opacity: 0, scale: 0.6 }}
                                                animate={{
                                                     opacity: 1,
                                                     scale: 1,
                                                     y: item.floatY,
                                                     x: item.floatX,
                                                     rotate: item.rotate,
                                                }}
                                                transition={{
                                                     opacity: { duration: 0.5, delay: 1.2 + index * 0.08 },
                                                     scale: { duration: 0.5, delay: 1.2 + index * 0.08 },
                                                     y: {
                                                          duration: item.duration,
                                                          repeat: Infinity,
                                                          ease: "easeInOut",
                                                          delay: item.delay,
                                                     },
                                                     x: {
                                                          duration: item.duration * 1.15,
                                                          repeat: Infinity,
                                                          ease: "easeInOut",
                                                          delay: item.delay * 0.8,
                                                     },
                                                     rotate: {
                                                          duration: item.duration * 1.3,
                                                          repeat: Infinity,
                                                          ease: "easeInOut",
                                                          delay: item.delay * 0.5,
                                                     },
                                                }}
                                                whileHover={{
                                                     scale: 1.25,
                                                     zIndex: 50,
                                                     transition: { duration: 0.2 },
                                                }}
                                                className={`absolute ${item.posMobile} lg:${item.posDesktop} group flex items-center justify-center cursor-pointer`}
                                           >
                                                {/* Glass Squircle Bubble */}
                                                <div className="relative w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-2xl bg-white/80 dark:bg-[#0c121e]/80 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-xl shadow-black/5 dark:shadow-black/40 hover:border-[#0077ED] hover:bg-[#0077ED]/15 hover:shadow-[0_0_25px_rgba(0,119,237,0.4)] flex items-center justify-center p-2.5 transition-colors duration-200">
                                                     {/* Glowing Hover Halo */}
                                                     <div className="absolute inset-0 rounded-2xl bg-[#0077ED]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none" />

                                                     {/* Tech Icon */}
                                                     <div className="relative z-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                                          {item.icon}
                                                     </div>

                                                     {/* Interactive Floating Tooltip Badge */}
                                                     <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-neutral-900/95 dark:bg-white/95 text-white dark:text-neutral-900 text-[11px] font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none z-50 shadow-xl shadow-black/30 border border-white/10 dark:border-black/10 flex items-center gap-1.5">
                                                          <span>{item.name}</span>
                                                          <span className="text-[#0077ED] text-[10px]">•</span>
                                                          <span className="text-gray-400 dark:text-gray-600 text-[10px] font-normal">{item.role}</span>
                                                     </div>
                                                </div>
                                           </motion.div>
                                      ))}
                                 </div>
                            </div>

                     </div>
                </div>
                {/* ========================================================= */}
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
                               className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-[#0c121e]/90 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-md shadow-black/5 dark:shadow-black/30 transition-all duration-300 ${social.buttonClass}`}
                               aria-label={social.label}
                               title={social.label}
                          >
                               {social.icon}
                          </motion.a>
                     ))}
                </motion.div>
           </section>
     );
}
