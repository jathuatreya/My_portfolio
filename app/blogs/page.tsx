"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { blogs } from "@/app/data/portfolio-data";
import BlogCard from "@/app/components/BlogCard";

export default function Blogs() {
    return (
        <div className="bg-page-light dark:bg-page-dark text-text-light dark:text-text-dark font-display min-h-screen flex flex-col">
            <Navbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
