"use client";

import React, { useState, useRef } from "react";
import { Layers, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";
import { detailedProjects } from "../data/projectsData";
import { highlightTitle } from "../utils/highlight-text";

export default function Projects() {
  const { t } = useLanguage();
  const featuredThree = detailedProjects.slice(0, 3);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (!el) return;
    const cardWidth = el.scrollWidth / featuredThree.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    if (idx !== activeSlide && idx >= 0 && idx < featuredThree.length) {
      setActiveSlide(idx);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll<HTMLElement>("[data-project-card]");
      cards[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveSlide(idx);
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-28 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
      {/* Ambient Glow Lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-left mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
            <Layers size={14} />
            <span>{t.projects.tag || "Featured Projects"}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
                {highlightTitle(t.projects.title || "Featured Projects")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                {t.projects.subtitle || "A showcase of engineering systems, machine learning models, and modern full-stack applications."}
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors group shrink-0 mb-1"
            >
              <span>View All {detailedProjects.length} Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Mobile Carousel / Desktop 3-Column Grid */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0"
        >
          {featuredThree.map((project) => (
            <div
              key={project.id}
              data-project-card
              className="w-[86vw] sm:w-[380px] md:w-auto shrink-0 md:shrink snap-center flex flex-col h-full"
            >
              <div className="h-full rounded-[24px] sm:rounded-[28px] border-2 border-primary/40 hover:border-primary bg-white dark:bg-[#111624] p-4 sm:p-6 shadow-md shadow-primary/10 hover:shadow-[0_0_30px_rgba(255,103,0,0.22)] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Top Image Mockup Frame */}
                  <div className="relative w-full h-[190px] sm:h-[210px] rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/10 bg-gray-50 dark:bg-black/30 mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Category Tag */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-black/[0.04] dark:bg-white/10 text-gray-700 dark:text-gray-300 tracking-wide mb-2.5">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] dark:text-white tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Role Subtitle */}
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights / Metrics Row */}
                  {project.highlight1 && project.highlight2 && (
                    <div className="grid grid-cols-2 gap-3 my-5 pt-4 border-t border-black/[0.06] dark:border-white/10">
                      <div>
                        <span className="text-sm font-black text-[#6366F1] dark:text-[#FFA066] block">
                          {project.highlight1.value}
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-0.5">
                          {project.highlight1.label}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-black text-primary dark:text-primary-light block">
                          {project.highlight2.value}
                        </span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 block mt-0.5">
                          {project.highlight2.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Tech Stack Pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-black/[0.06] dark:border-white/10">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/[0.04] dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 border border-black/[0.04] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Direct links */}
                  <div className="flex items-center gap-4 mt-4 pt-2">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View GitHub source code for ${project.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live preview of ${project.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors ml-auto"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-6">
          {featuredThree.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to project ${i + 1}`}
              className="p-2 min-h-[44px] min-w-[28px] flex items-center justify-center cursor-pointer"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "w-7 bg-primary"
                    : "w-2 bg-gray-300 dark:bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={0.3} className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary hover:bg-primary-hover active:scale-[0.98] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group cursor-pointer"
          >
            <span>View All Projects ({detailedProjects.length})</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
