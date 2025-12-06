"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../data/portfolio-data';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { MagicCard, MagicContainer } from './MagicCard';
import { useRef, useState } from 'react';
import { toast } from '../utils/toast';
import emailjs from '@emailjs/browser';

// ⚠️ EmailJS Configuration
// Please replace these with your actual keys from https://dashboard.emailjs.com/
const EMAIL_CONFIG = {
     SERVICE_ID: 'service_4cosu79',     // Replace with your Service ID
     TEMPLATE_ID: 'template_ol296hf',   // Replace with your Template ID
     PUBLIC_KEY: 'DTYSV-sEd-sE4IZNS',  // Replace with your Public Key
};

interface ContactFormElements extends HTMLFormControlsCollection {
     name: HTMLInputElement;
     email: HTMLInputElement;
     phone: HTMLInputElement;
     message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
     readonly elements: ContactFormElements;
}

export default function Contact() {
     const { t } = useLanguage();
     const [isSubmitting, setIsSubmitting] = useState(false);
     const form = useRef<ContactForm>(null);

     // Provide fallback translations for missing fields
     const formText = {
          ...t.contact.form,
          sending: t.contact.form.sending || "Sending...",
          success: t.contact.form.success || "Message sent successfully!",
          error: t.contact.form.error || "Failed to send message."
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!form.current) return;

          setIsSubmitting(true);

          try {
               await emailjs.sendForm(
                    EMAIL_CONFIG.SERVICE_ID,
                    EMAIL_CONFIG.TEMPLATE_ID,
                    form.current,
                    EMAIL_CONFIG.PUBLIC_KEY
               );

               toast.success(formText.success);
               form.current.reset();
          } catch (error: any) {
               console.error("EmailJS Error:", error.text || error);
               toast.error(formText.error);
          } finally {
               setIsSubmitting(false);
          }
     };

     return (
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
               {/* Glowing Background Elements */}
               <div className="absolute -bottom-32 right-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl opacity-35 animate-pulse-slow pointer-events-none"></div>
               <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl opacity-25 animate-pulse-slower pointer-events-none"></div>

               <div className="container mx-auto max-w-7xl 3xl:max-w-[96rem] 4k:max-w-[120rem] relative z-10">
                    <ScrollReveal className="text-center mb-12">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] dark:bg-white/5 border border-primary/10 mb-6 shadow-sm">
                              <Mail size={18} className="text-primary" />
                              <span className="text-sm font-bold tracking-wide text-primary uppercase">{t.contact.tag}</span>
                         </div>
                         <h2 className="text-[#1D1D1F] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                              {t.contact.title}
                         </h2>
                         <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal mt-2">
                              {t.contact.subtitle}
                         </p>
                    </ScrollReveal>

                    <MagicContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                         {/* Left Column: Contact Form */}
                         <ScrollReveal delay={0.2} className="h-full">
                              <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-6 sm:p-8 rounded-2xl shadow-[var(--card-shadow)] h-full">
                                   <form ref={form} onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                                        <div className="flex flex-col sm:flex-row gap-6">
                                             <label className="flex flex-col flex-1">
                                                  <p className="text-[#1D1D1F] dark:text-white text-sm font-medium leading-normal pb-2">{formText.name}</p>
                                                  <input
                                                       name="user_name"
                                                       className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1D1D1F] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-[#1a1a1a] h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal shadow-sm"
                                                       placeholder={formText.name_ph}
                                                       type="text"
                                                       required
                                                  />
                                             </label>

                                             <label className="flex flex-col flex-1">
                                                  <p className="text-[#1D1D1F] dark:text-white text-sm font-medium leading-normal pb-2">{formText.email}</p>
                                                  <input
                                                       name="user_email"
                                                       className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1D1D1F] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-[#1a1a1a] h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal shadow-sm"
                                                       placeholder={formText.email_ph}
                                                       type="email"
                                                       required
                                                  />
                                             </label>
                                        </div>

                                        <label className="flex flex-col flex-1">
                                             <p className="text-[#1D1D1F] dark:text-white text-sm font-medium leading-normal pb-2">{formText.phone}</p>
                                             <input
                                                  name="phone"
                                                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1D1D1F] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-[#1a1a1a] h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal shadow-sm"
                                                  placeholder={formText.phone_ph}
                                                  type="tel"
                                             />
                                        </label>

                                        <label className="flex flex-col flex-1">
                                             <p className="text-[#1D1D1F] dark:text-white text-sm font-medium leading-normal pb-2">{formText.message}</p>
                                             <textarea
                                                  name="message"
                                                  className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1D1D1F] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-white dark:bg-[#1a1a1a] min-h-[140px] placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal shadow-sm"
                                                  placeholder={formText.message_ph}
                                                  required
                                             ></textarea>
                                        </label>

                                        <button
                                             disabled={isSubmitting}
                                             className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-[#1D1D1F] dark:bg-white text-white dark:text-black text-base font-bold leading-normal shadow-md hover:bg-[#1D1D1F]/90 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D1D1F] dark:focus:ring-white transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                             type="submit"
                                        >
                                             <Send size={18} />
                                             <span>{isSubmitting ? formText.sending : formText.submit}</span>
                                        </button>
                                   </form>
                              </MagicCard>
                         </ScrollReveal>

                         {/* Right Column: Contact Info */}
                         <div className="flex flex-col justify-center space-y-6">
                              <ScrollReveal delay={0.3}>
                                   <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-2xl shadow-[var(--card-shadow)] group cursor-pointer" clickEffect={true}>
                                        <a className="flex items-center gap-6" href={`mailto:${contactInfo.email}`}>
                                             <div className=" w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                                                  <Mail size={32} />
                                             </div>
                                             <div>
                                                  <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">{t.contact.info.email}</p>
                                                  <p className="text-[#1D1D1F] dark:text-white text-xl sm:text-2xl font-bold break-all group-hover:text-primary transition-colors duration-200">{contactInfo.email}</p>
                                             </div>
                                        </a>
                                   </MagicCard>
                              </ScrollReveal>

                              <ScrollReveal delay={0.4}>
                                   <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-2xl shadow-[var(--card-shadow)] group cursor-pointer" clickEffect={true}>
                                        <div className="flex items-center gap-6">
                                             <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                                                  <Phone size={32} />
                                             </div>
                                             <div>
                                                  <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">{t.contact.info.phone}</p>
                                                  <p className="text-[#1D1D1F] dark:text-white text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-200">{contactInfo.phone}</p>
                                             </div>
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>

                              <ScrollReveal delay={0.5}>
                                   <MagicCard className="bg-[#F5F5F7] dark:bg-[#121212] p-8 rounded-2xl shadow-[var(--card-shadow)] group cursor-pointer" clickEffect={true}>
                                        <div className="flex items-center gap-6">
                                             <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                                                  <MapPin size={32} />
                                             </div>
                                             <div>
                                                  <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">{t.contact.info.location}</p>
                                                  <p className="text-[#1D1D1F] dark:text-white text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors duration-200">{contactInfo.location}</p>
                                             </div>
                                        </div>
                                   </MagicCard>
                              </ScrollReveal>
                         </div>
                    </MagicContainer>
               </div>
          </section>
     );
}
