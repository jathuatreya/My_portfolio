"use client";

import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Blog } from "@/types";
import { useLanguage } from "@/app/context/LanguageContext";

interface BlogCardProps {
    blog: Blog;
}

import Link from "next/link";

export default function BlogCard({ blog }: BlogCardProps) {
    const { t } = useLanguage();

    return (
        <article className="group bg-white dark:bg-[#1D1D1F] rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

            {/* Image Container */}
            <Link href={`/blogs/${blog.id}`} className="relative h-56 w-full overflow-hidden block">
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
            </Link>

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

                <Link href={`/blogs/${blog.id}`} className="group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-white mb-3 leading-tight">
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                </p>

                <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all mt-auto"
                >
                    {t.blogs_page.read_article} <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}
