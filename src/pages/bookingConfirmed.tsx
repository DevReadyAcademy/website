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
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-primary">
              {t('contact.bookingCompletedTitle')}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t('contact.bookingCompletedBody')}
            </p>
            <Button asChild size="lg" className="h-auto whitespace-normal text-base font-semibold">
              <a href="https://www.devready.gr/accelerator">{t('contact.bookingCompletedCta')}</a>
            </Button>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BookingConfirmed;
