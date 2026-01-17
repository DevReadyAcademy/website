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
import SEO from "../components/SEO";
import { useLanguage } from "../contexts/LanguageContext";

const Index = () => {
    const { t } = useLanguage();
    
    return (
        <>
            <SEO />
            <div className="min-h-screen">
            <Header/>
            <Hero/>
            {/* <Vision/> */}
            <Pillars/>
            <Course/>
            <Team/>
            <Testimonials/>
            <WhyDifferent/>


            {/* <ComingSoon /> */}
            {/*<Subscribe />*/}

            <footer className="py-8 px-4 border-t border-border/50 text-center text-muted-foreground">
                <p className="text-sm">
                    {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
                </p>
            </footer>
            </div>
        </>
    );
};

export default Index;
