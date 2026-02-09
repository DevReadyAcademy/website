import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const CvReview = () => {
    const [iframeHeight, setIframeHeight] = useState('100%');

    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data && event.data.type === 'resize' && event.data.height) {
                setIframeHeight(`${event.data.height}px`);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <>
            <SEO
                title="CV Review | DevReady"
                description="Get your CV reviewed by industry experts."
            />
            <Header />
            <main className="pt-24 pb-12 min-h-screen flex flex-col bg-gray-50">
                <div className="container mx-auto max-w-5xl px-4 flex-grow flex flex-col">
                    <iframe
                        src="https://lms.devready.gr/cv-review"
                        title="CV Review Tool"
                        className="w-full flex-grow border-0 rounded-xl shadow-lg bg-white transition-all duration-200"
                        style={{ minHeight: iframeHeight === '100%' ? 'calc(100vh - 180px)' : iframeHeight }}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default CvReview;
