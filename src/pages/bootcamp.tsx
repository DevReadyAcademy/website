import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle, Users, Clock, Target, BookOpen, Code, Brain, FileText, Compass } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../contexts/LanguageContext";

const iconMap = {
  0: Compass,
  1: Code,
  2: Brain,
  3: FileText,
};


const Bootcamp = () => {
  const { t } = useLanguage();
  
  const modulesData = t('bootcamp.modules');
  const modules = (Array.isArray(modulesData) ? modulesData : []).map((module: any, index: number) => ({
    id: `week-${index}`,
    week: module.week,
    icon: iconMap[index as keyof typeof iconMap],
    title: module.title,
    description: module.description,
    details: module.details,
  }));
  
  const timelineData = t('bootcamp.timelineSteps');
  const timeline = Array.isArray(timelineData) ? timelineData : [];
  
  const whatsIncludedData = t('bootcamp.whatsIncludedItems');
  const whatsIncluded = Array.isArray(whatsIncludedData) ? whatsIncludedData : [];
  
  const faqsData = t('bootcamp.faqs');
  const faqs = Array.isArray(faqsData) ? faqsData : [];
  
  const goodFitData = t('bootcamp.goodFitItems');
  const goodFitItems = Array.isArray(goodFitData) ? goodFitData : [];
  
  const notGoodFitData = t('bootcamp.notGoodFitItems');
  const notGoodFitItems = Array.isArray(notGoodFitData) ? notGoodFitData : [];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('bootcamp.backToHome')}
          </Link>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t('common.brandName')}
          </span>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contact">{t('common.enrollNow')}</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              {t('bootcamp.cohortBadge')}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
              {t('bootcamp.pageTitle')}
            </h1>
            
            <div className="max-w-3xl mx-auto mb-8 space-y-3">
              <p className="text-xl md:text-2xl text-foreground/90">
                {t('bootcamp.heroSubtitle')}
              </p>
              <p className="text-base md:text-lg text-primary font-semibold">
                {t('bootcamp.languageAgnostic')}
              </p>
              <p className="text-muted-foreground">
                {t('bootcamp.heroDescription')}
              </p>
            </div>

            <div className="mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link to="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  {t('common.bookCall')}
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                {t('common.moneyBackGuarantee')}
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('bootcamp.infoCards.timeCommitmentTitle')}</h3>
                <p className="text-muted-foreground">{t('bootcamp.infoCards.timeCommitment')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('bootcamp.infoCards.timeCommitmentDetail')}</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Calendar className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('bootcamp.infoCards.formatTitle')}</h3>
                <p className="text-muted-foreground">{t('bootcamp.infoCards.format')}</p>
                <p className="text-sm text-muted-foreground mt-1">{t('bootcamp.infoCards.formatDetail')}</p>
              </div>
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{t('bootcamp.infoCards.investmentTitle')}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through">{t('bootcamp.infoCards.investmentOriginal')}</span>
                  <span className="text-2xl font-bold text-primary">{t('bootcamp.infoCards.investmentCurrent')}</span>
                </div>
                <p className="text-sm text-primary font-medium mt-1">{t('bootcamp.infoCards.investmentNote')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-20 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('bootcamp.curriculumTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('bootcamp.curriculumDescription')}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {modules.map((module, index) => (
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
                      <h4 className="font-medium text-foreground mb-4">{t('bootcamp.curriculumLearnLabel')}</h4>
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
                {t('bootcamp.timelineTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('bootcamp.timelineDescription')}
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
                {t('bootcamp.whatsIncludedTitle')}
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
                {t('bootcamp.whoShouldJoinTitle')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border-2 border-primary/20 bg-card">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('bootcamp.goodFitTitle')}</h3>
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
                <h3 className="text-2xl font-bold mb-4">{t('bootcamp.notGoodFitTitle')}</h3>
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
        <section className="py-20 px-4 bg-gradient-card">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('bootcamp.faqTitle')}
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
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
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
  );
};

export default Bootcamp;

