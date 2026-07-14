import { useEffect, useRef, useState } from "react";
import { ArrowDown, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const { t, language } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [whyTooShort, setWhyTooShort] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  // Load Calendly widget and tracking ONLY after form is submitted
  useEffect(() => {
    if (!formSubmitted) return;

    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly event scheduled
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        // Generate a unique eventID for Meta deduplication (client + server)
        const eventID = `cal_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

        // Google Analytics
        if (typeof window !== "undefined" && "gtag" in window) {
          const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag;
          gtag("event", "booked_a_call", {
            event_category: "engagement",
            event_label: "calendly",
          });
        }
        // Meta Pixel (client-side — may be blocked by ad blockers)
        if (typeof window !== "undefined" && "fbq" in window) {
          const fbq = (window as typeof window & { fbq: (...args: unknown[]) => void }).fbq;
          fbq("track", "Schedule", {
            content_name: "Book a Call",
            content_category: "calendly",
          }, { eventID });
        }
        // Server-side Meta CAPI (first-party request — NOT blocked by ad blockers)
        const getCookie = (name: string) =>
          document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))?.[1] || "";

        // Get fbc: prefer cookie, fallback to localStorage backup from fbclid capture
        let fbcValue = getCookie("_fbc");
        if (!fbcValue) {
          try { fbcValue = localStorage.getItem("_fbc_backup") || ""; } catch {}
        }

        const trackingPayload = JSON.stringify({
          eventID,
          fbp: getCookie("_fbp"),
          fbc: fbcValue,
          sourceUrl: window.location.href,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/track-booking", new Blob([trackingPayload], { type: "application/json" }));
        } else {
          fetch("/api/track-booking", { method: "POST", body: trackingPayload, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
        }
        // TikTok Pixel
        if (typeof window !== "undefined" && "ttq" in window) {
          const ttq = (window as typeof window & { ttq: { track: (...args: unknown[]) => void } }).ttq;
          ttq.track("SubmitForm", {
            content_name: "Book a Call",
          });
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Smooth scroll to Calendly widget
    setTimeout(() => {
      calendlyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [formSubmitted]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setWhyTooShort(false);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const why = formData.get("why") as string;

    // Client-side validation for textarea min length
    if (why.trim().length < 20) {
      setWhyTooShort(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, why }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormSubmitted(true);
    } catch {
      setFormError(t("contact.gateFormError"));
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="min-h-screen bg-background pt-28">
        <Header />
        <main id="main-content" className="px-3 sm:px-4">
          <div className="bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pt-10 sm:pt-16 pb-8 sm:pb-12">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                  {t('contact.pageTitle')}
                </h1>
                <p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto font-medium px-2">
                  {t('contact.pageSubtitle')}
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-6xl pb-10 sm:pb-16">

            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto animate-fade-in">
              {/* Book a Call — Gated by Form */}
              <section className="flex flex-col rounded-2xl overflow-hidden shadow-elegant border border-border/50" aria-label={t('contact.enrollTitle')}>
                <div className="bg-gradient-primary p-4 sm:p-6 text-center text-primary-foreground">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('contact.enrollTitle')}</h2>
                  <p className="opacity-90 mb-3 text-sm sm:text-base">{t('contact.enrollDescription')}</p>
                  <ArrowDown className="w-7 h-7 mx-auto animate-bounce" aria-hidden="true" />
                </div>

                {!formSubmitted ? (
                  /* Qualification Form */
                  <div className="p-4 sm:p-8 bg-card">
                    <div className="text-center mb-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('contact.gateFormTitle')}</h3>
                      <p className="text-sm text-muted-foreground">{t('contact.gateFormSubtitle')}</p>
                    </div>
                    <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="gate-name" className="block text-sm font-medium mb-1.5">
                          {t('contact.gateNameLabel')}
                        </label>
                        <input
                          id="gate-name"
                          name="name"
                          type="text"
                          required
                          placeholder={t('contact.gateNamePlaceholder')}
                          className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="gate-email" className="block text-sm font-medium mb-1.5">
                          {t('contact.gateEmailLabel')}
                        </label>
                        <input
                          id="gate-email"
                          name="email"
                          type="email"
                          required
                          placeholder={t('contact.gateEmailPlaceholder')}
                          className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="gate-phone" className="block text-sm font-medium mb-1.5">
                          {t('contact.gatePhoneLabel')}
                        </label>
                        <input
                          id="gate-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder={t('contact.gatePhonePlaceholder')}
                          className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        />
                      </div>

                      {/* Why do you want to join */}
                      <div>
                        <label htmlFor="gate-why" className="block text-sm font-medium mb-1.5">
                          {t('contact.gateWhyLabel')}
                        </label>
                        <textarea
                          id="gate-why"
                          name="why"
                          required
                          minLength={20}
                          rows={4}
                          placeholder={t('contact.gateWhyPlaceholder')}
                          onChange={() => whyTooShort && setWhyTooShort(false)}
                          className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none ${whyTooShort ? 'border-red-500' : 'border-border/50'}`}
                        />
                        {whyTooShort && (
                          <p className="text-red-500 text-xs mt-1">Please write at least 20 characters.</p>
                        )}
                      </div>

                      {/* Error message */}
                      {formError && (
                        <p className="text-red-500 text-sm text-center">{formError}</p>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full text-base font-semibold"
                      >
                        {isSubmitting ? t('contact.gateSubmitting') : t('contact.gateSubmitButton')}
                      </Button>
                    </form>
                  </div>
                ) : (
                  /* Calendly Widget — shown after form submission */
                  <div ref={calendlyRef}>
                    <div className="bg-green-50 dark:bg-green-950/30 p-4 text-center">
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm sm:text-base">
                        {t('contact.gateFormSuccess')}
                      </p>
                    </div>
                    <div role="region" aria-label="Book a call calendar">
                      <div
                        className="calendly-inline-widget min-w-[280px] h-[500px] sm:h-[630px]"
                        data-url="https://calendly.com/hello-devready/20min?primary_color=363fec"
                      />
                    </div>
                  </div>
                )}
              </section>

              {/* Contact Information */}
              <section className="rounded-2xl border border-border/50 shadow-elegant bg-card overflow-hidden" aria-label={t('contact.connectTitle')}>
                <div className="px-4 sm:px-6 pt-4 pb-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-center">{t('contact.connectTitle')}</h2>
                </div>
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 space-y-4">
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <a
                      href="mailto:hello@devready.gr"
                      className="group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:bg-primary/5 hover:scale-105 transition-all flex-1 min-w-0"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-sm">{t('contact.email')}</h3>
                        <p className="text-muted-foreground text-xs mt-0.5">hello@devready.gr</p>
                      </div>
                    </a>
                    <div className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:bg-primary/5 hover:scale-105 transition-all flex-1 min-w-0">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-sm">{t('contact.location')}</h3>
                        <p className="text-muted-foreground text-xs mt-0.5">{t('contact.locationValue')}</p>
                      </div>
                    </div>
                  </div>
                  <nav className="pt-2" aria-label="Social media links">
                    <h3 className="font-medium text-sm text-center mb-3 sm:mb-4">{t('contact.followUs')}</h3>
                    <div className="flex justify-center gap-1.5 sm:gap-2">
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
                  </nav>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
