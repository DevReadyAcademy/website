import { Calendar, Compass, Code, Brain, FileText, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "week-1-2",
    week: "Week 1-2",
    icon: Compass,
    title: "Plan Your Path",
    description: "Define your career goals and create a strategic roadmap for success in tech.",
    details: [
      "Self-assessment: Discover your strengths, interests, and ideal career direction",
      "Industry overview: Explore different tech roles and career paths",
      "Goal setting: Define clear, actionable short-term and long-term career goals",
      "Strategic planning: Create your personalized roadmap with milestones",
      "Networking foundations: Learn how to build meaningful professional connections",
    ],
  },
  {
    id: "week-3-4",
    week: "Week 3-4",
    icon: Code,
    title: "Engineering Excellence",
    description: "Master technical skills and build projects that showcase your abilities.",
    details: [
      "Technical fundamentals: Review core engineering principles and best practices",
      "Project architecture: Learn how to structure and plan real-world projects",
      "Hands-on building: Create portfolio-worthy projects with guidance",
      "Code review sessions: Get feedback from experienced engineers",
      "Version control & collaboration: Master Git workflows and team practices",
    ],
  },
  {
    id: "week-5",
    week: "Week 5",
    icon: Brain,
    title: "AI & Emerging Tech",
    description: "Understand AI fundamentals and how to leverage them in your career.",
    details: [
      "AI fundamentals: Understand machine learning concepts and applications",
      "Practical AI tools: Learn to use AI assistants effectively in your workflow",
      "Emerging technologies: Explore cloud, DevOps, and modern tech stacks",
      "Future-proofing: Strategies for staying relevant in a rapidly evolving industry",
      "Building AI-powered projects: Integrate AI capabilities into your portfolio",
    ],
  },
  {
    id: "week-6",
    week: "Week 6",
    icon: FileText,
    title: "CV, Branding & Interviews",
    description: "Craft your personal brand, optimize your CV, and ace technical interviews.",
    details: [
      "CV optimization: Create an ATS-friendly resume that stands out",
      "LinkedIn mastery: Build a compelling professional online presence",
      "Personal branding: Define and communicate your unique value proposition",
      "Interview preparation: Practice common technical and behavioral questions",
      "Mock interviews: Real interview simulations with detailed feedback",
      "Negotiation skills: Learn how to negotiate offers confidently",
    ],
  },
];

const Course = () => {
  return (
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
               Accelerator
            </h2>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Calendar className="inline-block w-4 h-4 mr-2" />
            6-Week Intensive Program
          </span>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive program designed to transform you from student to industry-ready professional.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {modules.map((module, index) => (
                <AccordionItem
                    key={module.id}
                    value={module.id}
                    className="group rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300 animate-fade-in px-6"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <module.icon className="w-6 h-6" />
                      </div>
                      <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider block">
                      {module.week}
                    </span>
                        <h3 className="text-xl font-semibold mt-1">{module.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{module.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-[76px]">
                      <h4 className="font-medium text-foreground mb-4">What you'll learn:</h4>
                      <ul className="space-y-3">
                        {module.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 shadow-elegant animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground mb-1">Investment in your future</p>
                <div className="flex items-baseline gap-2">
              <span className="text-2xl text-muted-foreground line-through">
                  €350
                </span>
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  €250
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
