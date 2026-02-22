import React from 'react';
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
// @ts-ignore
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
    const { t } = useLanguage();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": t('terms.title'),
        "description": t('terms.intro'),
        "url": "https://www.devready.gr/terms-of-service",
        "publisher": {
            "@type": "Organization",
            "name": "DevReady",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.devready.gr/assets/logo-320.webp"
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <SEO
                title={`${t('terms.title')} | DevReady`}
                description="Read our Terms of Service to understand the rules and regulations for using DevReady's website and services."
                canonical="https://www.devready.gr/terms-of-service"
                keywords="terms of service, user agreement, legal, devready terms"
                structuredData={structuredData}
            />
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 pt-24 max-w-4xl">
                <div className="prose max-w-none">
                    <h1 className="text-3xl font-bold mb-4">{t('terms.title')}</h1>
                    <p className="mb-4"><strong>{t('terms.lastUpdated')}</strong></p>
                    <p className="mb-8">{t('terms.intro')}</p>
                    <hr className="my-8 border-gray-200" />

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section1.title')}</h2>
                    <p className="mb-8">{t('terms.section1.content')}</p>

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section2.title')}</h2>
                    <p className="mb-8">{t('terms.section2.content')}</p>

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section3.title')}</h2>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: t('terms.section3.content.item1') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('terms.section3.content.item2') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('terms.section3.content.item3') }} />
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section4.title')}</h2>
                    <p className="mb-8">{t('terms.section4.content')}</p>

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section5.title')}</h2>
                    <p className="mb-8">{t('terms.section5.content')}</p>

                    <h2 className="text-2xl font-semibold mb-4">{t('terms.section6.title')}</h2>
                    <p className="mb-8">{t('terms.section6.content')}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
