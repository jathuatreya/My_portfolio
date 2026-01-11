"use client";

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [complete, setComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Progress bar animation: 0 -> 100 in ~1.2 seconds
    // 1200ms / 100 steps = 12ms per step
    const interval = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(interval)
                setTimeout(() => setComplete(true), 200) // Short delay before unmounting
                return 100
            }
            return prev + 1
        })
    }, 12)

    return () => clearInterval(interval)
  }, [])

  if (complete) return null

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] transition-all duration-500">
      
      {/* Logo & Name - Visible Immediately */}
      <div className="flex flex-col items-center animate-fade-in-up">
        {/* Favicon */}
        <div className="relative flex items-center justify-center mb-8">
             <img src="/logo.png" alt="Logo" className="w-32 h-32" />
        </div>

        {/* Name */}
        <h2 className="text-3xl font-bold text-black dark:text-white tracking-widest uppercase text-center px-4">
          Jathushan Varnakulasingam
        </h2>

         {/* Progress Bar */}
         <div className="w-64 mt-8">
            <div className="h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-[#0077ED] transition-all duration-75 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="mt-2 text-[#0077ED] text-sm font-mono text-center">{progress}%</p>
         </div>
      </div>
    </div>
  )
}
