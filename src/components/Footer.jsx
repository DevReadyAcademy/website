import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
      <p className="text-sm">
        {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
      </p>
      <div className="mt-2 text-sm space-x-4">
        <Link to="/terms" className="hover:underline">{t('terms.title')}</Link>
        <Link to="/privacy" className="hover:underline">{t('privacy.title')}</Link>
      </div>
    </footer>
  );
};

export default Footer;