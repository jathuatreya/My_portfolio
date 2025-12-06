"use client"

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
     error,
     reset,
}: {
     error: Error & { digest?: string }
     reset: () => void
}) {
     useEffect(() => {
          // Log the error to an error reporting service
          console.error(error)
     }, [error])

     return (
          <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] p-6 text-center">
               <div className="max-w-md w-full space-y-8">

                    {/* Animated Icon */}
                    <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                         <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full animate-ping opacity-75 duration-1000"></div>
                         <div className="relative bg-red-100 dark:bg-red-900/30 p-5 rounded-full text-red-600 dark:text-red-400">
                              <AlertTriangle size={48} />
                         </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                         <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                              System Malfunction
                         </h2>
                         <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                              We've encountered an unexpected error. The system is currently in maintenance mode to prevent data loss.
                         </p>
                         <div className="font-mono text-xs text-red-500 bg-red-50 dark:bg-red-900/10 p-2 rounded border border-red-100 dark:border-red-900/20 mx-auto max-w-[300px] truncate">
                              Error Code: {error.digest || "UNKNOWN_ERROR"}
                         </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                         <button
                              onClick={() => reset()}
                              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                         >
                              <RefreshCcw size={18} />
                              Try Again
                         </button>

                         <Link
                              href="/"
                              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
                         >
                              <Home size={18} />
                              Return Home
                         </Link>
                    </div>

               </div>
          </div>
     )
}
