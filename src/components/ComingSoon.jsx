import { Calendar, Rocket } from "lucide-react";

const ComingSoon = () => {
  const scrollToSubscribe = () => {
    document.getElementById("subscribe")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <Rocket className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Coming September 2026</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-primary bg-clip-text text-transparent">
          Your Tech Career Starts in September
        </h2>

        <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          We're launching our next cohort in September 2026. Join the waitlist now to secure your spot 
          and get early access to exclusive resources.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-lg">4-Week Intensive Program</span>
          </div>
          <div className="hidden sm:block w-1 h-6 bg-border/50 rounded-full"></div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-lg">Limited to 15 Participants</span>
          </div>
        </div>

        <button
          onClick={scrollToSubscribe}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg-colored animate-scale-in"
        >
          Join the Waitlist
        </button>

        <p className="mt-6 text-sm text-muted-foreground animate-fade-in">
          Early subscribers get priority access.
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
