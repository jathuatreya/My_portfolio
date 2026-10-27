"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ArrowUpRight, Github, ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { detailedProjects, projectCategories } from "@/app/data/projectsData";

export default function ProjectsPage() {
     const [activeCategory, setActiveCategory] = useState("All");

     const filteredProjects = activeCategory === "All"
          ? detailedProjects
          : detailedProjects.filter(p => p.category === activeCategory);

     return (
          <div className="bg-white dark:bg-[#0a0a0a] text-[#1D1D1F] dark:text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
               <Navbar />

               <main className="pt-28 sm:pt-36 pb-24 grow relative overflow-hidden">
                    {/* Background ambient lighting */}
                    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                         {/* Breadcrumb Navigation */}
                         <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 mb-6">
                              <Link href="/" className="hover:text-[#FF6700] transition-colors flex items-center gap-1">
                                   <Home size={13} />
                                   <span>Home</span>
                              </Link>
                              <span>/</span>
                              <span className="text-[#FF6700] font-bold">Projects</span>
                         </div>

                         {/* Page Header */}
                         <div className="text-left mb-10 sm:mb-14">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF6700]/10 border border-[#FF6700]/20 text-[#FF6700] text-xs font-mono font-bold uppercase tracking-widest mb-3">
                                   <Layers size={14} />
                                   <span>Complete Portfolio</span>
                              </div>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
                                   All Engineering <span className="text-[#FF6700]">Projects</span>
                              </h1>
                              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mt-3 max-w-2xl">
                                   A complete index of full-stack web applications, machine learning experiments, IoT robotics, and system simulations crafted with clean architecture.
                              </p>
                         </div>

                         {/* Filter Category Pills */}
                         <div className="flex items-center flex-wrap gap-2 mb-10 sm:mb-14">
                              {projectCategories.map((cat) => {
                                   const isSelected = activeCategory === cat;
                                   const count = cat === "All"
                                        ? detailedProjects.length
                                        : detailedProjects.filter(p => p.category === cat).length;

                                   return (
                                        <button
                                             key={cat}
                                             onClick={() => setActiveCategory(cat)}
                                             className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                                                  isSelected
                                                       ? "bg-[#FF6700] text-white shadow-md shadow-[#FF6700]/25"
                                                       : "bg-black/[0.04] dark:bg-white/[0.06] text-gray-700 dark:text-gray-300 hover:bg-black/[0.08] dark:hover:bg-white/[0.12] border border-black/[0.04] dark:border-white/[0.06]"
                                             }`}
                                        >
                                             <span>{cat}</span>
                                             <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isSelected ? "bg-white/20 text-white" : "bg-black/5 dark:bg-white/10 text-gray-500 dark:text-gray-400"}`}>
                                                  {count}
                                             </span>
                                        </button>
                                   );
                              })}
                         </div>

                         {/* Full-Width Project Cards List (Matching Atlantis Wide Card Layout) */}
                         <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
                              <AnimatePresence mode="popLayout">
                                   {filteredProjects.map((project, index) => (
                                        <motion.div
                                             key={project.id}
                                             layout
                                             initial={{ opacity: 0, y: 30 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             exit={{ opacity: 0, scale: 0.96 }}
                                             transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                                             className="w-full rounded-[28px] sm:rounded-[36px] bg-[#FAFBFD] dark:bg-[#101624] border-2 border-primary/40 hover:border-primary p-4 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(255,103,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_0_30px_rgba(255,103,0,0.22)] transition-all duration-300 group"
                                        >
                                             <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 justify-between">
                                                  {/* Left Column: Details & Tech Stack */}
                                                  <div className="w-full lg:w-[58%] flex flex-col justify-between items-start text-left">
                                                       <div>
                                                            {/* Category Tag */}
                                                            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-black/[0.05] dark:bg-white/10 text-gray-700 dark:text-gray-300 tracking-wide mb-3">
                                                                 {project.category}
                                                            </span>

                                                            {/* Project Title */}
                                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight">
                                                                 {project.title}
                                                            </h2>

                                                            {/* Role / Architecture Subtitle */}
                                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1.5">
                                                                 {project.role}
                                                            </p>

                                                            {/* Full Description */}
                                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mt-4 max-w-xl">
                                                                 {project.description}
                                                            </p>

                                                             {/* Highlight Metrics */}
                                                             {(project.highlight1 || project.highlight2) && (
                                                                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-5">
                                                                       {project.highlight1 && (
                                                                            <div className="px-3.5 py-2 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 shadow-xs">
                                                                                 <span className="text-xs sm:text-sm font-bold text-[#FF6700] block">
                                                                                      {project.highlight1.value}
                                                                                 </span>
                                                                                 <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-0.5">
                                                                                      {project.highlight1.label}
                                                                                 </span>
                                                                            </div>
                                                                       )}
                                                                       {project.highlight2 && (
                                                                            <div className="px-3.5 py-2 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10 shadow-xs">
                                                                                 <span className="text-xs sm:text-sm font-bold text-[#FF6700] block">
                                                                                      {project.highlight2.value}
                                                                                 </span>
                                                                                 <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-0.5">
                                                                                      {project.highlight2.label}
                                                                                 </span>
                                                                            </div>
                                                                       )}
                                                                  </div>
                                                             )}

                                                            {/* Tech Stack Pills (All Techs) */}
                                                            <div className="flex flex-wrap gap-2 mt-6">
                                                                 {project.techStack.map((tech) => (
                                                                      <span
                                                                           key={tech}
                                                                           className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 border border-black/[0.05] dark:border-white/[0.08] hover:border-[#FF6700]/40 transition-colors"
                                                                      >
                                                                           {tech}
                                                                      </span>
                                                                 ))}
                                                            </div>
                                                       </div>

                                                       {/* Action Links Row (with ↗ arrow) */}
                                                       <div className="flex flex-wrap items-center gap-6 mt-6 sm:mt-8 pt-2">
                                                            {project.demoUrl && (
                                                                 <a
                                                                      href={project.demoUrl}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D1D1F] dark:text-white hover:text-[#FF6700] transition-colors group/link"
                                                                 >
                                                                      <span>Live Demo</span>
                                                                      <ArrowUpRight size={17} className="text-[#FF6700] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                                 </a>
                                                            )}
                                                            {project.codeUrl && (
                                                                 <a
                                                                      href={project.codeUrl}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D1D1F] dark:text-white hover:text-[#FF6700] transition-colors group/link"
                                                                 >
                                                                      <Github size={16} />
                                                                      <span>View Source</span>
                                                                      <ArrowUpRight size={16} className="text-[#FF6700] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                                 </a>
                                                            )}
                                                            {!project.demoUrl && !project.codeUrl && (
                                                                 <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400">
                                                                      <span>Architecture Verified</span>
                                                                      <ArrowUpRight size={16} className="text-[#FF6700]" />
                                                                 </div>
                                                            )}
                                                       </div>
                                                  </div>

                                                  {/* Right Column: Screenshot Showcase */}
                                                  <div className="w-full lg:w-[42%] flex items-center justify-center">
                                                       <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[340px] rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/10 bg-gray-50 dark:bg-black/30 shadow-sm">
                                                            <Image
                                                                 src={project.image}
                                                                 alt={project.title}
                                                                 fill
                                                                 sizes="(max-width: 1024px) 100vw, 42vw"
                                                                 className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                       </div>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   ))}
                              </AnimatePresence>
                         </div>

                         {/* Back to Home CTA */}
                         <div className="flex justify-center mt-16 sm:mt-20">
                              <Link
                                   href="/#projects"
                                   className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-black/[0.05] dark:bg-white/[0.08] hover:bg-[#FF6700] hover:text-white text-gray-800 dark:text-gray-200 font-bold text-sm transition-all duration-200"
                              >
                                   <ArrowLeft size={16} />
                                   <span>Back to Home</span>
                              </Link>
                         </div>
                    </div>
               </main>

               <Footer />
          </div>
     );
}
