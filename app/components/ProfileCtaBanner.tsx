"use client";

import { FileText, Download, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { profile } from "../data/portfolio-data";
import { toast } from "../utils/toast";
import { ScrollReveal } from "./ScrollReveal";

export default function ProfileCtaBanner() {
  const handleDownload = () => {
    toast.success("Downloading Jathushan's CV. Thank you for your interest!");
  };

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden">
      <div className="w-[80%] mx-auto">
        <ScrollReveal>
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#070B16] dark:bg-[#080D1D] border border-white/10 dark:border-white/[0.08] p-7 sm:p-10 lg:p-14 shadow-2xl overflow-hidden group">
            {/* Soft Ambient Background Glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Left Column: Heading, Bio, Metadata */}
              <div className="flex flex-col text-left max-w-3xl">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-[11px] font-mono font-bold tracking-wider uppercase w-fit shadow-xs">
                  <FileText size={13} className="text-[#F59E0B] shrink-0" />
                  <span>Full Curriculum Vitae Available</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-[1.18] mt-4 mb-3">
                  Want the Complete Professional Profile?
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Download my comprehensive CV to explore my engineering experience, university modules, technical software proficiencies, and structural project involvement in detail.
                </p>

                {/* Bottom Accreditations */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-6 text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    Updated: 2026 Edition
                  </span>
                  <span className="text-gray-600 select-none">•</span>
                  <span className="text-gray-300">Accredited Curriculum</span>
                  <span className="text-gray-600 select-none">•</span>
                  <span className="text-gray-300">Full Project Dossier</span>
                </div>
              </div>

              {/* Right Column: Vertically Stacked Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0 justify-center">
                {/* Button 1: Download CV */}
                <a
                  href={profile.resumeURL}
                  download="Jathushan_SE_Dev.pdf"
                  onClick={handleDownload}
                  className="w-full sm:w-auto lg:w-[260px] py-3.5 px-6 rounded-xl bg-[#F59E0B] hover:bg-[#E08E07] active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2.5 shadow-lg shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/35 transition-all duration-200 cursor-pointer group"
                >
                  <Download size={16} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD CV (PDF/TXT)</span>
                </a>

                {/* Button 2: LinkedIn Profile */}
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto lg:w-[260px] py-3.5 px-6 rounded-xl bg-[#141B2D] hover:bg-[#1A233A] active:scale-[0.98] border border-white/10 hover:border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <Linkedin size={15} className="text-[#0077ED] shrink-0" />
                  <span>View LinkedIn Profile</span>
                  <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all ml-1" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
