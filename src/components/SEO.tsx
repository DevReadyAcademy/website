import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "DevReady - Transform Your Career in Software Engineering | Intensive Bootcamp",
  description = "Master software engineering with DevReady's intensive bootcamp. Learn production-ready skills, build real-world projects, and land your dream tech job. Join our next cohort starting February 2025.",
  keywords = "software engineering bootcamp, coding bootcamp, learn programming, software development, tech career, DevReady, career change, software engineer training",
  canonical = "https://www.devready.gr/",
  ogImage = "https://www.devready.gr/assets/logo.webp",
  ogType = "website",
  noindex = false,
}) => {
  const fullTitle = title.includes('DevReady') ? title : `${title} | DevReady`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;

