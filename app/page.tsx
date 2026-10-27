import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import SectionNavigator from './components/SectionNavigator'
import Hero from './components/Hero'
import About from './components/About'

// Lazy load below-the-fold components to minimize initial JS bundle & TBT on mobile
const Experience = dynamic(() => import('./components/Experience'))
const Education = dynamic(() => import('./components/Education'))
const ProfileCtaBanner = dynamic(() => import('./components/ProfileCtaBanner'))
const Skills = dynamic(() => import('./components/Skills'))
const Services = dynamic(() => import('./components/Services'))
const Projects = dynamic(() => import('./components/Projects'))
const Pricing = dynamic(() => import('./components/Pricing'))
const Teaching = dynamic(() => import('./components/Teaching'))
const Testimonials = dynamic(() => import('./components/Testimonials'))
const Contact = dynamic(() => import('./components/Contact'))
const Footer = dynamic(() => import('./components/Footer'))

export default function Home() {
  return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        <Navbar />
        <SectionNavigator />

        <main>
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