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
          excerpt: "How I built a lightweight Python script to automatically extract, organize, and manage A/L MCQ answers for faster learning.",
          date: "Dec 2025",
          readTime: "6 min read",
          image: "/projects/mcq-automation.jpg",
          category: "Python Automation",
          content: "Preparing for A/L exams involves practicing hundreds of MCQ papers. Checking answers regarding big books is tedious. I decided to automate this using Python.",
          sections: [
               {
                    heading: "The Problem",
                    body: "Checking MCQ answers manually takes time and breaks the flow of study. I needed a way to instantly verify my answers and keep track of my progress without flipping through pages of answer keys."
               },
               {
                    heading: "The Solution",
                    body: "I built a Python script that reads a structured text file containing the answer keys. It then allows me to input my answers and instantly grades them, showing me which ones I got wrong."
               },
               {
                    heading: "Technical Details",
                    body: "The project uses standard Python file I/O. I used dictionaries to map question numbers to correct answers for O(1) lookup time. The user interface is a simple CLI that is fast and distraction-free."
               },
               {
                    heading: "Future Improvements",
                    body: "I plan to add a GUI using Tkinter or build a small web interface using Flask so I can use it on my phone."
               }
          ],
          relatedTech: ["Python", "File I/O", "CLI"]
     },
     2: {
          id: 2,
          title: "Building an AI Job Application Assistant with Next.js & Flask",
          excerpt: "A breakdown of my AI-powered resume analyzer that detects skill gaps, matches job descriptions, and provides smart career suggestions.",
          date: "Dec 2025",
          readTime: "8 min read",
          image: "/projects/ai-job-assistant.jpg",
          category: "AI & Web Development",
          content: "Job hunting is exhaustive. Tailoring resumes for every application is a full-time job. I built an AI assistant to do the heavy lifting.",
          sections: [
               {
                    heading: "Core Features",
                    body: "The app takes your resume (PDF) and a job description URL. It uses NLP to extract keywords from both and calculates a matching score. It then suggests specific keywords you are missing."
               },
               {
                    heading: "Tech Stack",
                    body: "The frontend is Next.js for a snappy UI. The backend is Flask, serving the ML models. I used Spacy for initial keyword extraction and then integrated a commercially available LLM API for the career advice generation."
               },
               {
                    heading: "Challenges",
                    body: "Parsing PDFs accurately is surprisingly hard. I had to experiment with several libraries like PyPDF2 and PDFMiner before settling on a solution that handled format inconsistencies well."
               }
          ],
          relatedTech: ["Next.js", "Flask", "Python", "NLP", "Spacy"]
     },
     3: {
          id: 3,
          title: "Designing a Java Flight Seat Booking Simulator",
          excerpt: "A beginner-friendly Java project demonstrating OOP concepts through a simple flight seat allocation system.",
          date: "Nov 2025",
          readTime: "5 min read",
          image: "/projects/flight-booking.jpg",
          category: "Java",
          content: "Understanding Object-Oriented Programming (OOP) is crucial for any developer. This project was my playground for learning Classes, Objects, and Inheritance.",
          sections: [
               {
                    heading: "System Design",
                    body: "The system models a Flight, Passengers, and Seats. I used a 2D array to represent the seating grid of the plane. The logic handles checking availability and reserving specific seats."
               },
               {
                    heading: "OOP Principles Used",
                    body: "Encapsulation: All data fields are private with getters/setters.\nInheritance: created a base class 'User' for both 'Passenger' and 'Admin'.\nPolymorphism: Different user types see different menus."
               }
          ],
          relatedTech: ["Java", "OOP", "Console UI"]
     },
     4: {
          id: 4,
          title: "Creating a Hunger Eradication Awareness Website",
          excerpt: "The story behind building a clean, responsive web project that spreads awareness about global hunger.",
          date: "Oct 2025",
          readTime: "4 min read",
          image: "/projects/hunger-eradication.jpg",
          category: "Web Development",
          content: "Technology should serve humanity. This project was about using my web dev skills to shed light on a global crisis.",
          sections: [
               {
                    heading: "Design Philosophy",
                    body: "The design needed to be impactful but respectful. I chose a color palette that evokes urgency but also hope. The layout is clean, focusing heavily on imagery and statistics."
               },
               {
                    heading: "Responsiveness",
                    body: "Using CSS Grid and Flexbox, I ensured the site looks good on any device. Accessibility was a priority, ensuring high contrast and screen-reader friendliness."
               }
          ],
          relatedTech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
     },
     5: {
          id: 5,
          title: "Building a GitHub Profile Automation Chrome Extension",
          excerpt: "A behind-the-scenes look at how I automated GitHub profile updates using Markdown templates and GitHub Actions.",
          date: "Oct 2025",
          readTime: "6 min read",
          image: "/projects/github-automation.jpg",
          category: "Automation & DevTools",
          content: "Your GitHub profile is your developer portfolio. keeping it fresh with latest projects and stats can be automated.",
          sections: [
               {
                    heading: "How it Works",
                    body: "The extension hooks into your browser to grab your latest activity. It then formats this into a Markdown snippet."
               },
               {
                    heading: "GitHub Actions Integration",
                    body: "The real magic happens with a GitHub Action workflow that runs every night, fetching the latest data and committing it to the README of my special repository."
               }
          ],
          relatedTech: ["Chrome Extensions", "JavaScript", "GitHub Actions", "YAML"]
     },
     6: {
          id: 6,
          title: "Mastering Java Multithreading with a Ticket Booking System",
          excerpt: "How I used threads, synchronization, and shared resources in Java to simulate real-world ticket booking.",
          date: "Sep 2025",
          readTime: "7 min read",
          image: "/projects/ticket-booking.jpg",
          category: "Java Multithreading",
          content: "Concurrency is tricky. Race conditions are real. I built this simulation to really understand `synchronized` blocks and thread safety.",
          sections: [
               {
                    heading: "The Simulation",
                    body: "Multiple 'Customer' threads try to book tickets from a single 'TicketCounter' object simultaneously. Without synchronization, two customers could book the last seat."
               },
               {
                    heading: "Key Concepts",
                    body: "I implemented `Runnable` interfaces for the agents. I used the `synchronized` keyword to ensure that the booking method is atomic—only one thread can execute it at a time."
               }
          ],
          relatedTech: ["Java", "Multithreading", "Concurrency"]
     },
     7: {
          id: 7,
          title: "Building a Laptop-Controlled IoT Car with Python",
          excerpt: "A fun robotics project where a laptop controls a robot car using Python and custom commands.",
          date: "Aug 2025",
          readTime: "5 min read",
          image: "/projects/laptop-car.jpg",
          category: "IoT & Robotics",
          content: "Bridging the physical and digital world. This project uses Python to send control signals to an Arduino-based robot car.",
          sections: [
               {
                    heading: "The Hardware",
                    body: "I used an Arduino Uno, an L298N motor driver, and a chassis with 4 DC motors. A Bluetooth module (HC-05) handles the wireless communication."
               },
               {
                    heading: "The Software",
                    body: "On the laptop, a Python script captures keyboard inputs (WASD) and sends serial data via Bluetooth. On the Arduino, a C++ sketch reads these characters and drives the motors."
               }
          ],
          relatedTech: ["Python", "Arduino", "Serial Communication", "Hardware"]
     },
     8: {
          id: 8,
          title: "Creating a PHP Library Management System",
          excerpt: "A full CRUD web application built with PHP and MySQL for managing library books, members, and borrowing records.",
          date: "Jul 2025",
          readTime: "6 min read",
          image: "/projects/library-management.jpg",
          category: "PHP & MySQL",
          content: "Databases are the backbone of most apps. This project was a deep dive into Relational Database Management Systems (RDBMS).",
          sections: [
               {
                    heading: "Database Schema",
                    body: "I designed a normalized schema with tables for Books, Members, and Loans. Foreign keys enforce referential integrity."
               },
               {
                    heading: "Backend Logic",
                    body: "Vanilla PHP handles the form submissions. I used PDO (PHP Data Objects) for database connections to prevent SQL injection attacks."
               }
          ],
          relatedTech: ["PHP", "MySQL", "SQL", "Database Design"]
     },
     9: {
          id: 9,
          title: "Visualizing Student Marks with Python & Matplotlib",
          excerpt: "A simple marks evaluation tool that turns student scores into meaningful graphs and insights.",
          date: "Jun 2025",
          readTime: "4 min read",
          image: "/projects/marks-evaluation.jpg",
          category: "Data Visualization",
          content: "Data is useless without visualization. This tool helps teachers quickly understand class performance.",
          sections: [
               {
                    heading: "Features",
                    body: "Input a CSV of student marks. The script generates histograms of score distribution, bar charts for individual performance, and pie charts for pass/fail ratios."
               },
               {
                    heading: "Libraries",
                    body: "Pandas is used for data manipulation, and Matplotlib provides the plotting capabilities. It produces high-quality PNGs ready for reports."
               }
          ],
          relatedTech: ["Python", "Pandas", "Matplotlib", "Data Analysis"]
     },
     10: {
          id: 10,
          title: "Recreating the Classic Mastermind Game in Python",
          excerpt: "A fun Python project where I built the classic Mastermind code-breaking game from scratch.",
          date: "May 2025",
          readTime: "4 min read",
          image: "/projects/mastermind-game.jpg",
          category: "Python Games",
          content: "Logic games are great for exercising programming skills. Mastermind requires handling loops, conditionals, and user input validation robustly.",
          sections: [
               {
                    heading: "Game Logic",
                    body: "The computer generates a random 4-color code. The player guesses. The program returns feedback: 'Black' peg for correct color & place, 'White' peg for correct color but wrong place."
               },
               {
                    heading: "Implementation",
                    body: "I used Python's `random` module. The core difficulty was writing the algorithm to correctly calculate the white/black pegs without double-counting."
               }
          ],
          relatedTech: ["Python", "Game Logic", "Algorithms"]
     }
};
