
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { earlyBirdConfig } from "../config/earlyBird";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CvReviewResults = () => {
    const { id } = useParams();
    const { t, language } = useLanguage();
    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`https://api.devready.gr/cv-review/results/${id}`);
                if (response.status === 404) {
                    throw new Error(t('cvReviewPage.errorNotFound'));
                }
                if (!response.ok) {
                    throw new Error(t('cvReviewPage.errorGeneric'));
                }
                const data = await response.json();
                const html = (data.results || '').replace(/\\n/g, ''); // Remove escaped newlines if present
                const cleanHtml = html.replace(/\n/g, ''); // Remove actual newlines
                setHtmlContent(cleanHtml);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchResults();
        }
    }, [id, t]);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 pt-24 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-8 text-center text-primary">{t('cvReviewPage.resultsTitle')}</h1>
                {loading && <div className="text-xl">{t('cvReviewPage.loading')}</div>}
                {error && <div className="text-red-500 text-xl text-center font-medium">{error}</div>}
                {htmlContent && (
                    <div
                        className="prose max-w-none w-full bg-white p-8 rounded-lg shadow-md"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                )}
                <section className="py-20 px-4 bg-gradient-subtle w-full">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center p-12 rounded-3xl bg-gradient-primary text-primary-foreground shadow-2xl">
                            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                                ⏰ {earlyBirdConfig.getSpotsLeftText(language)} {language === 'gr' ? 'στα' : 'at'} {earlyBirdConfig.earlyBirdPrice}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                {t('accelerator.finalCtaTitle')}
                            </h2>
                            <p className="text-xl opacity-90 mb-2 max-w-2xl mx-auto">
                                {t('accelerator.finalCtaDescription')}
                            </p>
                            <p className="text-base opacity-80 mb-8 max-w-2xl mx-auto">
                                {t('accelerator.finalCtaPricing')}
                            </p>
                            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg">
                                <Link to="/contact">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {t('common.bookCall')}
                                </Link>
                            </Button>
                            <p className="text-sm opacity-80 mt-6">
                                {t('accelerator.finalCtaNote')}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CvReviewResults;
