"use client";

import { CheckCircle2, Code2, Cpu, Globe, Zap } from 'lucide-react'
import { technologies, goals } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Skills() {
     const { t } = useLanguage()

     return (
          <>
               {/* --------------------------------------
             *  TECHNICAL SECTION
             * -------------------------------------- */}
               <section id="technical-arsenal" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">

                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] relative z-10">
                         {/* Heading */}
                         <ScrollReveal className="text-center mb-16">
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                                   <Code2 size={18} className="text-primary" />
                                   <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.skills.logic_tag}</span>
                              </div>

                              <h2 className="text-[#1D1D1F] dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-6">
                                   {t.skills.title}
                              </h2>

                              <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                                   {t.skills.subtitle}
                              </p>
                         </ScrollReveal>

                         {/* Categories Grid */}
                         <MagicContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                              {/* Web Development */}
                              <ScrollReveal delay={0.1} className="h-full">
                                   <MagicCard
                                        className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-3xl h-full shadow-md hover:shadow-xl transition-all"
                                   >
                                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                             <Globe className="text-primary" size={24} />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-4">
                                             {t.skills.categories.web.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                             {t.skills.categories.web.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                             {technologies.slice(0, 4).map((tech, i) => (
                                                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#F5F5F7] dark:bg-white text-[#0077ED]">
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>

                              {/* IoT & Robotics */}
                              <ScrollReveal delay={0.2} className="h-full">
                                   <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-3xl h-full shadow-md hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                                             <Cpu className="text-purple-500 dark:text-purple-300" size={24} />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-4">
                                             {t.skills.categories.iot.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                             {t.skills.categories.iot.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                             {['IoT', 'Hardware', 'Networking', 'Robotics'].map((tech, i) => (
                                                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#F5F5F7] dark:bg-white text-[#0077ED]">
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>

                              {/* AI & ML */}
                              <ScrollReveal delay={0.3} className="h-full">
                                   <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-3xl h-full shadow-md hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                                             <Zap className="text-emerald-500 dark:text-emerald-300" size={24} />
                                        </div>

                                        <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-4">
                                             {t.skills.categories.ai.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                             {t.skills.categories.ai.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                             {['Python', 'TensorFlow', 'Scikit-learn', 'Data Science'].map((tech, i) => (
                                                  <span key={i} className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#F5F5F7]  dark:bg-white text-[#0077ED]">
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>

                         </MagicContainer>

                         {/* Full Tech Cloud */}
                         <ScrollReveal delay={0.4}>
                              <MagicContainer className="bg-white dark:bg-[#121212] rounded-4xl p-8 sm:p-12 shadow-md border border-gray-200 dark:border-white/10 text-center">
                                   <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-8">
                                        {t.skills.stack_title}
                                   </h3>

                                   <div className="flex flex-wrap justify-center gap-3">
                                        {technologies.map((tech, index) => (
                                             <MagicCard
                                                  key={index}
                                                  className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F5F5F7] dark:bg-[#1a1a1a] hover:bg-[#e8e8ea] dark:hover:bg-[#222] transition-all"
                                                  disableAnimations={true}
                                                  particleCount={0}
                                                  enableTilt={true}
                                             >
                                                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                                                  <span className="text-gray-700 dark:text-gray-200 font-bold text-base">{tech}</span>
                                             </MagicCard>
                                        ))}
                                   </div>
                              </MagicContainer>
                         </ScrollReveal>

                    </div>
               </section>

               {/* --------------------------------------
             *  FUTURE GOALS SECTION
             * -------------------------------------- */}
               <section id="goals" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">

                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    <div className="container mx-auto max-w-7xl relative z-10">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                              <ScrollReveal className="flex flex-col">
                                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 w-fit">
                                        <Zap size={18} className="text-primary" />
                                        <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.skills.vision_tag}</span>
                                   </div>

                                   <h2 className="text-[#1D1D1F] dark:text-white text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                                        {t.skills.vision_title_1} <br />
                                        <span className="text-primary">{t.skills.vision_title_2}</span>
                                   </h2>

                                   <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed mb-8">
                                        {t.skills.vision_desc}
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="px-8 py-4 rounded-xl bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                                             {t.skills.cta}
                                        </button>
                                   </div>
                              </ScrollReveal>

                              <div className="grid grid-cols-1 gap-4">
                                   {goals.map((goal, index) => (
                                        <ScrollReveal key={index} delay={index * 0.1} className="flex items-center gap-5 p-6 rounded-2xl bg-[#F5F5F7] dark:bg-[#121212] border border-transparent hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                             <div className="shrink-0 w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-primary shadow-sm">
                                                  <CheckCircle2 size={20} strokeWidth={3} />
                                             </div>

                                             <p className="text-[#1D1D1F] dark:text-white font-bold text-lg leading-snug">
                                                  {goal}
                                             </p>
                                        </ScrollReveal>
                                   ))}
                              </div>

                         </div>
                    </div>
               </section>
          </>
     )
}
