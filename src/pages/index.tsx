import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import WhyDifferent from "../components/WhyDifferent";
import Team from "../components/Team";
import ComingSoon from "../components/ComingSoon";
import Vision from "../components/Vision";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <Vision/> */}
      <Pillars />
      <WhyDifferent />
      <Team />
      <Testimonials />

      {/* <ComingSoon /> */}
      <Subscribe />
      
      <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} DevReady. Bridging the gap between university and industry.
        </p>
      </footer>
    </div>
  );
};

export default Index;
