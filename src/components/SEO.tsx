import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  /** Alt text for og:image / twitter:image (accessibility & SEO when sharing) */
  ogImageAlt?: string;
  ogTitle?: string;
  ogType?: string;
  noindex?: boolean;
  articlePublishedTime?: string;
  articleAuthor?: string;
  language?: 'en' | 'gr';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "DevReady - Transform Your Career in Software Engineering | Intensive Accelerator",
  description = "Master software engineering with DevReady's intensive accelerator. Learn production-ready skills, build real-world projects, and land your dream tech job. Join our next cohort today.",
  keywords = "software engineering accelerator, coding accelerator, learn programming, software development, tech career, DevReady, career change, software engineer training",
  canonical = "https://www.devready.gr/",
  ogImage = "https://www.devready.gr/assets/logo-320.webp",
  ogImageAlt,
  ogTitle,
  ogType = "website",
  noindex = false,
  articlePublishedTime,
  articleAuthor,
  language = 'en',
  structuredData,
}) => {
  const fullTitle = title.includes('DevReady') ? title : `${title} | DevReady`;
  const ogTitleFinal = ogTitle || fullTitle;
  const ogLocale = language === 'gr' ? 'el_GR' : 'en_US';
  const alternateLocale = language === 'gr' ? 'en_US' : 'el_GR';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language === 'gr' ? 'el' : 'en'} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Alternate language links for hreflang */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="el" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitleFinal} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DevReady" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}

      {/* Twitter - use name attribute for Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@devreadygr" />
      <meta name="twitter:creator" content="@devreadygr" />
      <meta name="twitter:title" content={ogTitleFinal} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt ?? `${fullTitle} - DevReady`} />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

