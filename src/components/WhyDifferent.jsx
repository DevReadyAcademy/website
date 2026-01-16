import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Built by Engineers, Not Just Educators",
    description: "Our team consists of working engineers from top tech companies. We know what it takes to get hired because we live it every day."
  },
  {
    icon: Target,
    title: "Validated Through Real Research",
    description: "We didn't just guess what you need. We've interviewed 100+ aspiring developers in Greece and designed our program around your actual pain points."
  },
  {
    icon: CheckCircle,
    title: "Focus on One Thing: Getting You Hired",
    description: "Bridge the gap from 'I can code' to 'I got hired.' We teach what universities miss."
  },
  {
    icon: Lightbulb,
    title: "Structure + Community + Mentorship",
    description: "Structured path, industry mentorship, and peer community. No more random tutorials."
  }
];

const WhyDifferent = () => {
  return (
    <section id="why-different" className="pt-20 pb-8 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Why We're Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unfair advantage? We've walked the path you're trying to walk. 
            We know what works because we've done it—and we've validated it with real people like you.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg-colored transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default WhyDifferent;
