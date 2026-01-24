import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import enRaw from '../translations/en.json';
import grRaw from '../translations/gr.json';
import { injectEarlyBirdValues } from '../utils/translationHelpers';

type Language = 'en' | 'gr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Process translations with early bird values injected
const rawTranslations: Record<Language, any> = {
  en: enRaw,
  gr: grRaw,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to 'gr'
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'gr') ? saved : 'gr';
  });

  // Process translations with early bird values injected
  const translations = useMemo(() => {
    return {
      en: injectEarlyBirdValues(rawTranslations.en, 'en'),
      gr: injectEarlyBirdValues(rawTranslations.gr, 'gr'),
    };
  }, []); // Empty dependency array since early bird config is static

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    // Return the value as-is (string, array, or object)
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

