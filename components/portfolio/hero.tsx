'use client';

import { ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Hero({ setMobileMenuOpen }: HeroProps) {
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 md:pt-32 md:pb-40 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 text-primary">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-32 left-10 opacity-15 text-primary">
        <div className="w-1 h-1 bg-primary rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left space-y-8 order-2 md:order-1">
            {/* Tagline */}
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Software Engineer & Developer
            </p>

            {/* Name and Role */}
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                Vruddhi Snehalkumar Doshi
              </h1>
              <p className="text-xl md:text-2xl text-primary font-light">
                B.Tech Student | Aspiring Software Engineer
              </p>
            </div>

            {/* Summary */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Detail-oriented and motivated student at Charusat University with a strong foundation in programming and logical problem-solving. Passionate about building elegant solutions and continuously enhancing technical expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent text-foreground border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-sm">
              {/* Circular image container with soft shadow */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <Image
                  src="/profile.png"
                  alt="Vruddhi Snehalkumar Doshi"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
