"use client";

import { education } from '../data/portfolio-data'
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Education() {
     // Display latest/current degree first (IIT -> Automobile -> School)
     const orderedEducation = [...education].reverse();

     return (
          <section id="education" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Subtle background flair */}
               <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
               
               <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                    <ScrollReveal>
                         <div className="text-center mb-14 sm:mb-20">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
                                   <GraduationCap size={16} className="text-primary" />
                                   <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Academics</span>
                              </div>
                              <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                                   Academic <span className="text-primary">Background</span>
                              </h2>
                              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
                                   Higher education, degree studies, and foundational engineering training.
                              </p>
                         </div>
                    </ScrollReveal>

                    <MagicContainer>
                         <div className="relative">
                              {/* Central Vertical Timeline Line (centered on md+, left-aligned on mobile) */}
                              <div 
                                   aria-hidden="true" 
                                   className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#0077ED] via-[#0077ED]/30 to-transparent pointer-events-none" 
                              />

                              <div className="space-y-10 sm:space-y-12 md:space-y-16">
                                   {orderedEducation.map((edu, index) => {
                                        const isLeft = index % 2 === 0;
                                        const isCurrent = edu.period.includes("Present");

                                        return (
                                             <div key={edu.id} className="relative">
                                                  {/* Center Timeline Indicator Dot */}
                                                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-[#0a0a0a] border-[3px] sm:border-4 border-[#0077ED] flex items-center justify-center shadow-[0_0_14px_rgba(0,119,237,0.4)] z-20 group-hover:scale-125 transition-transform duration-300">
                                                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0077ED] rounded-full"></div>
                                                  </div>

                                                  {/* Compact Card Container: Left on even, Right on odd on md+ */}
                                                  <div className={`w-full pl-8 sm:pl-10 md:pl-0 md:w-[calc(50%-2.5rem)] lg:md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                                       <ScrollReveal delay={index * 0.15}>
                                                            <div className="group relative">
                                                                 {/* Degree Header Info */}
                                                                 <div className="flex flex-col gap-1 mb-3">
                                                                      <div className="flex flex-wrap items-center gap-2">
                                                                           <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors duration-300">
                                                                                {edu.degree}
                                                                           </h3>
                                                                           {isCurrent && (
                                                                                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-md uppercase tracking-widest border border-primary/20">
                                                                                     Current
                                                                                </span>
                                                                           )}
                                                                      </div>

                                                                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
                                                                           <div className="flex items-center gap-1.5 text-primary font-semibold">
                                                                                <GraduationCap size={13} />
                                                                                <span>{edu.institution}</span>
                                                                           </div>
                                                                           <span className="text-gray-300 dark:text-gray-700">•</span>
                                                                           <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                                                                                <Calendar size={12} />
                                                                                <span>{edu.period}</span>
                                                                           </div>
                                                                      </div>

                                                                      {edu.affiliation && (
                                                                           <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                                                                                <MapPin size={11} className="text-primary/70 shrink-0" />
                                                                                <span>{edu.affiliation}</span>
                                                                           </div>
                                                                      )}
                                                                 </div>

                                                                 {/* Minimized Compact MagicCard matching Professional Journey */}
                                                                 <MagicCard className="bg-[#FAFBFD] dark:bg-[#111624] border border-black/[0.08] dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#0077ED]/40 dark:hover:border-[#0077ED]/40 transition-all duration-300 backdrop-blur-sm">
                                                                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                                                                           {edu.description}
                                                                      </p>

                                                                      {/* Highlights Section */}
                                                                      {edu.highlights && edu.highlights.length > 0 && (
                                                                           <div className="space-y-5">
                                                                                <div>
                                                                                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-2.5 flex items-center gap-1.5">
                                                                                          <div className="w-2.5 h-px bg-primary"></div>
                                                                                          Key Highlights
                                                                                     </h4>
                                                                                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                                                                                          {edu.highlights.map((highlight, i) => (
                                                                                               <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                                                                                                    <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                                                                                                    <span className="font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                                                                                                         {highlight}
                                                                                                    </span>
                                                                                               </li>
                            ))}
                                                                                     </ul>
                                                                                </div>
                                                                           </div>
                                                                      )}

                                                                      {/* Academic Focus & Modules */}
                                                                      {'focus' in edu && (edu.focus as string[]) && (edu.focus as string[]).length > 0 && (
                                                                           <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/10">
                                                                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-2.5 flex items-center gap-1.5">
                                                                                     <div className="w-2.5 h-px bg-primary"></div>
                                                                                     Core Modules & Focus
                                                                                </h4>
                                                                                <div className="flex flex-wrap gap-1.5">
                                                                                     {(edu.focus as string[]).map((item, i) => (
                                                                                          <span key={i} className="px-2.5 py-1 bg-white dark:bg-white/5 border border-primary/10 rounded-lg text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:border-primary/40 transition-colors cursor-default">
                                                                                               {item}
                                                                                          </span>
                                                                                     ))}
                                                                                </div>
                                                                           </div>
                                                                      )}

                                                                      {/* Additional Details (e.g. curriculum accreditation) */}
                                                                      {'details' in edu && (edu as any).details && (
                                                                           <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400">
                                                                                <Award size={12} className="text-primary" />
                                                                                <span>{(edu as any).details}</span>
                                                                           </div>
                                                                      )}
                                                                 </MagicCard>
                                                            </div>
                                                       </ScrollReveal>
                                                  </div>
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    </MagicContainer>
               </div>
          </section>
     )
}
