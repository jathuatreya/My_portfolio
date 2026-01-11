"use client";

import { education } from '../data/portfolio-data'
import { GraduationCap, School, BookOpen, Calendar, MapPin } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Education() {
     return (
          <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Subtle background flair */}
               <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
               
               <div className="container mx-auto max-w-5xl 3xl:max-w-[75rem] 4k:max-w-[90rem] relative z-10">
                    <ScrollReveal>
                         <div className="text-center mb-16">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                                   <GraduationCap size={16} className="text-primary" />
                                   <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Education</span>
                              </div>
                              <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                                   Academic Background
                              </h2>
                         </div>
                    </ScrollReveal>

                    <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
                         {education.map((edu, index) => (
                              <ScrollReveal key={edu.id} delay={index * 0.1}>
                                   <div className="relative group">
                                        {/* Timeline indicator dot */}
                                        <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-5 h-5 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(0,119,237,0.3)] group-hover:scale-125 transition-transform duration-300">
                                             <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        </div>

                                        <div className="flex flex-col gap-1 mb-4">
                                             <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors duration-300">
                                                       {edu.degree}
                                                  </h3>
                                             </div>
                                             <div className="flex items-center gap-4 text-sm font-medium">
                                                  <div className="flex items-center gap-1.5 text-primary italic">
                                                       {edu.id === 'iit' ? <GraduationCap size={14} /> : edu.id === 'automobile' ? <School size={14} /> : <BookOpen size={14} />}
                                                       <span>{edu.institution}</span>
                                                  </div>
                                                  <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                                                       <Calendar size={13} />
                                                       <span>{edu.period}</span>
                                                  </div>
                                             </div>
                                             {edu.affiliation && (
                                                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 italic">
                                                       <MapPin size={11} className="text-primary/60" />
                                                       <span>{edu.affiliation}</span>
                                                  </div>
                                             )}
                                        </div>

                                        <div className="bg-[#F5F5F7]/30 dark:bg-white/2 border border-gray-100 dark:border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                                             <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                                                  {edu.description}
                                             </p>

                                             {(('highlights' in edu && edu.highlights && edu.highlights.length > 0) || ('focus' in edu && edu.focus && edu.focus.length > 0)) && (
                                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                                       {'highlights' in edu && edu.highlights && (
                                                            <div>
                                                                 <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-4 flex items-center gap-2">
                                                                      <div className="w-3 h-px bg-primary"></div>
                                                                      Highlights
                                                                 </h4>
                                                                 <ul className="space-y-3">
                                                                      {edu.highlights.map((highlight, i) => (
                                                                           <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                                                <span>{highlight}</span>
                                                                           </li>
                                                                      ))}
                                                                 </ul>
                                                            </div>
                                                       )}

                                                       {'focus' in edu && edu.focus && (
                                                            <div>
                                                                 <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-4 flex items-center gap-2">
                                                                      <div className="w-3 h-px bg-primary"></div>
                                                                      Deep Dive
                                                                 </h4>
                                                                 <div className="flex flex-wrap gap-2">
                                                                      {edu.focus.map((item, i) => (
                                                                           <span key={i} className="px-3 py-1 bg-white dark:bg-white/5 border border-primary/10 rounded-full text-[11px] font-bold text-gray-600 dark:text-gray-400">
                                                                                {item}
                                                                           </span>
                                                                      ))}
                                                                 </div>
                                                            </div>
                                                       )}
                                                  </div>
                                             )}
                                        </div>
                                   </div>
                              </ScrollReveal>
                         ))}
                    </div>
               </div>
          </section>
     )
}
