'use client';

export default function Achievements() {
  const achievements = [
    {
      title: 'C Programming Projects',
      description: 'Successfully completed multiple academic projects demonstrating strong programming fundamentals',
    },
    {
      title: 'Lab Proficiency',
      description: 'Consistent participation and performance in technical laboratory sessions and coursework',
    },
    {
      title: 'Team Collaboration',
      description: 'Active participation in group projects, team presentations, and collaborative assignments',
    },
  ];

  const activities = [
    {
      category: 'Co-curricular',
      items: ['College-level technical activities', 'Academic seminars and workshops', 'Coding competitions'],
    },
    {
      category: 'Extra-curricular',
      items: ['Team-based assignments', 'Technical presentations', 'Peer learning sessions'],
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Recognition</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Achievements & Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            A collection of accomplishments and active involvement in both academic and professional pursuits.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-10">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-muted rounded-2xl p-8 hover:shadow-2xl hover:bg-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <span className="text-xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-10">Co-curricular & Extra-curricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative bg-muted rounded-3xl p-10 border border-border/50 hover:shadow-lg transition-all duration-300 hover:bg-primary/5"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent rounded-l-3xl"></div>
                <h4 className="text-2xl font-serif font-semibold text-foreground mb-6 pl-4">{activity.category}</h4>
                <ul className="space-y-4 pl-4">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-4">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Mindset CTA */}
        <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-semibold text-foreground mb-4">Growth Mindset</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Adaptable to dynamic work environments with a strong willingness to learn new technologies. Always seeking opportunities to expand knowledge and contribute meaningfully to team success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
