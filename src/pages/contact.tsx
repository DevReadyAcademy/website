import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDown, Send } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { useLanguage } from "../contexts/LanguageContext";
import InterestDialog from "../components/InterestDialog";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          to_email: "hello@devready.gr",
          from_name: formData.name,
          subject: `Contact Form: ${formData.subject}`,
          message: formData.message,
          email: formData.email,
          // Additional fields for better email formatting
          name: formData.name,
          reply_to: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Message sent successfully!",
          description: "Thank you for reaching out. We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
                    data-url="https://calendly.com/hello-devready/30min?hide_event_type_details=1&hide_gdpr_banner=1"
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

                {/* Card B: Contact Form */}
                <div className="rounded-2xl border border-border/50 shadow-elegant bg-card p-6">
                  <h2 className="text-xl font-semibold mb-1">{t('contact.formTitle')}</h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {t('contact.formDescription')}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">{t('contact.formName')}</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t('contact.formNamePlaceholder')}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">{t('contact.formEmail')}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={t('contact.formEmailPlaceholder')}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject">{t('contact.formSubject')}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t('contact.formSubjectPlaceholder')}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message">{t('contact.formMessage')}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.formMessagePlaceholder')}
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        t('contact.formSending')
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t('contact.formSubmit')}
                        </>
                      )}
                    </Button>
                  </form>
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
