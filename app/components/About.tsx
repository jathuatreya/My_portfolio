"use client";

import Image from 'next/image'
import { profile, aboutStats } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'
import { User } from 'lucide-react'
import { highlightTitle } from '../utils/highlight-text'
import { ScrollReveal } from './ScrollReveal'

export default function About() {
     const { t } = useLanguage()

     const stats = aboutStats

     return (
          <section id="about" className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden scroll-mt-6">
               {/* Glowing Background Elements */}
               <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute bottom-40 left-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl opacity-30 animate-pulse-slower pointer-events-none"></div>

               <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                         {/* Left Column: Image with Entry Animation (Shifted further downside for balanced alignment) */}
                         <div className="flex justify-center lg:justify-start lg:col-span-4 w-full pt-6 sm:pt-10 lg:pt-20 xl:pt-24">
                              <ScrollReveal delay={0.1} className="w-full max-w-sm">
                                   <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:aspect-square rounded-2xl bg-[#F5F5F7] dark:bg-[#1D1D1F] p-3 border-2 border-primary/40 shadow-lg shadow-primary/10 overflow-hidden relative">
                                        <Image
                                             src={profile.aboutImage}
                                             alt={profile.name}
                                             width={400}
                                             height={400}
                                             sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 400px"
                                             loading="lazy"
                                             className="w-full h-full object-cover rounded-xl"
                                        />
                                   </div>
                              </ScrollReveal>
                         </div>

                         {/* Right Column: Content with Entry Animation */}
                         <div className="flex flex-col gap-8 lg:col-span-8">
                              {/* About Me Header & Text */}
                              <ScrollReveal delay={0.15}>
                                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                                        <User size={18} className="text-primary" />
                                        <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.about.tag}</span>
                                   </div>
                                   <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                                        {highlightTitle(t.about.title)}
                                   </h2>
                                   <p className="mb-6 text-xl sm:text-2xl font-bold italic text-primary">
                                        &quot;{t.about.slogan || profile.slogan}&quot;
                                   </p>
                                   <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-normal leading-relaxed mt-4">
                                        {t.about.description.replace('{name}', profile.name)}
                                   </p>
                              </ScrollReveal>

                              {/* Highlight Cards: Ultra-Compact Micro Tiles */}
                              <ScrollReveal delay={0.2}>
                                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-1">
                                        {stats.map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className={`flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.03] border border-primary/20 hover:border-primary/60 transition-all duration-200 group h-full ${index === 8 ? "col-span-2 sm:col-span-1" : ""}`}
                                             >
                                                  <div className="w-7 h-7 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                                                       <stat.icon size={14} strokeWidth={2.2} />
                                                  </div>
                                                  <div className="min-w-0 flex-1">
                                                       <div className="text-sm sm:text-base font-bold text-[#1D1D1F] dark:text-white leading-tight group-hover:text-primary transition-colors">
                                                            {stat.value}
                                                       </div>
                                                       <div className="text-[10px] sm:text-[11px] font-medium text-gray-500 dark:text-gray-400 truncate leading-tight mt-0.5" title={t.about.stats[stat.id as keyof typeof t.about.stats] || stat.label}>
                                                            {t.about.stats[stat.id as keyof typeof t.about.stats] || stat.label}
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </ScrollReveal>
                         </div>
                    </div>
               </div>
          </section>
     )
}
