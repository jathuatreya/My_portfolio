"use client"

import { Menu, Moon, Sun, Globe, ChevronDown } from 'lucide-react'
import { navItems, profile } from '../data/portfolio-data'
import { useState, useEffect } from 'react'
import { toast } from '../utils/toast'
import { useLanguage, Language } from '../context/LanguageContext'

export default function Navbar() {
     const [isDark, setIsDark] = useState(false)
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
     const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

     const { t, language, setLanguage } = useLanguage()

     useEffect(() => {
          // Check initial theme
          const theme = localStorage.getItem('theme')
          const isDarkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
          setIsDark(isDarkMode)
          if (isDarkMode) {
               document.documentElement.classList.add('dark')
          }
     }, [])

     const toggleTheme = () => {
          const newTheme = !isDark
          setIsDark(newTheme)

          if (newTheme) {
               document.documentElement.classList.add('dark')
               localStorage.setItem('theme', 'dark')
          } else {
               document.documentElement.classList.remove('dark')
               localStorage.setItem('theme', 'light')
          }
     }

     const toggleLanguage = (lang: Language) => {
          setLanguage(lang)
          setIsLangMenuOpen(false)
     }

     const langLabels = {
          en: 'English',
          ta: 'தமிழ்',
          si: 'සිංහල'
     }

     return (
          <>
               <nav className="fixed top-5 left-0 right-0 z-50 w-full bg-transparent">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-24 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                         <div className="flex items-center justify-between rounded-2xl bg-[#F5F5F7] dark:bg-nav-dark p-4 shadow-[var(--card-shadow)] dark:shadow-none transition-colors duration-300">
                              <a className="flex items-center gap-3 shrink-0" href="#">
                                   <div className="size-8 text-primary">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                             <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                                  fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                   </div>
                                   <h1 className="text-xl font-bold tracking-tight text-text-light dark:text-text-dark hidden sm:block">
                                        {profile.name}
                                   </h1>
                              </a>
                              <nav className="hidden lg:flex items-center gap-8">
                                   {navItems.map((item) => (
                                        <a
                                             key={item.id}
                                             className={`text-sm font-medium ${item.id === 'home' ? 'text-primary hover:text-primary/80' : 'text-text-light dark:text-text-dark/80 hover:text-primary'} transition-colors`}
                                             href={item.href}
                                        >
                                             {/* Use translation if available, else fallback to label */}
                                             {t.nav[item.id as keyof typeof t.nav] || item.label}
                                        </a>
                                   ))}
                              </nav>
                              <div className="flex items-center gap-2">
                                   <div className="hidden md:flex items-center gap-2">
                                        <a
                                             href={profile.resumeURL}
                                             download="Jathushan_CV.pdf"
                                             onClick={() => toast.success("Thanks for downloading my CV! Let's connect.")}
                                             className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark px-4 text-text-light dark:text-text-dark text-sm font-bold shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10 transition-all hover:bg-black/5 dark:hover:bg-white/5"
                                        >
                                             <span className="truncate">{t.nav.download_cv}</span>
                                        </a>
                                   </div>

                                   {/* Language Switcher Desktop */}
                                   <div className="relative">
                                        <button
                                             onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                             className="flex h-10 w-10 md:w-auto md:px-3 cursor-pointer items-center justify-center gap-2 rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10 transition-all hover:bg-black/5 dark:hover:bg-white/5"
                                        >
                                             <Globe size={20} />
                                             <span className="hidden md:block text-sm font-bold uppercase">{language}</span>
                                             <ChevronDown size={14} className="hidden md:block opacity-50" />
                                        </button>

                                        {isLangMenuOpen && (
                                             <>
                                                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)}></div>
                                                  <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl bg-white dark:bg-neutral-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10 z-20 overflow-hidden py-1">
                                                       {(Object.keys(langLabels) as Language[]).map((lang) => (
                                                            <button
                                                                 key={lang}
                                                                 onClick={() => toggleLanguage(lang)}
                                                                 className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${language === lang ? 'bg-primary/10 text-primary font-bold' : 'text-gray-700 dark:text-gray-200 hover:bg-[#F5F5F7] dark:hover:bg-white/5'}`}
                                                            >
                                                                 {langLabels[lang]}
                                                            </button>
                                                       ))}
                                                  </div>
                                             </>
                                        )}
                                   </div>

                                   {/* Theme Toggle */}
                                   <button
                                        onClick={toggleTheme}
                                        className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10 transition-all hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 active:scale-95"
                                        aria-label="Toggle theme"
                                   >
                                        <div className="relative w-5 h-5">
                                             <Moon
                                                  size={20}
                                                  className={`absolute inset-0 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                                             />
                                             <Sun
                                                  size={20}
                                                  className={`absolute inset-0 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                                             />
                                        </div>
                                   </button>
                                   <button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className="lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10"
                                   >
                                        <Menu size={24} />
                                   </button>
                              </div>
                         </div>
                    </div>
               </nav>

               {/* Mobile Menu Overlay */}
               {isMobileMenuOpen && (
                    <div
                         className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                         onClick={() => setIsMobileMenuOpen(false)}
                    />
               )}

               {/* Mobile Menu */}
               <div
                    className={`lg:hidden fixed top-24 left-4 right-4 sm:left-6 sm:right-6 bg-nav-light dark:bg-nav-dark rounded-2xl shadow-xl z-50 transition-all duration-300 transform origin-top ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}
               >
                    <div className="flex flex-col p-4 space-y-2">
                         {navItems.map((item) => (
                              <a
                                   key={item.id}
                                   className={`flex items-center justify-between p-3 rounded-xl text-base font-medium ${item.id === 'home' ? 'bg-primary/10 text-primary' : 'text-text-light dark:text-text-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors'}`}
                                   href={item.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                              >
                                   {t.nav[item.id as keyof typeof t.nav] || item.label}
                              </a>
                         ))}
                         <div className="grid grid-cols-1 gap-3 pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                              <a
                                   href={profile.resumeURL}
                                   download="Jathushan_CV.pdf"
                                   className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#F5F5F7] dark:bg-gray-800 text-text-light dark:text-text-dark text-sm font-bold shadow-sm"
                              >
                                   {t.nav.download_cv}
                              </a>
                         </div>
                    </div>
               </div>
          </>
     )
}
