"use client";

import { useEffect, useState } from 'react'
import { subscribe, ToastEvent, toast } from '../utils/toast'
import { X, CheckCircle, AlertCircle } from 'lucide-react'

export default function GlobalToaster() {
     const [toasts, setToasts] = useState<ToastEvent[]>([])

     useEffect(() => {
          return subscribe((newToasts) => {
               setToasts(newToasts)
          })
     }, [])

     return (
          <div className="fixed bottom-0 right-0 z-[100] p-4 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
               {toasts.map((t) => (
                    <div
                         key={t.id}
                         className="pointer-events-auto animate-in slide-in-from-right fade-in duration-300"
                    >
                         {t.type === 'custom' ? (
                              t.component
                         ) : t.type === 'error' ? (
                              // Error Toast Style
                              <div className="bg-[#F5F5F7] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-3">
                                   <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-full">
                                        <AlertCircle size={18} />
                                   </div>
                                   <p className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">
                                        {t.message}
                                   </p>
                                   <button
                                        onClick={() => toast.dismiss(t.id)}
                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                   >
                                        <X size={16} />
                                   </button>
                              </div>
                         ) : (
                              // Default Success Toast Style
                              <div className="bg-[#F5F5F7] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-3">
                                   <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-full">
                                        <CheckCircle size={18} />
                                   </div>
                                   <p className="text-sm font-medium text-gray-800 dark:text-gray-200 flex-1">
                                        {t.message}
                                   </p>
                                   <button
                                        onClick={() => toast.dismiss(t.id)}
                                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                   >
                                        <X size={16} />
                                   </button>
                              </div>
                         )}
                    </div>
               ))}
          </div>
     )
}
