import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSubscribe = () => {
    document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden bg-gradient-hero">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-6 leading-tight"
        >
          DevReady
        </motion.h1>

   <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto font-medium"
        >
          We want anyone in Greece with a laptop and passion to land their dream tech job—without an engineering degree.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 italic"
        >
          Bridge the gap between university and industry.
        </motion.p>

        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 20 }}*/}
        {/*  animate={{ opacity: 1, y: 0 }}*/}
        {/*  transition={{ duration: 0.8, delay: 0.6 }}*/}
        {/*>*/}
        {/*  <button*/}
        {/*    onClick={scrollToSubscribe}*/}
        {/*    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-lg transition-shadow duration-300"*/}
        {/*  >*/}
        {/*    Join the Waitlist*/}
        {/*    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />*/}
        {/*  </button>*/}
        {/*</motion.div>*/}
      </div>
    </section>
  );
};

export default Hero;