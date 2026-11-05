import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div role="group" aria-label="Language" className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
      <Globe className="hidden sm:block w-4 h-4 text-muted-foreground" aria-hidden="true" />
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="English"
        lang="en"
        className={`text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
          language === 'en' 
            ? 'text-primary' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground/30">|</span>
      <button
        onClick={() => setLanguage('gr')}
        aria-pressed={language === 'gr'}
        aria-label="Ελληνικά"
        lang="el"
        className={`text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-0.5 rounded transition-colors ${
          language === 'gr' 
            ? 'text-primary' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        ΕΛ
      </button>
    </div>
  );
};

export default LanguageSwitcher;

