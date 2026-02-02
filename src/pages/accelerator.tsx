import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle, Users, Clock, Target, Code, Brain, FileText, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import Header from "../components/Header";
import { earlyBirdConfig } from "../config/earlyBird";

const iconMap = {
  0: Compass,
  1: Code,
  2: Brain,
  3: FileText,
};


const Accelerator = () => {
  const { t, language } = useLanguage();
  
  const modulesData = t('accelerator.modules');
  const modules = (Array.isArray(modulesData) ? modulesData : []).map((module: any, index: number) => ({
    id: `week-${index}`,
    week: module.week,
    icon: iconMap[index as keyof typeof iconMap],
    title: module.title,
    description: module.description,
    details: module.details,
  }));
  
  const timelineData = t('accelerator.timelineSteps');
  const timeline = Array.isArray(timelineData) ? timelineData : [];
  
  const whatsIncludedData = t('accelerator.whatsIncludedItems');
  const whatsIncluded = Array.isArray(whatsIncludedData) ? whatsIncludedData : [];
  
  const faqsData = t('accelerator.faqs');
  const faqs = Array.isArray(faqsData) ? faqsData : [];
  
  const goodFitData = t('accelerator.goodFitItems');
  const goodFitItems = Array.isArray(goodFitData) ? goodFitData : [];
  
  const notGoodFitData = t('accelerator.notGoodFitItems');
  const notGoodFitItems = Array.isArray(notGoodFitData) ? notGoodFitData : [];

  // Combined structured data with Course and FAQPage schemas
  const acceleratorStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Software Engineering Accelerator",
        "description": "6-week intensive accelerator covering software engineering fundamentals, production-ready skills, and career preparation",
        "provider": {
          "@type": "Organization",
          "name": "DevReady",
          "url": "https://www.devready.gr/",
          "logo": "https://www.devready.gr/assets/logo-320.webp"
        },
        "url": "https://www.devready.gr/accelerator",
        "courseCode": "DR-ACCELERATOR-2026",
        "educationalLevel": "Beginner to Intermediate",
        "teaches": [
          "Software Engineering Fundamentals",
          "System Design",
          "Interview Preparation",
          "Career Development"
        ],
        "numberOfCredits": "12 weeks",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "instructor": {
            "@type": "Person",
            "name": "Alexis Pavlidis"
          },
          "inLanguage": ["en", "el"]
        },
        "offers": {
          "@type": "Offer",
          "price": "399",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": "https://www.devready.gr/contact"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "12",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      ...(faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer.replace(/\n/g, ' ').replace(/•/g, '-')
          }
        }))
      }] : [])
    ]
  };
  
  // Helper function to format FAQ answers with bullet points and paragraphs
  const formatAnswer = (answer: string) => {
    const parts = answer.split('\n\n');
    return parts.map((part, index) => {
      // Check if this part contains bullet points
      if (part.includes('•')) {
        const lines = part.split('\n').filter(line => line.trim());
        const bullets = lines.filter(line => line.trim().startsWith('•'));
        const textBefore = lines.filter(line => !line.trim().startsWith('•')).join(' ');
        
        return (
          <div key={index} className="space-y-3">
            {textBefore && <p>{textBefore}</p>}
            <ul className="space-y-2 ml-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{bullet.replace('•', '').trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      // Regular paragraph
      return <p key={index}>{part}</p>;
    });
  };
  
  return (
    <>
      <SEO
        title="Software Engineering Accelerator - Full Curriculum & Details"
        description="Explore DevReady's comprehensive 6-week software engineering accelerator curriculum. Learn coding fundamentals, system design, interview preparation, and career skills from industry experts."
        keywords="software engineering accelerator curriculum, coding accelerator syllabus, learn software development, accelerator schedule, programming course, tech accelerator Greece"
        canonical="https://www.devready.gr/accelerator"
        language={language}
        structuredData={acceleratorStructuredData}
      />
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              {t('accelerator.cohortBadge')}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
              {t('accelerator.pageTitle')}
            </h1>
            
            <div className="max-w-3xl mx-auto mb-8 space-y-3">
              <p className="text-xl md:text-2xl text-foreground/90">
                {t('accelerator.heroSubtitle')}
              </p>
              <p className="text-base md:text-lg text-primary font-semibold">
                {t('accelerator.languageAgnostic')}
              </p>
              <p className="text-muted-foreground">
                {t('accelerator.heroDescription')}
              </p>
            </div>

            <div className="mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  {t('common.bookCall')}
                </Link>
              </Button>
            </div>

            {/* Key Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('accelerator.infoCards.timeCommitmentTitle')}</h3>
                <p className="text-muted-foreground">{t('accelerator.infoCards.timeCommitment')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('accelerator.infoCards.timeCommitmentDetail')}</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Calendar className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('accelerator.infoCards.formatTitle')}</h3>
                <p className="text-muted-foreground">{t('accelerator.infoCards.format')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('accelerator.infoCards.formatDetail')}</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('accelerator.infoCards.investmentTitle')}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through">{t('accelerator.infoCards.investmentOriginal')}</span>
                  <span className="text-2xl font-bold text-primary">{t('accelerator.infoCards.investmentCurrent')}</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">{t('accelerator.infoCards.investmentNote')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('accelerator.curriculumTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('accelerator.curriculumDescription')}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, _) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="group rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <module.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider block">
                          {module.week}
                        </span>
                        <h3 className="text-xl font-semibold mt-1">{module.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{module.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-[76px]">
                      <h4 className="font-medium text-foreground mb-4">{t('accelerator.curriculumLearnLabel')}</h4>
                      <ul className="space-y-3">
                        {module.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Your Journey Timeline */}
        <section className="py-20 px-4 bg-gradient-card">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('accelerator.timelineTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('accelerator.timelineDescription')}
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((step: any, index: number) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index === 0 && (
                      <Link to="/contact" className="text-primary hover:underline text-sm font-medium inline-block mt-2">
                        → {t('common.enrollNow')}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('accelerator.whatsIncludedTitle')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whatsIncluded.map((item: any, index: number) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('accelerator.whoShouldJoinTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border-2 border-primary/20 bg-card">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('accelerator.goodFitTitle')}</h3>
                <ul className="space-y-3">
                  {goodFitItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl border-2 border-border/50 bg-card/50">
                <h3 className="text-2xl font-bold mb-4">{t('accelerator.notGoodFitTitle')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {notGoodFitItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="py-20 px-4 bg-gradient-card">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('accelerator.faqTitle')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl bg-card border border-border/50 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground space-y-4">
                    {formatAnswer(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center p-12 rounded-3xl bg-gradient-primary text-primary-foreground shadow-2xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                ⏰ {earlyBirdConfig.getSpotsLeftText(language)} {language === 'gr' ? 'στα' : 'at'} {earlyBirdConfig.earlyBirdPrice}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('accelerator.finalCtaTitle')}
              </h2>
              <p className="text-xl opacity-90 mb-2 max-w-2xl mx-auto">
                {t('accelerator.finalCtaDescription')}
              </p>
              <p className="text-base opacity-80 mb-8 max-w-2xl mx-auto">
                {t('accelerator.finalCtaPricing')}
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg">
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('common.bookCall')}
                </Link>
              </Button>
              <p className="text-sm opacity-80 mt-6">
                {t('accelerator.finalCtaNote')}
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

export default Accelerator;

