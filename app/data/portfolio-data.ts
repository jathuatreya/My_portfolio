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
     slogan: "Innovate. Automate. Accelerate.",
     shortBio:
          "A full-stack developer and tech enthusiast exploring the worlds of electrical, mechanical, and computer engineering. I build innovative projects that merge software, hardware, and AI to create smart, real-world solutions",
     age: 25,
     role: "Full-Stack Developer | ML Enthusiast | IoT Innovator | Robotics Explorer",
     roles: [
          "Full-Stack Developer",
          "ML Enthusiast",
          "IoT Innovator",

          "Robotics Explorer",

          "AI Integrator",

          "Software Engineer",
          "Automation Enthusiast"
     ],

     location: "Vavuniya, Sri Lanka",
     availability: "Open for freelance & full-time roles",
     portfolioURL: "https://jathushanvarnakulasingam-portfolio.vercel.app/",
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
          email: "imjathushan.com",
          phone: "+94 707661734",
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
     { icon: Timer, value: "3+", label: "Years Self-taught Experience" },
     { icon: CheckCircle2, value: "50+", label: "Completed Projects" },
     { icon: Code2, value: "15+", label: "Technologies Used" },
     { icon: Brain, value: "5+", label: "ML Models & Experiments" },
];

// --------------------------------------
// 🛠 TECHNOLOGIES
// --------------------------------------

export const technologies = [
     // Programming Languages
     "Python",
     "Java",
     "JavaScript",
     "TypeScript",
     "SQL",
     "Bash",


     // Web Development
     "MERN Stack",
     "LAMP Stack",
     "Next.js",
     "Node.js",
     "Express.js",
     "Laravel",
     "Spring Boot",
     "Tailwind CSS",
     "SASS",
     "HTML5",
     "CSS3",

     // Databases
     "MongoDB",
     "MySQL",
     "PostgreSQL",

     // APIs & Backend
     "RESTful APIs",
     "JAX-RS",
     "Postman",

     // DevOps & Tools
     "Git & GitHub",
     "Docker",
     "VS Code",
     "npm",

     // Machine Learning & AI
     "Machine Learning",
     "ML Model Training",
     "Fine-Tuning Models",
     "RAG (Retrieval-Augmented Generation) Applications",
     "OpenCV",
     "MediaPipe",
     "AI Integration",

     // IoT & Hardware
     "IoT & Hardware",
     "MicroPython",
     "Servo Motors",
     "DC Motors",
     "Ultrasonic Sensors",

     // Networking
     "Networking",

     // Algorithms & CS Concepts
     "Data Structures & Algorithms",

     // Robotics & Automation
     "Robotics",
     "Automation",


     "Full-Stack Development",
     "AI & Robotics Projects"
] as const;


// --------------------------------------
// 🎯 GOALS
// --------------------------------------

export const goals = [
     "Master full-stack development using modern frameworks and technologies.",
     "Train, fine-tune, and deploy machine learning models, including RAG applications.",
     "Build innovative IoT and robotics projects integrating AI and hardware.",
     "Work on real-world projects to solve complex technical challenges.",
     "Explore electrical, mechanical, and computer engineering intersections.",
     "Contribute to open-source projects and grow a strong professional portfolio.",
     "Continuously learn new technologies, frameworks, and engineering skills."
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
     }
]

// --------------------------------------
// 🚀 PROJECTS
// --------------------------------------

export const projects = [
     {
          title: "A/L MCQ Answers Automation",
          image:
               "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
          description:
               "A Python script that automates extracting, organizing, and managing A/L MCQ answers for quick reference and study.",
          techStack: ["Python"],
          features: [
               "Fully automated answer extraction",
               "Fast processing for large datasets",
               "Simple and lightweight script",
          ],
     },
     {
          title: "AI Job Application Assistant",
          image:
               "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800",
          description:
               "An AI-powered web application built using Next.js and Flask that analyzes resumes, job descriptions, detects skill gaps, and suggests improvements.",
          techStack: ["Python", "Next.js", "Flask", "NLP", "Machine Learning"],
          features: [
               "Resume content extraction",
               "Job-description matching",
               "Skill gap detection",
               "Job category prediction",
               "Interview question suggestions",
          ],
     },
     {
          title: "Bulk Folder Creator",
          image:
               "https://images.unsplash.com/photo-1607083206968-13611eab3ab8?auto=format&fit=crop&q=80&w=800",
          description:
               "A simple Python tool to create multiple folders automatically using predefined naming patterns.",
          techStack: ["Python"],
          features: [
               "Fast directory creation",
               "Custom folder naming",
               "Useful for project setup & organizing files",
          ],
     },
     {
          title: "Delete Empty Folders Tool",
          image:
               "https://images.unsplash.com/photo-1587620931282-882d3a89a7d3?auto=format&fit=crop&q=80&w=800",
          description:
               "A Python utility script that scans directories and removes empty folders automatically.",
          techStack: ["Python"],
          features: [
               "Recursive folder scanning",
               "Safe deletion",
               "Useful for cleaning large projects",
          ],
     },
     {
          title: "Flight Seat Booking System",
          image:
               "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=800",
          description:
               "A basic Java-based flight seat booking simulation demonstrating object-oriented design concepts.",
          techStack: ["Java"],
          features: [
               "Seat allocation simulation",
               "OOP-based structure",
               "User-friendly console interface",
          ],
     },
     {
          title: "Hunger Eradication Website",
          image:
               "https://images.unsplash.com/photo-1520975918319-0983c9aeb963?auto=format&fit=crop&q=80&w=800",
          description:
               "A web project aimed at spreading awareness and providing resources related to hunger eradication initiatives.",
          techStack: ["HTML", "CSS", "JavaScript"],
          features: [
               "Clean and responsive UI",
               "Awareness-driven content",
               "Easy to navigate pages",
          ],
     },
     {
          title: "GitHub Profile Automation Repo",
          image:
               "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
          description:
               "A repo for managing and customizing your GitHub profile with dynamic content and code snippets.",
          techStack: ["Markdown", "GitHub Actions"],
          features: [
               "Automatic GitHub profile updates",
               "Dynamic readme templates",
               "Clean customization layout",
          ],
     },
     {
          title: "Java Multithreading Ticket Booking",
          image:
               "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
          description:
               "A multi-threaded ticket booking simulator demonstrating concurrency control and synchronized operations in Java.",
          techStack: ["Java", "Multithreading"],
          features: [
               "Vendor-customer thread interaction",
               "Synchronized ticket operations",
               "Dynamic ticket pool management",
          ],
     },
     {
          title: "Laptop Controlled Car",
          image:
               "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
          description:
               "A Python-based IoT project where a laptop is used to control a robot car using custom command inputs.",
          techStack: ["Python", "IoT"],
          features: [
               "Laptop-based remote control",
               "Real-time command execution",
               "Perfect for robotics beginners",
          ],
     },
     {
          title: "Library Management (PHP)",
          image:
               "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
          description:
               "A PHP-based CRUD web app designed to manage library books, students, and borrowing records.",
          techStack: ["PHP", "MySQL"],
          features: [
               "Full CRUD operations",
               "Clean admin UI",
               "Book & member management",
          ],
     },
     {
          title: "Magisk on WSA",
          image:
               "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&q=80&w=800",
          description:
               "A project integrating Magisk root and Google Apps into Windows Subsystem for Android.",
          techStack: ["WSA", "Android", "Magisk"],
          features: [
               "Root Android inside Windows",
               "GApps integration",
               "WSA customization",
          ],
     },
     {
          title: "Marks Evaluation with Graphs",
          image:
               "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800",
          description:
               "A Python assignment project for plotting and analyzing student marks using graphs.",
          techStack: ["Python", "Matplotlib"],
          features: [
               "Automated marks visualization",
               "Graph-based insights",
               "Easy input and plotting",
          ],
     },
     {
          title: "Mastermind Game",
          image:
               "https://images.unsplash.com/photo-1585366119957-e9730b6d0f5f?auto=format&fit=crop&q=80&w=800",
          description:
               "A simple Python implementation of the classic Mastermind code-breaking game.",
          techStack: ["Python"],
          features: [
               "Classic game logic",
               "Interactive gameplay",
               "Good for beginners",
          ],
     }
] as const;


// --------------------------------------
// 💡 INSPIRATION
// --------------------------------------



// --------------------------------------
// ⭐ TESTIMONIALS
// --------------------------------------

export const testimonials = [
     {
          name: "Thusigan.R",
          role: "Client",
          quote:
               "Working with Jathushan was smooth and professional. He delivered a high-quality system and communicated clearly.",
     },
     {
          name: "Ajanthan.S",
          role: "Lecturer – IIT / UoW",
          quote:
               "A dedicated learner with strong problem-solving skills. His projects show creativity and technical growth.",
     },
     {
          name: "Hrthick Roshan",
          role: "Software Developer – Teammate",
          quote:
               "Jathu consistently brings clean code and smart solutions. A great team player with passion for learning.",
     },
] as const;

// --------------------------------------
// 📬 CONTACT INFO
// --------------------------------------

export const contactInfo = {
     email: "imjathushan@gmail.com",
     phone: "+94 76661734",
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
