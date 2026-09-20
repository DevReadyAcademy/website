import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BookingConfirmed = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={t('contact.bookingCompletedTitle')}
        description={t('contact.bookingCompletedBody')}
        canonical="https://www.devready.gr/booking-confirmed"
        language={language}
        noindex
      />
      <div className="min-h-screen bg-background pt-28 flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-12 sm:py-20 bg-gradient-to-b from-primary/10 to-transparent">
          <section className="max-w-3xl mx-auto rounded-2xl border border-border/50 shadow-elegant bg-card p-6 sm:p-12 text-center">
            <div className="text-5xl mb-4" aria-hidden="true">🎉</div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-primary">
              {t('contact.bookingCompletedSuccess')}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              {t('contact.bookingCompletedTitle')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t('contact.bookingCompletedBody')}
            </p>
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground h-auto whitespace-normal px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
              <Link to="/accelerator">
                {t('contact.bookingCompletedCta')}
                <ArrowRight className="w-5 h-5 ml-2 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BookingConfirmed;
