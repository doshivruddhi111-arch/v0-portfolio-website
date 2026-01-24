'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from '@/components/portfolio/hero';
import About from '@/components/portfolio/about';
import Skills from '@/components/portfolio/skills';
import Projects from '@/components/portfolio/projects';
import Education from '@/components/portfolio/education';
import Achievements from '@/components/portfolio/achievements';
import Contact from '@/components/portfolio/contact';
import Navigation from '@/components/portfolio/navigation';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <Hero setMobileMenuOpen={setMobileMenuOpen} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Achievements Section */}
      <Achievements />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Vruddhi Snehalkumar Doshi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="mailto:25dit015@charusat.edu.in" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
