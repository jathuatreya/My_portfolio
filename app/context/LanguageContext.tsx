"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '../i18n/locales/en.json'
import ta from '../i18n/locales/ta.json'
import si from '../i18n/locales/si.json'

// Define the shape of your translations
// Assuming all files follow the same structure as 'en'
type Translations = typeof en

// Possible languages
export type Language = 'en' | 'ta' | 'si'

interface LanguageContextProps {
     language: Language
     setLanguage: (lang: Language) => void
     t: Translations
     dir: 'ltr' | 'rtl'
}

const translationsMap: Record<Language, Translations> = {
     en,
     ta,
     si
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
     // Initialize from existing logic or default to 'en'
     // Could check localStorage here inside useEffect to avoid hydration mismatch
     const [language, setLanguageState] = useState<Language>('en')

     // Handling hydration safely
     useEffect(() => {
          const saved = localStorage.getItem('app-language') as Language
          if (saved && ['en', 'ta', 'si'].includes(saved)) {
               setLanguageState(saved)
          }
     }, [])

     const setLanguage = (lang: Language) => {
          setLanguageState(lang)
          localStorage.setItem('app-language', lang)
          // Update HTML lang attribute
          document.documentElement.lang = lang
     }

     const t = translationsMap[language]
     const dir = 'ltr' // Tamil and Sinhala are LTR usually in web context? Yes.

     return (
          <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
               {children}
          </LanguageContext.Provider>
     )
}

export function useLanguage() {
     const context = useContext(LanguageContext)
     if (!context) {
          throw new Error('useLanguage must be used within a LanguageProvider')
     }
     return context
}
