import React from 'react';
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 pt-24 max-w-4xl">
                <div className="prose max-w-none">
                    <h1 className="text-3xl font-bold mb-4">{t('privacy.title')}</h1>
                    <p className="mb-4"><strong>{t('privacy.lastUpdated')}</strong></p>
                    <p className="mb-8">{t('privacy.intro')}</p>
                    <hr className="my-8 border-gray-200" />

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section1.title')}</h2>
                    <p className="mb-4">{t('privacy.section1.content')}</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section1.list.item1') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section1.list.item2') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section1.list.item3') }} />
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section2.title')}</h2>

                    <h3 className="text-xl font-medium mb-2">{t('privacy.section2.subsectionA.title')}</h3>
                    <p className="mb-6">{t('privacy.section2.subsectionA.content')}</p>

                    <h3 className="text-xl font-medium mb-2">{t('privacy.section2.subsectionB.title')}</h3>
                    <p className="mb-4">{t('privacy.section2.subsectionB.content')}</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.subsectionB.list.item1') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.subsectionB.list.item2') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section2.subsectionB.list.item3') }} />
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section3.title')}</h2>
                    <p className="mb-4">{t('privacy.section3.content')}</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section3.list.item1') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('privacy.section3.list.item2') }} />
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section4.title')}</h2>
                    <p className="mb-8" dangerouslySetInnerHTML={{ __html: t('privacy.section4.content') }} />

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section5.title')}</h2>
                    <p className="mb-8">{t('privacy.section5.content')}</p>

                    <h2 className="text-2xl font-semibold mb-4">{t('privacy.section6.title')}</h2>
                    <p className="mb-8">{t('privacy.section6.content')}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
