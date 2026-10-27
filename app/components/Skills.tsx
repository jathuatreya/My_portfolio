"use client";

import { CheckCircle2, Code2, Cpu, Globe, Zap, Layers, Palette, TrendingUp, ArrowRight } from 'lucide-react'
import { technologies, goals } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'
import { ScrollReveal } from './ScrollReveal'
import { MagicCard, MagicContainer } from './MagicCard'
import { getTechIcon } from './tech-icons'
import { highlightTitle } from '../utils/highlight-text'

export default function Skills() {
     const { t } = useLanguage()

     return (
          <>
               {/* --------------------------------------
              *  TECHNICAL SECTION
              * -------------------------------------- */}
               <section id="skills" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
                    <span id="technical-arsenal" className="sr-only" aria-hidden="true">Technical Arsenal</span>
                    <span id="skills-capabilities" className="sr-only" aria-hidden="true">Skills & Capabilities</span>

                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
                         {/* Heading */}
                         <ScrollReveal className="text-center mb-12 sm:mb-16">
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                                   <Code2 size={18} className="text-primary" />
                                   <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.skills.logic_tag}</span>
                              </div>

                              <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-5xl font-black tracking-tight mb-4 sm:mb-6">
                                   {highlightTitle(t.skills.title)}
                              </h2>

                              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
                                   {t.skills.subtitle}
                              </p>
                         </ScrollReveal>

                         {/* Capabilities Grid - 5 Core Pillars: Full Stack, Digital Marketing, Custom Software, AI/ML Projects, Automations */}
                         <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-5 mb-10 sm:mb-12">
                              {[
                                   {
                                        number: "01",
                                        title: "Full-Stack Development",
                                        desc: "Scalable engineering using Next.js 16, React 19, TypeScript, Node.js, and modern databases. I connect pixel-perfect frontends with secure, reliable cloud backend architectures.",
                                        icon: <Code2 size={20} strokeWidth={1.5} />,
                                        colSpan: "md:col-span-1 lg:col-span-2",
                                        cardClass: "border-2 border-primary/40 dark:border-primary/50 hover:border-primary bg-white dark:bg-[#1D1D1F] shadow-sm hover:shadow-xl shadow-primary/5 transition-all duration-300",
                                        numberClass: "text-[#9CA3AF] dark:text-neutral-600 group-hover:text-primary transition-colors",
                                        iconClass: "text-primary transition-transform group-hover:scale-110",
                                        linkClass: "text-neutral-900 dark:text-white group-hover/link:text-primary",
                                        link: "/#projects",
                                   },
                                   {
                                        number: "02",
                                        title: "Digital Marketing",
                                        desc: "Drive high-intent traffic and conversions with technical SEO, targeted PPC campaigns, and data-driven digital growth strategies that elevate your brand visibility.",
                                        icon: <TrendingUp size={20} strokeWidth={1.5} />,
                                        colSpan: "md:col-span-1 lg:col-span-2",
                                        cardClass: "border-2 border-primary/40 dark:border-primary/50 hover:border-primary bg-white dark:bg-[#1D1D1F] shadow-sm hover:shadow-xl shadow-primary/5 transition-all duration-300",
                                        numberClass: "text-[#9CA3AF] dark:text-neutral-600 group-hover:text-primary transition-colors",
                                        iconClass: "text-primary transition-transform group-hover:scale-110",
                                        linkClass: "text-neutral-900 dark:text-white group-hover/link:text-primary",
                                        link: "/#projects",
                                   },
                                   {
                                        number: "03",
                                        title: "Custom Software",
                                        desc: "Bespoke enterprise applications, cloud POS systems, inventory management engines, and tailor-made business tools built to solve unique operational bottlenecks.",
                                        icon: <Layers size={20} strokeWidth={1.5} />,
                                        colSpan: "md:col-span-2 lg:col-span-2",
                                        cardClass: "border-2 border-primary/40 dark:border-primary/50 hover:border-primary bg-white dark:bg-[#1D1D1F] shadow-sm hover:shadow-xl shadow-primary/5 transition-all duration-300",
                                        numberClass: "text-[#9CA3AF] dark:text-neutral-600 group-hover:text-primary transition-colors",
                                        iconClass: "text-primary transition-transform group-hover:scale-110",
                                        linkClass: "text-neutral-900 dark:text-white group-hover/link:text-primary",
                                        link: "/#projects",
                                   },
                                   {
                                        number: "04",
                                        title: "AI & ML Projects",
                                        desc: "Deep learning models, computer vision systems (OpenCV), predictive algorithms with PyTorch & TensorFlow, and custom LLM integrations tailored for production impact.",
                                        icon: <Cpu size={20} strokeWidth={1.5} />,
                                        colSpan: "md:col-span-1 lg:col-span-3",
                                        cardClass: "border-2 border-primary/40 dark:border-primary/50 hover:border-primary bg-white dark:bg-[#1D1D1F] shadow-sm hover:shadow-xl shadow-primary/5 transition-all duration-300",
                                        numberClass: "text-[#9CA3AF] dark:text-neutral-600 group-hover:text-primary transition-colors",
                                        iconClass: "text-primary transition-transform group-hover:scale-110",
                                        linkClass: "text-neutral-900 dark:text-white group-hover/link:text-primary",
                                        link: "/#projects",
                                   },
                                   {
                                        number: "05",
                                        title: "Automations",
                                        desc: "End-to-end workflow automations, webhook pipelines, WhatsApp & messaging bots, and smart IoT telemetry that eliminate repetitive manual tasks and accelerate operations.",
                                        icon: <Zap size={20} strokeWidth={1.5} />,
                                        colSpan: "md:col-span-1 lg:col-span-3",
                                        cardClass: "border-2 border-primary/40 dark:border-primary/50 hover:border-primary bg-white dark:bg-[#1D1D1F] shadow-sm hover:shadow-xl shadow-primary/5 transition-all duration-300",
                                        numberClass: "text-[#9CA3AF] dark:text-neutral-600 group-hover:text-primary transition-colors",
                                        iconClass: "text-primary transition-transform group-hover:scale-110",
                                        linkClass: "text-neutral-900 dark:text-white group-hover/link:text-primary",
                                        link: "/#projects",
                                   },
                              ].map((item, index) => (
                                   <ScrollReveal key={item.number} delay={index * 0.08} className={`h-full ${item.colSpan}`}>
                                        <MagicCard
                                             className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 h-full transition-all duration-300 ${item.cardClass}`}
                                        >
                                             <div>
                                                  {/* Top Header Row: Big Number (01, 02...) + Top-Right Minimal Icon */}
                                                  <div className="flex items-start justify-between">
                                                       <span className={`text-3xl sm:text-4xl font-normal tracking-tight font-sans transition-colors duration-300 ${item.numberClass}`}>
                                                            {item.number}
                                                       </span>
                                                       <div className={`transition-colors duration-300 ${item.iconClass}`}>
                                                            {item.icon}
                                                       </div>
                                                  </div>

                                                  {/* Title */}
                                                  <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] dark:text-white mt-4 sm:mt-5 mb-2 tracking-tight">
                                                       {item.title}
                                                  </h3>

                                                  {/* Description */}
                                                  <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal min-h-[48px] sm:min-h-[54px]">
                                                       {item.desc}
                                                  </p>
                                             </div>

                                             {/* Bottom Action: "Learn more ->" */}
                                             <div className="pt-4 sm:pt-5">
                                                  <a
                                                       href={item.link}
                                                       className={`inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 group/link cursor-pointer ${item.linkClass}`}
                                                  >
                                                       <span>Learn more</span>
                                                       <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
                                                  </a>
                                             </div>
                                        </MagicCard>
                                   </ScrollReveal>
                              ))}
                         </MagicContainer>

                         {/* Full Tech Cloud with Real Brand & Domain Icons */}
                         <ScrollReveal delay={0.4}>
                              <MagicContainer className="bg-white dark:bg-[#1D1D1F] rounded-3xl sm:rounded-4xl p-4 sm:p-8 lg:p-12 shadow-md border-2 border-primary/40 dark:border-primary/40 text-center">
                                   <h3 className="text-sm sm:text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6 sm:mb-8">
                                        {highlightTitle(t.skills.stack_title, 2)}
                                   </h3>

                                   <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3">
                                        {technologies.map((tech, index) => (
                                             <MagicCard
                                                  key={index}
                                                  className="group flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#F5F5F7] dark:bg-[#1D1D1F] border border-black/5 dark:border-white/5 hover:border-primary/40 dark:hover:border-primary/40 hover:bg-white dark:hover:bg-[#2A2A2D] hover:shadow-md transition-all cursor-default"
                                                  disableAnimations={true}
                                                  particleCount={0}
                                                  enableTilt={true}
                                             >
                                                  <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                       {getTechIcon(tech)}
                                                  </div>
                                                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-xs sm:text-sm whitespace-nowrap">
                                                       {tech}
                                                  </span>
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
               <section id="goals" className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">

                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                    <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
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
                                        <ScrollReveal key={index} delay={index * 0.1} className="flex items-center gap-5 p-6 rounded-2xl bg-[#F5F5F7] dark:bg-[#1D1D1F] border border-transparent hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
