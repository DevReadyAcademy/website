import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";

const DevPress = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <SEO
        title="DevPress - Tech Insights & Career Advice"
        description={blogPosts.length === 0 
          ? "DevPress blog coming soon! We'll be sharing practical advice from experienced engineers on software engineering and career development."
          : "Read our latest articles on software engineering, career development, and breaking into the tech industry. Practical advice from experienced engineers."
        }
        keywords="tech blog, software engineering blog, career advice, programming tips, tech industry Greece"
        canonical="https://www.devready.gr/devpress"
        ogType="website"
      />
      {/* Structured Data for Blog */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "DevPress",
          "description": "Tech insights and career advice from experienced software engineers",
          "url": "https://www.devready.gr/devpress",
          "publisher": {
            "@type": "Organization",
            "name": "DevReady",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.devready.gr/assets/logo-320.webp"
            }
          },
          ...(blogPosts.length > 0 && {
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": language === 'gr' ? post.titleGr : post.title,
              "url": `https://www.devready.gr/devpress/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        })}
      </script>
      <Header />
      <div className="min-h-screen bg-background pt-20">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-24 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          {t('common.skipToMain') || 'Skip to main content'}
        </a>

        {/* Hero Section */}
        <section className="py-16 px-4 text-center bg-gradient-subtle" aria-label="DevPress introduction">
          <div className="container mx-auto max-w-4xl">
            {/* Early Bird Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                {t('hero.urgencyBadge')}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('devpress.headline')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('devpress.subheadline')}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section id="main-content" className="py-16 px-4" aria-label="Blog articles" role="main">
          <div className="container mx-auto max-w-6xl">
            {blogPosts.length === 0 ? (
              /* Empty State */
              <div className="text-center py-20" role="status" aria-live="polite">
                <div className="text-8xl mb-6" role="img" aria-label={t('devpress.notepadIcon')}>📝</div>
                <h2 className="text-3xl font-bold mb-4">
                  {t('devpress.emptyStateHeadline')}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t('devpress.emptyStateDescription')}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  role="listitem"
                  aria-labelledby={`post-title-${post.id}`}
                >
                  {/* Blog Image */}
                  <div className="aspect-video bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-4xl font-bold opacity-20">
                      DevReady
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString(language === 'gr' ? 'el-GR' : 'en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{language === 'gr' ? post.readTimeGr : post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 id={`post-title-${post.id}`} className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {language === 'gr' ? post.titleGr : post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {language === 'gr' ? post.excerptGr : post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(language === 'gr' ? post.tagsGr : post.tags).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Link 
                      to={`/devpress/${post.slug}`}
                      aria-label={`${t('devpress.readArticle')}: ${language === 'gr' ? post.titleGr : post.title}`}
                    >
                      <Button variant="ghost" className="group/btn w-full justify-between">
                        <span>{t('devpress.readMore')}</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-subtle" aria-label={t('devpress.callToAction')}>
          <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold mb-4">
              {t('hero.readyToBecome')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {t('devpress.bootcampCTA')}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/bootcamp">
                {t('common.viewProgramDetails')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground" role="contentinfo">
          <p className="text-sm">
            © {new Date().getFullYear()} DevReady. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default DevPress;

