'use client';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Academic Background</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            Building a strong foundation in computer science with a focus on practical problem-solving and software engineering excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent"></div>

          {/* Education Item */}
          <div className="md:ml-16">
            {/* Timeline Dot */}
            <div className="hidden md:block absolute -left-4 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg"></div>

            {/* Content */}
            <div className="flex-1">
              <div className="group bg-muted rounded-3xl p-10 hover:shadow-2xl hover:bg-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-2xl text-primary font-light">Charusat University</p>
                    <p className="text-lg text-muted-foreground">Computer Science / Information Technology</p>
                  </div>
                  <span className="inline-block px-6 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                    Currently Pursuing
                  </span>
                </div>

                {/* Key Info */}
                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
                  <div>
                    <h4 className="font-serif font-semibold text-foreground mb-4 text-lg">Focus Areas</h4>
                    <ul className="space-y-3">
                      {['Programming & Algorithms', 'Data Structures', 'Software Development', 'Problem-Solving'].map((area) => (
                        <li key={area} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground mb-4 text-lg">Relevant Coursework</h4>
                    <ul className="space-y-3">
                      {['C & C++ Programming', 'Object-Oriented Programming', 'Database Management Systems', 'Web Development'].map((course) => (
                        <li key={course} className="flex items-center gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-10">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Consistent Participation', desc: 'Active engagement in technical coursework and lab sessions' },
              { title: 'Project-Based Learning', desc: 'Hands-on experience with real-world programming challenges' },
              { title: 'Continuous Growth', desc: 'Commitment to learning industry-relevant skills and technologies' },
            ].map((highlight) => (
              <div
                key={highlight.title}
                className="bg-muted rounded-2xl p-8 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">{highlight.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
