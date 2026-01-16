import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Mentorship & Career Coaching",
    description: "Get personalized guidance from industry professionals who've been in your shoes and know what it takes to succeed.",
  },
  {
    icon: Award,
    title: "Branding",
    description: "Build a compelling professional brand that stands out to employers and showcases your unique value in the tech industry.",
  },
  {
    icon: Briefcase,
    title: "How to Work / Execute",
    description: "Learn the practical skills and work methodologies that tech companies actually use in their day-to-day operations.",
  },
  {
    icon: TrendingUp,
    title: "Expectations of Industry",
    description: "Understand what tech companies really look for and what it takes to thrive in a fast-paced professional environment.",
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            The 4 Non-Negotiable Pillars
          </h2>
          <p className="text-xl font-semibold text-foreground max-w-3xl mx-auto mb-3">
            These four pillars define what we believe in and how we prepare you for a successful career in tech.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No degree required. No shortcuts. Just the exact skills and mindset that top companies demand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-card-colored transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
