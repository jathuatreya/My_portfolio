"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
     ArrowLeft, Calendar, Clock, Share2, Tag,
     Linkedin, Twitter, Instagram, Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { blogContent } from "@/app/data/blog-content";
import { profile } from "@/app/data/portfolio-data";
import { useLanguage } from "@/app/context/LanguageContext";

export default function BlogDetail() {
     const params = useParams();
     const { t } = useLanguage();

     if (!params?.id) {
          return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">Loading...</div>;
     }

     const { id } = params;
     const blogId = typeof id === 'string' ? parseInt(id, 10) : parseInt(id[0], 10);
     const blog = blogContent[blogId];

     if (!blog) {
          return (
               <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
                    <Navbar />
                    <h1 className="text-4xl font-bold text-[#1D1D1F] dark:text-white mb-4">{t.blogs_page.not_found}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">{t.blogs_page.not_found_desc}</p>
                    <Link href="/blogs" className="text-primary font-bold hover:underline flex items-center gap-2">
                         <ArrowLeft size={16} /> {t.blogs_page.back_to_blogs}
                    </Link>
                    <Footer />
               </div>
          );
     }

     // Social Share Links
     // Construct production URL to ensure sharing works even when testing locally
     const shareUrl = `https://jathushanvarnakulasingam-portfolio.vercel.app/blogs/${blogId}`;
     const shareText = `Check out this amazing article by ${profile.name}: ${blog.title}`;

     const shareLinks = [
          {
               name: "WhatsApp",
               url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
               icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                         <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.58 20.16 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.63 15.65C16.38 15.53 15.16 14.93 14.94 14.85C14.71 14.77 14.54 14.72 14.37 14.97C14.2 15.22 13.72 15.77 13.57 15.95C13.43 16.12 13.27 16.15 13.02 16.02C12.77 15.9 11.96 15.63 11 14.78C10.25 14.11 9.75 13.29 9.5 12.87C9.25 12.45 9.47 12.22 9.6 12.1C9.71 11.99 9.85 11.82 9.97 11.67C10.09 11.53 10.14 11.42 10.22 11.26C10.3 11.09 10.25 10.95 10.19 10.82C10.12 10.69 9.64 9.51 9.44 9.03C9.25 8.57 9.05 8.63 8.89 8.63H8.38C8.13 8.63 7.72 8.72 7.38 9.09C7.04 9.46 6.09 10.37 6.09 12.21C6.09 14.05 7.42 15.84 7.62 16.1C7.81 16.37 10.33 20.26 14.2 21.93C15.13 22.33 15.85 22.56 16.41 22.74C17.37 23.05 18.24 23 18.92 22.9C19.69 22.79 21.28 21.94 21.61 21.01C21.94 20.08 21.94 19.29 21.84 19.12C21.75 18.95 21.5 18.85 21.25 18.73L16.63 15.65Z" />
                    </svg>
               ),
               color: "hover:text-[#25D366] hover:bg-[#25D366]/10"
          },
          {
               name: "Facebook",
               url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
               icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.97c0-2.18 1.28-3.39 3.22-3.39 1 0 1.87.05 2.11.07v2.46h-1.57c-1.12 0-1.38.58-1.38 1.47V12h2.9l-.5 3h-2.4v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
               ),
               color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10"
          },
          {
               name: "Twitter / X",
               url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
               icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
               ),
               color: "hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
          },
          {
               name: "LinkedIn",
               url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
               icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                         <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.21-.44-1.84-1.34-1.84-1 0-1.63.68-1.63 1.84V19h-3v-9h3v1.23c.41-.75 1.41-1.53 2.91-1.53 2.19 0 3.06 1.41 3.06 4.38z" />
                    </svg>
               ),
               color: "hover:text-[#0077B5] hover:bg-[#0077B5]/10"
          },
          {
               name: "Instagram",
               url: profile.social.instagram,
               icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                         <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM16.8 6C17.46 6 18 6.54 18 7.2C18 7.86 17.46 8.4 16.8 8.4C16.14 8.4 15.6 7.86 15.6 7.2C15.6 6.54 16.14 6 16.8 6Z" />
                    </svg>
               ),
               color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10"
          }
     ];

     // Update meta tags for social sharing to use blog image
     useEffect(() => {
          const blogImageUrl = `${profile.portfolioURL}${blog.image}`;

          // Update or create Open Graph image meta tags
          const updateMetaTag = (property: string, content: string) => {
               let metaTag = document.querySelector(`meta[property="${property}"]`);
               if (!metaTag) {
                    metaTag = document.createElement('meta');
                    metaTag.setAttribute('property', property);
                    document.head.appendChild(metaTag);
               }
               metaTag.setAttribute('content', content);
          };

          // Update or create Twitter meta tags
          const updateTwitterTag = (name: string, content: string) => {
               let metaTag = document.querySelector(`meta[name="${name}"]`);
               if (!metaTag) {
                    metaTag = document.createElement('meta');
                    metaTag.setAttribute('name', name);
                    document.head.appendChild(metaTag);
               }
               metaTag.setAttribute('content', content);
          };

          // Set Open Graph tags
          updateMetaTag('og:image', blogImageUrl);
          updateMetaTag('og:image:width', '1200');
          updateMetaTag('og:image:height', '630');
          updateMetaTag('og:title', `${blog.title} | ${profile.name}`);
          updateMetaTag('og:description', blog.excerpt);
          updateMetaTag('og:url', shareUrl);

          // Set Twitter tags
          updateTwitterTag('twitter:image', blogImageUrl);
          updateTwitterTag('twitter:title', `${blog.title} | ${profile.name}`);
          updateTwitterTag('twitter:description', blog.excerpt);
          updateTwitterTag('twitter:card', 'summary_large_image');

     }, [blog.title, blog.excerpt, blog.image, shareUrl]);

     return (
          <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
               <Navbar />

               <main className="relative pt-24 pb-20">
                    {/* Contained Hero Section - Now inside container with margins */}
                    <div className="container mx-auto px-4 lg:px-8 max-w-6xl mt-8 mb-16">
                         <div className="relative w-full h-[60vh] min-h-[400px] rounded-[32px] overflow-hidden group shadow-2xl">
                              {/* Background Image with Overlay */}
                              <div className="absolute inset-0 w-full h-full">
                                   <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                              </div>

                              {/* Hero Content */}
                              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-center items-center">
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="max-w-4xl"
                                   >
                                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                                             <span className="px-5 py-2 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                                                  {blog.category}
                                             </span>
                                             <span className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                                                  <Clock size={16} /> {blog.readTime}
                                             </span>
                                             <span className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                                                  <Calendar size={16} /> {blog.date}
                                             </span>
                                        </div>

                                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl font-display">
                                             {blog.title}
                                        </h1>

                                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light text-shadow-sm mb-8">
                                             {blog.excerpt}
                                        </p>

                                        <Link
                                             href="/blogs"
                                             className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white hover:border-white"
                                        >
                                             <ArrowLeft size={16} /> {t.blogs_page.back_to_blogs}
                                        </Link>
                                   </motion.div>
                              </div>
                         </div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                              {/* Sidebar / Share (Desktop) */}
                              <aside className="lg:col-span-1 relative hidden lg:block">
                                   <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="sticky top-32 flex flex-col items-center gap-8"
                                   >
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest rotate-180 mb-2 writing-mode-vertical">{t.blogs_page.share}</p>
                                        <div className="flex flex-col gap-5">
                                             {shareLinks.map((link) => (
                                                  <a
                                                       key={link.name}
                                                       href={link.url}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className={`p-3.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 transition-all hover:scale-110 shadow-sm hover:shadow-lg hover:-translate-y-1 ${link.color}`}
                                                       title={`Share on ${link.name}`}
                                                  >
                                                       {link.icon}
                                                  </a>
                                             ))}
                                        </div>
                                   </motion.div>
                              </aside>

                              {/* Main Content */}
                              <article className="lg:col-span-10 lg:pl-8">
                                   <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-loose"
                                   >
                                        <p className="text-xl md:text-2xl text-[#1D1D1F] dark:text-gray-100 leading-relaxed font-serif mb-12 first-letter:text-6xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:text-primary first-letter:leading-[0.8]">
                                             {blog.content}
                                        </p>

                                        {blog.sections.map((section, index) => (
                                             <div key={index} className="mb-16 group">
                                                  <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] dark:text-white mb-6 relative pl-6 border-l-4 border-primary/50 group-hover:border-primary transition-colors">
                                                       {section.heading}
                                                  </h2>

                                                  <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 whitespace-pre-line mb-8">
                                                       {section.body}
                                                  </p>

                                                  {section.image && (
                                                       <div className="relative w-full h-80 md:h-[500px] my-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5">
                                                            <Image
                                                                 src={section.image}
                                                                 alt={section.heading}
                                                                 fill
                                                                 className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                                            />
                                                       </div>
                                                  )}
                                             </div>
                                        ))}
                                   </motion.div>

                                   {/* Related Tech Tags */}
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10"
                                   >
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t.blogs_page.related_tech}</h3>
                                        <div className="flex flex-wrap gap-3">
                                             {blog.relatedTech && blog.relatedTech.map((tech, i) => (
                                                  <span key={i} className="px-6 py-3 rounded-full bg-gray-50 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default flex items-center gap-2">
                                                       <Tag size={16} className="opacity-50" /> {tech}
                                                  </span>
                                             ))}
                                        </div>
                                   </motion.div>

                                   {/* Mobile Share Section */}
                                   <div className="lg:hidden mt-16 py-8 border-t border-b border-gray-200 dark:border-white/10">
                                        <p className="text-center text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">{t.blogs_page.share_article}</p>
                                        <div className="flex justify-center gap-6">
                                             {shareLinks.map((link) => (
                                                  <a
                                                       key={link.name}
                                                       href={link.url}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className={`p-3.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 transition-all hover:scale-110 shadow-sm ${link.color}`}
                                                       title={`Share on ${link.name}`}
                                                  >
                                                       {link.icon}
                                                  </a>
                                             ))}
                                        </div>
                                   </div>

                              </article>

                              {/* Right Margin Spacer to balance Layout */}
                              <div className="hidden lg:block lg:col-span-1"></div>

                         </div>
                    </div>

                    {/* Next Article Navigation */}
                    <div className="container mx-auto px-6 max-w-4xl mt-24">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="flex flex-col md:flex-row justify-center items-center text-center gap-8 py-12 border-t border-gray-200 dark:border-white/10"
                         >
                              <div>
                                   <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{t.blogs_page.read_more}</p>
                                   <h4 className="text-3xl font-black text-[#1D1D1F] dark:text-white mb-8">{t.blogs_page.explore_more}</h4>
                                   <Link
                                        href="/blogs"
                                        className="inline-block bg-[#1D1D1F] dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
                                   >
                                        {t.blogs_page.view_all}
                                   </Link>
                              </div>
                         </motion.div>
                    </div>

               </main>

               <Footer />
          </div>
     );
}
