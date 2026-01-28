import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Linkedin, Github, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Header from "../components/Header";

const Journey = () => {
  const { t } = useLanguage();

  const teamMembers = t('journey.teamMembers') || [];
  const timeline = t('journey.timeline') || [];

  return (
    <>
      <SEO
        title="Our Journey - Meet the DevReady Team"
        description="From dozens of job rejections to building DevReady. Learn how Alex, Kostas, and Vasilis went from struggling graduates to helping others break into tech."
        keywords="DevReady team, about us, tech education Greece, software engineering mentors, our story, career journey, tech mentorship"
        canonical="https://www.devready.gr/journey"
      />
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-hero">
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                  {t('journey.pageTitle')}
                </h1>
                <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto">
                  {t('journey.pageSubtitle')}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('journey.pageDescription')}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Team Members Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
                  {t('journey.teamTitle')}
                </h2>
              </div>

              <div className="space-y-16">
                {teamMembers.map((member: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 items-center bg-card rounded-2xl border border-border/50 p-8 shadow-elegant`}
                  >
                    {/* Photo */}
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {member.bio}
                      </p>

                      {member.highlights && (
                        <div className="space-y-2 mb-4">
                          {member.highlights.map((highlight: string, i: number) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-primary">✓</span>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Social Links */}
                      <div className="flex gap-3 justify-center md:justify-start">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {member.website && (
                          <a
                            href={member.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={`${member.name}'s Website`}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Journey Timeline Section */}
          <section className="py-20 px-4 bg-gradient-subtle">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
                  {t('journey.timelineTitle')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('journey.timelineDescription')}
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

                {timeline.map((event: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 mb-12 md:mb-16`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-background" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />

                    {/* Content Card */}
                    <div className="flex-1 ml-16 md:ml-0">
                      <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-elegant">
                        <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                          {event.location && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        {event.image && (
                          <div className="rounded-xl overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className={`w-full h-48 object-cover ${event.imagePosition || 'object-center'}`}
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 bg-gradient-subtle">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center p-12 rounded-3xl bg-gradient-primary text-primary-foreground shadow-2xl">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  ⏰ Only 5 Early Bird Spots at €299
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('bootcamp.finalCtaTitle')}
                </h2>
                <p className="text-xl opacity-90 mb-2 max-w-2xl mx-auto">
                  {t('bootcamp.finalCtaDescription')}
                </p>
                <p className="text-base opacity-80 mb-8 max-w-2xl mx-auto">
                  {t('bootcamp.finalCtaPricing')}
                </p>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg">
                  <Link to="/contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('common.bookCall')}
                  </Link>
                </Button>
                <p className="text-sm opacity-80 mt-6">
                  {t('bootcamp.finalCtaNote')}
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
          <p className="text-sm">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Journey;
