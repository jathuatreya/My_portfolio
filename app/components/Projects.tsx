"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/portfolio-data";
import { MagicCard, MagicContainer } from "./MagicCard";

export default function Projects() {
     const { t } = useLanguage();
     const [currentIndex, setCurrentIndex] = useState(0);
     const [containerWidth, setContainerWidth] = useState(0);

     // Card dimensions for calculation
     const cardWidth = 380; // Desktop card width
     const cardGap = 32; // Gap between cards (lg:gap-8 = 32px)
     const mobileCardWidth = 320; // Approx mobile card width

     const containerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const handleResize = () => {
               if (containerRef.current) {
                    setContainerWidth(containerRef.current.offsetWidth);
               }
          };

          handleResize();
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
     }, []);

     const handleNext = () => {
          if (currentIndex < projects.length - 1) {
               setCurrentIndex(prev => prev + 1);
          }
     };

     const handlePrev = () => {
          if (currentIndex > 0) {
               setCurrentIndex(prev => prev - 1);
          }
     };

     // Keyboard Navigation
     useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
               if (e.key === "ArrowLeft") handlePrev();
               if (e.key === "ArrowRight") handleNext();
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => window.removeEventListener("keydown", handleKeyDown);
     }, [currentIndex]);

     // Calculate translation to center the active card
     // Formula: (ContainerHalf) - (CardHalf) - (CardsBefore * (CardWidth + Gap))
     const getTranslateX = () => {
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
          const currentCardWidth = isMobile ? mobileCardWidth : cardWidth;
          const currentGap = isMobile ? 16 : 32;

          // Center position offset
          const centerOffset = (containerWidth / 2) - (currentCardWidth / 2);

          // Total width of items before current
          const offsetBefore = currentIndex * (currentCardWidth + currentGap);

          return centerOffset - offsetBefore;
     };

     return (
          <section id="projects" className="relative bg-white dark:bg-[#0a0a0a] py-24 overflow-hidden">
               <MagicContainer className="relative w-full h-full flex flex-col justify-center">

                    {/* 🔵 Background Glow Elements */}
                    <div className="absolute top-0 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
                    <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

                    {/* 🔥 Header */}
                    <div className="container mx-auto max-w-6xl 3xl:max-w-[80rem] 4k:max-w-[100rem] relative z-10 px-4 mb-12">
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

                    {/* 🔥 Carousel Container */}
                    <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] px-4 relative">
                         {/* Card Container with Shadows */}
                         <div
                              ref={containerRef}
                              className="relative w-full overflow-hidden shadow-2xl rounded-3xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 py-12"
                         >
                              {/* Moving Track */}
                              <motion.div
                                   className="flex gap-4 lg:gap-8"
                                   animate={{ x: getTranslateX() }}
                                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                   style={{ width: "fit-content" }}
                              >
                                   {[...projects].reverse().map((project, index) => {
                                        const isActive = index === currentIndex;
                                        return (
                                             <motion.div
                                                  key={index}
                                                  onClick={() => setCurrentIndex(index)}
                                                  animate={{
                                                       scale: isActive ? 1 : 0.9,
                                                       opacity: isActive ? 1 : 0.5,
                                                       filter: isActive ? "blur(0px)" : "blur(2px)"
                                                  }}
                                                  transition={{ duration: 0.3 }}
                                                  className="shrink-0 w-[320px] md:w-[380px] cursor-pointer"
                                             >
                                                  <MagicCard className={`flex flex-col bg-white dark:bg-[#121212] rounded-xl border ${isActive ? 'border-primary/50 ring-2 ring-primary/20' : 'border-gray-100 dark:border-slate-800'} h-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                                                       {/* Image */}
                                                       <div className="h-40 sm:h-48 relative overflow-hidden group">
                                                            <Image
                                                                 src={project.image}
                                                                 alt={project.title}
                                                                 fill
                                                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                            {(project as any).featured && (
                                                                 <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-primary/20 shadow-sm">
                                                                      <Layers size={10} className="text-primary" />
                                                                      <span className="text-[9px] font-bold tracking-wider text-primary uppercase">Featured</span>
                                                                 </div>
                                                            )}
                                                       </div>

                                                       {/* Content */}
                                                       <div className="flex flex-col p-4 grow">
                                                            <div className="grow">
                                                                 <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-white">{project.title}</h3>
                                                                 <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">{project.description}</p>

                                                                 {/* Tech Stack */}
                                                                 <div className="mt-3">
                                                                      <div className="flex flex-wrap gap-1.5">
                                                                           {project.techStack.slice(0, 3).map((tech, i) => (
                                                                                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                                                                                     {tech}
                                                                                </span>
                                                                           ))}
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Buttons */}
                                                            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-slate-800">
                                                                 <button 
                                                                      onClick={() => (project as any).demoUrl && window.open((project as any).demoUrl, '_blank')}
                                                                      className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg h-9 text-white text-xs font-bold transition-colors shadow-sm ${(project as any).demoUrl && isActive ? 'bg-[#0077ED] hover:bg-[#0066CC]' : 'bg-gray-400 cursor-not-allowed'}`}
                                                                 >
                                                                      <ExternalLink size={14} /> <span>{t.projects.demo}</span>
                                                                 </button>

                                                                 <button 
                                                                      onClick={() => (project as any).codeUrl && window.open((project as any).codeUrl, '_blank')}
                                                                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg h-9 bg-[#F5F5F7] dark:bg-slate-700 text-gray-800 dark:text-white text-xs font-bold hover:bg-[#E5E5E7] dark:hover:bg-slate-600 transition-colors shadow-sm"
                                                                 >
                                                                      <Github size={14} /> <span>{t.projects.code}</span>
                                                                 </button>
                                                            </div>
                                                       </div>
                                                  </MagicCard>
                                             </motion.div>
                                        );
                                   })}
                              </motion.div>
                         </div>

                         {/* 🔥 Stylish Navigation Buttons */}
                         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-4 lg:px-0 pointer-events-none">
                              <button
                                   onClick={handlePrev}
                                   disabled={currentIndex === 0}
                                   className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white dark:bg-[#121212] flex items-center justify-center shadow-xl border border-gray-100 dark:border-white/10 text-gray-700 dark:text-white hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all transform -translate-x-1/2 lg:-translate-x-8"
                              >
                                   <ChevronLeft size={24} strokeWidth={2.5} />
                              </button>

                              <button
                                   onClick={handleNext}
                                   disabled={currentIndex === projects.length - 1}
                                   className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#1D1D1F] dark:bg-white flex items-center justify-center shadow-xl border border-gray-800 dark:border-white/10 text-white dark:text-black hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all transform translate-x-1/2 lg:translate-x-8"
                              >
                                   <ChevronRight size={24} strokeWidth={2.5} />
                              </button>
                         </div>
                    </div>
               </MagicContainer>
          </section>
     );
}
