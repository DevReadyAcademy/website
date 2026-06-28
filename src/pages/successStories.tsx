import React from "react";
import { Link } from "react-router-dom";
import { Quote, ArrowLeft, Users, Briefcase, Globe } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { useLanguage } from "../contexts/LanguageContext";
import { testimonialsEn, testimonialsGr } from "../data/testimonials";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Renders a quote string with a specific substring bolded.
 * Falls back to plain text if the highlight isn't found.
 */
const HighlightedQuote = ({ quote, highlight }: { quote: string; highlight?: string }) => {
  if (!highlight) return <>{quote}</>;

  const idx = quote.indexOf(highlight);
  if (idx === -1) return <>{quote}</>;

  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);

  return (
    <>
      {before}
      <strong className="text-foreground font-semibold">{highlight}</strong>
      {after}
    </>
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
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-4">
                <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <Users className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">15+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('successStories.stat1Label')}</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <Briefcase className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">
                    {language === 'gr' ? 'Πολλοί' : 'Many'}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('successStories.stat2Label')}</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                  <Globe className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-foreground">4+</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{t('successStories.stat3Label')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Stories */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                {t('successStories.featuredTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-elegant flex flex-col relative"
                  >
                    <Quote className="w-10 h-10 text-primary/30 mb-4 flex-shrink-0" aria-hidden="true" />
                    <blockquote className="text-lg text-foreground/90 leading-relaxed mb-6 flex-1 whitespace-pre-line">
                      <HighlightedQuote quote={testimonial.quote} highlight={testimonial.highlight} />
                    </blockquote>
                    <div className="flex items-center gap-4 pt-4 border-t border-border/30">
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
                        <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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

          {/* Remaining Testimonials */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                {t('successStories.allTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rest.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border/50 rounded-2xl p-6 shadow-elegant flex flex-col"
                  >
                    <Quote className="w-7 h-7 text-primary/20 mb-3 flex-shrink-0" aria-hidden="true" />
                    <blockquote className="text-foreground/90 leading-relaxed mb-5 flex-1 whitespace-pre-line text-sm">
                      <HighlightedQuote quote={testimonial.quote} highlight={testimonial.highlight} />
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                        width="40"
                        height="40"
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
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
