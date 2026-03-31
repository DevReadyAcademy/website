import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
      <div className="container mx-auto max-w-6xl">
        {/* Contact Info + Socials — single row */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6 text-sm">
          <a
            href="mailto:hello@devready.gr"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>hello@devready.gr</span>
          </a>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{t('contact.locationValue')}</span>
          </div>
          <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/company/devreadygr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/devreadygr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/devreadygr/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@devreadygr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Follow us on TikTok"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.63a8.23 8.23 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.04z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@devreadygr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Follow us on YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
          </div>
        </div>

        {/* Copyright + Legal — single row */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
          <span>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</span>
          <Link to="/terms" className="hover:underline">{t('terms.title')}</Link>
          <Link to="/privacy" className="hover:underline">{t('privacy.title')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;