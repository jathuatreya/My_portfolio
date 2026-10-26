"use client";

import {
     Linkedin,
     Github,
     Twitter,
     Facebook,
     Instagram,
     Code2,
     Wrench,
} from "lucide-react";
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
          icon: (
               <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 180 180" fill="currentColor">
                    <circle cx="90" cy="90" r="90" fill="currentColor" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" className="dark:fill-black" />
                    <rect fill="white" height="72" width="12" x="115" y="54" className="dark:fill-black" />
               </svg>
          ),
     },
     {
          name: "React 19",
          role: "Library",
          icon: (
               <svg className="w-5 h-5 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
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
          name: "TypeScript",
          role: "Language",
          icon: (
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="4" fill="#3178C6"/>
                    <path d="M11.5 13.5H9.2v6.5H7.5v-6.5H5.2V12h6.3v1.5zm3.8 2.3c.7.4 1.4.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1.1-2.1-2.2 0-1.3 1.1-2.3 2.8-2.3 1 0 1.8.3 2.4.7l-.6 1.3c-.6-.4-1.2-.6-1.8-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.4.5 2.1 1.2 2.1 2.3 0 1.4-1.1 2.3-3 2.3-1.1 0-2.1-.3-2.8-.8l.7-1.3z" fill="#ffffff"/>
               </svg>
          ),
     },
     {
          name: "Python",
          role: "AI & Core",
          icon: (
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#3776AB" d="M11.927 0C6.074 0 6.444 2.548 6.444 2.548l.006 2.639h5.578v.831H4.218S0 5.56 0 11.458c0 5.898 3.682 5.679 3.682 5.679h2.197v-3.088s-.119-3.682 3.623-3.682h5.548s3.444.059 3.444-3.325V2.548S19.068 0 11.927 0zM8.887 1.838a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z"/>
                    <path fill="#FFD43B" d="M12.073 24c5.853 0 5.483-2.548 5.483-2.548l-.006-2.639h-5.578v-.831h7.81s4.218.458 4.218-5.44c0-5.898-3.682-5.679-3.682-5.679h-2.197v3.088s.119 3.682-3.623 3.682H8.98s-3.444-.059-3.444 3.325v4.459S4.932 24 12.073 24zm3.04-1.838a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z"/>
               </svg>
          ),
     },
     {
          name: "TensorFlow",
          role: "Machine Learning",
          icon: (
               <svg className="w-5 h-5 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.292 5.856L11.54 0v24l-4.095-2.395V7.869L3.35 10.264l-2.058-4.408zm21.416 0l-2.058 4.408-4.095-2.395v13.736L12.46 24V0l10.248 5.856z"/>
               </svg>
          ),
     },
     {
          name: "PyTorch",
          role: "Deep Learning",
          icon: (
               <svg className="w-5 h-5 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.923 0a11.968 11.968 0 00-2.327.227l2.84 2.84a8.966 8.966 0 011.85-.192c4.958 0 8.992 4.034 8.992 8.992 0 4.958-4.034 8.992-8.992 8.992a8.966 8.966 0 01-8.992-8.992c0-1.85.56-3.57 1.516-5l-2.13-2.13A11.93 11.93 0 00.72 11.867C.72 18.498 6.09 23.867 12.72 23.867c6.63 0 12-5.37 12-12S19.553 0 12.923 0zm2.74 3.738a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
               </svg>
          ),
     },
     {
          name: "OpenCV",
          role: "Computer Vision",
          icon: (
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="3.2" stroke="#EA2F29" strokeWidth="2.4"/>
                    <circle cx="6.8" cy="16" r="3.2" stroke="#37A837" strokeWidth="2.4"/>
                    <circle cx="17.2" cy="16" r="3.2" stroke="#2562DC" strokeWidth="2.4"/>
               </svg>
          ),
     },
     {
          name: "Node.js",
          role: "Backend",
          icon: (
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5FA04E">
                    <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.986 16.147L12 22.684l-7.986-4.537V8.927L12 4.39l7.986 4.537v9.22z"/>
               </svg>
          ),
     },
     {
          name: "Tailwind CSS",
          role: "UI Design",
          icon: (
               <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
               </svg>
          ),
     },
     {
          name: "MongoDB / PostgreSQL",
          role: "Database",
          icon: (
               <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A6 6 0 0 1 6.07 13H6v-2h.07A6 6 0 0 1 11 6.07V6h2v.07A6 6 0 0 1 17.93 11H18v2h-.07A6 6 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/>
               </svg>
          ),
     },
     {
          name: "Docker",
          role: "DevOps",
          icon: (
               <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zM23.978 11.7a3.486 3.486 0 0 0-1.898-1.574c-.468-.184-.969-.28-1.487-.282a5.577 5.577 0 0 0-1.87.319c-.38-.857-1.049-1.532-1.905-1.916V8.18H1.36a1.36 1.36 0 0 0-1.36 1.36v2.308c0 3.235 1.572 6.069 4.14 7.785 1.765 1.176 3.864 1.867 6.12 1.867 6.46 0 11.967-4.475 13.518-10.42.067-.28.1-.567.1-.856 0-.175-.034-.347-.1-.504z"/>
               </svg>
          ),
     },
     {
          name: "IoT & Robotics",
          role: "Hardware",
          icon: (
               <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
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
               <div className="w-[80%] mx-auto relative z-20 my-auto pt-4 sm:pt-6 lg:pt-8 pb-4 lg:pb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 w-full">
                         {/* ==================================================== */}
                         {/* LEFT PANEL: Exact Match to Screenshot Typography    */}
                         {/* ==================================================== */}
                         <div className="w-full lg:w-[380px] xl:w-[440px] 2xl:w-[500px] flex flex-col justify-center text-left items-start space-y-6 sm:space-y-8 shrink-0 -translate-y-4 sm:-translate-y-6 lg:-translate-y-20 xl:-translate-y-28 2xl:-translate-y-32">
                              <div className="w-full space-y-3 sm:space-y-4">
                                   {/* 1. First: Animated "Hi 👋," */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                                   >
                                        <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12] block mb-1 sm:mb-2">
                                             Hi <span className="animate-wave inline-block origin-[70%_70%] select-none">👋</span>,
                                        </span>
                                   </motion.div>

                                   {/* 2. Second: Animated Name "I'm Jathushan Varnakulasingam" */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
                                   >
                                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12]">
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

                                   {/* 5. Fourth: Social Media Icons (Sequential Stagger) */}
                                   <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={{
                                             hidden: { opacity: 0, y: 12 },
                                             visible: {
                                                  opacity: 1,
                                                  y: 0,
                                                  transition: {
                                                       delayChildren: 1.2,
                                                       staggerChildren: 0.08,
                                                  },
                                             },
                                        }}
                                        className="flex items-center flex-wrap gap-2.5 sm:gap-3.5 pt-1"
                                   >
                                        {[
                                             { href: profile.social.linkedin, label: "LinkedIn", icon: <Linkedin size={18} /> },
                                             { href: profile.social.github, label: "GitHub", icon: <Github size={18} /> },
                                             { href: profile.social.twitter, label: "Twitter", icon: <Twitter size={18} /> },
                                             { href: profile.social.facebook, label: "Facebook", icon: <Facebook size={18} /> },
                                             { href: profile.social.instagram, label: "Instagram", icon: <Instagram size={18} /> },
                                             {
                                                  href: profile.social.whatsapp,
                                                  label: "WhatsApp",
                                                  icon: (
                                                       <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.18-.175.2-.351.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.588-.492-.508-.676-.517l-.576-.01c-.2 0-.526.075-.802.376-.276.301-1.052 1.028-1.052 2.508 0 1.48 1.077 2.909 1.228 3.11.15.2 2.12 3.238 5.136 4.542.717.31 1.277.495 1.713.633.72.229 1.375.196 1.894.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 6.577c-1.898 0-3.673-.518-5.205-1.42l-.373-.222-3.867 1.014 1.032-3.77-.243-.387A9.882 9.882 0 012.05 12.04c0-5.467 4.453-9.92 9.929-9.92 2.65 0 5.14 1.032 7.012 2.907a9.855 9.855 0 012.905 7.014c0 5.469-4.452 9.923-9.843 9.923zm0-18c-6.657 0-12.05 5.393-12.05 12.05 0 2.127.555 4.198 1.609 6.014L0 24l6.115-1.604a11.996 11.996 0 005.844 1.503c6.658 0 12.05-5.392 12.05-12.05 0-3.218-1.253-6.243-3.528-8.52A12.003 12.003 0 0012.053 2.96z" />
                                                       </svg>
                                                  ),
                                             },
                                        ].map((social) => (
                                             <motion.a
                                                  key={social.label}
                                                  href={social.href}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  variants={{
                                                       hidden: { opacity: 0, scale: 0.8 },
                                                       visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                                                  }}
                                                  whileHover={{ scale: 1.08, y: -2 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25"
                                                  aria-label={social.label}
                                                  title={social.label}
                                             >
                                                  {social.icon}
                                             </motion.a>
                                        ))}
                                   </motion.div>
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
                           {/* RIGHT PANEL: Technologies & Languages (Transparent Glass) */}
                           {/* ==================================================== */}
                           <div className="w-full lg:w-[315px] xl:w-[345px] 2xl:w-[370px] shrink-0 lg:ml-auto flex flex-col lg:self-start -translate-y-4 sm:-translate-y-6 lg:-translate-y-20 xl:-translate-y-28 2xl:-translate-y-32 lg:translate-x-4 xl:translate-x-8 2xl:translate-x-10">
                                <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }} className="w-full">
                                     <div className="bg-white/[0.05] dark:bg-black/[0.15] backdrop-blur-md border border-black/10 dark:border-white/15 rounded-2xl p-3.5 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:border-[#0077ED]/40 transition-all duration-300">
                                          {/* Card Header */}
                                          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-black/10 dark:border-white/10">
                                               <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 rounded-lg bg-[#0077ED]/15 text-[#0077ED] flex items-center justify-center">
                                                         <Code2 size={16} />
                                                    </div>
                                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                                                         Core Technologies
                                                    </span>
                                               </div>
                                               <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0077ED]/15 text-[#0077ED] border border-[#0077ED]/20">
                                                    Verified Stack
                                               </span>
                                          </div>

                                          {/* Tech List — One Per Line with Staggered Entrance Animation */}
                                          <motion.div
                                               variants={{
                                                    hidden: { opacity: 0 },
                                                    visible: {
                                                         opacity: 1,
                                                         transition: {
                                                              staggerChildren: 0.08,
                                                              delayChildren: 1.7,
                                                         },
                                                    },
                                               }}
                                               initial="hidden"
                                               animate="visible"
                                               className="flex flex-col gap-1 sm:gap-1.5 overflow-visible"
                                          >
                                               {heroTechnologies.map((item) => (
                                                    <motion.div
                                                         key={item.name}
                                                         variants={{
                                                              hidden: { opacity: 0, x: 20 },
                                                              visible: {
                                                                   opacity: 1,
                                                                   x: 0,
                                                                   transition: { duration: 0.4, ease: "easeOut" },
                                                              },
                                                         }}
                                                         whileHover={{ x: 4 }}
                                                         transition={{ duration: 0.15 }}
                                                         className="flex items-center justify-between px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/[0.15] dark:bg-white/[0.03] backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.08] hover:border-[#0077ED]/50 hover:bg-[#0077ED]/15 transition-all duration-200 group cursor-default"
                                                    >
                                                         <div className="flex items-center gap-2.5 sm:gap-3">
                                                              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                                   {item.icon}
                                                              </div>
                                                              <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                                   {item.name}
                                                              </span>
                                                         </div>
                                                         <span className="text-[10px] sm:text-[11px] font-medium text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.06]">
                                                              {item.role}
                                                         </span>
                                                    </motion.div>
                                               ))}
                                          </motion.div>
                                     </div>
                                </motion.div>
                           </div>

                     </div>
                </div>
           </section>
     );
}
