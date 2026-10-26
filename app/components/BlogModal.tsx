"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2, Check } from "lucide-react";
import { BlogPost, blogContent } from "@/app/data/blog-content";
import { profile } from "@/app/data/portfolio-data";
import { toast } from "@/app/utils/toast";

interface BlogModalProps {
  blog: BlogPost | null;
  onClose: () => void;
  onSelectBlog?: (blog: BlogPost) => void;
}

export default function BlogModal({ blog, onClose, onSelectBlog }: BlogModalProps) {
  const [copied, setCopied] = useState(false);

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!blog) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [blog, onClose]);

  if (!blog) return null;

  // Find next and previous blog posts
  const allBlogIds = Object.keys(blogContent).map(Number).sort((a, b) => a - b);
  const currentIndex = allBlogIds.indexOf(blog.id);
  const prevBlogId = currentIndex > 0 ? allBlogIds[currentIndex - 1] : null;
  const nextBlogId = currentIndex < allBlogIds.length - 1 ? allBlogIds[currentIndex + 1] : null;

  const prevBlog = prevBlogId ? blogContent[prevBlogId] : null;
  const nextBlog = nextBlogId ? blogContent[nextBlogId] : null;

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://jathushan.dev/blogs`;
  const shareText = `Check out this article: "${blog.title}" by ${profile.name}`;

  const copyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-md"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0c111d] border border-black/10 dark:border-white/10 rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 bg-white/90 dark:bg-[#0c111d]/90 backdrop-blur-md border-b border-black/5 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#0077ED]/10 border border-[#0077ED]/25 text-[#0077ED] text-xs font-mono font-bold uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <Clock size={13} />
                {blog.readTime}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyLink}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-neutral-700 dark:text-neutral-200 transition-colors cursor-pointer"
                title="Copy Article Link"
                aria-label="Copy Article Link"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Share2 size={16} />}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white text-neutral-700 dark:text-neutral-200 transition-all cursor-pointer"
                title="Close (Esc)"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto px-4 sm:px-8 md:px-12 py-5 sm:py-8 space-y-6 sm:space-y-8 overscroll-contain">
            {/* Hero Cover Image */}
            <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/10 bg-neutral-900">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-mono">
                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Calendar size={13} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <Clock size={13} />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Article Heading & Author Info */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                {blog.title}
              </h1>

              {/* Author badge */}
              <div className="flex items-center gap-3 pt-1 pb-4 border-b border-black/5 dark:border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0077ED] to-blue-700 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-[#0077ED]/25">
                  JV
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                    {profile.name}
                  </span>
                  <span className="text-[11px] text-[#0077ED] font-mono">
                    Full-Stack Developer • ML & IoT Innovator
                  </span>
                </div>
              </div>

              {/* Excerpt Lead Paragraph */}
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium italic bg-neutral-50 dark:bg-white/[0.03] p-4 sm:p-5 rounded-2xl border-l-4 border-[#0077ED]">
                &ldquo;{blog.excerpt}&rdquo;
              </p>
            </div>

            {/* Main Content Introduction */}
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p className="text-base sm:text-lg leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#0077ED] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {blog.content}
              </p>

              {/* Article Sub-sections */}
              {blog.sections && blog.sections.length > 0 && (
                <div className="mt-8 space-y-8">
                  {blog.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-3"
                    >
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#0077ED]" />
                        {section.heading}
                      </h2>
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
                        {section.body}
                      </p>

                      {section.image && (
                        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mt-4 shadow-md">
                          <Image
                            src={section.image}
                            alt={section.heading}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Related Tech Tags */}
            {blog.relatedTech && blog.relatedTech.length > 0 && (
              <div className="pt-6 border-t border-black/5 dark:border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-3">
                  Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
                  {blog.relatedTech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-black/5 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border border-black/5 dark:border-white/5"
                    >
                      <Tag size={12} className="text-[#0077ED]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share Bar */}
            <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                Share this article with fellow developers:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white transition-all text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-neutral-900 dark:text-white hover:text-white dark:hover:text-black transition-all text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  X
                </a>
              </div>
            </div>

            {/* Next / Previous In-Modal Navigation */}
            <div className="pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prevBlog ? (
                <button
                  type="button"
                  onClick={() => onSelectBlog && onSelectBlog(prevBlog)}
                  className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-[#0077ED]/10 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/30 text-left transition-all group cursor-pointer flex items-center gap-3"
                >
                  <ArrowLeft size={16} className="text-[#0077ED] shrink-0 group-hover:-translate-x-1 transition-transform" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Previous Post</span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">
                      {prevBlog.title}
                    </span>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextBlog ? (
                <button
                  type="button"
                  onClick={() => onSelectBlog && onSelectBlog(nextBlog)}
                  className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-[#0077ED]/10 border border-black/5 dark:border-white/5 hover:border-[#0077ED]/30 text-right transition-all group cursor-pointer flex items-center justify-end gap-3"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Next Post</span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">
                      {nextBlog.title}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-[#0077ED] shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <div />
              )}
            </div>

            {/* Close Button at bottom */}
            <div className="pt-2 pb-2 text-center">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md"
              >
                Done Reading • Close Popup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
