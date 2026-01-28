import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Team = () => {
  const { t } = useLanguage();
  
  const teamImages = [
    '/assets/alex.jpg',
    '/assets/kostikas.jpg',
    '/assets/sam.png'
  ];
  
  const teamMembers = (t('team.members') || []).map((member, index) => ({
    ...member,
    imageUrl: teamImages[index]
  }));
  
  return (
    <section id="team" className="py-24 sm:py-32 px-4 bg-background" aria-label="Our team">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-xl">
                {member.imageUrl ? (
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    src={member.imageUrl}
                    width="160"
                    height="160"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1593510050025-2c379a40f1aa"
                    width="160"
                    height="160"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{member.name}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">{t('team.storyTitle')}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t('team.storyText')}
          </p>
          
          {/* Learn More Button */}
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/team">
              {t('team.learnMoreAboutTeam')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;