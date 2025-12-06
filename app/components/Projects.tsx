"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/portfolio-data";
import { MagicCard, MagicContainer } from "./MagicCard";

export default function Projects() {
     const { t } = useLanguage();

     const targetRef = useRef<HTMLDivElement>(null);
     const contentRef = useRef<HTMLDivElement>(null);
     const [xScale, setXScale] = useState(["0px", "-100px"]);
     const [isMobile, setIsMobile] = useState(false);

     const { scrollYProgress } = useScroll({
          target: targetRef,
     });

     useEffect(() => {
          const handleResize = () => {
               const mobile = window.innerWidth < 1024;
               setIsMobile(mobile);

               if (contentRef.current && targetRef.current && !mobile) {
                    const contentWidth = contentRef.current.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    const maxTranslate = contentWidth - viewportWidth + 50; // smaller offset
                    setXScale(["0px", `-${maxTranslate}px`]);
               }
          };

          handleResize();
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     const x = useTransform(scrollYProgress, [0, 1], xScale);

     return (
          <section
               ref={targetRef}
               id="projects"
               className="relative bg-white dark:bg-[#0a0a0a] h-auto lg:h-[300vh] overflow-hidden lg:overflow-visible"
          >
               <div className="relative h-full lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
                    <MagicContainer className="relative w-full h-full flex flex-col justify-center">

                         {/* 🔵 Background Glow Elements (Smaller Size) */}
                         <div className="absolute top-0 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
                         <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                         <div className="absolute top-40 left-20 w-52 h-52 bg-emerald-400/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                         {/* 🔥 Header */}
                         <div className="container mx-auto max-w-6xl relative z-10 px-4 mb-10">
                              <div className="text-center">

                                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
                                        <Layers size={16} className="text-primary" />
                                        <span className="text-xs font-bold tracking-wide text-primary uppercase">
                                             {t.projects.tag}
                                        </span>
                                   </div>

                                   <h1 className="text-[#1D1D1F] dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                        {t.projects.title}
                                   </h1>

                                   <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-2 max-w-xl mx-auto">
                                        {t.projects.subtitle}
                                   </p>
                              </div>
                         </div>

                         {/* 🔥 Horizontal Scroll Cards */}
                         <motion.div
                              ref={contentRef}
                              style={{ x: isMobile ? 0 : x }}
                              className="flex gap-4 lg:gap-6 px-4 sm:px-8 lg:px-14 w-full overflow-x-auto lg:overflow-visible lg:w-max pb-6 snap-x snap-mandatory lg:snap-none hide-scrollbar"
                         >
                              {projects.map((project, index) => (
                                   <div
                                        key={index}
                                        className="shrink-0 w-[75vw] sm:w-[300px] md:w-[380px] snap-center"
                                   >
                                        <MagicCard className="flex flex-col bg-white dark:bg-[#121212] rounded-xl border border-gray-100 dark:border-slate-800 h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">

                                             {/* Image */}
                                             <div className="h-36 sm:h-44 relative overflow-hidden group">
                                                  <Image
                                                       src={project.image}
                                                       alt={project.title}
                                                       fill
                                                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                  />

                                                  {(project as any).featured && (
                                                       <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-primary/20 shadow-sm">
                                                            <Layers size={10} className="text-primary" />
                                                            <span className="text-[9px] font-bold tracking-wider text-primary uppercase">
                                                                 Featured
                                                            </span>
                                                       </div>
                                                  )}
                                             </div>

                                             {/* Content */}
                                             <div className="flex flex-col p-3 sm:p-4 flex-grow">
                                                  <div className="flex-grow">
                                                       <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white">
                                                            {project.title}
                                                       </h3>

                                                       <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                                                            {project.description}
                                                       </p>

                                                       {/* Tech Stack */}
                                                       <div className="mt-2">
                                                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                                                                 {t.projects.tech_stack}
                                                            </h4>

                                                            <div className="flex flex-wrap gap-1">
                                                                 {project.techStack.slice(0, 3).map((tech, i) => (
                                                                      <span
                                                                           key={i}
                                                                           className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30"
                                                                      >
                                                                           {tech}
                                                                      </span>
                                                                 ))}
                                                            </div>
                                                       </div>

                                                       {/* Features */}
                                                       <div className="mt-2">
                                                            <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                                                                 {t.projects.features}
                                                            </h4>

                                                            <ul className="space-y-0.5 text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                                                                 {project.features?.slice(0, 3).map((f, i) => (
                                                                      <li key={i} className="line-clamp-1">
                                                                           {f}
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       </div>
                                                  </div>

                                                  {/* Buttons */}
                                                  <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-slate-800">
                                                       <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg h-9 bg-[#0077ED] text-white text-xs font-bold hover:bg-[#0066CC] transition-colors shadow-sm">
                                                            <ExternalLink size={14} />
                                                            <span>{t.projects.demo}</span>
                                                       </button>

                                                       <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg h-9 bg-[#F5F5F7] dark:bg-slate-700 text-gray-800 dark:text-white text-xs font-bold hover:bg-[#E5E5E7] dark:hover:bg-slate-600 transition-colors shadow-sm">
                                                            <Github size={14} />
                                                            <span>{t.projects.code}</span>
                                                       </button>
                                                  </div>
                                             </div>
                                        </MagicCard>
                                   </div>
                              ))}
                         </motion.div>
                    </MagicContainer>
               </div>
          </section>
     );
}
