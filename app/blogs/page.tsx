"use client"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { blogs } from '../data/portfolio-data'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Blogs() {
     return (
          <div className="bg-page-light dark:bg-page-dark text-text-light dark:text-text-dark font-display min-h-screen flex flex-col">
               <Navbar />

               <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">

                         {/* Header */}
                         <div className="text-center mb-16">
                              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-white mb-6">
                                   Insights & <span className="text-primary">Thoughts</span>
                              </h1>
                              <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                                   Sharing my journey, tutorials, and perspectives on technology, AI, and software engineering.
                              </p>
                         </div>

                         {/* Blog Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {blogs.map((blog) => (
                                   <article key={blog.id} className="group bg-white dark:bg-[#1D1D1F] rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                                        {/* Image Container */}
                                        <div className="relative h-56 w-full overflow-hidden">
                                             <Image
                                                  src={blog.image}
                                                  alt={blog.title}
                                                  fill
                                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                             />
                                             <div className="absolute top-4 left-4">
                                                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold text-primary uppercase tracking-wide">
                                                       {blog.category}
                                                  </span>
                                             </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                             <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                                  <div className="flex items-center gap-1">
                                                       <Calendar size={14} />
                                                       <span>{blog.date}</span>
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <Clock size={14} />
                                                       <span>{blog.readTime}</span>
                                                  </div>
                                             </div>

                                             <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                                                  {blog.title}
                                             </h3>

                                             <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                                                  {blog.excerpt}
                                             </p>

                                             <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                                  Read Article <ArrowRight size={16} />
                                             </a>
                                        </div>
                                   </article>
                              ))}
                         </div>

                    </div>
               </main>

               <Footer />
          </div>
     )
}
