import { Github, Linkedin, Twitter, Instagram, Facebook, Heart } from "lucide-react";
import { profile } from "../data/profile-data";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.84L4.44 19.66L5.27 16.63L5.07 16.31C4.26 15.01 3.81 13.48 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.05 7.42C8.88 7.42 8.6 7.49 8.37 7.74C8.13 8 7.45 8.64 7.45 9.94C7.45 11.24 8.4 12.49 8.53 12.67C8.67 12.84 10.37 15.48 13 16.61C13.62 16.88 14.11 17.04 14.49 17.16C15.11 17.36 15.68 17.33 16.13 17.26C16.63 17.19 17.66 16.64 17.88 16.03C18.1 15.42 18.1 14.89 18.03 14.79C17.96 14.68 17.79 14.62 17.53 14.49C17.28 14.36 16.03 13.75 15.8 13.66C15.57 13.58 15.4 13.54 15.23 13.79C15.06 14.05 14.58 14.62 14.43 14.79C14.28 14.96 14.13 14.98 13.88 14.86C13.62 14.73 12.8 14.46 11.83 13.59C11.07 12.92 10.56 12.08 10.41 11.83C10.26 11.58 10.39 11.44 10.52 11.31C10.63 11.2 10.77 11.02 10.91 10.86C11.05 10.7 11.1 10.57 11.18 10.41C11.27 10.24 11.22 10.09 11.16 9.97C11.1 9.84 10.61 8.64 10.41 8.15C10.21 7.67 10.01 7.73 9.86 7.73C9.72 7.72 9.55 7.72 9.38 7.72C9.21 7.72 8.93 7.78 8.7 8.03" />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", href: profile.social.github, icon: Github },
  { name: "LinkedIn", href: profile.social.linkedin, icon: Linkedin },
  { name: "X (Twitter)", href: profile.social.twitter, icon: Twitter },
  { name: "WhatsApp", href: profile.social.whatsapp, icon: WhatsAppIcon },
  { name: "Instagram", href: profile.social.instagram, icon: Instagram },
  { name: "Facebook", href: profile.social.facebook, icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-[#0a0a0a] text-neutral-900 dark:text-white py-10 border-t border-black/[0.08] dark:border-white/5 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with Jathushan on ${item.name}`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/15 text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
            );
          })}
        </div>

        {/* Bottom Details Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400 text-center md:text-left pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
          <p>© 2026 Jathushan Varnakulasingam. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1.5 text-gray-400">
            Made with <Heart size={13} className="text-red-500 fill-red-500" /> in Sri Lanka
          </p>
          <p className="text-gray-400">
            Designed & Developed by <span className="text-primary font-semibold">Jathushan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
