import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
import Footer from '../components/Footer';
// @ts-ignore
import SEO from '../components/SEO';

const CvReview: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
            <SEO
                title="CV Review | DevReady"
                description="Το εργαλείο αξιολόγησης βιογραφικού δεν είναι διαθέσιμο αυτή τη στιγμή."
                canonical="https://www.devready.gr/cv-review"
                language={language}
            />
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
                Skip to main content
            </a>
            <Header />
            <main id="main-content" className="pt-32 min-h-screen flex flex-col bg-gray-50">
                <section className="px-4 py-12 md:py-20 text-center flex-1 flex items-center justify-center">
                    <div className="container mx-auto max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-10 md:p-14 rounded-2xl shadow-sm"
                        >
                            <svg aria-hidden="true" className="w-16 h-16 text-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Το CV-Reviewer tool δεν είναι πλεον διαθέσιμο
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Το αυτοματοποιημένο εργαλείο αξιολόγησης βιογραφικού δεν υποστηρίζεται αυτή τη στιγμή.
                                Αν θέλετε μια εξατομικευμένη αξιολόγηση του βιογραφικού σας, μη διστάσετε να επικοινωνήσετε μαζί μας!
                            </p>
                            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                <Link to="/contact">
                                    Επικοινωνήστε μαζί μας
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CvReview;
