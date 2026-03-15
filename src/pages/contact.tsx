import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { useLanguage } from "../contexts/LanguageContext";
import InterestDialog from "../components/InterestDialog";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const Contact = () => {
  const { t, language } = useLanguage();
  const [interestOpen, setInterestOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly event scheduled
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        if (typeof window !== "undefined" && "gtag" in window) {
          const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag;
          gtag("event", "booked_a_call", {
            event_category: "engagement",
            event_label: "calendly",
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with DevReady"
        description="Ready to transform your career? Contact DevReady to learn more about our software engineering accelerator, ask questions, or secure your spot in the next cohort. We're here to help!"
        keywords="contact DevReady, accelerator enrollment, software engineering questions, apply to accelerator, tech career help"
        canonical="https://www.devready.gr/contact"
        language={language}
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
        Skip to main content
      </a>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="py-4 sm:py-6 px-3 sm:px-4 border-b border-border/50">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm sm:text-base">{t('contact.backToHome')}</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <img
                src="/assets/logo-80.webp"
                srcSet="/assets/logo-80.webp 80w, /assets/logo-120.webp 120w, /assets/logo-320.webp 320w"
                sizes="(max-width: 640px) 32px, 80px"
                alt={`${t('common.brandName')} logo`}
                className="h-8 w-8 sm:h-10 sm:w-10"
                width="80"
                height="80"
                loading="eager"
              />
              <span className="text-base sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {t('common.brandName')}
              </span>
            </div>
          </div>
        </header>
        <main id="main-content" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('contact.pageTitle')}
              </h1>
              <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
                {t('contact.pageSubtitle')}
              </p>
            </div>

            <InterestDialog open={interestOpen} onOpenChange={setInterestOpen} />

            <div className="grid lg:grid-cols-2 gap-6 animate-fade-in">
              {/* Left column: Enrollment CTA + Calendly (single merged card) */}
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-elegant border border-border/50">
                <div className="bg-gradient-primary p-6 text-center text-primary-foreground">
                  <h2 className="text-2xl font-bold mb-2">{t('contact.enrollTitle')}</h2>
                  <p className="opacity-90 mb-3">{t('contact.enrollDescription')}</p>
                  <ArrowDown className="w-5 h-5 mx-auto animate-bounce" />
                </div>
                <div className="flex-1">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/hello-devready/30min"
                    style={{ minWidth: "280px", height: "700px" }}
                  />
                </div>
              </div>

              {/* Right column: 3 separate cards */}
              <div className="space-y-4">
                {/* Card A: Express Interest CTA */}
                <div className="rounded-2xl border border-border/50 shadow-elegant bg-primary/5 p-6 text-center">
                  <h2 className="text-xl font-bold mb-2 text-foreground">{t('contact.interestTitle')}</h2>
                  <p className="text-muted-foreground mb-4 text-sm">{t('contact.interestDescription')}</p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setInterestOpen(true)}
                  >
                    {t('contact.interestCta')}
                  </Button>
                </div>

                {/* Card B: Contact Information */}
                <div className="rounded-2xl border border-border/50 shadow-elegant bg-card overflow-hidden">
                  <div className="px-6 pt-4 pb-1">
                    <h2 className="text-xl font-semibold text-center">{t('contact.connectTitle')}</h2>
                  </div>
                  <div className="px-6 pb-6 pt-2 space-y-4">
                    <div className="flex justify-center gap-2">
                      <a
                        href="mailto:hello@devready.gr"
                        className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:bg-primary/5 hover:scale-105 transition-all w-40"
                      >
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium text-sm">{t('contact.email')}</h3>
                          <p className="text-muted-foreground text-xs mt-0.5">hello@devready.gr</p>
                        </div>
                      </a>
                      <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:bg-primary/5 hover:scale-105 transition-all w-40">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium text-sm">{t('contact.location')}</h3>
                          <p className="text-muted-foreground text-xs mt-0.5">{t('contact.locationValue')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-medium text-sm text-center mb-4">{t('contact.followUs')}</h3>
                      <div className="flex justify-center gap-2">
                        <a
                          href="https://www.linkedin.com/company/devreadygr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                          aria-label="Follow us on LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.instagram.com/devreadygr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                          aria-label="Follow us on Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.facebook.com/devreadygr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                          aria-label="Follow us on Facebook"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.tiktok.com/@devreadygr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                          aria-label="Follow us on TikTok"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.63a8.23 8.23 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.04z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com/@devreadygr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                          aria-label="Follow us on YouTube"
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
