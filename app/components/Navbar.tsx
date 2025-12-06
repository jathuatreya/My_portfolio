"use client";

import { Menu, Globe, ChevronDown } from 'lucide-react'
import { navItems, profile } from '../data/portfolio-data'
import { useState, useEffect } from 'react'
import { toast } from '../utils/toast'
import { useLanguage, Language } from '../context/LanguageContext'

export default function Navbar() {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
     const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
     const [isSystemDark, setIsSystemDark] = useState(false)

     const { t, language, setLanguage } = useLanguage()

     // Detect system theme changes
     useEffect(() => {
          // Check if window is defined (client-side)
          if (typeof window !== 'undefined') {
               const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
               // Set initial value
               setIsSystemDark(mediaQuery.matches)

               // Create event listener
               const handleChange = (e: MediaQueryListEvent) => {
                    setIsSystemDark(e.matches)
               }

               // Add event listener
               mediaQuery.addEventListener('change', handleChange)

               // Cleanup
               return () => {
                    mediaQuery.removeEventListener('change', handleChange)
               }
          }
     }, [])

     const toggleLanguage = (lang: Language) => {
          setLanguage(lang)
          setIsLangMenuOpen(false)
     }

     const langLabels = {
          en: 'English',
          ta: 'தமிழ்',
          si: 'සිංහල'
     }

     // Theme-based classes
     const navBarClasses = `mx-auto px-2 md:px-4 sm:px-6 lg:px-8 max-w-7xl`

     const navContainerClasses = `flex items-center justify-between rounded-2xl transition-all duration-300 ${isSystemDark
          ? 'bg-[#1a1a1a]/95 backdrop-blur-sm border border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.36)]'
          : 'bg-[#F5F5F7]/95 backdrop-blur-sm border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
          } p-2 md:p-4`

     const logoTextClasses = `text-xl font-bold tracking-tight transition-colors duration-300 ${isSystemDark ? 'text-gray-100' : 'text-gray-900'}`

     const navLinkClasses = (itemId: string) => `text-sm font-medium transition-colors duration-300 ${itemId === 'home'
          ? 'text-primary hover:text-primary/80'
          : isSystemDark
               ? 'text-gray-300 hover:text-primary'
               : 'text-gray-700 hover:text-primary'
          }`

     const downloadCVClasses = `flex cursor-pointer items-center justify-center overflow-hidden rounded-lg text-sm font-bold shadow-sm ring-1 ring-inset transition-all duration-300 px-5 py-2.5 mr-2 ${isSystemDark
          ? 'bg-[#2a2a2a] text-gray-200 ring-white/10 hover:bg-white/10'
          : 'bg-white text-gray-800 ring-black/10 hover:bg-black/5'
          }`

     const languageButtonClasses = `flex h-10 w-10 md:w-auto md:px-3 cursor-pointer items-center justify-center gap-2 rounded-lg shadow-sm ring-1 ring-inset transition-all duration-300 ${isSystemDark
          ? 'bg-[#2a2a2a] text-gray-200 ring-white/10 hover:bg-white/10'
          : 'bg-white text-gray-800 ring-black/10 hover:bg-black/5'
          }`

     const mobileMenuButtonClasses = `lg:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg shadow-sm ring-1 ring-inset transition-colors duration-300 ${isSystemDark
          ? 'bg-[#2a2a2a] text-gray-200 ring-white/10 hover:bg-white/10'
          : 'bg-white text-gray-800 ring-black/10 hover:bg-black/5'
          }`

     const mobileMenuClasses = `lg:hidden fixed top-20 left-2 right-2 sm:left-6 sm:right-6 rounded-2xl shadow-xl z-50 transition-all duration-300 transform origin-top max-h-[80vh] overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          } ${isSystemDark
               ? 'bg-[#1a1a1a] border border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.36)]'
               : 'bg-white border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          }`

     const mobileMenuItemClasses = (itemId: string) => `flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors duration-300 ${itemId === 'home'
          ? 'bg-primary/10 text-primary'
          : isSystemDark
               ? 'text-gray-300 hover:bg-white/5'
               : 'text-gray-700 hover:bg-black/5'
          }`

     const mobileCVButtonClasses = `flex h-10 cursor-pointer items-center justify-center rounded-lg text-sm font-bold shadow-sm transition-colors duration-300 ${isSystemDark
          ? 'bg-[#2a2a2a] text-gray-200 hover:bg-white/10'
          : 'bg-[#F5F5F7] text-gray-800 hover:bg-black/5'
          }`

     return (
          <>
               {/* Fixed floating navbar */}
               <nav className="fixed top-5 left-0 right-0 z-50 w-full">
                    {/* Subtle background glow that adapts to theme */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-24 rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-300 ${isSystemDark ? 'bg-primary/10' : 'bg-primary/15'
                         }`}></div>

                    <div className={navBarClasses}>
                         <div className={navContainerClasses}>
                              <a className="flex items-center gap-3 shrink-0" href="#">
                                   <div className="size-8 text-primary">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                             <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                                  fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                   </div>
                                   <h1 className={logoTextClasses}>
                                        <span className="sm:hidden">{profile.name.split(" ")[0]}</span>
                                        <span className="hidden sm:block">{profile.name}</span>
                                   </h1>
                              </a>
                              <nav className="hidden lg:flex items-center gap-8">
                                   {navItems.map((item) => (
                                        <a
                                             key={item.id}
                                             className={navLinkClasses(item.id)}
                                             href={item.href}
                                        >
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
                                             className={downloadCVClasses}
                                        >
                                             <span className="truncate">{t.nav.download_cv}</span>
                                        </a>
                                   </div>

                                   {/* Language Switcher Desktop */}
                                   <div className="relative">
                                        <button
                                             onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                             className={languageButtonClasses}
                                        >
                                             <Globe size={20} />
                                             <span className="hidden md:block text-sm font-bold uppercase">{language}</span>
                                             <ChevronDown size={14} className="hidden md:block opacity-50" />
                                        </button>

                                        {isLangMenuOpen && (
                                             <>
                                                  <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)}></div>
                                                  <div className={`absolute right-0 mt-2 w-32 origin-top-right rounded-xl shadow-xl ring-1 z-20 overflow-hidden py-1 transition-colors duration-300 ${isSystemDark
                                                       ? 'bg-[#1a1a1a] border border-gray-800 ring-white/10'
                                                       : 'bg-white border border-gray-100 ring-black/5'
                                                       }`}>
                                                       {(Object.keys(langLabels) as Language[]).map((lang) => (
                                                            <button
                                                                 key={lang}
                                                                 onClick={() => toggleLanguage(lang)}
                                                                 className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors duration-300 ${language === lang
                                                                      ? 'bg-primary/10 text-primary font-bold'
                                                                      : isSystemDark
                                                                           ? 'text-gray-300 hover:bg-white/5'
                                                                           : 'text-gray-700 hover:bg-[#F5F5F7]'
                                                                      }`}
                                                            >
                                                                 {langLabels[lang]}
                                                            </button>
                                                       ))}
                                                  </div>
                                             </>
                                        )}
                                   </div>

                                   <button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className={mobileMenuButtonClasses}
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
                         className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
                         onClick={() => setIsMobileMenuOpen(false)}
                    />
               )}

               {/* Mobile Menu */}
               <div className={mobileMenuClasses}>
                    <div className="flex flex-col p-4 space-y-2">
                         {navItems.map((item) => (
                              <a
                                   key={item.id}
                                   className={mobileMenuItemClasses(item.id)}
                                   href={item.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                              >
                                   {t.nav[item.id as keyof typeof t.nav] || item.label}
                              </a>
                         ))}
                         <div className={`grid grid-cols-1 gap-3 pt-2 mt-2 border-t transition-colors duration-300 ${isSystemDark ? 'border-gray-800' : 'border-gray-200'
                              }`}>
                              <a
                                   href={profile.resumeURL}
                                   download="Jathushan_CV.pdf"
                                   className={mobileCVButtonClasses}
                                   onClick={() => setIsMobileMenuOpen(false)}
                              >
                                   {t.nav.download_cv}
                              </a>
                         </div>
                    </div>
               </div>
          </>
     )
}