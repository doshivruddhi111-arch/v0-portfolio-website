'use client';

export default function Skills() {
  const technicalSkills = [
    { name: 'C', level: 'Intermediate' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Microsoft Excel', level: 'Proficient' },
    { name: 'Microsoft PowerPoint', level: 'Proficient' },
  ];

  const professionalSkills = [
    'Effective Communication',
    'Team Collaboration',
    'Quick Learning Ability',
    'Analytical & Problem-Solving',
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            A comprehensive blend of technical proficiency and soft skills developed through academic excellence and practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-foreground text-lg">{skill.name}</h4>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-500 group-hover:shadow-lg"
                      style={{
                        width: skill.level === 'Intermediate' ? '65%' : '80%',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">Professional Skills</h3>
            <div className="grid grid-cols-1 gap-4">
              {professionalSkills.map((skill, idx) => (
                <div
                  key={skill}
                  className="bg-muted p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-primary/5 border border-border/50 hover:border-primary/30"
                >
                  <p className="text-foreground font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { lang: 'English', proficiency: 'Professional Proficiency' },
              { lang: 'Hindi', proficiency: 'Fluent' },
              { lang: 'Gujarati', proficiency: 'Native' },
            ].map((item) => (
              <div
                key={item.lang}
                className="bg-muted p-8 rounded-3xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <p className="text-2xl font-serif font-semibold text-foreground mb-2">{item.lang}</p>
                <p className="text-muted-foreground text-sm">{item.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
