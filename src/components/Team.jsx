import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Team = () => {
  const { t } = useLanguage();
  
  const teamImages = [
    '/assets/alex.jpg',
    '/assets/kostikas.jpg',
    '/assets/sam.jpg'
  ];
  
  const linkedinUrls = [
    'https://www.linkedin.com/in/apavlidi/',
    'https://www.linkedin.com/in/kvisnia/',
    'https://www.linkedin.com/in/vasilis-samoladas/'
  ];
  
  const teamMembers = (t('team.members') || []).map((member, index) => ({
    ...member,
    imageUrl: teamImages[index],
    linkedin: linkedinUrls[index]
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
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all"
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
              <div className="flex-1 flex flex-col justify-between w-full">
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  {member.description}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium mx-auto"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>{t('team.connectLinkedIn')}</span>
                  </a>
                )}
              </div>
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
          <p className="text-muted-foreground leading-relaxed">
            {t('team.storyText')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;