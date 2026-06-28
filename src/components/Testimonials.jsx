import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';
import { testimonialsEn, testimonialsGr } from '../data/testimonials';

// Show the 3 strongest testimonials on the homepage
const FEATURED_INDICES = [0, 3, 4];

const Testimonials = () => {
  const { t, language } = useLanguage();
  const allTestimonials = language === 'gr' ? testimonialsGr : testimonialsEn;
  const featured = FEATURED_INDICES.map(i => allTestimonials[i]);

  return (
      <section id="testimonials" className="py-20 px-4" aria-label="Student testimonials">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-elegant flex flex-col animate-fade-in"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" aria-hidden="true" />
                <blockquote className="text-foreground leading-relaxed mb-6 flex-1 line-clamp-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                    width="44"
                    height="44"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {t('testimonials.seeAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
