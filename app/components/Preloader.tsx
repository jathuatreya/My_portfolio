"use client"

import { useEffect, useState } from 'react'

export default function Preloader() {
     const [loaded, setLoaded] = useState(false)

     useEffect(() => {
          const timer: any = setTimeout(() => {
               setLoaded(true)
          }, 1500) // Simulating slight delay for premium feel

          return () => clearTimeout(timer)
     }, [])

     if (loaded) return null

     return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0a0a0a] transition-opacity duration-700">
               <div className="flex flex-col items-center">
                    {/* Pulsing Logo/Circle */}
                    <div className="relative flex items-center justify-center">
                         <div className="absolute w-24 h-24 rounded-full border-4 border-primary/20 animate-ping"></div>
                         <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 animate-pulse">
                              <span className="text-white text-3xl font-black">JV</span>
                         </div>
                    </div>

                    {/* Loading Text */}
                    <div className="mt-8 text-center">
                         <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                              Jathushan.V
                         </h2>
                         <div className="flex items-center justify-center gap-1 mt-3">
                              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
