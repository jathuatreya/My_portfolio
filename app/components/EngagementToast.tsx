"use client";

import { useEffect, useRef } from 'react'
import { toast } from '../utils/toast'
import { contactInfo } from '../data/portfolio-data'
import { MessageSquare, Mail, Github, Linkedin } from 'lucide-react'

export default function EngagementToast() {
     const hasShownToast = useRef(false)

     useEffect(() => {
          // 2 minutes = 120000 milliseconds
          const timer = setTimeout(() => {
               if (hasShownToast.current) return

               hasShownToast.current = true

               toast.custom((t: any) => (
                    <div className="bg-[#F5F5F7] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-5 max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-500">
                         <div className="flex items-start gap-4">
                              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                                   <MessageSquare className="text-primary w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                   <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">
                                        Enjoying the portfolio?
                                   </h3>
                                   <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                        You've been here for a while! If you're looking for a developer or just want to discuss web tech, let's connect.
                                   </p>

                                   <div className="flex flex-col gap-2">
                                        <a
                                             href={`mailto:${contactInfo.email}`}
                                             className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                                        >
                                             <Mail size={16} />
                                             {contactInfo.email}
                                        </a>

                                        <div className="flex gap-4 mt-2">

                                        </div>
                                   </div>
                              </div>
                              <button
                                   onClick={() => toast.dismiss(t)}
                                   className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                              >
                                   ×
                              </button>
                         </div>
                    </div>

               ))
          }, 120000) // 2 minutes

          return () => clearTimeout(timer)
     }, [])

     return null
}
