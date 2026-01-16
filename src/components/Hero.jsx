import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden bg-gradient-hero">
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Early Bird Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
            <Calendar className="w-4 h-4" />
            Next Cohort: April–May 2026 · Only 5 Early Bird Spots Left
          </span>
        </motion.div>

        {/* Main Headline - Value Proposition */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight"
        >
          Become Industry-Ready
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            In 6 Weeks
          </span>
        </motion.h1>

        {/* Supporting Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto font-medium"
        >
          Master the engineering skills, mindset, and branding that tech companies actually look for—no degree required.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Bridge the gap between university and industry with real engineering skills, mentorship, and career coaching.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Button 
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/contact">
              Secure Your Spot
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-2"
          >
            <Link to="/bootcamp">
              View Program Details
            </Link>
          </Button>
        </motion.div>

        {/* Social Proof / Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>6-Week Remote Program</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Industry Mentors</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Early Bird: €299</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;