import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users } from "lucide-react";

const teamMembers = [
  {
    name: 'Alexis Pavlidis',
    description: 'A London-based Software Engineer over seven years of experience building scalable systems and guiding early-career developers. He is passionate about clean code, practical engineering, and helping others navigate the tech industry through mentoring, writing, and speaking.',
    imageUrl: '/assets/alex.jpeg'
  },
  {
    name: 'Kostikas Visnia',
    description: 'TBD',
    imageUrl: '/assets/kostikas.jpeg'
  },
  {
    name: 'Vasilis Samoladas',
    description: 'TBD',
    imageUrl: '/assets/sam.jpeg'
  }
];

const Team = () => {
  return (
    <section className="py-24 sm:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-16 animate-fade-in">
          {/*<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">*/}
          {/*  <Users className="w-4 h-4 text-primary" />*/}
          {/*  <span className="text-sm font-medium text-primary">Our Team</span>*/}
          {/*</div>*/}
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Meet The Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a group of passionate professionals dedicated to transforming tech education in Greece
          </p>
        </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
                {member.imageUrl ? (
                  <img alt={member.name} className="w-full h-full object-cover" src={member.imageUrl} />
                ) : (
                  <img alt={member.name} src="https://images.unsplash.com/photo-1593510050025-2c379a40f1aa" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;