import { Blog } from "@/types";

export interface BlogPost extends Blog {
  content: string;
  sections: {
    heading: string;
    body: string;
    image?: string;
  }[];
  relatedTech: string[];
}

export const blogContent: Record<number, BlogPost> = {
  1: {
    id: 1,
    title: "Automating A/L MCQ Answers with Python",
    excerpt:
      "How I built a lightweight Python script to automatically extract, organize, and manage A/L MCQ answers for faster learning.",
    date: "Dec 2025",
    readTime: "6 min read",
    image: "/projects/mcq-automation.jpg",
    category: "Python Automation",
    slug: "automating-al-mcq-answers-with-python",
    content:
      "Preparing for A/L exams involves practicing hundreds of MCQ papers. Checking answers regarding big books is tedious. I decided to automate this using Python.",
    sections: [
      {
        heading: "The Challenge of Manual MCQ Checking",
        body: "Checking MCQ answers manually takes time and breaks the flow of study. In Sri Lanka, GCE A/L students often spend hours flipping through past paper books to verify their answers. I needed a way to instantly verify my inputs and keep track of my progress without technical overhead.",
      },
      {
        heading: "Building a Python Solution",
        body: "I built a Python script that reads a structured text file containing the answer keys. It then allows me to input my answers and instantly grades them, showing me which ones I got wrong and providing an overall score to track my performance over time.",
      },
      {
        heading: "Technical Implementation",
        body: "The project uses standard Python file I/O for simplicity and speed. I used dictionaries to map question numbers to correct answers for O(1) lookup time. The user interface is a distraction-free CLI, perfect for focused study sessions.",
      },
      {
        heading: "Education Technology in Sri Lanka",
        body: "This tool is a great example of how Python automation can solve localized education challenges in Sri Lanka. Future updates will include a web dashboard to track score history and identify weak subjects by category.",
      },
    ],
    relatedTech: ["Python", "Automation", "Education Tech"],
  },
  2: {
    id: 2,
    title: "Building an AI Job Application Assistant with Next.js & Flask",
    excerpt:
      "A breakdown of my AI-powered resume analyzer that detects skill gaps, matches job descriptions, and provides smart career suggestions.",
    date: "Dec 2025",
    readTime: "8 min read",
    image: "/projects/ai-job-assistant.jpg",
    category: "AI & Web Development",
    slug: "building-an-ai-job-application-assistant-with-nextjs-and-flask",
    content:
      "Job hunting is exhaustive. Tailoring resumes for every application is a full-time task. I built an AI assistant to do the heavy lifting of resume optimization.",
    sections: [
      {
        heading: "AI in Modern Recruitment",
        body: "Modern job hunting requires speed and precision. This application takes your resume (PDF) and a job description URL, uses Natural Language Processing (NLP) to extract key skills, and calculates a semantic matching score.",
      },
      {
        heading: "The Next.js & Flask Hybrid Tech Stack",
        body: "The frontend is powered by Next.js for a premium, responsive UI. The backend is a Flask server handling complex ML tasks. I integrated Spacy for keyword extraction and LLM APIs for generating personalized career advice and resume improvements.",
      },
      {
        heading: "Solving Complex PDF Parsing Challenges",
        body: "Parsing unstructured PDFs accurately is a significant technical hurdle. I experimented with various libraries before settling on a robust pipeline that handles complex resume layouts without losing metadata or formatting context.",
      },
    ],
    relatedTech: ["Next.js", "Flask", "Python", "NLP", "AI"],
  },
  3: {
    id: 3,
    title: "Designing a Java Flight Seat Booking Simulator",
    excerpt:
      "A beginner-friendly Java project demonstrating OOP concepts through a simple flight seat allocation system.",
    date: "Nov 2025",
    readTime: "5 min read",
    image: "/projects/flight-booking.jpg",
    category: "Java",
    slug: "designing-a-java-flight-seat-booking-simulator",
    content:
      "Understanding Object-Oriented Programming (OOP) is crucial for any aspiring software engineer. This project was my practical playground for mastering Classes, Objects, and Inheritance.",
    sections: [
      {
        heading: "Robust System Architecture",
        body: "The system models real-world entities like Flights, Passengers, and Seats. I utilized a 2D array data structure to represent the seating grid, and the logic ensures atomic reservations to prevent double-booking.",
      },
      {
        heading: "Mastering Core OOP Principles",
        body: "Encapsulation: Private data fields protected by accessors ensure data integrity. Inheritance: Created a base model for users to manage permissions. Polymorphism: Implemented dynamic menu systems that adapt to the logged-in user's role.",
      },
    ],
    relatedTech: ["Java", "OOP", "Software Design"],
  },
  4: {
    id: 4,
    title: "Creating a Hunger Eradication Awareness Website",
    excerpt:
      "The story behind building a clean, responsive web project that spreads awareness about global hunger.",
    date: "Oct 2025",
    readTime: "4 min read",
    image: "/projects/hunger-eradication.jpg",
    category: "Web Development",
    slug: "creating-a-hunger-eradication-awareness-website",
    content:
      "Global hunger is a pressing issue. I built this website to raise awareness and provide resources for those who want to help eradicate hunger in their local communities.",
    sections: [
      {
        heading: "A Purpose-Driven Design",
        body: "The design focuses on clear typography, emotional imagery, and accessible color contrast to ensure the message reaches the widest possible audience.",
      },
      {
        heading: "Responsive and Fast",
        body: "Built with modern web standards, the site ensures fast loading times even on slow connections, maximizing its global reach.",
      },
    ],
    relatedTech: ["HTML", "CSS", "JavaScript", "Web Development"],
  },
  5: {
    id: 5,
    title: "GitHub Profile Automation with Custom Chrome Extensions",
    excerpt:
      "How I automated my developer portfolio updates using Markdown templates, Chrome API, and GitHub Actions.",
    date: "Oct 2025",
    readTime: "6 min read",
    image: "/projects/github-automation.jpg",
    category: "Automation",
    slug: "github-profile-automation-with-custom-chrome-extensions",
    content:
      "A developer's GitHub profile is their most important resume. keeping mine updated with the latest projects and stats was a manual chore I had to automate.",
    sections: [
      {
        heading: "The Power of Automatic Portfolios",
        body: "Manual updates lead to outdated profiles. My custom Chrome extension tracks my coding activity across different platforms and pushes the metadata to a centralized automation server.",
      },
      {
        heading: "Integrating GitHub Actions for Real-Time Updates",
        body: "The real magic happens in the background. A GitHub Action workflow runs on a cron schedule, pulling data from my extension's backend and updating my main profile README.md with fresh stats and project highlights.",
      },
    ],
    relatedTech: ["JavaScript", "GitHub Actions", "Chrome Extensions"],
  },
  6: {
    id: 6,
    title: "Mastering Java Multithreading: High-Concurrency Ticket Systems",
    excerpt:
      "A deep dive into thread safety, synchronization, and avoiding race conditions in complex Java applications.",
    date: "Sep 2025",
    readTime: "7 min read",
    image: "/projects/ticket-booking.jpg",
    category: "Java",
    slug: "mastering-java-multithreading-high-concurrency-ticket-systems",
    content:
      "Multithreading is one of the most powerful yet dangerous features in Java. I built a simulation to master the art of thread synchronization.",
    sections: [
      {
        heading: "Simulating High-Traffic Scenarios",
        body: "The simulation involves multiple 'Customer' threads competing for a finite number of seats. This environment is designed to trigger race conditions, allowing me to test and implement robust safety mechanisms.",
      },
      {
        heading: "Synchronization Best Practices",
        body: "I implemented fine-grained locking and synchronized blocks to ensure atomicity. This project showcases how to prevent data corruption in high-concurrency environments while maintaining system performance.",
      },
    ],
    relatedTech: ["Java", "Multithreading", "Concurrency"],
  },
  7: {
    id: 7,
    title: "Python-Powered IoT: Controlling Physical Hardware via Laptop",
    excerpt:
      "Building a bridge between software and robotics using Python serial communication and Arduino motor control.",
    date: "Aug 2025",
    readTime: "5 min read",
    image: "/projects/laptop-car.jpg",
    category: "IoT",
    slug: "python-powered-iot-controlling-physical-hardware-via-laptop",
    content:
      "Moving from screen-based code to physical motion is a thrill. This project uses Python to control an Arduino-based robot car via Bluetooth.",
    sections: [
      {
        heading: "Robotics Hardware Architecture",
        body: "The car features an Arduino Uno brains, an L298N motor driver for power, and an HC-05 Bluetooth module for wireless instruction reception. It's a modular build designed for future upgrades.",
      },
      {
        heading: "The Python Control Interface",
        body: "The laptop-side script uses the `pySerial` library to capture real-time keyboard events and translate them into a custom protocol that the Arduino understands, enabling precise movement control.",
      },
    ],
    relatedTech: ["Python", "IoT", "Arduino", "Robotics"],
  },
  8: {
    id: 8,
    title: "Building Secure Full-Stack Systems with PHP & MySQL",
    excerpt:
      "A comprehensive look at developing CRUD applications with a focus on database normalization and SQL security.",
    date: "Jul 2025",
    readTime: "6 min read",
    image: "/projects/library-management.jpg",
    category: "PHP & MySQL",
    slug: "building-secure-full-stack-systems-with-php-and-mysql",
    content:
      "Modern web apps rely on solid data management. This project was my deep dive into the classic LAMP-style architecture for business tools.",
    sections: [
      {
        heading: "Relational Database Normalization",
        body: "I focused on creating a 3NF normalized MySQL database for a library system. This ensures referential integrity and optimizes query performance for searching thousands of student and book records.",
      },
      {
        heading: "Implementing Enterprise Security Standards",
        body: "Security is non-negotiable. I utilized PHP Data Objects (PDO) with prepared statements to mitigate SQL injection risks, alongside hashing for secure user authentication.",
      },
    ],
    relatedTech: ["PHP", "MySQL", "Database Security"],
  },
  9: {
    id: 9,
    title: "Data Visualization: Turning Academic Data into Insights",
    excerpt:
      "Using Python libraries like Matplotlib and Pandas to analyze and visualize student performance trends.",
    date: "Jun 2025",
    readTime: "4 min read",
    image: "/projects/marks-evaluation.jpg",
    category: "Data Science",
    slug: "data-visualization-turning-academic-data-into-insights",
    content:
      "In the age of information, raw numbers are not enough. This project focus on turning student marks into visual charts that teachers can actually act upon.",
    sections: [
      {
        heading: "Efficient Data Processing with Pandas",
        body: "The tool automates the ingestion of academic CSV files, performing statistical analysis to detect performance gaps and calculating class-wide metrics in seconds.",
      },
      {
        heading: "Impactful Visual Reports",
        body: "Using Matplotlib, I generatedgrade distribution histograms and performance scatter plots. These visualizations make it easy to see which subjects need more focus and which students are excelling.",
      },
    ],
    relatedTech: ["Python", "Pandas", "Matplotlib"],
  },
  10: {
    id: 10,
    title: "Algorithmic Thinking: Recreating the Mastermind Logic Game",
    excerpt:
      "Building a complex code-breaking logic engine and persistent user interface in the terminal.",
    date: "May 2025",
    readTime: "4 min read",
    image: "/projects/mastermind-game.jpg",
    category: "Game Dev",
    slug: "algorithmic-thinking-recreating-the-mastermind-logic-game",
    content:
      "Mastermind is the ultimate test of code-breaking. Implementing its ruleset in Python was a fascinating challenge in nested logic and state management.",
    sections: [
      {
        heading: "Designing the Feedback Engine",
        body: "The 'Black and White' peg logic is notoriously difficult to code efficiently. I developed an O(N) algorithm that accurately counts matches without overlap, ensuring a bug-free game experience.",
      },
      {
        heading: "Terminal UX & Interaction Design",
        body: "Even in the terminal, user experience matters. I implemented a color-coded CLI with clear instructions and turn history, making the game feel like a premium experience despite its text-based nature.",
      },
    ],
    relatedTech: ["Python", "Algorithms", "Game Logic"],
  },
  11: {
    id: 11,
    title: "Auto DJ Cross Fade: Automated Audio Mixing with Python",
    excerpt:
      "Automating professional track transitions using signal processing and logarithmic cross-fade curves.",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/projects/bulk-folder-creator.jpg",
    category: "Audio Engineering",
    slug: "auto-dj-cross-fade-automated-audio-mixing-with-python",
    content:
      "Creating smooth audio transitions is an art. I automated this process using Python to help creators mix tracks faster.",
    sections: [
      {
        heading: "Advanced Signal Processing",
        body: "Using Pydub and NumPy, I analyzed audio waves to find the perfect transition points. The script calculates logarithmic curves to ensure the volume blend feels natural to the human ear.",
      },
      {
        heading: "Streamlining the Creative Workflow",
        body: "Instead of manual editing, this tool allows users to batch-process tracks. It's a significant time-saver for podcasters and amateur DJs who want professional results without the high cost of entry.",
      },
    ],
    relatedTech: ["Python", "Pydub", "Audio Processing"],
  },
  12: {
    id: 12,
    title: "AI Offline: Privacy-First Customer Service Solutions",
    excerpt:
      "Developing secure, local AI models to handle sensitive customer inquiries without cloud dependency.",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "/projects/delete-empty-folders.jpg",
    category: "AI & Privacy",
    slug: "ai-offline-privacy-first-customer-service-solutions",
    content:
      "Privacy is the new gold standard in AI. I built a system that lets businesses use LLMs without ever sending data to the cloud.",
    sections: [
      {
        heading: "Deploying Local Large Language Models",
        body: "Using Ollama and customized weights, I deployed a high-performance LLM on local workstation hardware. This allows for high-speed inferences while keeping all data behind a firewall.",
      },
      {
        heading: "Retrieval-Augmented Generation (RAG)",
        body: "The chatbot utilizes a local vector database to search through internal company documents. This ensures the AI only speaks from approved facts, minimizing hallucinations and maximizing utility.",
      },
    ],
    relatedTech: ["Python", "LangChain", "Vector DB", "Privacy"],
  },
  13: {
    id: 13,
    title: "Building a Full-Featured POS Application",
    excerpt:
      "A deep dive into how I built a complete Point of Sale system with inventory management, billing, and real-time reporting.",
    date: "Apr 2026",
    readTime: "8 min read",
    image: "/projects/sam-pak-HjBcAVWlxnE-unsplash.jpg",
    category: "Full-Stack Development",
    slug: "building-a-full-featured-pos-application",
    content:
      "A POS system is the backbone of any retail or service business. I built a full-featured POS application that handles everything from product management to real-time sales reporting.",
    sections: [
      {
        heading: "Core POS Features",
        body: "The system includes a barcode scanner integration, product catalog management, customer records, and an intuitive billing interface. Built with React for the frontend and Node.js + PostgreSQL for the backend, it handles high transaction volumes with ease.",
      },
      {
        heading: "Inventory & Reporting",
        body: "I integrated real-time inventory tracking that automatically deducts stock on each sale and triggers low-stock alerts. The dashboard provides daily, weekly, and monthly sales reports with visual charts powered by Firebase for live data sync.",
      },
    ],
    relatedTech: ["React", "Node.js", "PostgreSQL", "Firebase", "Firestore"],
  },
  14: {
    id: 14,
    title: "Designing a Corporate Company Website from Scratch",
    excerpt:
      "How I planned, designed, and launched a professional corporate website with SEO, performance, and modern aesthetics.",
    date: "May 2026",
    readTime: "6 min read",
    image: "/projects/github-automation.jpg",
    category: "Web Development",
    slug: "designing-a-corporate-company-website-from-scratch",
    content:
      "Corporate websites are more than a digital brochure — they are a brand statement. I walk through my end-to-end process for designing and launching a professional company website.",
    sections: [
      {
        heading: "Planning & Design System",
        body: "The project started with a brand discovery session to understand the company's values. I created a consistent design system with a curated color palette, typography, and reusable UI components, ensuring a polished and professional look across all pages.",
      },
      {
        heading: "Performance & SEO",
        body: "Using Next.js with server-side rendering, the site achieves near-perfect Lighthouse scores. I implemented JSON-LD structured data, dynamic sitemaps, and Open Graph tags to maximize search engine visibility and social media sharing.",
      },
    ],
    relatedTech: ["Next.js", "Tailwind CSS", "SEO", "Vercel"],
  },
  15: {
    id: 15,
    title: "Creating a Stunning Developer Portfolio Website",
    excerpt:
      "A step-by-step guide on building a high-impact developer portfolio with Next.js, animations, and SEO best practices.",
    date: "Jun 2026",
    readTime: "7 min read",
    image: "/projects/mastermind-game.jpg",
    category: "Web Development",
    slug: "creating-a-stunning-developer-portfolio-website",
    content:
      "Your portfolio is your most powerful career tool. I share the lessons learned from building my own developer portfolio — from design decisions to technical implementation.",
    sections: [
      {
        heading: "Design Philosophy",
        body: "A great portfolio balances personality with professionalism. I chose a dark-mode aesthetic with glassmorphism elements and smooth micro-animations to create a premium feel. Every section is crafted to tell a story — not just list skills.",
      },
      {
        heading: "Technical Stack & SEO",
        body: "Built with Next.js 14, TypeScript, and Tailwind CSS, the portfolio is fully server-side rendered for maximum SEO performance. I implemented structured data, a dynamic sitemap, and multi-language support to reach a global audience.",
      },
    ],
    relatedTech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
};
