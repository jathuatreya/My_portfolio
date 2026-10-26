"use client";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import ProfileCtaBanner from './components/ProfileCtaBanner'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Teaching from './components/Teaching'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        <Navbar />

        <main className="pt-20">
          <Hero />
          <About />
          <Experience />
          <Education />
          <ProfileCtaBanner />
          <Skills />
          <Services />
          <Projects />
          <Pricing />
          <Teaching />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
  );
}