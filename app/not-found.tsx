"use client"

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
     return (
          <div className="min-h-screen flex items-center justify-center bg-page-light dark:bg-page-dark p-4">
               <div className="text-center space-y-8 max-w-lg mx-auto">

                    {/* Animated 404 Text */}
                    <div className="relative">
                         <h1 className="text-[150px] font-black text-gray-200 dark:text-gray-800 leading-none select-none">
                              404
                         </h1>
                         <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-3xl font-bold text-primary animate-bounce">
                                   Oops!
                              </span>
                         </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                         <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                              Page Not Found
                         </h2>
                         <p className="text-gray-600 dark:text-gray-400 text-lg">
                              It seems you've wandered into the digital void. But don't worry, even the best explorers get lost sometimes. Let's get you back on track!
                         </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                         <Link
                              href="/"
                              className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                         >
                              <Home size={20} />
                              Back to Home
                         </Link>

                         <button
                              onClick={() => window.history.back()}
                              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark font-bold shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                         >
                              <ArrowLeft size={20} />
                              Go Back
                         </button>
                    </div>

               </div>
          </div>
     )
}
