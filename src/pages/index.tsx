import React from "react";
import Hero from "../components/Hero";
import Pillars from "../components/Pillars";
import WhyDifferent from "../components/WhyDifferent";
import Team from "../components/Team";
import Course from "../components/Course";

import ComingSoon from "../components/ComingSoon";
import Vision from "../components/Vision";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
    const { t, language } = useLanguage();

    // Homepage structured data with Organization and WebSite schemas
    const homepageStructuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.devready.gr/#organization",
                "name": "DevReady",
                "url": "https://www.devready.gr/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.devready.gr/assets/logo-320.webp",
                    "width": 320,
                    "height": 320
                },
                "description": "Intensive software engineering accelerator helping aspiring developers transform their careers",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "GR"
                },
                "sameAs": [
                    "https://www.linkedin.com/company/devreadygr",
                    "https://www.instagram.com/devreadygr/"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@devready.gr",
                    "contactType": "customer service"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://www.devready.gr/#website",
                "url": "https://www.devready.gr/",
                "name": "DevReady",
                "description": "Transform your career in software engineering with our intensive accelerator",
                "publisher": {
                    "@id": "https://www.devready.gr/#organization"
                },
                "inLanguage": ["en", "el"]
            }
        ]
    };

    return (
        <>
            <SEO
                language={language}
                structuredData={homepageStructuredData}
            />
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <div className="min-h-screen">
                <Header />
                <main id="main-content">
                    <Hero />
                    {/* <Vision/> */}
                    <Pillars />
                    <Course />
                    <Team />
                    <Testimonials />
                    <WhyDifferent />
                </main>

                {/* <ComingSoon /> */}
                {/*<Subscribe />*/}

                <Footer />
            </div >
        </>
    );
};

export default Index;
