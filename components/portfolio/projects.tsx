'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Bus / Train Management System',
      description:
        'Designed and developed a comprehensive management system using C programming to simulate booking and operational workflows.',
      technologies: ['C', 'Structured Programming', 'Data Management'],
      learnings: [
        'Structured programming and control logic',
        'Data management and file handling',
        'System design and workflow implementation',
        'Problem-solving and debugging techniques',
      ],
      status: 'Completed',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Portfolio</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            Carefully crafted projects that demonstrate technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-muted rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:bg-primary/5"
            >
              {/* Header with Status */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-6 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8 pb-8 border-b border-border/50">
                <h4 className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-widest">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-background/50 text-foreground border border-border rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-widest">Key Learnings</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary text-sm font-bold">✓</span>
                      </div>
                      <span className="text-muted-foreground font-medium">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects Callout */}
        <div className="mt-16 p-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-semibold text-foreground">More Projects Coming Soon</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently building experience and completing more projects. Stay tuned for updates on new initiatives in web development, data structures, and software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
