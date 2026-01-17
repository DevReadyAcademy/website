import { Users, Award, Briefcase, TrendingUp } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Users, Award, Briefcase, TrendingUp];

const Pillars = () => {
  const { t } = useLanguage();
  const pillars = t('pillars.items') || [];
  
  return (
    <section id="pillars" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            {t('pillars.title')}
          </h2>
          <p className="text-xl font-semibold text-foreground max-w-3xl mx-auto mb-3">
            {t('pillars.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pillars.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-card-colored transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{pillar.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
