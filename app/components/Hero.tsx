"use client";

import { Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react'
import { profile } from '../data/portfolio-data'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ScrollReveal } from './ScrollReveal'

import LiquidEther from './LiquidEther'

export default function Hero() {
     const { t } = useLanguage()
     const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
     const [displayText, setDisplayText] = useState('')
     const [isDeleting, setIsDeleting] = useState(false)

     useEffect(() => {
          const currentRole = profile.roles[currentRoleIndex]
          const typingSpeed = isDeleting ? 30 : 50

          const timer = setTimeout(() => {
               if (!isDeleting) {
                    if (displayText.length < currentRole.length) {
                         setDisplayText(currentRole.substring(0, displayText.length + 1))
                    } else {
                         setTimeout(() => setIsDeleting(true), 2000)
                    }
               } else {
                    if (displayText.length > 0) {
                         setDisplayText(currentRole.substring(0, displayText.length - 1))
                    } else {
                         setIsDeleting(false)
                         setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length)
                    }
               }
          }, typingSpeed)

          return () => clearTimeout(timer)
     }, [displayText, isDeleting, currentRoleIndex])

     return (
          <section id="home" className="min-h-screen flex items-center pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Liquid Background Effect */}
               <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                    <LiquidEther
                         colors={['#f8f9fa', '#e9ecef', '#0077ED', '#dee2e6']}
                         mouseForce={15}
                         cursorSize={80}
                         isViscous={false}
                         viscous={25}
                         resolution={0.35}
                         autoDemo={true}
                         autoSpeed={0.3}
                         autoIntensity={1.5}
                         takeoverDuration={0.3}
                         autoResumeDelay={2000}
                         autoRampDuration={1.0}
                    />
               </div>

               <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] relative z-10">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                         {/* Content Section */}
                         <ScrollReveal className="flex flex-col justify-center text-center lg:text-left w-full">
                              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#1D1D1F] dark:text-white">
                                   {t.hero.greeting} <span className="text-primary block sm:inline">{profile.name}</span>
                              </h2>
                              <div className="h-16 sm:h-20 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start">
                                   <p className="text-xl sm:text-2xl md:text-3xl font-medium text-primary">
                                        {t.hero.role_prefix} <span className="typewriter-text">{displayText}</span>
                                        <span className="animate-pulse">|</span>
                                   </p>
                              </div>
                              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                   {profile.shortBio}
                              </p>

                              {/* Social Media Icons */}
                              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                                   <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-slate-700 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" aria-label="LinkedIn">
                                        <Linkedin size={20} className="sm:w-6 sm:h-6" />
                                   </a>
                                   <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-slate-700 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" aria-label="GitHub">
                                        <Github size={20} className="sm:w-6 sm:h-6" />
                                   </a>
                                   <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-slate-700 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" aria-label="Twitter">
                                        <Twitter size={20} className="sm:w-6 sm:h-6" />
                                   </a>
                                   <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-slate-700 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" aria-label="Facebook">
                                        <Facebook size={20} className="sm:w-6 sm:h-6" />
                                   </a>
                                   <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-slate-700 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg" aria-label="Instagram">
                                        <Instagram size={20} className="sm:w-6 sm:h-6" />
                                   </a>
                              </div>
                         </ScrollReveal>

                         {/* Image Section */}
                         <ScrollReveal className="flex items-center justify-center w-full" delay={0.2}>
                              <Image
                                   src={profile.profileImage}
                                   alt={profile.name}
                                   width={600}
                                   height={600}
                                   className="w-full sm:max-w-md lg:max-w-lg h-auto "
                                   priority
                              />
                         </ScrollReveal>
                    </div>
               </div>
          </section>
     )
}
