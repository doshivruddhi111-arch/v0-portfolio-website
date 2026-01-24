'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Background</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            A passionate B.Tech student dedicated to building elegant solutions through code and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Professional Summary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a B.Tech student at Charusat University with a genuine passion for software development and problem-solving. With a strong foundation in programming fundamentals and an analytical mindset, I am eager to apply theoretical knowledge to create real-world solutions that make an impact.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Career Objective</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seeking meaningful internship or entry-level opportunities where I can leverage my technical expertise, gain practical industry exposure, and collaborate with experienced professionals to translate academic knowledge into impactful professional excellence.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="group bg-muted rounded-3xl p-8 hover:shadow-lg hover:bg-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Location & Availability</h3>
              <div className="space-y-3">
                <p className="text-lg text-muted-foreground font-medium">Nadiad, Gujarat, India</p>
                <p className="text-muted-foreground">Open to relocation for suitable professional opportunities and growth.</p>
              </div>
            </div>

            <div className="bg-muted rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Professional Qualities</h3>
              <ul className="space-y-4">
                {['Effective Communication', 'Team Collaboration', 'Quick Learning Ability', 'Analytical & Problem-Solving Skills'].map((quality) => (
                  <li key={quality} className="flex items-center gap-4">
                    <span className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-muted-foreground font-medium">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
