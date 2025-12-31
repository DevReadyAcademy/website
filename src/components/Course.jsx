import { Calendar, Compass, Code, Brain, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const modules = [
  {
    week: "Week 1-2",
    icon: Compass,
    title: "Plan Your Path",
    description: "Define your career goals and create a strategic roadmap for success in tech.",
  },
  {
    week: "Week 3-4",
    icon: Code,
    title: "Engineering Excellence",
    description: "Master technical skills and build projects that showcase your abilities.",
  },
  {
    week: "Week 5",
    icon: Brain,
    title: "AI & Emerging Tech",
    description: "Understand AI fundamentals and how to leverage them in your career.",
  },
  {
    week: "Week 6",
    icon: FileText,
    title: "CV, Branding & Interviews",
    description: "Craft your personal brand, optimize your CV, and ace technical interviews.",
  },
];

const Course = () => {
  return (
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Calendar className="inline-block w-4 h-4 mr-2" />
            6-Week Intensive Program
          </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
              TechPath Accelerator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive program designed to transform you from student to industry-ready professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {modules.map((module, index) => (
                <div
                    key={index}
                    className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <module.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {module.week}
                  </span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{module.title}</h3>
                      <p className="text-muted-foreground text-sm">{module.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 shadow-elegant animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground mb-1">Investment in your future</p>
                <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  €XXX
                </span>
                  <span className="text-muted-foreground">/program</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">
                    <Users className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Course;
