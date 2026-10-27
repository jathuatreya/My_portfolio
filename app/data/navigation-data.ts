// --------------------------------------
// 🌐 NAVIGATION
// --------------------------------------

export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Me", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },

  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
] as const;

// --------------------------------------
// 🔗 FOOTER LINKS
// --------------------------------------

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
] as const;
