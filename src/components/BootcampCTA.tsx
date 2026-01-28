import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const BootcampCTA = () => {
  const { t } = useLanguage();

  return (
    <aside className="p-8 bg-gradient-primary rounded-xl text-center text-primary-foreground" aria-label={t('devpress.callToAction')}>
      <h2 className="text-2xl font-bold mb-4">
        {t('devpress.readyToTakeNextStep')}
      </h2>
      <p className="mb-6 opacity-90">
        {t('devpress.bootcampCTA')}
      </p>
      <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
        <Link to="/bootcamp">
          {t('devpress.viewProgram')}
        </Link>
      </Button>
    </aside>
  );
};

export default BootcampCTA;
