"use client";

import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio-data";
import { ScrollReveal } from "./ScrollReveal";
import { useRef, useState } from "react";
import { toast } from "../utils/toast";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface ContactFormElements extends HTMLFormControlsCollection {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<ContactForm>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      const name = (data.user_name || "") as string;
      const email = (data.user_email || "") as string;
      const phone = (data.phone || "") as string;
      const message = (data.message || "") as string;

      const text = encodeURIComponent(
        `Hello Jathushan,\n\nI am contacting you from your portfolio website:\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n💬 *Project Brief:* ${message}`
      );

      const whatsappUrl = `https://wa.me/94706601734?text=${text}`;
      window.open(whatsappUrl, "_blank");

      toast.success("Opening WhatsApp with your project brief!");
      form.current.reset();
    } catch (error) {
      console.error("WhatsApp Redirect Error:", error);
      toast.error("Failed to prepare message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[80%] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-left mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
            <span>—</span>
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-white leading-tight">
            Let&apos;s Build Something <span className="text-primary">Exceptional</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
            Available for remote full-stack engineering, AI integrations, freelance software development, and technical consultations.
          </p>
        </ScrollReveal>

        {/* Main Unified Contact Card */}
        <ScrollReveal delay={0.15}>
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#EEF2F6] dark:bg-[#1D1D1F] border border-black/[0.06] dark:border-white/10 p-2.5 sm:p-4 lg:p-5 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-stretch">
              
              {/* ==================================================== */}
              {/* LEFT COLUMN: Dark Info Panel                         */}
              {/* ==================================================== */}
              <div className="w-full lg:w-[40%] xl:w-[38%] rounded-[24px] sm:rounded-[28px] bg-[#1D1D1F] dark:bg-[#0a0a0a] text-white p-5 sm:p-7 lg:p-9 flex flex-col justify-between space-y-8 border border-white/5 shadow-xl">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug text-white">
                    Let&apos;s Build Something{" "}
                    <span className="text-primary">Exceptional.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-3">
                    Open to remote & international software engineering roles, full-stack contracts, AI integrations, and technical consultations.
                  </p>
                </div>

                {/* Direct Contact Details List */}
                <div className="space-y-4 pt-2">
                  {/* Item 1: Email */}
                  <a
                    href="mailto:imjathushan@gmail.com"
                    className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div className="flex flex-col text-left truncate">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                        EMAIL
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white truncate mt-0.5 group-hover:text-primary transition-colors">
                        imjathushan@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Item 2: WhatsApp / Phone */}
                  <a
                    href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I'm%20reaching%20out%20from%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors">
                      <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                        WHATSAPP / PHONE
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono mt-0.5 group-hover:text-emerald-400 transition-colors">
                        +94 706601734
                      </span>
                    </div>
                  </a>

                  {/* Item 3: Sri Lanka Direct Line */}
                  <a
                    href="tel:+94706601734"
                    className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                        SRI LANKA LINE
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono mt-0.5 group-hover:text-primary transition-colors">
                        +94 706601734
                      </span>
                    </div>
                  </a>

                  {/* Item 4: Location */}
                  <div className="flex items-center gap-3.5 p-2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                        LOCATION
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          Vavuniya, Sri Lanka
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          • Open to remote
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item 5: LinkedIn */}
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                        <Linkedin size={16} className="text-primary" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400">
                          LINKEDIN
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 group-hover:text-primary transition-colors">
                          Jathushan Varnakulasingam
                        </span>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-white transition-colors mr-2" />
                  </a>
                </div>

                {/* Bottom Status Pill */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available — Responding within 24 hrs
                  </span>
                </div>
              </div>

              {/* ==================================================== */}
              {/* RIGHT COLUMN: The Message / Brief Form               */}
              {/* ==================================================== */}
              <div className="w-full lg:w-[60%] xl:w-[62%] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  {/* Top Header of the Form */}
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-black/[0.06] dark:border-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
                      Send a Message or Project Brief
                    </h3>
                    <span className="px-2.5 py-1 rounded-md bg-primary text-white font-mono font-bold text-[10px] tracking-widest uppercase shrink-0 shadow-xs">
                      DIRECT TRANSMISSION
                    </span>
                  </div>

                  {/* Form */}
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5 block">
                          YOUR NAME *
                        </label>
                        <input
                          name="user_name"
                          type="text"
                          required
                          placeholder="John Anderson"
                          className="w-full rounded-xl bg-white dark:bg-[#1D1D1F] border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-[#1D1D1F] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5 block">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          name="user_email"
                          type="email"
                          required
                          placeholder="contact@company.com"
                          className="w-full rounded-xl bg-white dark:bg-[#1D1D1F] border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-[#1D1D1F] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone / WhatsApp */}
                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5 block">
                        PHONE / WHATSAPP (OPTIONAL)
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+94 ... or +1 ..."
                        className="w-full rounded-xl bg-white dark:bg-[#1D1D1F] border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-[#1D1D1F] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-xs"
                      />
                    </div>

                    {/* Row 3: Message / Brief */}
                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5 block">
                        MESSAGE / PROJECT BRIEF *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Describe your engineering requirements, project location, timeline..."
                        className="w-full rounded-xl bg-white dark:bg-[#1D1D1F] border border-black/10 dark:border-white/10 px-4 py-3 text-sm text-[#1D1D1F] dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-xs resize-none"
                      />
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      {/* Button 1: Send Message */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-hover active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-200 cursor-pointer disabled:opacity-70 group"
                      >
                        <Send size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>{isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                      </button>

                      {/* Button 2: Direct WhatsApp */}
                      <a
                        href="https://wa.me/94706601734?text=Hi%20Jathushan,%20I'm%20reaching%20out%20from%20your%20portfolio!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-6 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-[0.98] border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}