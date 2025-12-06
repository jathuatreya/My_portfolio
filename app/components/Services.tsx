"use client";

import { useLanguage } from '../context/LanguageContext'
import { Briefcase } from 'lucide-react'
import { services } from '../data/portfolio-data'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Services() {
     const { t } = useLanguage()

     const servicesList = services

     return (
          <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Glowing Background Elements */}
               <div className="absolute -top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl opacity-35 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-25 animate-pulse-slower pointer-events-none"></div>

               <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] relative z-10">
                    <ScrollReveal className="text-center mb-12">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                              <Briefcase size={18} className="text-primary" />
                              <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.services.tag}</span>
                         </div>
                         <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">{t.services.title}</h2>
                         <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-normal mt-4 max-w-2xl mx-auto">{t.services.subtitle}</p>
                    </ScrollReveal>
                    <MagicContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                         {servicesList.map((service, index) => (
                              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                                   <MagicCard className="flex flex-col gap-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#121212] p-6 shadow-md transition-all duration-300 hover:shadow-xl h-full">
                                        <service.icon className="text-[#0077ED]" size={40} />
                                        <div className="flex flex-col gap-2">
                                             <h3 className="text-[#1D1D1F] dark:text-white text-lg font-bold leading-tight">
                                                  {t.services.items[service.id as keyof typeof t.services.items]?.title || service.title}
                                             </h3>
                                             <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">
                                                  {t.services.items[service.id as keyof typeof t.services.items]?.desc || service.description}
                                             </p>
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>
                         ))}
                    </MagicContainer>
               </div>
          </section>
     )
}
