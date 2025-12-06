"use client"

import { Mail, Github, MapPin, Linkedin } from 'lucide-react'
import { footerLinks, profile } from '../data/portfolio-data'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
     const { t } = useLanguage()

     return (
          <footer className="w-full bg-[#F5F5F7] dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-white py-16 px-4 sm:px-8 lg:px-16 transition-colors duration-300">
               <div className="max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {/* Section 1: Branding & About */}
                    <div className="flex flex-col space-y-4">
                         <h2 className="text-2xl font-bold dark:text-white">{profile.name}</h2>
                         <p className="text-base text-gray-700 dark:text-gray-300">{profile.slogan}</p>
                         <p className="text-sm text-gray-600 dark:text-gray-400">{profile.shortBio}</p>
                    </div>
                    {/* Section 2: Quick Navigation */}
                    <div className="flex flex-col space-y-4">
                         <h3 className="text-lg font-semibold dark:text-white">{t.footer.quick_nav}</h3>
                         <nav>
                              <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                                   {footerLinks.map((link, index) => {
                                        let label: string = link.label
                                        if (link.href === '/') label = t.nav.home
                                        else if (link.href === '/#about') label = t.nav.about
                                        else if (link.href === '/#services') label = t.nav.services
                                        else if (link.href === '/#projects') label = t.nav.projects
                                        else if (link.href === '/#testimonials') label = t.nav.testimonials
                                        else if (link.href === '/blogs') label = t.nav.blogs
                                        else if (link.href === '/#contact') label = t.nav.contact

                                        return (
                                             <li key={index}>
                                                  <a className="text-[#0077ED] hover:underline text-base" href={link.href}>{label}</a>
                                             </li>
                                        )
                                   })}
                              </ul>
                         </nav>
                    </div>
                    {/* Section 3: Contact & Social */}
                    <div className="flex flex-col space-y-4">
                         <h3 className="text-lg font-semibold dark:text-white">{t.footer.contact_social}</h3>
                         <div className="flex flex-col space-y-3">
                              <a className="flex items-center gap-3 text-[#0077ED] hover:text-primary/80 transition-colors duration-200" href={`mailto:${profile.contact.email}`}>
                                   <Mail size={20} />
                                   <span>{profile.contact.email}</span>
                              </a>
                              <a className="flex items-center gap-3 text-[#0077ED] hover:text-primary/80 transition-colors duration-200" href={profile.social.github}>
                                   <Github size={20} />
                                   <span>GitHub</span>
                              </a>
                              <a className="flex items-center gap-3 text-[#0077ED] hover:text-primary/80 transition-colors duration-200" href={profile.social.linkedin}>
                                   <Linkedin size={20} />
                                   <span>LinkedIn</span>
                              </a>
                              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                   <MapPin size={20} />
                                   <span>{profile.contact.location}</span>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t.footer.built_with.replace('{name}', profile.name.split(' ')[0]).replace('{name}', profile.name)}</p>
               </div>
          </footer>
     )
}
