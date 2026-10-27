"use client";

import Image from 'next/image'
import { profile, aboutStats } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'
import { MagicCard, MagicContainer } from './MagicCard'
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

                              {/* Highlight Cards with Staggered Entry Animation */}
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                                   {stats.map((stat, index) => (
                                        <ScrollReveal
                                             key={index}
                                             delay={0.2 + (index % 3) * 0.06}
                                             className={index === 8 ? "col-span-2 sm:col-span-1" : ""}
                                        >
                                             <div className="flex flex-col items-start p-3 sm:p-3.5 bg-transparent hover:bg-black/[0.03] dark:hover:bg-white/[0.04] border border-primary/25 hover:border-primary/75 rounded-xl shadow-none hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-full group">
                                                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-200">
                                                       <stat.icon size={16} strokeWidth={2.2} />
                                                  </div>
                                                  <p className="text-lg sm:text-xl font-bold mt-2 tracking-tight text-[#1D1D1F] dark:text-white group-hover:text-primary transition-colors">
                                                       {stat.value}
                                                  </p>
                                                  <p className="text-[11px] sm:text-xs font-medium text-gray-600 dark:text-gray-400 mt-0.5 leading-snug">
                                                       {t.about.stats[stat.id as keyof typeof t.about.stats] || stat.label}
                                                  </p>
                                             </div>
                                        </ScrollReveal>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}
