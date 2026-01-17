import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const teamMembers = [
  {
    name: 'Alexis Pavlidis',
    description: 'A London-based Software Engineer over seven years of experience building scalable systems and guiding early-career developers. He is passionate about clean code, practical engineering, and helping others navigate the tech industry through mentoring, writing, and speaking.',
    imageUrl: '/assets/alex.jpeg'
  },
  {
    name: 'Kostikas Visnia',
    description: 'A Barcelona-based Technical Account Manager with a deep technical background in networking and cloud infrastructure. Having transitioned from hands-on technical support to senior consulting roles, he brings a business-aware approach to engineering, ensuring complex software systems work perfectly for global enterprises and their users.',
    imageUrl: '/assets/kostikas.jpeg'
  },
  {
    name: 'Vasilis Samoladas',
    description: 'A Prague-based Frontend Engineer passionate about AI, automation, and building products people actually enjoy using. With experience in the travel industry and a love for traveling, he combines engineering, business thinking, and a questionable sense of humor.',
    imageUrl: '/assets/sam.jpeg'
  }
];

const Team = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-24 sm:py-32 px-4 bg-background">
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
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-2xl">
                {member.imageUrl ? (
                  <img alt={member.name} className="w-full h-full object-cover" src={member.imageUrl} />
                ) : (
                  <img alt={member.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593510050025-2c379a40f1aa" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-card border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">{t('team.storyTitle')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('team.storyText')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;