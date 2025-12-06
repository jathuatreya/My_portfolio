"use client"

import { useLanguage } from '../context/LanguageContext'
import { Code2, Smartphone, Brain, Cpu, FileCheck2, Palette } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Services() {
     const { t } = useLanguage()

     const servicesList = [
          {
               key: 'web',
               icon: Code2,
               title: t.services.items.web.title,
               description: t.services.items.web.desc
          },
          {
               key: 'mobile',
               icon: Smartphone,
               title: t.services.items.mobile.title,
               description: t.services.items.mobile.desc
          },
          {
               key: 'ml',
               icon: Brain,
               title: t.services.items.ml.title,
               description: t.services.items.ml.desc
          },
          {
               key: 'iot',
               icon: Cpu,
               title: t.services.items.iot.title,
               description: t.services.items.iot.desc
          },
          {
               key: 'consult',
               icon: FileCheck2,
               title: t.services.items.consult.title,
               description: t.services.items.consult.desc
          },
          {
               key: 'uiux',
               icon: Palette,
               title: t.services.items.uiux.title,
               description: t.services.items.uiux.desc
          }
     ]

     return (
          <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Glowing Background Elements */}
               <div className="absolute -top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl opacity-35 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-25 animate-pulse-slower pointer-events-none"></div>

               <div className="container mx-auto max-w-7xl relative z-10">
                    <ScrollReveal className="text-center mb-12">
                         <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">{t.services.title}</h2>
                         <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-normal mt-4 max-w-2xl mx-auto">{t.services.subtitle}</p>
                    </ScrollReveal>
                    <MagicContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                         {servicesList.map((service, index) => (
                              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                                   <MagicCard className="flex flex-col gap-4 rounded-2xl bg-[#F5F5F7] dark:bg-[#121212] p-6 shadow-md transition-all duration-300 hover:shadow-xl h-full">
                                        <service.icon className="text-[#0077ED]" size={40} />
                                        <div className="flex flex-col gap-2">
                                             <h3 className="text-[#1D1D1F] dark:text-white text-lg font-bold leading-tight">{service.title}</h3>
                                             <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed">{service.description}</p>
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>
                         ))}
                    </MagicContainer>
               </div>
          </section>
     )
}
