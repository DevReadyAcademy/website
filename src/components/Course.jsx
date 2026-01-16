import { Calendar, Users, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  "Plan your path and set realistic goals",
  "Master engineering fundamentals and clean code",
  "Build a production-ready portfolio project",
  "Learn AI best practices and personal branding",
  "Ace interviews with STAR method and confidence",
  "Create an ATS-ready CV and optimized LinkedIn",
];

const Course = () => {
  return (
      <section id="course" className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
               6-Week Tech Bootcamp
            </h2>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              Next Cohort: April–May 2026
            </span>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              An intensive program designed to transform you into an industry-ready tech professional.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Duration</h3>
              <p className="text-muted-foreground">6 weeks intensive</p>
              <p className="text-sm text-muted-foreground mt-1">15-20 hrs/week</p>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Format</h3>
              <p className="text-muted-foreground">100% Remote</p>
              <p className="text-sm text-muted-foreground mt-1">Live + recordings</p>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Goal</h3>
              <p className="text-muted-foreground">Industry-ready</p>
              <p className="text-sm text-muted-foreground mt-1">Portfolio + skills</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">What You'll Master</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 shadow-elegant animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2">
                  🎯 Early Bird • Only 5 Spots Left
                </div>
                <p className="text-muted-foreground mb-1">Investment in your future</p>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-2xl text-muted-foreground line-through">
                    €449
                  </span>
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    €299
                  </span>
                  <span className="text-muted-foreground">/program</span>
                </div>
                <p className="text-sm text-muted-foreground/80 mt-2">
                  Secure your early bird rate before it's gone
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">
                    <Users className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/bootcamp">
                    View Full Curriculum
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Course;
