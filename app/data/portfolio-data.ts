import {
  Timer,
  CheckCircle2,
  Code2,
  Smartphone,
  Brain,
  Cpu,
  FileCheck2,
  Palette,
  Cable,
  Globe2,
} from "lucide-react";

// --------------------------------------
// 🌟 GLOBAL PROFILE
// --------------------------------------

export const profile = {
  name: "Jathushan Varnakulasingam",
  slogan: "Innovate. Automate. Accelerate.",
  shortBio:
    "I am a passionate Full-Stack Developer and Tech Entrepreneur, driven by innovation, problem-solving, and building technology that makes a real-world impact.",
  age: 25,
  role: "Full-Stack Developer | ML Enthusiast | IoT Innovator | Robotics Explorer",
  roles: [
    "Full-Stack Developer",
    "ML Enthusiast",
    "IoT Innovator",

    "Robotics Explorer",

    "AI Integrator",

    "Software Engineer",
    "Automation Enthusiast",
  ],

  location: "Vavuniya, Northern Province, Sri Lanka",
  availability: "Open for freelance & full-time roles",
  portfolioURL: "https://jathushan.dev/",
  profileImage: "/my_image3.png",
  aboutImage: "/jathushan.jpg",
  resumeURL: "/Jathushan_CV.pdf",

  social: {
    linkedin:
      "https://www.linkedin.com/in/jathushan-varnakulasingam-18a551271/",
    github: "https://github.com/jathuatreya/",
    twitter: "https://x.com/jathushanstark",
    facebook: "https://web.facebook.com/imjathushann/",
    instagram: "https://www.instagram.com/im_jathushan/",
    hackerrank: "https://www.hackerrank.com/profile/jathuatreya",
  },

  highlights: [
    "Full-stack developer with strong MERN & LAMP experience",
    "Beginner in Machine Learning with hands-on projects",
    "IoT + robotics enthusiast building hardware-based systems in Vavuniya",
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
    email: "imjathushan@gmail.com",
    phone: "+94 76661734",
    location: "Vavuniya Town, Northern Province, Sri Lanka",
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
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "education", label: "Education", href: "/#education" },

  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
] as const;

// --------------------------------------
// 📊 ABOUT STATS
// --------------------------------------

export const aboutStats = [
  {
    id: "experience",
    icon: Timer,
    value: "3+",
    label: "Years Self-taught Experience",
  },
  {
    id: "projects",
    icon: CheckCircle2,
    value: "50+",
    label: "Completed Projects",
  },
  { id: "technologies", icon: Code2, value: "15+", label: "Technologies Used" },
  { id: "web", icon: Globe2, value: "50+", label: "Web Development Projects" },
  { id: "models", icon: Brain, value: "5+", label: "ML Models & Experiments" },
  { id: "hardware", icon: Cable, value: "20+", label: "IoT Projects Hardware" },
];

// --------------------------------------
// 💼 EXPERIENCE
// --------------------------------------

export const experience = [
  {
    id: "accron",
    role: "Full-Stack Developer Intern",
    company: "Accron Revolution",
    period: "September 2025 – March 2026",
    description:
      "Worked as a Full-Stack Developer Intern, significantly contributing to the development of the company's core product ecosystem and multiple high-profile client websites.",
    responsibilities: [
      "Lead developer for the Mr. Dood ecosystem, focusing on modular and scalable architecture",
      "Design and maintain full-stack solutions for company and client platforms",
      "Contribute to UI/UX improvements and backend optimization for real-time applications",
    ],
    projects: [
      "Mr. Dood Web",
      "Mr. Dood Driver",
      "Mr. Dood Merchant",
      "Accron POS",
      "Accron vehicle management system",
      "Accron Company Website",
      "British Academy Website",
    ],
    skills: [
      "MERN / LAMP Stack",
      "Real-time Ecosystems",
      "Modular Architecture",
      "Scalable Web Solutions",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "March 15, 2026 – Present",
    description:
      "Working as an independent full-stack developer, delivering high-performance web applications and digital solutions for diverse clients.",
    responsibilities: [
      "Architect and build custom full-stack solutions tailored to specific client needs",
      "Drive business impact through SEO optimization and performance enhancements",
      "Manage end-to-end development lifecycles, from UI/UX design to cloud deployment",
    ],
    projects: [
      "POS System Development",
      "Portfolio Website Development",
      "Custom E-Commerce Platforms",
      "Business Automation Tools",
    ],
    skills: [
      "React / Next.js",
      "Node.js / Express",
      "MongoDB / PostgreSQL",
      "Firebase & Firestore",
      "Tailwind CSS",
      "System Architecture",
    ],
  },
];

// --------------------------------------
// 🎓 EDUCATION
// --------------------------------------

export const education = [
  {
    id: "school",
    degree: "Schools",
    institution: "V/Vavuniya Tamil Madhya Maha Vidyalayam",
    period: "Grade 1 – Grade 13",
    description:
      "Completed school education in Vavuniya, building a strong physical science and analytical foundation.",
    highlights: [
      "G.C.E Advanced Level (A/L) - Physical Science Stream",
      "Subjects: Combined Mathematics, Physics, Chemistry",
    ],
  },
  {
    id: "automobile",
    degree: "NVQ Level 3 – Automobile Engineering",
    institution: "Vavuniya Technical College",
    period: "2022",
    description:
      "Gained hands-on technical knowledge and practical skills in mechanical engineering.",
    highlights: [
      "Completed NVQ Level 3 in Automobile Engineering",
      "Developed discipline, mechanical understanding, and troubleshooting skills",
    ],
  },
  {
    id: "iit",
    degree: "BSc (Hons) Computer Science",
    institution: "Informatics Institute of Technology (IIT)",
    period: "2022 – Present",
    affiliation: "Affiliated with the University of Westminster",
    description:
      "Currently pursuing a Bachelor’s degree in Computer Science with a strong focus on industrial standards and cutting-edge technologies.",
    focus: [
      "Software Engineering",
      "Web Technologies",
      "Databases & Networking",
      "Machine Learning & AI",
    ],
    details:
      "Practical, industry-oriented curriculum aligned with global standards.",
  },
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

  "Next.js",
  "Node.js",
  "Express.js",
  "Laravel",
  "Spring Boot",
  "Tailwind CSS",

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
  "AI & Robotics Projects",
] as const;

// --------------------------------------
// 🎯 GOALS
// --------------------------------------

export const goals = [
  "Master full-stack development using modern frameworks and technologies.",
  "Train, fine-tune, and deploy machine learning models, including RAG applications.",
  "Build innovative IoT and robotics projects integrating AI and hardware.",
  "Explore electrical, mechanical, and computer engineering intersections.",
  "Contribute to open-source projects and grow a strong professional portfolio.",
  "Continuously learn new technologies, frameworks, and engineering skills.",
] as const;

// --------------------------------------
// 📝 BLOGS
// --------------------------------------

export const blogs = [
  {
    id: 1,
    title: "Automating A/L MCQ Answers with Python",
    excerpt:
      "How I built a lightweight Python script to automatically extract, organize, and manage A/L MCQ answers for faster learning.",
    date: "Dec 2025",
    readTime: "6 min read",
    image: "/projects/mcq-automation.jpg",
    category: "Python Automation",
    slug: "automating-al-mcq-answers-with-python",
  },
  {
    id: 2,
    title: "Building an AI Job Application Assistant with Next.js & Flask",
    excerpt:
      "A breakdown of my AI-powered resume analyzer that detects skill gaps, matches job descriptions, and provides smart career suggestions.",
    date: "Dec 2025",
    readTime: "8 min read",
    image: "/projects/ai-job-assistant.jpg",
    category: "AI & Web Development",
    slug: "building-an-ai-job-application-assistant-with-nextjs-and-flask",
  },
  {
    id: 3,
    title: "Designing a Java Flight Seat Booking Simulator",
    excerpt:
      "A beginner-friendly Java project demonstrating OOP concepts through a simple flight seat allocation system.",
    date: "Nov 2025",
    readTime: "5 min read",
    image: "/projects/flight-booking.jpg",
    category: "Java",
    slug: "designing-a-java-flight-seat-booking-simulator",
  },
  {
    id: 4,
    title: "Creating a Hunger Eradication Awareness Website",
    excerpt:
      "The story behind building a clean, responsive web project that spreads awareness about global hunger.",
    date: "Oct 2025",
    readTime: "4 min read",
    image: "/projects/hunger-eradication.jpg",
    category: "Web Development",
    slug: "creating-a-hunger-eradication-awareness-website",
  },
  {
    id: 5,
    title: "Building a GitHub Profile Automation Chrome Extension",
    excerpt:
      "A behind-the-scenes look at how I automated GitHub profile updates using Markdown templates and GitHub Actions.",
    date: "Oct 2025",
    readTime: "6 min read",
    image: "/projects/github-automation.jpg",
    category: "Automation & DevTools",
    slug: "github-profile-automation-with-custom-chrome-extensions",
  },
  {
    id: 6,
    title: "Mastering Java Multithreading with a Ticket Booking System",
    excerpt:
      "How I used threads, synchronization, and shared resources in Java to simulate real-world ticket booking.",
    date: "Sep 2025",
    readTime: "7 min read",
    image: "/projects/ticket-booking.jpg",
    category: "Java Multithreading",
    slug: "mastering-java-multithreading-high-concurrency-ticket-systems",
  },
  {
    id: 7,
    title: "Building a Laptop-Controlled IoT Car with Python",
    excerpt:
      "A fun robotics project where a laptop controls a robot car using Python and custom commands.",
    date: "Aug 2025",
    readTime: "5 min read",
    image: "/projects/laptop-car.jpg",
    category: "IoT & Robotics",
    slug: "python-powered-iot-controlling-physical-hardware-via-laptop",
  },
  {
    id: 8,
    title: "Creating a PHP Library Management System",
    excerpt:
      "A full CRUD web application built with PHP and MySQL for managing library books, members, and borrowing records.",
    date: "Jul 2025",
    readTime: "6 min read",
    image: "/projects/library-management.jpg",
    category: "PHP & MySQL",
    slug: "building-secure-full-stack-systems-with-php-and-mysql",
  },
  {
    id: 9,
    title: "Visualizing Student Marks with Python & Matplotlib",
    excerpt:
      "A simple marks evaluation tool that turns student scores into meaningful graphs and insights.",
    date: "Jun 2025",
    readTime: "4 min read",
    image: "/projects/marks-evaluation.jpg",
    category: "Data Visualization",
    slug: "data-visualization-turning-academic-data-into-insights",
  },
  {
    id: 10,
    title: "Recreating the Classic Mastermind Game in Python",
    excerpt:
      "A fun Python project where I built the classic Mastermind code-breaking game from scratch.",
    date: "May 2025",
    readTime: "4 min read",
    image: "/projects/mastermind-game.jpg",
    category: "Python Games",
    slug: "algorithmic-thinking-recreating-the-mastermind-logic-game",
  },
  {
    id: 11,
    title: "Auto DJ Cross Fade: Seamless Audio Mixing with Python",
    excerpt:
      "Developing an automated audio mixing tool that creates professional-grade cross-fades between tracks.",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/projects/bulk-folder-creator.jpg",
    category: "Audio Processing",
    slug: "auto-dj-cross-fade-automated-audio-mixing-with-python",
  },
  {
    id: 12,
    title: "AI Offline: Building a Privacy-First Customer Service Chatbot",
    excerpt:
      "A deep dive into creating a fully offline chatbot using local LLMs and LangChain for secure customer interactions.",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "/projects/delete-empty-folders.jpg",
    category: "AI & Privacy",
    slug: "ai-offline-privacy-first-customer-service-solutions",
  },
  {
    id: 13,
    title: "Building a Full-Featured POS Application",
    excerpt:
      "A deep dive into how I built a complete Point of Sale system with inventory management, billing, and real-time reporting.",
    date: "Apr 2026",
    readTime: "8 min read",
    image: "/projects/sam-pak-HjBcAVWlxnE-unsplash.jpg",
    category: "Full-Stack Development",
    slug: "building-a-full-featured-pos-application",
  },
  {
    id: 14,
    title: "Designing a Corporate Company Website from Scratch",
    excerpt:
      "How I planned, designed, and launched a professional corporate website with SEO, performance, and modern aesthetics.",
    date: "May 2026",
    readTime: "6 min read",
    image: "/projects/github-automation.jpg",
    category: "Web Development",
    slug: "designing-a-corporate-company-website-from-scratch",
  },
  {
    id: 15,
    title: "Creating a Stunning Developer Portfolio Website",
    excerpt:
      "A step-by-step guide on building a high-impact developer portfolio with Next.js, animations, and SEO best practices.",
    date: "Jun 2026",
    readTime: "7 min read",
    image: "/projects/mastermind-game.jpg",
    category: "Web Development",
    slug: "creating-a-stunning-developer-portfolio-website",
  },
] as const;

// --------------------------------------
// 🧩 SERVICES
// --------------------------------------

export const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack development using modern technologies like MERN and JAMstack to build responsive and scalable web apps.",
  },
  {
    id: "ml",
    icon: Brain,
    title: "Machine Learning & AI",
    description:
      "Developing ML models and AI-driven systems with Python, Scikit-learn, and TensorFlow.",
  },
  {
    id: "iot",
    icon: Cpu,
    title: "IoT Development",
    description:
      "Building end-to-end IoT solutions including firmware, sensors, robot systems & cloud dashboards.",
  },
  {
    id: "consult",
    icon: FileCheck2,
    title: "Consulting & Code Review",
    description:
      "Providing expert guidance on best practices, architecture, and performance optimization.",
  },
];

// --------------------------------------
// 🚀 PROJECTS
// --------------------------------------

export const projects = [
  {
    title: "A/L MCQ Answers Automation",
    image: "/projects/mcq-automation.jpg",
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
    image: "/projects/ai-job-assistant.jpg",
    description:
      "An AI-powered web application built using Next.js and Flask that analyzes resumes, job descriptions, detects skill gaps, and suggests improvements.",
    techStack: ["Python", "Next.js", "Flask", "NLP", "Machine Learning"],
    codeUrl: "https://github.com/jathuatreya/AI-Job-Application-Assistant-",
    features: [
      "Resume content extraction",
      "Job-description matching",
      "Skill gap detection",
      "Job category prediction",
      "Interview question suggestions",
    ],
  },
  {
    title: "Flight Seat Booking System",
    image: "/projects/flight-booking.jpg",
    description:
      "A basic Java-based flight seat booking simulation demonstrating object-oriented design concepts.",
    techStack: ["Java"],
    codeUrl: "https://github.com/jathuatreya/flight-seat-booking-in-Java-",
    features: [
      "Seat allocation simulation",
      "OOP-based structure",
      "User-friendly console interface",
    ],
  },

  {
    title: "GitHub Profile Automation Chrome Extesntion ",
    image: "/projects/github-automation.jpg",
    description:
      "A chrome extension for automating GitHub profile updates and customizing your profile with dynamic content and code snippets.",
    techStack: ["Markdown", "GitHub Actions"],
    features: [
      "Automatic GitHub profile updates",
      "Dynamic readme templates",
      "Clean customization layout",
    ],
  },
  {
    title: "Java Multithreading Ticket Booking",
    image: "/projects/ticket-booking.jpg",
    description:
      "A multi-threaded ticket booking simulator demonstrating concurrency control and synchronized operations in Java.",
    techStack: ["Java", "Multithreading"],
    codeUrl: "https://github.com/jathuatreya/java-multithreading-ticketbooking",
    features: [
      "Vendor-customer thread interaction",
      "Synchronized ticket operations",
      "Dynamic ticket pool management",
    ],
  },
  {
    title: "Laptop Controlled Car",
    image: "/projects/laptop-car.jpg",
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
    image: "/projects/library-management.jpg",
    description:
      "A PHP-based CRUD web app designed to manage library books, students, and borrowing records.",
    techStack: ["PHP", "MySQL"],
    codeUrl: "https://github.com/jathuatreya/library-management_php",
    features: [
      "Full CRUD operations",
      "Clean admin UI",
      "Book & member management",
    ],
  },

  {
    title: "Marks Evaluation with Graphs",
    image: "/projects/marks-evaluation.jpg",
    description:
      "A Python assignment project for plotting and analyzing student marks using graphs.",
    techStack: ["Python", "Matplotlib"],
    codeUrl:
      "https://github.com/jathuatreya/Marks-evaluation-with-graph-in-python",
    features: [
      "Automated marks visualization",
      "Graph-based insights",
      "Easy input and plotting",
    ],
  },
  {
    title: "Mastermind Game",
    image: "/projects/mastermind-game.jpg",
    description:
      "A simple Python implementation of the classic Mastermind code-breaking game.",
    techStack: ["Python"],
    features: [
      "Classic game logic",
      "Interactive gameplay",
      "Good for beginners",
    ],
  },
  {
    title: "Auto DJ Cross Fade",
    image: "/projects/auto-dj.jpg",
    description:
      "An automated audio mixing tool that creates smooth cross-fades between tracks for a seamless listening experience.",
    techStack: ["Python", "Audio Processing"],
    codeUrl: "https://github.com/jathuatreya/auto_dj-_cross_fade",
    features: [
      "Automatic track detection",
      "BPM matching",
      "Professional cross-fade curves",
      "Export to high-quality audio",
    ],
  },
  {
    title: "Customer Service Chatbot Offline",
    image: "/projects/chatbot-offline.jpg",
    description:
      "A privacy-focused, offline-capable chatbot for customer service inquiries, using local LLMs.",
    techStack: ["Python", "LangChain", "Local LLM", "Streamlit"],
    codeUrl: "https://github.com/jathuatreya/Customerservice-chatbot-offline",
    features: [
      "100% Offline operation",
      "Privacy-first data handling",
      "Custom knowledge base",
      "RAG (Retrieval-Augmented Generation)",
    ],
  },
] as const;

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
    linkedin:
      "https://www.linkedin.com/in/jathushan-varnakulasingam-18a551271/",
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
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
] as const;
