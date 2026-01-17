import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Users, Target, CheckCircle, Lightbulb];

const WhyDifferent = () => {
  const { t } = useLanguage();
  const differentiators = t('whyDifferent.items') || [];
  
  return (
    <section id="why-different" className="pt-20 pb-8 px-4 bg-gradient-subtle" aria-label="Why we're different">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            {t('whyDifferent.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('whyDifferent.description')}
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="group p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg-colored transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default WhyDifferent;
