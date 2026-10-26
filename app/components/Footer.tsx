"use client";

import {
  ArrowUp,
  Phone,
  Mail,
  Linkedin,
  ExternalLink,
  Download,
  GraduationCap,
  MapPin,
  Heart,
} from "lucide-react";
import { profile } from "../data/portfolio-data";
import { toast } from "../utils/toast";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About Me", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Skills", href: "/#skills" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
  ];

  const disciplines = [
    "Full-Stack Web Development",
    "Next.js & React 19 Applications",
    "AI & ML Model Integrations",
    "IoT & Embedded Robotics",
    "Cloud & RESTful APIs",
    "Automation & Microservices",
    "Modern UI/UX Architecture",
    "Database Systems (SQL & MongoDB)",
  ];

  return (
    <footer className="w-full bg-[#070A12] text-white pt-16 pb-8 border-t border-white/5 transition-colors duration-300">
      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14">
          {/* ========================================================= */}
          {/* COLUMN 1: Brand, Identity, Bio, Credentials (4 cols)      */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Elegant Monogram Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077ED] to-blue-700 flex items-center justify-center font-black text-white text-lg tracking-tighter shadow-md shadow-[#0077ED]/25">
                JV
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest uppercase text-white font-mono leading-tight">
                  Jathushan
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#0077ED] font-mono font-semibold">
                  Varnakulasingam
                </span>
              </div>
            </div>

            {/* Name & Role */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Jathushan Varnakulasingam
              </h2>
              <p className="text-xs font-medium text-[#0077ED] tracking-wide mt-1">
                Full-Stack Developer • ML Enthusiast • IoT Innovator
              </p>
            </div>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Freelance Full-Stack Developer specializing in high-performance web systems, modern UI/UX, AI integrations, and smart automation. Delivering scalable digital products worldwide.
            </p>

            {/* Credentials / Location */}
            <div className="space-y-2 pt-1 text-xs text-gray-400 font-mono">
              <div className="flex items-start gap-2">
                <GraduationCap size={14} className="text-[#0077ED] mt-0.5 shrink-0" />
                <span>BSc (Hons) Computer Science · Westminster / IIT</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#0077ED] mt-0.5 shrink-0" />
                <span>Vavuniya, Northern Province, Sri Lanka · Open to Remote</span>
              </div>
            </div>

            {/* Status Pill Badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0077ED]/10 border border-[#0077ED]/30 text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#0077ED] animate-pulse"></span>
                Open · Freelance · Remote · Full-Time
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: Navigation Links (2 cols)                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0077ED] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#0077ED] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3: Disciplines / Technical Expertise (3 cols)      */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0077ED] mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2.5">
              {disciplines.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 4: Connect & Action Cards (3 cols)                 */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            {/* Header + Scroll To Top Button */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0077ED]">
                Connect
              </h3>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-lg bg-[#0E1524] border border-white/10 hover:border-[#0077ED]/50 hover:bg-[#152036] text-gray-300 hover:text-[#0077ED] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                title="Back to top"
              >
                <ArrowUp size={15} />
              </button>
            </div>

            {/* Card 1: WhatsApp */}
            <a
              href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-xl bg-[#0D1322] hover:bg-[#121A2E] border border-white/5 hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase leading-none">
                    WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white font-mono mt-1">
                    +94 706601734
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                CHAT
              </span>
            </a>

            {/* Card 2: Direct Call */}
            <a
              href="tel:+94706601734"
              className="p-2.5 sm:p-3 rounded-xl bg-[#0D1322] hover:bg-[#121A2E] border border-white/5 hover:border-[#0077ED]/40 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0077ED]/15 text-[#0077ED] flex items-center justify-center shrink-0">
                  <Phone size={15} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#0077ED] uppercase leading-none">
                    Direct Call
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white font-mono mt-1">
                    +94 706601734
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#0077ED]/20 text-[#38BDF8] border border-[#0077ED]/30 group-hover:bg-[#0077ED] group-hover:text-white transition-colors">
                CALL
              </span>
            </a>

            {/* Card 3: LinkedIn */}
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-xl bg-[#0D1322] hover:bg-[#121A2E] border border-white/5 hover:border-blue-500/40 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                  <Linkedin size={15} />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase leading-none">
                    LinkedIn
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate mt-1">
                    Jathushan Varnakulasingam
                  </span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Card 4: Email */}
            <a
              href="mailto:imjathushan@gmail.com"
              className="p-2.5 sm:p-3 rounded-xl bg-[#0D1322] hover:bg-[#121A2E] border border-white/5 hover:border-indigo-500/40 transition-all duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail size={15} />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-400 uppercase leading-none">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate mt-1">
                    imjathushan@gmail.com
                  </span>
                </div>
              </div>
              <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Card 5: Download Developer CV */}
            <a
              href={profile.resumeURL}
              download="Jathushan_SE_Dev.pdf"
              onClick={() => toast.success("Thanks for downloading my CV! Let's connect.")}
              className="w-full py-2.5 px-3.5 rounded-xl bg-[#0077ED] hover:bg-[#0062C4] text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-lg shadow-[#0077ED]/25 hover:shadow-[#0077ED]/40 transition-all duration-200 cursor-pointer group mt-1"
            >
              <div className="flex items-center gap-2">
                <Download size={15} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Developer CV</span>
              </div>
              <span className="text-[10px] font-mono font-black bg-white/20 px-2 py-0.5 rounded text-white">
                PDF
              </span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM COPYRIGHT BAR                                      */}
        {/* ========================================================= */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© 2026 Jathushan Varnakulasingam. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            Made with <Heart size={13} className="text-red-500 fill-red-500" /> in Sri Lanka
          </p>
          <p className="text-gray-400">
            Designed & Developed by <span className="text-[#0077ED] font-semibold">Jathushan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
