import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, Send, Linkedin, Instagram, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/SEO";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
          description="Ready to transform your career? Contact DevReady to learn more about our software engineering bootcamp, ask questions, or secure your spot in the next cohort. We're here to help!"
          keywords="contact DevReady, bootcamp enrollment, software engineering questions, apply to bootcamp, tech career help"
          canonical="https://www.devready.gr/contact"
        />
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="py-6 px-4 border-b border-border/50">
          <div className="container mx-auto max-w-6xl flex items-center justify-between">
            <Link
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('contact.backToHome')}
            </Link>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {t('common.brandName')}
          </span>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
                {t('contact.pageTitle')}
              </h1>
              <p className="text-lg text-foreground max-w-2xl mx-auto mb-2 font-medium">
                {t('contact.pageSubtitle')}
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t('contact.pageDescription')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-elegant animate-fade-in">
                <h2 className="text-2xl font-semibold mb-2">{t('contact.formTitle')}</h2>
                <p className="text-muted-foreground mb-6 text-sm">
                  {t('contact.formDescription')}
                </p>
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
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
                    <div className="space-y-2">
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
                  <div className="space-y-2">
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
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.formMessage')}</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.formMessagePlaceholder')}
                        rows={5}
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

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
                {/* PRIMARY CTA - Enrollment */}
                <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-lg">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4">
                    {t('contact.enrollBadge')}
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{t('contact.enrollTitle')}</h2>
                  <p className="opacity-90 mb-6">
                    {t('contact.enrollDescription')}
                  </p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 shadow-lg" size="lg">
                    <a
                        href="https://calendar.app.google/BxXRiBy4UHgZUaGcA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {t('contact.enrollCta')}
                    </a>
                  </Button>
                  <p className="text-sm opacity-80 mt-4 text-center">
                    {t('contact.enrollNote')}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-elegant">
                  <h2 className="text-2xl font-semibold mb-6">{t('contact.connectTitle')}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{t('contact.email')}</h3>
                        <a
                            href="mailto:hello@devready.gr"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@devready.gr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{t('contact.location')}</h3>
                        <p className="text-muted-foreground">{t('contact.locationValue')}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">{t('contact.followUs')}</h3>
                      <div className="flex gap-3">
                        <a
                            href="#"
                            className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
          <p className="text-sm">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
        </footer>
        </div>
      </>
  );
};

export default Contact;
