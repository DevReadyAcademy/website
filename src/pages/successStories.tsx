import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Quote, ArrowLeft, Users, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { useLanguage } from "../contexts/LanguageContext";
import { testimonialsEn, testimonialsGr } from "../data/testimonials";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TestimonialCard = ({ testimonial, language }: { testimonial: any; language: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-elegant flex flex-col">
      {/* Student info at top */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h3 className="font-semibold text-foreground text-sm">{testimonial.name}</h3>
          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
        </div>
      </div>

      {/* Highlight as the hook */}
      <p className="text-foreground font-medium leading-snug mb-3">
        "{testimonial.highlight}"
      </p>

      {/* Full quote — expandable */}
      <div className={`text-foreground/70 text-sm leading-relaxed whitespace-pre-line ${expanded ? '' : 'line-clamp-3'}`}>
        {testimonial.quote}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:text-primary/80 transition-colors self-start"
      >
        {expanded
          ? (language === 'gr' ? 'Λιγότερα' : 'Show less')
          : (language === 'gr' ? 'Διάβασε περισσότερα' : 'Read more')
        }
        {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};

const SuccessStories = () => {
  const { t, language } = useLanguage();
  const testimonials = language === 'gr' ? testimonialsGr : testimonialsEn;

  const featured = testimonials.filter((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <>
      <SEO
        title={t('successStories.pageTitle') as string}
        description={t('successStories.pageDescription') as string}
        canonical="https://www.devready.gr/success-stories"
        language={language}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
        Skip to main content
      </a>
      <Header />
      <div className="min-h-screen bg-background pt-28">
        <main id="main-content">
          {/* Hero + Stats */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {language === 'gr' ? 'Πίσω στην Αρχική' : 'Back to Home'}
              </Link>

              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-2">
                  {t('successStories.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t('successStories.subtitle')}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4">
                <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <Users className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">15+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('successStories.stat1Label')}</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">70%</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('successStories.stat2Label')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Stories — highlight-first layout */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                {t('successStories.featuredTitle')}
              </h2>

              <div className="space-y-6">
                {featured.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-elegant"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Student info — left side on desktop */}
                      <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 md:min-w-[140px] md:pt-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary/20"
                          width="80"
                          height="80"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="md:text-center">
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Quote — right side on desktop */}
                      <div className="flex-1">
                        {/* Pull-quote highlight */}
                        <p className="text-xl md:text-2xl font-semibold text-primary leading-snug mb-4">
                          "{testimonial.highlight}"
                        </p>
                        {/* Full quote in smaller text */}
                        <blockquote className="text-foreground/70 leading-relaxed text-sm whitespace-pre-line">
                          {testimonial.quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mid-page CTA */}
          <section className="py-10 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-lg font-medium text-foreground">
                  {t('successStories.midCtaText')}
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 shadow-lg"
                >
                  <Link to="/contact">
                    {t('successStories.ctaButton')}
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Remaining Testimonials — expandable cards */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                {t('successStories.allTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} language={language} />
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('successStories.ctaTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('successStories.ctaDescription')}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg text-lg px-8 py-6"
              >
                <Link to="/contact">
                  {t('successStories.ctaButton')}
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SuccessStories;
