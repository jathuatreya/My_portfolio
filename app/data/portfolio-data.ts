import {
     Timer,
     CheckCircle2,
     Code2,
     Smartphone,
     Brain,
     Cpu,
     FileCheck2,
     Palette
} from 'lucide-react'

// --------------------------------------
// 🌟 GLOBAL PROFILE
// --------------------------------------

export const profile = {
     name: "Jathushan Varnakulasingam",
     slogan: "Building Ideas. Solving Problems. Creating Impact.",
     shortBio:
          "Full-stack developer passionate about merging AI, IoT, and modern web technologies to build meaningful digital solutions.",
     age: 22,
     role: "Full-Stack Developer | ML Enthusiast | IoT Innovator",
     roles: [
          "Full-Stack Developer",
          "ML Enthusiast",
          "IoT Innovator",
          "Problem Solver"
     ],
     location: "Vavuniya, Sri Lanka",
     availability: "Open for freelance & full-time roles",
     portfolioURL: "https://jathuatreya.github.io",
     profileImage: "/my_image3.png",
     aboutImage: "/jathushan.png",
     resumeURL: "/cv.pdf",

     social: {
          linkedin: "https://www.linkedin.com/in/jathushan-varnakulasingam-18a551271/",
          github: "https://github.com/jathuatreya/",
          twitter: "https://x.com/jathushanstark",
          facebook: "https://web.facebook.com/imjathushann/",
          instagram: "https://www.instagram.com/im_jathushan/",
          hackerrank: "https://www.hackerrank.com/profile/jathuatreya",
     },

     highlights: [
          "Full-stack developer with strong MERN & LAMP experience",
          "Beginner in Machine Learning with hands-on projects",
          "IoT + robotics enthusiast building hardware-based systems",
          "Experienced with React, Next.js, and modern UI frameworks",
          "Strong foundation in Java & Spring Boot",
     ],

     strengths: [
          "Fast learner and problem solver",
          "Clean code practices",
          "Good communication and teamwork",
          "Attention to detail in UI/UX",
     ],

     achievements: [
          "20+ completed software projects",
          "Built a working AI-powered hardware robot",
          "Created multiple full-stack applications",
          "Consistently praised for clean code and dedication",
     ],

     contact: {
          email: "jathushan@example.com",
          phone: "+94 XX XXX XXXX",
          location: "Vavuniya, Sri Lanka",
     },
} as const;

// --------------------------------------
// 🌐 NAVIGATION
// --------------------------------------

export const navItems = [
     { id: "home", label: "Home", href: "/" },
     { id: "about", label: "About Me", href: "/#about" },
     { id: "services", label: "Services", href: "/#services" },
     { id: "projects", label: "Projects", href: "/#projects" },
     { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
     { id: "blogs", label: "Blogs", href: "/blogs" },
     { id: "contact", label: "Contact", href: "/#contact" },
] as const;

// --------------------------------------
// 📊 ABOUT STATS
// --------------------------------------

export const aboutStats = [
     { icon: Timer, value: "2+", label: "Years Self-taught Experience" },
     { icon: CheckCircle2, value: "20+", label: "Completed Projects" },
     { icon: Code2, value: "15+", label: "Technologies Used" },
     { icon: Brain, value: "5+", label: "ML Models & Experiments" },
];

// --------------------------------------
// 🛠 TECHNOLOGIES
// --------------------------------------

export const technologies = [
     "MERN Stack",
     "LAMP Stack",
     "Python",
     "Java",
     "Machine Learning",
     "IoT & Hardware",
     "Networking",
     "Next.js",
     "Docker",
     "Git & GitHub",
] as const;

// --------------------------------------
// 🎯 GOALS
// --------------------------------------

export const goals = [
     "Become a strong full-stack engineer with expertise in machine learning.",
     "Work on innovative projects at the intersection of IoT and AI.",
     "Contribute to open-source and eventually build a tech startup.",
     "Engage in freelance projects to solve diverse business challenges.",
     "Learn advanced robotics and autonomous systems.",
] as const;

// --------------------------------------
// 📝 BLOGS
// --------------------------------------

export const blogs = [
     {
          id: 1,
          title: "Automating Machine Learning: My Journey with Auto-MML",
          excerpt: "Building a tool to streamline the ML pipeline and make model selection accessible to everyone.",
          date: "Dec 15, 2023",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
          category: "Machine Learning"
     },
     {
          id: 2,
          title: "Web Scraping at Scale: Analyzing Food & Movie Data",
          excerpt: "How I built custom scrapers in Python to gather datasets for analysis, featuring my Food and Movie web scraper projects.",
          date: "Nov 20, 2023",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
          category: "Python Automation"
     },
     {
          id: 3,
          title: "Predicting Housing Prices with Regression Models",
          excerpt: "A deep dive into my 'Predicting-the-price-of-houses' project, comparing different algorithms for accurate valuation.",
          date: "Oct 10, 2023",
          readTime: "10 min read",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
          category: "Data Science"
     },
] as const;

// --------------------------------------
// 🧩 SERVICES
// --------------------------------------

export const services = [
     {
          icon: Code2,
          title: "Web Development",
          description:
               "Full-stack development using modern technologies like MERN and JAMstack to build responsive and scalable web apps.",
     },
     {
          icon: Smartphone,
          title: "Mobile App Development",
          description:
               "Creating seamless mobile experiences using Flutter, React Native, and Android Studio.",
     },
     {
          icon: Brain,
          title: "Machine Learning & AI",
          description:
               "Developing ML models and AI-driven systems with Python, Scikit-learn, and TensorFlow.",
     },
     {
          icon: Cpu,
          title: "IoT Development",
          description:
               "Building end-to-end IoT solutions including firmware, sensors, robot systems & cloud dashboards.",
     },
     {
          icon: FileCheck2,
          title: "Consulting & Code Review",
          description:
               "Providing expert guidance on best practices, architecture, and performance optimization.",
     },
     {
          icon: Palette,
          title: "UI/UX Design",
          description:
               "Designing clean and modern interfaces with strong focus on usability and accessibility.",
     },
];

// --------------------------------------
// 🚀 PROJECTS
// --------------------------------------

export const projects = [
     {
          title: "Auto-MML",
          image:
               "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
          description:
               "An automated machine learning tool designed to simplify model selection and specialized training tasks.",
          techStack: ["Python", "Machine Learning", "Automation"],
          features: [
               "Automated model selection",
               "Streamlined training pipeline",
               "User-friendly interface for non-experts",
          ],
     },
     {
          title: "Food & Movie Web Scrapers",
          image:
               "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
          description:
               "Custom Python-based web scrapers built to aggregate large datasets for movies and food pricing analysis.",
          techStack: ["Python", "BeautifulSoup", "Data Analysis"],
          features: [
               "High-performance scraping",
               "Data cleaning and export",
               "Automated periodic updates",
          ],
     },
     {
          title: "House Price Prediction",
          image:
               "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
          description:
               "A data science project using regression models to accurately predict housing prices based on various features.",
          techStack: ["Python", "Scikit-learn", "Pandas"],
          features: [
               "Advanced regression analysis",
               "Feature engineering",
               "Visual data insights",
          ],
     },
] as const;

// --------------------------------------
// 💡 INSPIRATION
// --------------------------------------

export const inspiration = {
     name: "Sundar Pichai",
     role: "CEO of Google & Alphabet",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/800px-Sundar_pichai.png",
     quote: "Wear your failure as a badge of honor!",
} as const;

// --------------------------------------
// ⭐ TESTIMONIALS
// --------------------------------------

export const testimonials = [
     {
          name: "Rajan K.",
          role: "Client",
          image:
               "https://lh3.googleusercontent.com/aida-public/AB6AXuAQeU9wcIC6JnEuiqVGOKEmkZQZJIuWIVRcZN03V_TDocfBRvR26tfFDZe6FeT1wDicURLZrQJWCNAWMBuWfz9Cg5tGXU1XHo3k_xxCfZ_qzTF_1S5uIKyn--ZIUYBYo2zYYuS7FgyDyl2Uyhp3TDQXBuWiVfHWhL4hXM4lMEJwAoNjdmHLydcLSQKCTLP1dQ_s6PoqCfWMOWCVMp8YdUzXKYbQLDyexXv52keIcwh-Z48NEK81SQ7Shh6mW4HCR59TaXnACC6yjcA",
          quote:
               "Working with Jathushan was smooth and professional. He delivered a high-quality system and communicated clearly.",
     },
     {
          name: "Dr. Tharsan",
          role: "Lecturer – IIT / UoW",
          image:
               "https://lh3.googleusercontent.com/aida-public/AB6AXuDe3-tK_nf40C0boq-HuesPb6sn6CO3Ixm-7pi4S6QxZjQWKSRyrs0BEs-s3HnGYlvm28vzn0ovkL1viArMts09cP4xpWFlUhQeLFTGFXm5FLplhZ4MkjzeegUxyDv26VboJ43A1Ir7p8ccvoE1gUBf33mq6HiY2Iq6FMbgMiXl2AT8TP6UVh9tHs-QcAXeRWKVtDFVnc_k09wkmmCTfWUX-6mJ9sKEDGiwtXchanyMGUXtOk-DhhYWipCLfrxDDPSxF5irKdbH3cU",
          quote:
               "A dedicated learner with strong problem-solving skills. His projects show creativity and technical growth.",
     },
     {
          name: "Manoj P.",
          role: "Software Developer – Teammate",
          image:
               "https://lh3.googleusercontent.com/aida-public/AB6AXuA7qY4Drh7t8Qhd6ecctsucMYynXJEHZUSw-RSpfRetKPfDwCu1u8bw2_EwxdH-lGC8m6d6wtmL6OGkjOqer3bt1-YFe5SlzsTvA_oR1_L0wWTX1uG2r5VySfvcIhc5iK4TfaKZULnVr91pcoAxCaJD8PuSYgYyZ5PszTD03VfelaCBnbAjOnnTdkOsvCVoViPYD3Mja-RkhjMjK6FuTQF6SJcejPYcap-sZCWsfDx6NL-7hs-WrM5u86ykfRY4onE28fkzymP_LIM",
          quote:
               "Jathu consistently brings clean code and smart solutions. A great team player with passion for learning.",
     },
] as const;

// --------------------------------------
// 📬 CONTACT INFO
// --------------------------------------

export const contactInfo = {
     email: "jathushan@example.com",
     phone: "+94 XX XXX XXXX",
     location: "Vavuniya, Sri Lanka",
     social: {
          linkedin: "https://www.linkedin.com/in/jathushan-varnakulasingam-18a551271/",
          github: "https://github.com/jathuatreya/",
     },
} as const;

// --------------------------------------
// 🔗 FOOTER LINKS
// --------------------------------------

export const footerLinks = [
     { label: "Home", href: "/" },
     { label: "About", href: "/#about" },
     { label: "Services", href: "/#services" },
     { label: "Projects", href: "/#projects" },
     { label: "Testimonials", href: "/#testimonials" },
     { label: "Blogs", href: "/blogs" },
     { label: "Contact", href: "/#contact" },
] as const;
