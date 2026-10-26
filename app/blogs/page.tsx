"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { blogs } from "@/app/data/portfolio-data";
import { blogContent, BlogPost } from "@/app/data/blog-content";
import BlogCard from "@/app/components/BlogCard";
import BlogModal from "@/app/components/BlogModal";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Blogs() {
    const { t } = useLanguage();
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

    // Check if URL has ?id= to automatically open in popup
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const idParam = params.get("id");
            if (idParam) {
                const numericId = parseInt(idParam, 10);
                if (blogContent[numericId]) {
                    setSelectedBlog(blogContent[numericId]);
                }
            }
        }
    }, []);

    const handleOpenBlog = (blogItem: { id: number }) => {
        const fullBlog = blogContent[blogItem.id];
        if (fullBlog) {
            setSelectedBlog(fullBlog);
        }
    };

    return (
        <div className="bg-page-light dark:bg-page-dark text-text-light dark:text-text-dark font-display min-h-screen flex flex-col">
            <Navbar />

            <main className="pt-32 pb-20 flex-grow">
                <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-white mb-6">
                            {t.blogs_page.title} <span className="text-primary">{t.blogs_page.title_highlight}</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t.blogs_page.subtitle}
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...blogs].reverse().map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                onRead={handleOpenBlog}
                            />
                        ))}
                    </div>

                </div>
            </main>

            {/* In-page Blog Reader Popup Modal */}
            {selectedBlog && (
                <BlogModal
                    blog={selectedBlog}
                    onClose={() => setSelectedBlog(null)}
                    onSelectBlog={(nextPost) => setSelectedBlog(nextPost)}
                />
            )}

            <Footer />
        </div>
    );
}
