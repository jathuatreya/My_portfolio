export interface ProjectItem {
     id: string;
     title: string;
     category: string;
     role: string;
     description: string;
     highlight1?: {
          value: string;
          label: string;
     };
     highlight2?: {
          value: string;
          label: string;
     };
     techStack: string[];
     image: string;
     demoUrl?: string;
     codeUrl?: string;
}

export const detailedProjects: ProjectItem[] = [
{
     "id": "fixmate-mobile",
     "title": "FixMate — On-Demand Services & Handyman Mobile App",
     "category": "Mobile App Development",
     "role": "Mobile App Engineer · React Native & Cloud Backend",
     "description": "A cross-platform on-demand repair and maintenance booking mobile application connecting homeowners and businesses with vetted local technicians, featuring real-time geolocation tracking, instant quote chat, appointment scheduling, and secure in-app payments.",
     "highlight1": {
          "value": "Real-Time GPS",
          "label": "Technician Tracking"
     },
     "highlight2": {
          "value": "Instant Book",
          "label": "In-App Payments"
     },
     "techStack": [
          "React Native",
          "Flutter",
          "TypeScript",
          "Node.js",
          "Firebase",
          "Google Maps API",
          "Tailwind / NativeWind",
          "REST APIs"
     ],
     "image": "/projects/fixmate-mobile.jpg",
     "codeUrl": "https://github.com/jathuatreya",
     "demoUrl": "https://github.com/jathuatreya"
},
{
     "id": "breast-cancer-detection",
     "title": "Breast Cancer Detection & Classification ML",
     "category": "AI & Machine Learning",
     "role": "Machine Learning Engineer · Diagnostic AI Classifier",
     "description": "A supervised machine learning classification system trained on diagnostic biopsy datasets to predict malignant vs. benign breast tumors with high accuracy, leveraging ensemble models, feature correlation, and ROC-AUC curve evaluation.",
     "highlight1": {
          "value": "98.2% Accuracy",
          "label": "Diagnostic Recall"
     },
     "highlight2": {
          "value": "ROC-AUC 0.99",
          "label": "Biopsy Classifier"
     },
     "techStack": [
          "Python",
          "Scikit-learn",
          "Machine Learning",
          "XGBoost",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "ROC-AUC Analysis",
          "Medical AI"
     ],
     "image": "/projects/breast-cancer-detection.jpg",
     "codeUrl": "https://github.com/jathuatreya",
     "demoUrl": "https://github.com/jathuatreya"
},
     {
          "id": "vexel-systems",
          "title": "Vexel Systems — Corporate & Software Showcase",
          "category": "Enterprise POS & SaaS",
          "role": "Co-Founder & Lead Engineer · Corporate Platform",
          "description": "Official engineering portfolio and product showcase platform for Vexel Systems, featuring dynamic dark-mode UI/UX, responsive product catalogs, enterprise client showcases, and modern full-stack performance architecture.",
          "highlight1": {
               "value": "Enterprise",
               "label": "Client Showcase"
          },
          "highlight2": {
               "value": "100% Code",
               "label": "Ownership Model"
          },
          "techStack": [
               "Next.js 16",
               "React 19",
               "TypeScript",
               "Tailwind CSS",
               "Framer Motion",
               "Vercel",
               "SEO Optimization"
          ],
          "image": "/projects/vexel-systems.jpg",
          "demoUrl": "https://www.vexelsystems.lk/"
     },
     {
          "id": "vexel-pos-showcase",
          "title": "Vexel POS — Official Product Showcase Platform",
          "category": "Enterprise POS & SaaS",
          "role": "Product Architect & Full-Stack Engineer",
          "description": "Official commercial showcase platform demonstrating the Vexel POS ecosystem, highlighting multi-branch synchronization, offline mode with automatic cloud sync, high-speed thermal billing, and hardware peripheral integrations.",
          "highlight1": {
               "value": "Offline-First",
               "label": "Auto Cloud Sync"
          },
          "highlight2": {
               "value": "Sub-Second",
               "label": "Thermal Checkout"
          },
          "techStack": [
               "Next.js",
               "React",
               "TypeScript",
               "Tailwind CSS",
               "Framer Motion",
               "Product Showcase",
               "POS Architecture"
          ],
          "image": "/projects/vexel-pos-showcase.jpg",
          "demoUrl": "https://www.vexelsystems.lk/"
     },
     {
          "id": "dishan-ayurvedha",
          "title": "Dishan Siddha Ayurvedha & Skin Care Clinic",
          "category": "Healthcare & Web Systems",
          "role": "Full-Stack Developer · Medical Clinic Platform",
          "description": "A holistic medical clinic platform designed and built for Dishan Siddha Ayurvedha & Skin Care Clinic led by registered physician Dr. Thanikaparan Arasaratnam, featuring treatment directories, patient booking inquiries, botanical remedies catalog, and mobile-first responsive layout.",
          "highlight1": {
               "value": "Clinical Portal",
               "label": "Patient Inquiries"
          },
          "highlight2": {
               "value": "Dr. Thanikaparan",
               "label": "Ayurvedha & Siddha"
          },
          "techStack": [
               "Next.js",
               "React",
               "Tailwind CSS",
               "TypeScript",
               "Framer Motion",
               "Medical Schema",
               "Vercel"
          ],
          "image": "/projects/dishan-ayurvedha.jpg",
          "demoUrl": "https://dishan-siddha-ayurvedha-clinic.vercel.app/"
     },
     {
          "id": "pavishan-portfolio",
          "title": "Pavishan Sivakumaran — Civil Engineer Portfolio",
          "category": "Client Web & Portfolios",
          "role": "Frontend & UI/UX Developer · Engineering Portfolio",
          "description": "High-end personal portfolio and professional project showcase website designed and engineered for Civil Engineer & Construction Project Manager Pavishan Sivakumaran, featuring dark-mode aesthetics, discipline showcases, and interactive credentials.",
          "highlight1": {
               "value": "Editorial UI",
               "label": "Dark Aesthetic"
          },
          "highlight2": {
               "value": "100% Score",
               "label": "Responsive Flow"
          },
          "techStack": [
               "React",
               "Next.js",
               "Tailwind CSS",
               "Framer Motion",
               "Vercel Cloud",
               "Responsive Design",
               "UI/UX"
          ],
          "image": "/projects/pavishan-portfolio.png",
          "demoUrl": "https://pavishansivakumaranportfolio.vercel.app/"
     },
     {
          "id": "vexel-hotel-pos",
          "title": "Vexel Hotel POS — Hospitality Management & Billing",
          "category": "Enterprise POS & SaaS",
          "role": "Systems Architect & Backend Engineer",
          "description": "Comprehensive hospitality point-of-sale solution equipped with dynamic floor & table layout management, Kitchen Order Tickets (KOT) routing, room-service billing, steward ordering, split bills, and daily revenue audits.",
          "highlight1": {
               "value": "Table & KOT",
               "label": "Kitchen Routing"
          },
          "highlight2": {
               "value": "Room Billing",
               "label": "Hospitality Suite"
          },
          "techStack": [
               "React",
               "Node.js",
               "Express",
               "PostgreSQL",
               "Electron / Web",
               "Thermal Printing",
               "REST APIs"
          ],
          "image": "/projects/vexel-hotel-pos.jpg",
          "demoUrl": "https://www.vexelsystems.lk/"
     },
     {
          "id": "vexel-stationery-pos",
          "title": "Vexel Stationery POS — Retail Inventory & Billing",
          "category": "Enterprise POS & SaaS",
          "role": "Full-Stack Engineer · Retail Inventory Solutions",
          "description": "Specialized retail POS and stock management software built for bookstores and stationery shops, featuring high-speed barcode scanning, multi-tier wholesale/retail pricing, reorder stock alerts, and instant receipt printing.",
          "highlight1": {
               "value": "Barcode Core",
               "label": "Fast Retail Billing"
          },
          "highlight2": {
               "value": "Stock Alerts",
               "label": "Wholesale/Retail"
          },
          "techStack": [
               "Next.js",
               "React",
               "Node.js",
               "MongoDB / SQL",
               "Barcode API",
               "Thermal Receipt API",
               "Inventory Control"
          ],
          "image": "/projects/vexel-stationery-pos.jpg",
          "demoUrl": "https://www.vexelsystems.lk/"
     },
     {
          "id": "vexel-quotify",
          "title": "Vexel Quotify — Quotation to Invoice Maker",
          "category": "Enterprise POS & SaaS",
          "role": "Software Architect · Billing Automation Engine",
          "description": "Bespoke business billing software enabling instant professional quotation generation with tax calculations, one-click conversion of accepted quotes into formal tax invoices, client ledger tracking, and automated PDF delivery.",
          "highlight1": {
               "value": "1-Click Flow",
               "label": "Quote to Invoice"
          },
          "highlight2": {
               "value": "PDF Engine",
               "label": "Tax Calculations"
          },
          "techStack": [
               "TypeScript",
               "React",
               "Node.js",
               "Tailwind CSS",
               "PDF Generation",
               "Business Automation",
               "Financial Ledger"
          ],
          "image": "/projects/vexel-quotify.jpg",
          "demoUrl": "https://www.vexelsystems.lk/"
     },
{
          id: "ai-job-assistant",
          title: "AI Job Application Assistant",
          category: "AI & Full-Stack",
          role: "Next.js & Flask Developer · AI Architecture",
          description:
               "An AI-powered web application built using Next.js and Flask that analyzes resumes against target job descriptions, detects skill gaps in real-time, predicts job category fit, and suggests interview improvement strategies.",
          highlight1: {
               value: "100+ Skills",
               label: "Gap Detection",
          },
          highlight2: {
               value: "NLP Matching",
               label: "Resume Engine",
          },
          techStack: ["Next.js 16", "Python", "Flask", "NLP", "Machine Learning", "Resume Parsing", "Tailwind CSS", "REST APIs"],
          image: "/projects/ai-job-assistant.jpg",
          demoUrl: "https://github.com/jathuatreya/AI-Job-Application-Assistant-",
          codeUrl: "https://github.com/jathuatreya/AI-Job-Application-Assistant-",
     },
     {
          id: "chatbot-offline",
          title: "Customer Service Chatbot Offline",
          category: "AI & Machine Learning",
          role: "AI Engineer · Local LLM & RAG System",
          description:
               "A privacy-focused, 100% offline-capable customer service chatbot operating entirely on local LLMs and LangChain, enabling high-speed retrieval-augmented generation without cloud data leaks.",
          highlight1: {
               value: "100% Offline",
               label: "Zero Cloud Leaks",
          },
          highlight2: {
               value: "Vector RAG",
               label: "Local LLM Engine",
          },
          techStack: ["Python", "LangChain", "Local LLMs", "Streamlit", "Vector DB", "RAG", "Privacy Engineering", "NLP"],
          image: "/projects/chatbot-offline.jpg",
          codeUrl: "https://github.com/jathuatreya/Customerservice-chatbot-offline",
     },
     {
          id: "laptop-car",
          title: "Laptop-Controlled IoT Robotics",
          category: "IoT & Robotics",
          role: "IoT Engineer · Embedded Hardware & Robotics",
          description:
               "A full-stack robotics project where a laptop remotely controls a physical motorized vehicle via custom serial command protocols, real-time wireless telemetry, and responsive motor driver circuitry.",
          highlight1: {
               value: "Real-Time",
               label: "Wireless Telemetry",
          },
          highlight2: {
               value: "Custom Serial",
               label: "Motor Control",
          },
          techStack: ["Python", "IoT", "Microcontrollers", "Motor Drivers", "Serial Protocol", "Hardware Integration", "Robotics"],
          image: "/projects/laptop-car.jpg",
          codeUrl: "https://github.com/jathuatreya",
     },
     {
          id: "auto-dj",
          title: "Auto DJ Cross Fade Engine",
          category: "Audio Engineering",
          role: "Python Developer · Audio Processing & DSP",
          description:
               "An automated audio mixing system that analyzes musical tempo, extracts BPM curves, and creates smooth, mathematically calibrated cross-fades between tracks for seamless broadcast and live playback.",
          highlight1: {
               value: "BPM Detect",
               label: "Audio Curves",
          },
          highlight2: {
               value: "DSP Engine",
               label: "Auto Mixing",
          },
          techStack: ["Python", "Audio Processing", "BPM Matching", "DSP", "Cross-Fade Curves", "NumPy", "Automation"],
          image: "/projects/auto-dj.jpg",
          codeUrl: "https://github.com/jathuatreya/auto_dj-_cross_fade",
     },
     {
          id: "ticket-booking",
          title: "Java Multithreading Ticket System",
          category: "Backend Engineering",
          role: "Backend Developer · High-Concurrency Java",
          description:
               "A high-concurrency ticket reservation engine engineered in Java using synchronized threads, lock management, dynamic ticket pool synchronization, and deadlock prevention algorithms under heavy load.",
          highlight1: {
               value: "Multi-Thread",
               label: "Lock Handling",
          },
          highlight2: {
               value: "Zero Deadlock",
               label: "Thread Pool",
          },
          techStack: ["Java", "Multithreading", "Concurrency Control", "Thread Synchronization", "Deadlock Prevention", "OOP"],
          image: "/projects/ticket-booking.jpg",
          codeUrl: "https://github.com/jathuatreya/java-multithreading-ticketbooking",
     },
     {
          id: "flight-booking",
          title: "Flight Seat Allocation Simulator",
          category: "Software Engineering",
          role: "Software Engineer · Object-Oriented Architecture",
          description:
               "An object-oriented Java flight reservation simulation implementing seat mapping matrices, real-time passenger assignment, class validations, and persistent reservation records.",
          highlight1: {
               value: "Seat Matrix",
               label: "Allocation Engine",
          },
          highlight2: {
               value: "OOP Design",
               label: "Clean Validation",
          },
          techStack: ["Java", "OOP", "Algorithm Simulation", "Data Structures", "Console UI", "File I/O"],
          image: "/projects/flight-booking.jpg",
          codeUrl: "https://github.com/jathuatreya/flight-seat-booking-in-Java-",
     },
     {
          id: "github-automation",
          title: "GitHub Profile Automation Extension",
          category: "DevTools & Extensions",
          role: "Frontend Developer · Chrome API & Automation",
          description:
               "A developer Chrome extension that automates GitHub profile customization with dynamic markdown template generation, live previewing, and automated repository synchronization.",
          highlight1: {
               value: "Chrome API",
               label: "Extension Core",
          },
          highlight2: {
               value: "Actions Sync",
               label: "Auto Markdown",
          },
          techStack: ["JavaScript", "Chrome Extensions API", "Markdown", "GitHub Actions", "Dynamic Templates", "DevTools"],
          image: "/projects/github-automation.jpg",
          codeUrl: "https://github.com/jathuatreya",
     },
     {
          id: "library-management",
          title: "Library Management System",
          category: "Full-Stack Web",
          role: "Full-Stack Developer · PHP & Relational Database",
          description:
               "A full-stack relational database management system built with PHP and MySQL featuring complete CRUD operations, book inventory tracking, student checkout logs, and administrative access control.",
          highlight1: {
               value: "Full CRUD",
               label: "Inventory Flow",
          },
          highlight2: {
               value: "MySQL Auth",
               label: "Access Control",
          },
          techStack: ["PHP", "MySQL", "Apache", "CRUD Operations", "Session Management", "HTML5 / CSS3", "Bootstrap"],
          image: "/projects/library-management.jpg",
          codeUrl: "https://github.com/jathuatreya/library-management_php",
     },
     {
          id: "marks-evaluation",
          title: "Academic Marks Analytics & Plotting",
          category: "Data Visualization",
          role: "Data Analyst · Python Visualization",
          description:
               "An automated educational analytics application that processes student performance data, computes statistical distributions, and renders visual comparative graphs using Python and Matplotlib.",
          highlight1: {
               value: "Statistical",
               label: "Performance Curve",
          },
          highlight2: {
               value: "Matplotlib",
               label: "Graph Generation",
          },
          techStack: ["Python", "Matplotlib", "Data Visualization", "NumPy", "Statistical Analysis", "CSV Processing"],
          image: "/projects/marks-evaluation.jpg",
          codeUrl: "https://github.com/jathuatreya/Marks-evaluation-with-graph-in-python",
     },
     {
          id: "mastermind-game",
          title: "Mastermind Algorithmic Logic Game",
          category: "Game Logic & Algorithms",
          role: "Python Developer · Algorithmic Logic",
          description:
               "A Python recreation of the classic Mastermind code-breaking strategy game incorporating algorithmic hint feedback, combinatorial guess validations, and an interactive command interface.",
          highlight1: {
               value: "Code-Break",
               label: "Combinatorics",
          },
          highlight2: {
               value: "Hint Engine",
               label: "Rule Feedback",
          },
          techStack: ["Python", "Game Logic", "Combinatorics", "Algorithms", "CLI Interface", "Code-Breaking"],
          image: "/projects/mastermind-game.jpg",
          codeUrl: "https://github.com/jathuatreya",
     },
     {
          id: "mcq-automation",
          title: "A/L MCQ Answers Extraction Pipeline",
          category: "Automation & Scripting",
          role: "Automation Engineer · Python Scripting",
          description:
               "A lightweight automated pipeline built in Python to extract, parse, categorize, and cross-reference multiple-choice question answer keys across large academic examination archives.",
          highlight1: {
               value: "Auto Parse",
               label: "Key Extraction",
          },
          highlight2: {
               value: "Bulk Regex",
               label: "Data Pipeline",
          },
          techStack: ["Python", "Web Scraping", "Data Extraction", "Regex", "File Automation", "Scripting"],
          image: "/projects/mcq-automation.jpg",
          codeUrl: "https://github.com/jathuatreya",
     },
];

export const projectCategories = [
     "All",
     "Enterprise POS & SaaS",
     "Healthcare & Web Systems",
     "Client Web & Portfolios",
     "Mobile App Development",
     "AI & Full-Stack",
     "AI & Machine Learning",
     "IoT & Robotics",
     "Backend Engineering",
     "DevTools & Extensions",
];
