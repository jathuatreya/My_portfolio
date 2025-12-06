"use client";

import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'

import { MagicCard, MagicContainer } from './MagicCard'
import { ScrollReveal } from './ScrollReveal'

export default function Projects() {
     const { t } = useLanguage()

     return (
          <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Glowing Background Elements */}
               <div className="absolute top-0 -right-40 w-96 h-96 bg-primary/12 rounded-full blur-3xl opacity-40 animate-pulse-slower pointer-events-none"></div>
               <div className="absolute bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute top-40 left-20 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl opacity-20 animate-pulse-slow pointer-events-none"></div>

               <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-12">
                         <h1 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">{t.projects.title}</h1>
                         <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal mt-3 max-w-2xl mx-auto">{t.projects.subtitle}</p>
                    </div>
                    <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 lg:gap-8 3xl:gap-10">
                         {projects.map((project, index) => (
                              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                                   <MagicCard className="flex flex-col bg-white dark:bg-[#121212] rounded-2xl border border-gray-100 dark:border-slate-700 h-full">
                                        <div className="h-48 sm:h-56 bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${project.image})` }}></div>
                                        <div className="flex flex-col p-5 sm:p-6 flex-grow">
                                             <div className="flex-grow">
                                                  <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white">{project.title}</h3>
                                                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">{project.description}</p>
                                                  <div className="mt-4">
                                                       <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t.projects.tech_stack}</h4>
                                                       <div className="flex flex-wrap gap-2">
                                                            {project.techStack.map((tech, techIndex) => (
                                                                 <span key={techIndex} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium">
                                                                      {tech}
                                                                 </span>
                                                            ))}
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t.projects.features}</h4>
                                                       <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                                                            {project.features.map((feature, featureIndex) => (
                                                                 <li key={featureIndex} className="line-clamp-1">{feature}</li>
                                                            ))}
                                                       </ul>
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
                              </ScrollReveal>
                         ))}
                    </MagicContainer>
               </div>
          </section>
     )
}
