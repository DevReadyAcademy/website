import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import earlyBirdConfig from '../config/earlyBird';

const getTimeLeft = () => {
  const diff = new Date(earlyBirdConfig.cohortStartDate) - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CohortCountdown = ({ variant = 'prominent', inverted = false }) => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days, label: t('hero.countdownDays') },
    { value: timeLeft.hours, label: t('hero.countdownHours') },
    { value: timeLeft.minutes, label: t('hero.countdownMinutes') },
    { value: timeLeft.seconds, label: t('hero.countdownSeconds') },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center gap-1.5 mt-4">
        <span className={`text-xs sm:text-sm font-semibold ${inverted ? 'text-white/70' : 'text-muted-foreground'}`}>{t('hero.countdownTitle')}</span>
        <div className="flex gap-2 sm:gap-3">
          {units.map(({ value, label }) => (
            <div key={label} className={`flex flex-col items-center rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 min-w-[2.75rem] sm:min-w-[3.5rem] ${inverted ? 'bg-white/15 border border-white/20' : 'bg-primary/5 border border-primary/15'}`}>
              <span className={`text-base sm:text-lg font-bold tabular-nums leading-none ${inverted ? 'text-white' : 'text-primary'}`}>{String(value).padStart(2, '0')}</span>
              <span className={`text-[9px] sm:text-[10px] font-medium mt-0.5 uppercase ${inverted ? 'text-white/60' : 'text-muted-foreground'}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {t('hero.countdownTitle')}
      </span>
      <div className="flex gap-3 sm:gap-4">
        {units.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[4.5rem] bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm"
          >
            <span className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums leading-none">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CohortCountdown;
