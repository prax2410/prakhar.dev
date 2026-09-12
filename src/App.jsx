import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsShowcase from './components/ProjectsShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import ParallaxBanner from './components/ParallaxBanner';
import SkillMatrix from './components/SkillMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300 font-sans">
        <Navbar />
        <main>
          <Hero />
          <ProjectsShowcase />
          <ExperienceTimeline />
          <ParallaxBanner />
          <SkillMatrix />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
