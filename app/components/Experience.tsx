"use client";

import { experience } from '../data/portfolio-data'
import { Briefcase, Calendar, CheckCircle2, Star, Building2 } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Experience() {
     return (
          <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Subtle background flair */}
               <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none -z-10"></div>
               
               <div className="container mx-auto max-w-5xl 3xl:max-w-[75rem] 4k:max-w-[90rem] relative z-10">
                    <ScrollReveal>
                         <div className="text-center mb-16">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                                   <Briefcase size={16} className="text-primary" />
                                   <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Career</span>
                              </div>
                              <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
                                   Professional Journey
                              </h2>
                         </div>
                    </ScrollReveal>

                    <MagicContainer>
                         <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
                              {experience.map((exp, index) => (
                                   <ScrollReveal key={exp.id} delay={index * 0.1}>
                                        <div className="relative group">
                                             {/* Timeline indicator dot */}
                                             <div className="absolute -left-[41px] sm:-left-[57px] top-0 w-5 h-5 rounded-full bg-white dark:bg-[#0a0a0a] border-4 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(0,119,237,0.3)] group-hover:scale-125 transition-transform duration-300">
                                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                             </div>

                                             <div className="flex flex-col gap-1 mb-4">
                                                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                                       <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors duration-300">
                                                            {exp.role}
                                                       </h3>
                                                       {index === 0 && (
                                                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-md uppercase tracking-widest border border-primary/20">Current</span>
                                                       )}
                                                  </div>
                                                  <div className="flex items-center gap-4 text-sm font-medium">
                                                       <div className="flex items-center gap-1.5 text-primary italic">
                                                            <Building2 size={14} />
                                                            { (exp as any).companyUrl ? (
                                                                 <a href={(exp as any).companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                                      {exp.company}
                                                                 </a>
                                                            ) : (
                                                                 <span>{exp.company}</span>
                                                            )}
                                                       </div>
                                                       <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                                                            <Calendar size={13} />
                                                            <span>{exp.period}</span>
                                                       </div>
                                                  </div>
                                             </div>

                                             <MagicCard className="bg-[#F5F5F7]/30 dark:bg-white/2 border border-gray-100 dark:border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                                                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                                                       {exp.description}
                                                  </p>

                                                  <div className="flex flex-col gap-8">
                                                       {/* Project Contributions first as a bulleted list */}
                                                       {exp.projects && exp.projects.length > 0 && (
                                                            <div>
                                                                 <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-4 flex items-center gap-2">
                                                                      <div className="w-3 h-px bg-primary"></div>
                                                                      Contributions
                                                                 </h4>
                                                                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                                                      {exp.projects.map((project, i) => (
                                                                           <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                                                                <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                                                                                <span className="font-semibold text-gray-700 dark:text-gray-300">
                                                                                     {project}
                                                                                </span>
                                                                           </li>
                                                                       ))}
                                                                 </ul>
                                                            </div>
                                                       )}

                                                       {/* Impact section */}
                                                       <div>
                                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-4 flex items-center gap-2">
                                                                 <div className="w-3 h-px bg-primary"></div>
                                                                 Impact
                                                            </h4>
                                                            <ul className="space-y-3">
                                                                 {exp.responsibilities.map((resp, i) => (
                                                                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                                                           <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                                                                           <span>{resp}</span>
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       </div>
                                                  </div>

                                                  {/* Expertise tags moved to bottom for better balance */}
                                                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                                                       <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D1D1F]/50 dark:text-white/40 mb-4 flex items-center gap-2">
                                                            <div className="w-3 h-px bg-primary"></div>
                                                            Expertise
                                                       </h4>
                                                       <div className="flex flex-wrap gap-2">
                                                            {exp.skills?.map((skill, i) => (
                                                                 <span key={i} className="px-3 py-1 bg-white dark:bg-white/5 border border-primary/10 rounded-full text-[11px] font-bold text-gray-600 dark:text-gray-400 hover:border-primary/40 transition-colors cursor-default">
                                                                      {skill}
                                                                 </span>
                                                            ))}
                                                            {'services' in exp && (exp.services as string[])?.map((service: string, i: number) => (
                                                                 <span key={i} className="px-3 py-1 bg-primary/5 border border-primary/20 rounded-full text-[11px] font-black text-primary flex items-center gap-1.5 transition-all">
                                                                      <Star size={10} fill="currentColor" />
                                                                      {service}
                                                                 </span>
                                                            ))}
                                                       </div>
                                                  </div>
                                             </MagicCard>
                                        </div>
                                   </ScrollReveal>
                              ))}
                         </div>
                    </MagicContainer>
               </div>
          </section>
     )
}
