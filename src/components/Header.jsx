import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Scroll spy - detect which section is in view
      if (location.pathname === '/') {
        const sections = ['hero', 'pillars', 'team', 'testimonials', 'why-different'];
        const scrollPosition = window.scrollY + 100; // Offset for header

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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

  const handleNavClick = (item) => {
    if (item.type === 'scroll') {
      if (location.pathname === '/') {
        // Already on home - smooth scroll
        scrollToSection(item.id);
      } else {
        // On different page - navigate to home with hash
        navigate('/');
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
    setMobileMenuOpen(false);
  };

  const isActivePage = (item) => {
    if (item.type === 'link') {
      return location.pathname === item.path;
    }
    if (item.type === 'scroll') {
      // On homepage, check if this section is active
      if (location.pathname === '/') {
        return activeSection === item.id;
      }
    }
    return false;
  };

  const navItems = [
    { name: t('header.home'), id: 'hero', type: 'scroll' },
    { name: t('header.ourApproach'), id: 'pillars', type: 'scroll' },
    { name: t('header.accelerator'), path: '/accelerator', type: 'link' },
    { name: t('header.team'), id: 'team', type: 'scroll' },
    { name: t('header.testimonials'), id: 'testimonials', type: 'scroll' },
    { name: t('header.whyDifferent'), id: 'why-different', type: 'scroll' },
    { name: t('header.devpress'), path: '/devpress', type: 'link' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${scrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`} role="banner">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-shrink-0"
          >
            <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label={`${t('common.brandName')} - Go to homepage`}>
              <img 
                src="/assets/logo-80.webp"
                srcSet="/assets/logo-80.webp 80w, /assets/logo-120.webp 120w, /assets/logo-320.webp 320w"
                sizes="(max-width: 640px) 32px, 80px"
                alt={`${t('common.brandName')} logo`}
                className="h-8 w-8 sm:h-10 sm:w-10"
                width="80"
                height="80"
                loading="eager"
                fetchPriority="high"
              />
              <span className="text-lg sm:text-2xl font-bold text-foreground" aria-hidden="true">
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
                  className={`text-sm font-medium transition-colors relative ${
                    isActivePage(item) 
                      ? 'text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActivePage(item) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-medium transition-colors relative ${
                    isActivePage(item) 
                      ? 'text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-current={isActivePage(item) ? 'location' : undefined}
                  aria-label={`${item.name}${isActivePage(item) ? ' (current section)' : ''}`}
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
            className="lg:hidden p-2 -mr-2 flex-shrink-0"
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
            className="lg:hidden py-3 space-y-1 bg-background border-t border-border/50"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActivePage(item)
                      ? 'text-foreground bg-accent font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  aria-current={isActivePage(item) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActivePage(item)
                      ? 'text-foreground bg-accent font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                  aria-current={isActivePage(item) ? 'location' : undefined}
                  aria-label={`${item.name}${isActivePage(item) ? ' (current section)' : ''}`}
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="px-4 pt-4 pb-2">
              <Button 
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 shadow-lg"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
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