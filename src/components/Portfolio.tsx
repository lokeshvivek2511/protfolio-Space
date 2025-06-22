import { useEffect } from 'react';
import Navigation from './ui/Navigation';
import BackToTop from './ui/BackToTop';
import UniverseBackground from './ui/UniverseBackground';
import FloatingElements from './ui/FloatingElements';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function Portfolio() {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="text-white min-h-screen relative">
      <UniverseBackground />
      <FloatingElements />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="bg-black/40 backdrop-blur-sm py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">
              <span className="font-mono">&lt;LV/&gt;</span>
            </div>
            <p className="text-gray-400 mb-6">
              Built with passion using React, Vite, and lots of coffee ☕
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/lokeshvivek2511" 
                className="text-gray-400 hover:text-electric-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/lokeshwaran-v-680827257" 
                className="text-gray-400 hover:text-electric-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://leetcode.com/u/Lokeshwaran_V/" 
                className="text-gray-400 hover:text-electric-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code text-xl"></i>
              </a>
              <a 
                href="mailto:lokeshvlw2004@gmail.com" 
                className="text-gray-400 hover:text-electric-blue transition-colors"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 Lokeshwaran V. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
