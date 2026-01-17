import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: t('header.home'), id: 'hero', type: 'scroll' },
    { name: t('header.ourApproach'), id: 'pillars', type: 'scroll' },
    { name: t('header.bootcamp'), path: '/bootcamp', type: 'link' },
    { name: t('header.testimonials'), id: 'testimonials', type: 'scroll' },
    { name: t('header.team'), id: 'team', type: 'scroll' },
    { name: t('header.whyDifferent'), id: 'why-different', type: 'scroll' },
    { name: t('header.devpress'), path: '/devpress', type: 'link' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`} role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/logo-80.webp"
                srcSet="/assets/logo-80.webp 80w, /assets/logo-120.webp 120w, /assets/logo-320.webp 320w"
                sizes="(max-width: 640px) 40px, 80px"
                alt={t('common.brandName')} 
                className="h-10 w-auto"
                width="80"
                height="80"
                loading="eager"
                fetchPriority="high"
              />
              <span className="text-2xl font-bold text-foreground hidden sm:inline">
                {t('common.brandName')}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              )
            ))}
            {/* <LanguageSwitcher /> */}
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Link to="/contact">
                {t('common.enrollNow')}
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 space-y-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="px-4 pt-2 space-y-3">
              {/* <div className="flex justify-center">
                <LanguageSwitcher />
              </div> */}
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 shadow-lg"
              >
                <Link to="/contact">
                  {t('common.enrollNow')}
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;