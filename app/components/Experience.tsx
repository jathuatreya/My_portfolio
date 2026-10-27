"use client";

import { experience } from '../data/portfolio-data'
import { Briefcase, Calendar, CheckCircle2, Star, Building2 } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Experience() {
     return (
          <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Subtle background flair */}
               <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
               
               <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                    <ScrollReveal>
                         <div className="text-center mb-14 sm:mb-20">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-4 shadow-sm">
                                   <Briefcase size={16} className="text-primary" />
                                   <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Career</span>
                              </div>
                              <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                                   Professional <span className="text-primary">Journey</span>
                              </h2>
                              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
                                   Proven industry experience architecting scalable systems and client platforms.
                              </p>
                         </div>
                    </ScrollReveal>

                    <MagicContainer>
                         <div className="relative">
                              {/* Central Vertical Timeline Line (centered on md+, left-aligned on mobile) */}
                              <div 
                                   aria-hidden="true" 
                                   className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent pointer-events-none" 
                              />

                              <div className="space-y-10 sm:space-y-12 md:space-y-16">
                                   {experience.map((exp, index) => {
                                        const isLeft = index % 2 === 0;

                                        return (
                                             <div key={exp.id} className="relative">
                                                  {/* Center Timeline Indicator Dot */}
                                                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white dark:bg-[#0a0a0a] border-[3px] sm:border-4 border-primary flex items-center justify-center shadow-[0_0_14px_rgba(255, 103, 0,0.4)] z-20 group-hover:scale-125 transition-transform duration-300">
                                                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
                                                  </div>

                                                  {/* Compact Card Container: Left on even, Right on odd on md+ */}
                                                  <div className={`w-full pl-8 sm:pl-10 md:pl-0 md:w-[calc(50%-2.5rem)] lg:md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                                       <ScrollReveal delay={index * 0.15}>
                                                            <div className="group relative">
                                                                 {/* Role Header Info */}
                                                                 <div className="flex flex-col gap-1 mb-3">
                                                                      <div className="flex flex-wrap items-center gap-2">
                                                                           <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors duration-300">
                                                                                {exp.role}
                                                                           </h3>
                                                                           {index === 0 && (
                                                                                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-md uppercase tracking-widest border border-primary/20">
                                                                                     Current
                                                                                </span>
                                                                           )}
                                                                      </div>

                                                                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium">
                                                                           <div className="flex items-center gap-1.5 text-primary font-semibold">
                                                                                <Building2 size={13} />
                                                                                {(exp as any).companyUrl ? (
                                                                                     <a href={(exp as any).companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                                                          {exp.company}
                                                                                     </a>
                                                                                ) : (
                                                                                     <span>{exp.company}</span>
                                                                                )}
                                                                           </div>
                                                                           <span className="text-gray-300 dark:text-gray-700">•</span>
                                                                           <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                                                                                <Calendar size={12} />
                                                                                <span>{exp.period}</span>
                                                                           </div>
                                                                      </div>
                                                                 </div>

                                                                 {/* Minimized Compact Card */}
                                                                 <MagicCard className="bg-[#FAFBFD] dark:bg-[#1D1D1F] border-2 border-primary/40 hover:border-primary rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md shadow-primary/10 hover:shadow-[0_0_28px_rgba(255,103,0,0.22)] transition-all duration-300 backdrop-blur-sm">
                                                                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                                                                           {exp.description}
                                                                      </p>

                                                                      <div className="space-y-5">
                                                                           {/* Contributions */}
                                                                           {exp.projects && exp.projects.length > 0 && (
                                                                                <div>
                                                                                     <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-2.5 flex items-center gap-1.5">
                                                                                          <div className="w-2.5 h-px bg-primary"></div>
                                                                                          Contributions
                                                                                     </h4>
                                                                                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                                                                                          {exp.projects.map((project, i) => (
                                                                                               <li key={i} className="flex items-start gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                                                                                                    <CheckCircle2 size={13} className="text-primary mt-0.5 shrink-0" />
                                                                                                    <span className="font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                                                                                                         {project}
                                                                                                    </span>
                                                                                               </li>
                                                                                          ))}
                                                                                     </ul>
                                                                                </div>
                                                                           )}
                                                                      </div>

                                                                      {/* Expertise tags at bottom */}
                                                                      <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/10">
                                                                           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-2.5 flex items-center gap-1.5">
                                                                                <div className="w-2.5 h-px bg-primary"></div>
                                                                                Expertise
                                                                           </h4>
                                                                           <div className="flex flex-wrap gap-1.5">
                                                                                {exp.skills?.map((skill, i) => (
                                                                                     <span key={i} className="px-2.5 py-1 bg-white dark:bg-white/5 border border-primary/10 rounded-lg text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:border-primary/40 transition-colors cursor-default">
                                                                                          {skill}
                                                                                     </span>
                                                                                ))}
                                                                                {'services' in exp && (exp.services as string[])?.map((service: string, i: number) => (
                                                                                     <span key={i} className="px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-lg text-[11px] font-black text-primary flex items-center gap-1 transition-all">
                                                                                          <Star size={10} fill="currentColor" />
                                                                                          {service}
                                                                                     </span>
                                                                                ))}
                                                                           </div>
                                                                      </div>
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
