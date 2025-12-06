"use client";

import { Quote, MessageSquare } from 'lucide-react'
import { testimonials } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'

export default function Testimonials() {
     const { t } = useLanguage()
     return (
          <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] relative z-10">
                    {/* Background Elements */}
                    <div className="absolute -top-24 -left-48 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute -bottom-32 -right-40 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16 relative z-10">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                              <MessageSquare size={18} className="text-primary" />
                              <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.testimonials.tag}</span>
                         </div>
                         <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
                              {t.testimonials.title}
                         </h2>
                         <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              {t.testimonials.subtitle}
                         </p>
                    </div>

                    {/* Testimonials Grid */}
                    <MagicContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                         {testimonials.map((testimonial, index) => (
                              <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                                   <MagicCard className="group relative flex flex-col rounded-2xl bg-[#F5F5F7] dark:bg-[#121212] p-8 shadow-[var(--card-shadow)] transition-all duration-300 h-full">
                                        <Quote className="absolute top-6 right-6 text-primary/20 dark:text-primary/40 group-hover:text-primary/30 transition-colors duration-300" size={40} />
                                        <div className="flex items-center mb-6">
                                             <div>
                                                  <p className="text-lg font-bold text-[#1D1D1F] dark:text-white">{testimonial.name}</p>
                                                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                             </div>
                                        </div>
                                        <blockquote className="text-gray-700 dark:text-gray-300">&quot;{testimonial.quote}&quot;</blockquote>
                                        <div className="flex mt-4 text-primary gap-1">
                                             {[...Array(5)].map((_, i) => (
                                                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                  </svg>
                                             ))}
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>
                         ))}
                    </MagicContainer>
               </div>
          </section>
     )
}
