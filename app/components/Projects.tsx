import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'

import { MagicCard, MagicContainer } from './MagicCard'

export default function Projects() {
     const { t } = useLanguage()
     const targetRef = useRef<HTMLDivElement>(null)
     const contentRef = useRef<HTMLDivElement>(null)
     const [xScale, setXScale] = useState(["1%", "-95%"])
     const [isMobile, setIsMobile] = useState(false)

     const { scrollYProgress } = useScroll({
          target: targetRef,
     })

     useEffect(() => {
          const handleResize = () => {
               // Check if mobile (lg breakpoint is 1024px)
               const mobile = window.innerWidth < 1024
               setIsMobile(mobile)

               if (contentRef.current && targetRef.current && !mobile) {
                    const contentWidth = contentRef.current.scrollWidth
                    const viewportWidth = window.innerWidth
                    // Calculate the exact translation needed: total width - viewport width
                    // We add a little buffer (e.g. 48px for padding) to ensure the last item is typically fully visible
                    const maxTranslate = contentWidth - viewportWidth + 48
                    // Convert to negative pixel value
                    setXScale(["0px", `-${maxTranslate}px`])
               }
          }

          // Initial calculation
          handleResize()

          // Add resize listener
          window.addEventListener("resize", handleResize)
          return () => window.removeEventListener("resize", handleResize)
     }, [])

     const x = useTransform(scrollYProgress, [0, 1], xScale)

     return (
          // Mobile: standard height (auto), Desktop: 300vh for scroll track
          <section ref={targetRef} id="projects" className="relative bg-white dark:bg-[#0a0a0a] h-auto lg:h-[300vh] overflow-hidden">
               {/* Mobile: relative block, Desktop: sticky viewport */}
               <div className="relative h-auto py-16 lg:py-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
                    <MagicContainer className="relative w-full h-full flex flex-col justify-center">
                         {/* Glowing Background Elements - Fixed inside sticky container */}
                         <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/12 rounded-full blur-3xl opacity-40 animate-pulse-slower pointer-events-none"></div>
                         <div className="absolute bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow pointer-events-none"></div>
                         <div className="absolute top-40 left-20 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl opacity-20 animate-pulse-slow pointer-events-none"></div>

                         <div className="container mx-auto max-w-7xl relative z-10 px-4 mb-8 lg:mb-16">
                              <div className="text-center">
                                   <h1 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">{t.projects.title}</h1>
                                   <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal mt-3 max-w-2xl mx-auto">{t.projects.subtitle}</p>
                              </div>
                         </div>

                         {/* 
                           Mobile: overflow-x-auto for native scroll, disable motion x
                           Desktop: overflow-visible (handled by sticky parent), use motion x
                         */}
                         <motion.div
                              ref={contentRef}
                              style={{ x: isMobile ? 0 : x }}
                              className="flex gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16 w-full overflow-x-auto lg:overflow-visible lg:w-max pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none hide-scrollbar"
                         >
                              {projects.map((project, index) => (
                                   <div key={index} className="shrink-0 w-[85vw] sm:w-[350px] md:w-[450px] snap-center">
                                        <MagicCard className="flex flex-col bg-white dark:bg-[#121212] rounded-2xl border border-gray-100 dark:border-slate-700 h-full hover:shadow-xl transition-shadow duration-300">
                                             <div className="h-48 sm:h-56 bg-cover bg-center shrink-0 rounded-t-2xl" style={{ backgroundImage: `url(${project.image})` }}></div>
                                             <div className="flex flex-col p-5 sm:p-6 flex-grow">
                                                  <div className="flex-grow">
                                                       <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white">{project.title}</h3>
                                                       <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-3">{project.description}</p>
                                                       <div className="mt-4">
                                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t.projects.tech_stack}</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                 {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                                      <span key={techIndex} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium">
                                                                           {tech}
                                                                      </span>
                                                                 ))}
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-slate-800">
                                                       <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#0077ED] text-white text-sm font-bold hover:bg-[#0066CC] transition-colors shadow-sm whitespace-nowrap">
                                                            <ExternalLink size={16} />
                                                            <span>{t.projects.demo}</span>
                                                       </button>
                                                       <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#F5F5F7] dark:bg-slate-700 text-gray-800 dark:text-white text-sm font-bold hover:bg-[#F5F5F7] dark:hover:bg-slate-600 transition-colors shadow-sm">
                                                            <Github size={16} />
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
     )
}
