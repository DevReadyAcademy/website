import { Quote, ArrowRight, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { testimonialsEn, testimonialsGr } from '../data/testimonials';

// Show the 3 strongest outcome testimonials on the homepage:
// Giorgos Perdikaris (found first job), Vangelis Agapiou (2 interviews in first week), Christos Grekas (progressed at company)
const FEATURED_INDICES = [6, 7, 8];

const Testimonials = () => {
  const { t, language } = useLanguage();
  const allTestimonials = language === 'gr' ? testimonialsGr : testimonialsEn;
  const featured = FEATURED_INDICES.map(i => allTestimonials[i]);

  return (
      <section id="testimonials" className="py-20 px-4" aria-label="Student testimonials">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
              {t('testimonials.title')}
            </h2>
            <div className="flex items-center justify-center gap-8 text-base md:text-lg text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <strong className="text-foreground text-xl md:text-2xl">30+</strong> {t('successStories.stat1Label')}
              </span>
              <span className="inline-flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <strong className="text-foreground text-xl md:text-2xl">70%</strong> {t('successStories.stat2Label')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-elegant flex flex-col animate-fade-in"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-5 flex-shrink-0" aria-hidden="true" />
                <blockquote className="text-foreground text-base md:text-lg leading-relaxed mb-6 flex-1 line-clamp-[8]">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    width="56"
                    height="56"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-semibold text-base">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
            >
              {t('testimonials.seeAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
