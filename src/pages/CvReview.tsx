import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
import Footer from '../components/Footer';
// @ts-ignore
import SEO from '../components/SEO';

const CvReview: React.FC = () => {
    const { t, language } = useLanguage();
    const [iframeHeight, setIframeHeight] = useState<string>('500px');

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === 'resize' && event.data.height) {
                // Trim 30px to remove excess whitespace at the bottom
                setIframeHeight(`${event.data.height - 30}px`);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const seoKeywords = language === 'gr'
        ? "αξιολόγηση βιογραφικού, δωρεάν cv review, έλεγχος βιογραφικού, software engineer cv, προγραμματιστής, καριέρα tech"
        : "cv review, resume review, software engineer resume, tech career, free cv check, devready";

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": t('cvReviewPage.title'),
        "provider": {
            "@type": "Organization",
            "name": "DevReady",
            "url": "https://www.devready.gr"
        },
        "description": t('cvReviewPage.heroSubtitle'),
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
        }
    };

    const benefits = [
        {
            title: t('cvReviewPage.benefits.atsTitle'),
            description: t('cvReviewPage.benefits.atsDescription'),
            icon: (
                <svg aria-hidden="true" className="w-12 h-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: t('cvReviewPage.benefits.recruiterTitle'),
            description: t('cvReviewPage.benefits.recruiterDescription'),
            icon: (
                <svg aria-hidden="true" className="w-12 h-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: t('cvReviewPage.benefits.engineeringTitle'),
            description: t('cvReviewPage.benefits.engineeringDescription'),
            icon: (
                <svg aria-hidden="true" className="w-12 h-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: t('cvReviewPage.benefits.freeTitle'),
            description: t('cvReviewPage.benefits.freeDescription'),
            icon: (
                <svg aria-hidden="true" className="w-12 h-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <SEO
                title={`${t('cvReviewPage.title')} | DevReady`}
                description={t('cvReviewPage.heroSubtitle')}
                keywords={seoKeywords}
                canonical="https://www.devready.gr/cv-review"
                language={language}
                structuredData={structuredData}
            />
            <Header />
            <main className="pt-24 min-h-screen flex flex-col bg-gray-50">
                {/* Hero Section */}
                <section className="px-4 py-12 md:py-20 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            {t('cvReviewPage.heroTitle')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                        >
                            {t('cvReviewPage.heroSubtitle')}
                        </motion.p>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="px-4 pb-16">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            {t('cvReviewPage.benefits.title')}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {benefit.icon}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Cta Section */}
                        <div className="flex justify-center mt-12">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                                        {t('cvReviewPage.startHere')}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[98vh] overflow-y-auto p-0 gap-0 flex flex-col">
                                    <DialogHeader className="px-6 py-4 border-b">
                                        <DialogTitle>{t('cvReviewPage.title')}</DialogTitle>
                                    </DialogHeader>
                                    <div className="bg-gray-50 relative transition-all duration-300 ease-in-out" style={{ height: iframeHeight }}>
                                        <iframe
                                            src="https://my.devready.gr/cv-review"
                                            title="CV Review Tool"
                                            scrolling="no"
                                            className="w-full h-full border-0 block"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default CvReview;
