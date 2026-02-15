
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowRight, CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button.tsx";
import { useLanguage } from "../contexts/LanguageContext";
import { earlyBirdConfig } from "../config/earlyBird";
import Header from "../components/Header";
import Footer from "../components/Footer";
// @ts-ignore
import SEO from "../components/SEO";

const CvReviewResults = () => {
    const { id } = useParams();
    const { t, language } = useLanguage();
    const [htmlContent, setHtmlContent] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
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
                if (data.firstName) setFirstName(data.firstName);
                if (data.lastName) setLastName(data.lastName);
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
        <div className="min-h-screen flex flex-col bg-slate-50">
            <SEO
                title={`${t('cvReviewPage.resultsTitle')} | DevReady`}
                description={t('cvReviewPage.heroSubtitle')}
                noindex={true}
            />
            <Header />
            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header Section */}
                    <div className="text-center mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                {t('cvReviewPage.resultsTitle')}
                                <span className="block mt-2 w-fit mx-auto px-2.5 py-0.5 text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full">Beta</span>
                                {firstName && <span className="text-primary block mt-2 text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{firstName} {lastName}</span>}
                            </h1>
                        </motion.div>
                    </div>

                    {/* Results Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-16"
                    >
                        {loading && (
                            <div className="p-12 text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                                <p className="text-lg text-slate-600">{t('cvReviewPage.loading')}</p>
                            </div>
                        )}

                        {error && (
                            <div className="p-12 text-center bg-red-50">
                                <p className="text-red-600 text-xl font-medium mb-4">{error}</p>
                                <Button onClick={() => window.location.reload()} variant="outline">
                                    Try Again
                                </Button>
                            </div>
                        )}

                        {htmlContent && (
                            <div className="px-8 pb-8 pt-0 md:px-12 md:pb-12 md:pt-0">
                                <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-slate-900 prose-li:text-slate-700">
                                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* CTA Section */}
                    <section className="py-20 px-4 bg-gradient-subtle w-full rounded-3xl mt-12">
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

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CvReviewResults;
