const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'components', 'About.tsx');

const content = `"use client";

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
          <section id="about" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Glowing Background Elements */}
               <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute bottom-40 left-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl opacity-30 animate-pulse-slower pointer-events-none"></div>

               <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                         {/* Left Column: Image with Entry Animation */}
                         <div className="flex justify-center lg:justify-start lg:col-span-4 w-full">
                              <ScrollReveal delay={0.1} className="w-full max-w-sm">
                                   <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-auto lg:aspect-square rounded-xl bg-[#F5F5F7] dark:bg-slate-800 p-3 shadow-lg">
                                        <div className="w-full h-full rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: \`url('\${profile.aboutImage}')\` }}></div>
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
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                   {stats.map((stat, index) => (
                                        <ScrollReveal key={index} delay={0.25 + index * 0.1}>
                                             <div className="flex flex-col items-start p-6 bg-[#F5F5F7] dark:bg-[#1D1D1F] rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                                                  <stat.icon className="text-primary" size={32} />
                                                  <p className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold mt-3">{stat.value}</p>
                                                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-1">
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
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added entry-level animations to About.tsx!');
