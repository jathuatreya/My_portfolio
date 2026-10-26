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
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { HeroBackgroundCanvas } from "./HeroBackgroundCanvas";

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
                         <div className="w-full lg:w-[380px] xl:w-[440px] 2xl:w-[500px] flex flex-col justify-center text-left items-start space-y-6 sm:space-y-8 shrink-0 -translate-y-6 sm:-translate-y-8 lg:-translate-y-24 xl:-translate-y-32 2xl:-translate-y-36">
                              <ScrollReveal className="w-full space-y-3 sm:space-y-4">
                                   {/* 1. Large Bold Heading: Hi, I'm Jathushan Varnakulasingam */}
                                   <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-[1.12]">
                                        <span className="block mb-1 sm:mb-2">
                                             Hi <span className="animate-wave inline-block origin-[70%_70%] select-none">👋</span>, I&apos;m
                                        </span>
                                        <span className="text-[#0077ED] block">
                                             Jathushan
                                        </span>
                                        <span className="text-[#0077ED] block">
                                             Varnakulasingam
                                        </span>
                                   </h1>

                                   {/* 2. Typewriter Role: I'm a IoT Innovator| */}
                                   <div className="min-h-[32px] sm:min-h-[40px] flex items-center">
                                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0077ED] tracking-tight">
                                             {t.hero.role_prefix}{" "}
                                             <span>{displayText}</span>
                                             <span className="inline-block w-[3px] h-6 sm:h-7 bg-[#0077ED] ml-1 animate-pulse align-middle"></span>
                                        </p>
                                   </div>

                                   {/* 3. Bio Description */}
                                   <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[320px] sm:max-w-[360px] lg:max-w-[330px] xl:max-w-[380px]">
                                        {t.hero.description}
                                   </p>
                                    {/* 4. Social Media Icons */}
                                    <div className="flex items-center gap-3 sm:gap-4 pt-1">
                                         <a
                                              href={profile.social.linkedin}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25 hover:-translate-y-1 hover:scale-105"
                                              aria-label="LinkedIn"
                                              title="LinkedIn"
                                         >
                                              <Linkedin size={18} />
                                         </a>
                                         <a
                                              href={profile.social.github}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25 hover:-translate-y-1 hover:scale-105"
                                              aria-label="GitHub"
                                              title="GitHub"
                                         >
                                              <Github size={18} />
                                         </a>
                                         <a
                                              href={profile.social.twitter}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25 hover:-translate-y-1 hover:scale-105"
                                              aria-label="Twitter"
                                              title="Twitter"
                                         >
                                              <Twitter size={18} />
                                         </a>
                                         <a
                                              href={profile.social.facebook}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25 hover:-translate-y-1 hover:scale-105"
                                              aria-label="Facebook"
                                              title="Facebook"
                                         >
                                              <Facebook size={18} />
                                         </a>
                                         <a
                                              href={profile.social.instagram}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-black/5 dark:bg-[#131f33] border border-black/10 dark:border-[#0077ED]/30 text-[#0077ED] hover:bg-[#0077ED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#0077ED]/25 hover:-translate-y-1 hover:scale-105"
                                              aria-label="Instagram"
                                              title="Instagram"
                                         >
                                              <Instagram size={18} />
                                         </a>
                                    </div>
                              </ScrollReveal>
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
                          {/* RIGHT PANEL: Technologies & Languages (1 Per Line)   */}
                          {/* ==================================================== */}
                          <div className="w-full lg:w-[330px] xl:w-[370px] 2xl:w-[400px] shrink-0 lg:ml-auto flex flex-col lg:-translate-y-6 xl:-translate-y-12">
                               <ScrollReveal delay={0.2} className="w-full">
                                    <div className="bg-white/80 dark:bg-[#121824]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:border-[#0077ED]/40 transition-all duration-300">
                                         {/* Card Header */}
                                         <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-black/5 dark:border-white/5">
                                              <div className="flex items-center gap-2">
                                                   <div className="w-7 h-7 rounded-lg bg-[#0077ED]/10 text-[#0077ED] flex items-center justify-center">
                                                        <Code2 size={16} />
                                                   </div>
                                                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                                        Core Technologies
                                                   </span>
                                              </div>
                                              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0077ED]/10 text-[#0077ED]">
                                                   Verified Stack
                                              </span>
                                         </div>

                                         {/* Tech List — One Per Line with Official Brand Icons */}
                                         <div className="flex flex-col gap-2">
                                              {/* 1. Next.js */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 180 180" fill="currentColor">
                                                                  <circle cx="90" cy="90" r="90" fill="currentColor" />
                                                                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" className="dark:fill-black" />
                                                                  <rect fill="white" height="72" width="12" x="115" y="54" className="dark:fill-black" />
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             Next.js 16
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Framework
                                                   </span>
                                              </div>

                                              {/* 2. React */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                                                                  <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
                                                                  <g stroke="#00D8FF" strokeWidth="1" fill="none">
                                                                       <ellipse rx="11" ry="4.2"/>
                                                                       <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                                                       <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                                                                  </g>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             React 19
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Library
                                                   </span>
                                              </div>

                                              {/* 3. TypeScript */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                                                  <rect width="24" height="24" rx="4" fill="#3178C6"/>
                                                                  <path d="M11.5 13.5H9.2v6.5H7.5v-6.5H5.2V12h6.3v1.5zm3.8 2.3c.7.4 1.4.7 2.1.7.7 0 1.1-.3 1.1-.7 0-.5-.4-.7-1.3-1-1.3-.4-2.1-1.1-2.1-2.2 0-1.3 1.1-2.3 2.8-2.3 1 0 1.8.3 2.4.7l-.6 1.3c-.6-.4-1.2-.6-1.8-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.3.9 1.4.5 2.1 1.2 2.1 2.3 0 1.4-1.1 2.3-3 2.3-1.1 0-2.1-.3-2.8-.8l.7-1.3z" fill="#ffffff"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             TypeScript
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Language
                                                   </span>
                                              </div>

                                              {/* 4. Python */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                                  <path fill="#3776AB" d="M11.927 0C6.074 0 6.444 2.548 6.444 2.548l.006 2.639h5.578v.831H4.218S0 5.56 0 11.458c0 5.898 3.682 5.679 3.682 5.679h2.197v-3.088s-.119-3.682 3.623-3.682h5.548s3.444.059 3.444-3.325V2.548S19.068 0 11.927 0zM8.887 1.838a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14z"/>
                                                                  <path fill="#FFD43B" d="M12.073 24c5.853 0 5.483-2.548 5.483-2.548l-.006-2.639h-5.578v-.831h7.81s4.218.458 4.218-5.44c0-5.898-3.682-5.679-3.682-5.679h-2.197v3.088s.119 3.682-3.623 3.682H8.98s-3.444-.059-3.444 3.325v4.459S4.932 24 12.073 24zm3.04-1.838a1.07 1.07 0 1 1 0-2.14 1.07 1.07 0 0 1 0 2.14z"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             Python
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        AI & Automation
                                                   </span>
                                              </div>

                                              {/* 5. Node.js */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#5FA04E">
                                                                  <path d="M12 2L2 7.773v11.547L12 25l10-5.68V7.773L12 2zm7.986 16.147L12 22.684l-7.986-4.537V8.927L12 4.39l7.986 4.537v9.22z"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             Node.js
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Backend
                                                   </span>
                                              </div>

                                              {/* 6. Tailwind CSS */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
                                                                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             Tailwind CSS
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        UI Design
                                                   </span>
                                              </div>

                                              {/* 7. MongoDB & PostgreSQL */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor">
                                                                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17h-2v-.07A6 6 0 0 1 6.07 13H6v-2h.07A6 6 0 0 1 11 6.07V6h2v.07A6 6 0 0 1 17.93 11H18v2h-.07A6 6 0 0 1 13 16.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             MongoDB / PostgreSQL
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Database
                                                   </span>
                                              </div>

                                              {/* 8. Docker */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
                                                                  <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185zM23.978 11.7a3.486 3.486 0 0 0-1.898-1.574c-.468-.184-.969-.28-1.487-.282a5.577 5.577 0 0 0-1.87.319c-.38-.857-1.049-1.532-1.905-1.916V8.18H1.36a1.36 1.36 0 0 0-1.36 1.36v2.308c0 3.235 1.572 6.069 4.14 7.785 1.765 1.176 3.864 1.867 6.12 1.867 6.46 0 11.967-4.475 13.518-10.42.067-.28.1-.567.1-.856 0-.175-.034-.347-.1-.504z"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             Docker
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        DevOps
                                                   </span>
                                              </div>

                                              {/* 9. IoT & Robotics */}
                                              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#F5F5F7] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/40 hover:bg-[#0077ED]/5 transition-all duration-200 group cursor-default">
                                                   <div className="flex items-center gap-2.5 sm:gap-3">
                                                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                                             <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                                                                  <rect x="9" y="9" width="6" height="6"/>
                                                                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
                                                             </svg>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-white group-hover:text-[#0077ED] transition-colors">
                                                             IoT & Robotics
                                                        </span>
                                                   </div>
                                                   <span className="text-[10px] sm:text-[11px] font-medium text-gray-400 dark:text-gray-500 px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05]">
                                                        Hardware
                                                   </span>
                                              </div>
                                         </div>
                                    </div>
                               </ScrollReveal>
                          </div>

                    </div>
               </div>
          </section>
     );
}
