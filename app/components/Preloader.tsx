"use client";

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
                         <div className="absolute w-24 h-24 rounded-full border-4 border-[#0077ED] animate-ping"></div>
                         <div className="w-20 h-20  flex items-center justify-center  animate-pulse">
                              <span className="text-black dark:text-white  text-3xl ">J.V</span>
                         </div>
                    </div>

                    {/* Loading Text */}
                    <div className="mt-8 text-center">
                         <h2 className="text-2xl font-bold text-primary tracking-widest uppercase">
                              Jathushan Varnakulasingam
                         </h2>
                         <div className="flex items-center justify-center gap-1 mt-3">
                              <div className="w-2 h-2 rounded-full bg-[#0077ED] animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#0077ED] animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-2 h-2 rounded-full bg-[#0077ED] animate-bounce"></div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
