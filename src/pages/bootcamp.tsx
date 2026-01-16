import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle, Users, Clock, Target, BookOpen, Code, Brain, FileText, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
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
      "Understanding what the industry actually wants from junior engineers",
      "Building a personalized plan based on the necessary skills for your target tech role",
      "Getting guidance to navigate the maze of engineering without feeling lost",
      "Reviewing and refining your plan based on your specific career goals",
      "Kanban methodology: a critical skill for tech companies and project management",
      "Breaking goals into actionable tasks: TO DO → IN PROGRESS → DONE",
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
      "Git fundamentals: tracking work, commits, branching, and basic workflows",
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
      "Using AI for debugging: asking the right questions and interpreting responses",
      "When NOT to use AI: scenarios where manual problem-solving is essential for growth",
      "Understanding how tech hiring actually works",
      "Writing strong CV bullet points using the XYZ method",
      "Creating an ATS-ready CV that passes automated screening",
      "GitHub profile optimization: README, pinned repos, and contribution consistency",
      "Building a portfolio website that tells your story effectively",
      "LinkedIn optimization: headline, about section, and professional networking",
      "Aligning CV, LinkedIn, GitHub, and portfolio into one clear narrative",
      "What NOT to do: common personal branding mistakes that hurt your credibility",
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
      "Complete interview pipeline overview: from application to offer",
      "Behavioural interviews and the STAR method for answering effectively",
      "Technical interviews: structured thinking and clear communication",
      "Interview dos: what dramatically increases your success rate",
      "Interview don'ts: common mistakes that cost you the job",
      "How to communicate in interviews: tone, pace, and clarity that hiring managers value",
      "Asking smart questions that demonstrate genuine interest and research",
      "Pair programming expectations and collaboration mindset",
      "Home assignment best practices: showcasing your skills effectively",
      "Job search strategy: where to apply and how to stay consistent",
      "Evaluating 'good' vs 'bad' companies",
      "Handling rejection and maintaining momentum",
    ],
  },
];

const benefits = [
  {
    icon: Target,
    title: "Real Engineering Skills",
    description: "Learn data structures, clean code, Git, APIs, testing—not just syntax.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    description: "Work with engineers from top tech companies who know what hiring managers look for.",
  },
  {
    icon: BookOpen,
    title: "Job Search Ready",
    description: "Build an ATS-ready CV, optimize your LinkedIn, and master the interview process.",
  },
  {
    icon: Code,
    title: "Real Project Portfolio",
    description: "Ship a production-ready project that demonstrates your skills to employers.",
  },
];

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "You should have basic familiarity with programming concepts (variables, loops, functions). This isn't a beginner course—we assume you can code and focus on making you industry-ready.",
  },
  {
    question: "Will I get a job after the bootcamp?",
    answer: "We can't guarantee job placement, but we equip you with the exact skills, portfolio, and interview preparation that dramatically increase your chances. Your success depends on your effort and commitment.",
  },
  {
    question: "What's the time commitment?",
    answer: "Expect 15-20 hours per week including live sessions, project work, and independent learning. This is intensive—you need to commit fully to get results.",
  },
  {
    question: "Is this bootcamp remote?",
    answer: "Yes, 100% remote. All sessions are conducted online, making it accessible from anywhere in Greece.",
  },
  {
    question: "What if I can't make it to a live session?",
    answer: "Sessions are recorded, but live attendance is strongly encouraged for mentorship, Q&A, and community building.",
  },
  {
    question: "What happens after I book a call?",
    answer: "We'll discuss your goals, answer any questions, and if it's a good fit, we'll finalize your enrollment and secure your early bird pricing.",
  },
];

const Bootcamp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DevReady
          </span>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Next Cohort: April–May 2026
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
              6-Week Tech Bootcamp
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
              Master the engineering skills, mindset, and professional branding that tech companies actually look for.
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Designed for anyone in Greece with a laptop and passion—no engineering degree required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Book Enrollment Call
                </Link>
              </Button>
            </div>

            {/* Key Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Duration</h3>
                <p className="text-muted-foreground">6 weeks intensive</p>
                <p className="text-sm text-muted-foreground mt-1">15-20 hrs/week</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Calendar className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Format</h3>
                <p className="text-muted-foreground">100% Remote</p>
                <p className="text-sm text-muted-foreground mt-1">Live sessions + recordings</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Investment</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through">€449</span>
                  <span className="text-2xl font-bold text-primary">€299</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">Only 5 spots left</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                What You'll Gain
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This isn't just about learning to code—it's about becoming someone companies want to hire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                Week-by-Week Curriculum
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured path from planning your career to landing interviews—everything you need in 6 weeks.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="group rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300 px-6"
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
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                Is This For You?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border-2 border-primary/20 bg-card">
                <h3 className="text-2xl font-bold mb-4 text-primary">✅ You're a Good Fit If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You have basic coding knowledge and want to become industry-ready</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You're willing to commit 15-20 hours per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You're serious about landing a tech role in Greece</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You want real feedback from working engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>You value practical skills over certificates</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border-2 border-border/50 bg-card/50">
                <h3 className="text-2xl font-bold mb-4">❌ Not a Good Fit If:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-lg">•</span>
                    <span>You've never written a line of code (start with free resources first)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">•</span>
                    <span>You expect a guaranteed job without putting in the work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">•</span>
                    <span>You can't commit to the time investment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">•</span>
                    <span>You're looking for passive learning or pre-recorded lectures only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">•</span>
                    <span>You just want a certificate to add to your CV</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gradient-card">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl bg-card border border-border/50 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center p-12 rounded-3xl bg-gradient-primary text-primary-foreground shadow-2xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                🎯 Only 5 Early Bird Spots Left
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Become Industry-Ready?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Book a call with our team to secure your spot at the early bird rate of €299.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Enrollment Call
                </Link>
              </Button>
              <p className="text-sm opacity-80 mt-6">
                During the call, we'll answer your questions and finalize your enrollment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} DevReady. Bridging the gap between university and industry.
        </p>
      </footer>
    </div>
  );
};

export default Bootcamp;

