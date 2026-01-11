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
    id: "week-1",
    week: "Week 1",
    icon: Compass,
    title: "Plan Your Path",
    description:
        "Get clarity on your direction in tech and build a concrete, realistic plan to reach it.",
    details: [
      "Bootcamp onboarding, expectations & code of conduct",
      "Confidence check & goal setting",
      "Understanding frontend vs backend (real differences, no buzzwords)",
      "Choosing a direction and committing with confidence",
      "Breaking goals into actionable tasks",
      "Kanban methodology: TO DO → IN PROGRESS → DONE",
      "Using visual systems to reduce overwhelm and stay consistent",
    ],
  },
  {
    id: "week-2-4",
    week: "Weeks 2–4",
    icon: Code,
    title: "Engineering Foundations",
    description:
        "Build real engineering thinking and work on a real-world project aligned with industry standards.",
    details: [
      "Core data structures: arrays, lists, maps, sets, stacks, queues",
      "Essential operations: iteration, search, add/remove, reverse, deduplication",
      "Clean Code principles: readability, naming, small functions, no side effects",
      "How APIs work: requests, responses, status codes, CRUD operations",
      "Git fundamentals: tracking work, commits, basic workflows",
      "CI/CD basics: what pipelines are and why juniors must understand them",
      "Testing fundamentals: unit tests, test structure, and what interviewers expect",
      "Building a real-world project based on industry standards",
      "Publishing and iterating on your project using GitHub",
      "Learning how engineers reason, communicate, and structure work",
    ],
  },
  {
    id: "week-5",
    week: "Week 5",
    icon: Brain,
    title: "AI & Personal Branding",
    description:
        "Learn how to use AI responsibly and build a clear, credible professional presence.",
    details: [
      "How beginners misuse AI and why it slows long-term growth",
      "Using AI as a thinking partner, not a shortcut",
      "Prompting framework for learning, reasoning, and problem-solving",
      "Understanding how tech hiring actually works",
      "Writing strong CV bullet points using the XYZ method",
      "Creating an ATS-ready CV",
      "Aligning CV, LinkedIn, GitHub, and portfolio into one clear narrative",
    ],
  },
  {
    id: "week-6",
    week: "Week 6",
    icon: FileText,
    title: "Interviewing & Job Search Strategy",
    description:
        "Understand the full hiring process and prepare to perform confidently and realistically.",
    details: [
      "Complete interview pipeline overview",
      "Behavioural interviews and the STAR method",
      "Technical interviews: structured thinking and clear communication",
      "Pair programming expectations and collaboration mindset",
      "Home assignment best practices",
      "Job search strategy: where to apply and how to stay consistent",
      "Evaluating \'good\' vs \'bad\' companies",
      "Handling rejection and maintaining momentum",
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
            6-Week Intensive Program · April–May 2026
          </span>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive program designed to transform you to industry-ready professional.
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
