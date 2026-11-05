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

// Only an explicit choice from the language switcher is persisted. The old
// 'language' key was written automatically on every visit (always 'gr'), so it
// is ignored and cleaned up.
const CHOICE_STORAGE_KEY = 'languageChoice';
const LEGACY_STORAGE_KEY = 'language';
const GREEK_TIMEZONES = ['Europe/Athens', 'Asia/Nicosia', 'Asia/Famagusta'];

const readStoredChoice = (): Language | null => {
  try {
    const saved = localStorage.getItem(CHOICE_STORAGE_KEY);
    return saved === 'en' || saved === 'gr' ? saved : null;
  } catch {
    return null;
  }
};

// Greek if the browser prefers Greek, or if the visitor is in Greece/Cyprus
// (many Greeks run their browser in English). Everyone else gets English.
const detectLanguage = (): Language => {
  try {
    const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
    if (langs.some((l) => l?.toLowerCase().startsWith('el'))) return 'gr';
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && GREEK_TIMEZONES.includes(tz)) return 'gr';
  } catch {
    // fall through
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(
    () => readStoredChoice() ?? detectLanguage()
  );

  // Process translations with early bird values injected
  const translations = useMemo(() => {
    return {
      en: injectEarlyBirdValues(rawTranslations.en, 'en'),
      gr: injectEarlyBirdValues(rawTranslations.gr, 'gr'),
    };
  }, []); // Empty dependency array since early bird config is static

  useEffect(() => {
    document.documentElement.lang = language === 'gr' ? 'el' : 'en';
  }, [language]);

  useEffect(() => {
    try {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(CHOICE_STORAGE_KEY, lang);
    } catch {
      // ignore (private mode, blocked storage)
    }
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

