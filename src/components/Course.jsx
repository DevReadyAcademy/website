import { Calendar, Users, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

const Course = () => {
  const { t } = useLanguage();
  
  // Get highlights from translation - now properly returns array
  const highlights = t('course.highlights') || [];
  
  return (
      <section id="course" className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
               {t('course.title')}
            </h2>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Calendar className="inline-block w-4 h-4 mr-2" />
              {t('course.cohortDate')}
            </span>
            <p className="text-base md:text-lg text-primary font-semibold mb-3 max-w-2xl mx-auto">
              {t('course.forAllDevelopers')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('course.description')}
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{t('course.timeCommitmentTitle')}</h3>
              <p className="text-muted-foreground">{t('course.timeCommitment')}</p>
              <p className="text-sm text-muted-foreground mt-1">{t('course.timeCommitmentDetail')}</p>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Calendar className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{t('course.formatTitle')}</h3>
              <p className="text-muted-foreground">{t('course.format')}</p>
              <p className="text-sm text-muted-foreground mt-1">{t('course.formatDetail')}</p>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 text-center">
              <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">{t('course.goalTitle')}</h3>
              <p className="text-muted-foreground">{t('course.goal')}</p>
              <p className="text-sm text-muted-foreground mt-1">{t('course.goalDetail')}</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-card rounded-2xl border border-border/50 p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('course.whatYouMasterTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="text-center p-8 rounded-2xl bg-card border border-primary/20 shadow-elegant animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2">
                  {t('course.earlyBirdBadge')}
                </div>
                <p className="text-muted-foreground mb-1">{t('course.investmentLabel')}</p>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-2xl text-muted-foreground line-through">
                    {t('course.originalPrice')}
                  </span>
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {t('course.currentPrice')}
                  </span>
                  <span className="text-muted-foreground">{t('course.perProgram')}</span>
                </div>
                <p className="text-sm text-muted-foreground/80 mt-2">
                  {t('course.earlyBirdMessage')}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">
                    <Users className="w-4 h-4 mr-2" />
                    {t('common.enrollNow')}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/bootcamp">
                    {t('common.viewFullCurriculum')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Course;
