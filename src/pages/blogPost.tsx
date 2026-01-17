import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";
import { blogPosts } from "../data/blogPosts";
import { useToast } from "../components/ui/use-toast";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found | DevPress"
          description="The blog post you're looking for doesn't exist."
          canonical="https://www.devready.gr/devpress"
          noindex={true}
        />
        <div className="min-h-screen bg-background flex items-center justify-center" role="main">
          <div className="text-center">
            <div className="text-6xl mb-4" role="img" aria-label={language === 'gr' ? 'Εικονίδιο λάθους' : 'Error icon'}>❌</div>
            <h1 className="text-4xl font-bold mb-4">
              {language === 'gr' ? 'Το άρθρο δεν βρέθηκε' : 'Post Not Found'}
            </h1>
            <p className="text-muted-foreground mb-6">
              {language === 'gr' 
                ? 'Το άρθρο που ψάχνεις δεν υπάρχει ή έχει μετακινηθεί.'
                : 'The post you\'re looking for doesn\'t exist or has been moved.'
              }
            </p>
            <Link to="/devpress">
              <Button aria-label={language === 'gr' ? 'Επιστροφή στο DevPress' : 'Back to DevPress'}>
                {language === 'gr' ? 'Πίσω στο DevPress' : 'Back to DevPress'}
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const title = language === 'gr' ? post.titleGr : post.title;
  const content = language === 'gr' ? post.contentGr : post.content;
  const tags = language === 'gr' ? post.tagsGr : post.tags;
  const readTime = language === 'gr' ? post.readTimeGr : post.readTime;

  const currentUrl = `https://www.devready.gr/devpress/${post.slug}`;

  const shareOnTwitter = () => {
    const text = `${title} - DevReady`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: language === 'gr' ? "Το link αντιγράφηκε!" : "Link copied!",
      description: language === 'gr' ? "Το link του άρθρου αντιγράφηκε στο clipboard" : "Article link copied to clipboard",
    });
  };

  return (
    <>
      <SEO
        title={`${title} | DevPress`}
        description={language === 'gr' ? post.excerptGr : post.excerpt}
        keywords={tags.join(', ')}
        canonical={currentUrl}
        ogType="article"
        articlePublishedTime={post.date}
        articleAuthor={post.author}
      />
      {/* Structured Data for Blog Post */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": language === 'gr' ? post.excerptGr : post.excerpt,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date,
          "dateModified": post.date,
          "publisher": {
            "@type": "Organization",
            "name": "DevReady",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.devready.gr/assets/logo-320.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentUrl
          },
          "keywords": tags.join(', '),
          "articleSection": tags[0],
          "inLanguage": language === 'gr' ? 'el' : 'en'
        })}
      </script>
      <div className="min-h-screen bg-background">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          {language === 'gr' ? 'Μετάβαση στο κύριο περιεχόμενο' : 'Skip to main content'}
        </a>
        
        {/* Header */}
        <header className="py-6 px-4 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50" role="banner">
          <div className="container mx-auto max-w-4xl flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={language === 'gr' ? 'Επιστροφή στην αρχική' : 'Back to home'}
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">{t('bootcamp.backToHome')}</span>
            </Link>
          </div>
        </header>

        {/* Article Header */}
        <article id="main-content" className="py-16 px-4" role="main" aria-labelledby="article-title">
          <div className="container mx-auto max-w-4xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(language === 'gr' ? 'el-GR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{readTime}</span>
              </div>
              <span aria-hidden="true">•</span>
              <span>{language === 'gr' ? 'Από' : 'By'} {post.author}</span>
            </div>

            {/* Title */}
            <h1 id="article-title" className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4 py-6 border-y border-border/50 mb-12" role="region" aria-label={language === 'gr' ? 'Κοινοποίηση άρθρου' : 'Share article'}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Share2 className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">{language === 'gr' ? 'Κοινοποίηση:' : 'Share:'}</span>
              </div>
              <div className="flex gap-2" role="group" aria-label={language === 'gr' ? 'Κουμπιά κοινοποίησης' : 'Social share buttons'}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnTwitter}
                  aria-label={language === 'gr' ? 'Κοινοποίηση στο Twitter' : 'Share on Twitter'}
                  title={language === 'gr' ? 'Κοινοποίηση στο Twitter' : 'Share on Twitter'}
                  className="hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500"
                >
                  <Twitter className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnFacebook}
                  aria-label={language === 'gr' ? 'Κοινοποίηση στο Facebook' : 'Share on Facebook'}
                  title={language === 'gr' ? 'Κοινοποίηση στο Facebook' : 'Share on Facebook'}
                  className="hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={shareOnLinkedIn}
                  aria-label={language === 'gr' ? 'Κοινοποίηση στο LinkedIn' : 'Share on LinkedIn'}
                  title={language === 'gr' ? 'Κοινοποίηση στο LinkedIn' : 'Share on LinkedIn'}
                  className="hover:bg-blue-700/10 hover:text-blue-700 hover:border-blue-700"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyLink}
                  aria-label={language === 'gr' ? 'Αντιγραφή συνδέσμου' : 'Copy link'}
                  title={language === 'gr' ? 'Αντιγραφή συνδέσμου' : 'Copy link'}
                  className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                >
                  <LinkIcon className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-foreground/90 prose-li:mb-2
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>

            {/* Author Bio */}
            <aside className="mt-12 p-6 bg-card rounded-xl border border-border/50" aria-label={language === 'gr' ? 'Πληροφορίες συγγραφέα' : 'Author information'}>
              <h2 className="text-xl font-bold mb-2">{language === 'gr' ? 'Σχετικά με τον συγγραφέα' : 'About the Author'}</h2>
              <p className="text-muted-foreground">
                <strong>{post.author}</strong> {language === 'gr' 
                  ? 'είναι Software Engineer με έδρα το Λονδίνο και co-founder του DevReady. Έχει βοηθήσει πάνω από 50 developers να μπουν στο tech industry.'
                  : 'is a London-based Software Engineer and co-founder of DevReady. He has helped over 50 developers break into the tech industry.'
                }
              </p>
            </aside>

            {/* CTA */}
            <aside className="mt-12 p-8 bg-gradient-primary rounded-xl text-center text-primary-foreground" aria-label={language === 'gr' ? 'Κλήση σε δράση' : 'Call to action'}>
              <h2 className="text-2xl font-bold mb-4">
                {language === 'gr' ? 'Έτοιμος να Κάνεις το Επόμενο Βήμα;' : 'Ready to Take the Next Step?'}
              </h2>
              <p className="mb-6 opacity-90">
                {language === 'gr'
                  ? 'Μάθε πώς το DevReady bootcamp μπορεί να σε κάνει industry-ready σε 6 εβδομάδες'
                  : 'Learn how DevReady bootcamp can make you industry-ready in 6 weeks'
                }
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/bootcamp">
                  {language === 'gr' ? 'Δες το Πρόγραμμα' : 'View Program'}
                </Link>
              </Button>
            </aside>
          </div>
        </article>

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

export default BlogPost;

