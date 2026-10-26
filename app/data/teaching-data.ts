// --------------------------------------
// 🎓 TEACHING & MENTORSHIP PROGRAMS DATA
// --------------------------------------

export interface TeachingProgram {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  iconName: string;
  badge: string;
  description: string;
  topics: string[];
}

export const teachingStats = [
  { value: "10+", label: "Students Mentored", highlight: "Active Learners" },
  { value: "10", label: "Programs Taught", highlight: "Full Spectrum" },
  { value: "100%", label: "Practical Projects", highlight: "Hands-on Focus" },
  { value: "1-on-1", label: "Direct Mentorship", highlight: "Personalized Pace" },
];

export const teachingPrograms: TeachingProgram[] = [
  {
    id: "python",
    number: "01",
    title: "Python",
    shortTitle: "Python Programming",
    category: "Core Programming & Logic",
    iconName: "Python",
    badge: "Most Popular",
    description: "Core syntax, data structures, object-oriented programming (OOP), file operations, and practical automation scripts.",
    topics: ["Syntax & Control Flow", "OOP & Custom Classes", "File Handling & Modules", "Automation & Mini-Projects"],
  },
  {
    id: "java",
    number: "02",
    title: "Java",
    shortTitle: "Java OOP",
    category: "Object-Oriented Programming",
    iconName: "Java",
    badge: "CS Foundation",
    description: "Robust OOP concepts, classes, inheritance, polymorphism, Java collections framework, and algorithmic problem-solving.",
    topics: ["OOP Principles", "Collections Framework", "Exception Handling", "Data Structures Basics"],
  },
  {
    id: "javascript-typescript",
    number: "03",
    title: "JavaScript & TypeScript",
    shortTitle: "JS & TypeScript",
    category: "Modern Web Logic",
    iconName: "TypeScript",
    badge: "Web Essential",
    description: "Modern ES6+ syntax, asynchronous programming (Promises & async/await), DOM manipulation, and strong type safety.",
    topics: ["ES6+ Syntax & Methods", "Async/Await & Fetch API", "DOM & Event Listeners", "TypeScript Strict Types"],
  },
  {
    id: "sql",
    number: "04",
    title: "SQL (MySQL / PostgreSQL)",
    shortTitle: "SQL Databases",
    category: "Relational Databases",
    iconName: "PostgreSQL",
    badge: "Database Core",
    description: "Relational database design, table relationships, complex multi-table JOINs, indexing, and data integrity constraints.",
    topics: ["Database & Schema Design", "Complex SELECT & JOINs", "Data Constraints & Keys", "Aggregate Functions"],
  },
  {
    id: "nosql",
    number: "05",
    title: "NoSQL (MongoDB & Firebase)",
    shortTitle: "NoSQL & Cloud DB",
    category: "Cloud & Document Stores",
    iconName: "MongoDB",
    badge: "Modern Backend",
    description: "BSON/JSON document architecture, collection schemas, real-time Firebase syncing, and cloud query pipelines.",
    topics: ["Document Data Modeling", "MongoDB CRUD & Filters", "Firebase Realtime DB", "Cloud Firestore Rules"],
  },
  {
    id: "html-css",
    number: "06",
    title: "HTML and CSS",
    shortTitle: "HTML5 & CSS3",
    category: "Frontend UI Foundations",
    iconName: "HTML5",
    badge: "UI Foundation",
    description: "Semantic HTML5 structure, responsive layout design using Flexbox and CSS Grid, and modern aesthetic styling.",
    topics: ["Semantic HTML5 Markup", "CSS Flexbox & Grid", "Media Queries & Responsive", "Modern Transitions & Shadows"],
  },
  {
    id: "nextjs-react",
    number: "07",
    title: "Next.js with React",
    shortTitle: "Next.js & React",
    category: "Modern Full-Stack",
    iconName: "Next.js",
    badge: "Flagship Stack",
    description: "Component lifecycles, React hooks (useState, useEffect), Next.js App Router, server-side rendering, and API routes.",
    topics: ["React Hooks & Components", "Next.js App Router", "Server & Client Components", "Production Deployment"],
  },
  {
    id: "arduino-robotics",
    number: "08",
    title: "Arduino, Robotics & IoT (Basics)",
    shortTitle: "Arduino & Robotics",
    category: "Embedded & Hardware",
    iconName: "Robotics",
    badge: "Hardware & IoT",
    description: "Microcontroller circuit wiring, ultrasonic distance sensors, servo & DC motor actuation, and smart hardware automation.",
    topics: ["Microcontroller Basics", "Breadboard & Circuit Wiring", "Sensors & Motor Control", "Robotics Mini-Projects"],
  },
  {
    id: "basics-computer",
    number: "09",
    title: "Basics of Computer",
    shortTitle: "Computer Fundamentals",
    category: "Foundational CS & IT",
    iconName: "Computer",
    badge: "Beginner Friendly",
    description: "Computer hardware components, operating systems, file hierarchy, command line terminal navigation, and digital literacy.",
    topics: ["Hardware & CPU Architecture", "OS & File Management", "Command Line & Terminal", "Internet & Network Basics"],
  },
  {
    id: "git-github",
    number: "10",
    title: "Git & GitHub",
    shortTitle: "Version Control",
    category: "DevOps & Collaboration",
    iconName: "Git & GitHub",
    badge: "Industry Standard",
    description: "Version control workflows, commit tracking, branching strategies, resolving merge conflicts, and GitHub collaboration.",
    topics: ["Git Commits & Rollbacks", "Branching & Merging", "Pull Requests & Reviews", "Remote Repositories"],
  },
];
