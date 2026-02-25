import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// @ts-ignore
import SEO from '../components/SEO';
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CATEGORY_KEYS = ['internet', 'language', 'git', 'databases', 'apis', 'security', 'tools'] as const;
const TOTAL_ITEMS = 30;

function getBaseMonths(score: number): number | null {
    if (score === 100) return null;
    if (score <= 20) return 18;
    if (score <= 35) return 14;
    if (score <= 50) return 10;
    if (score <= 65) return 7;
    if (score <= 80) return 4;
    if (score <= 90) return 2;
    return 1;
}

function getScoreHeadlineKey(score: number): string {
    if (score === 100) return 'ready';
    if (score >= 91) return 'veryHigh';
    if (score >= 66) return 'high';
    if (score >= 36) return 'mid';
    if (score >= 21) return 'low';
    return 'veryLow';
}

function getScoreColor(score: number): string {
    if (score >= 80) return '#22c55e';
    if (score >= 50) return 'hsl(var(--primary))';
    if (score >= 30) return '#f59e0b';
    return '#ef4444';
}

const ReadinessQuiz: React.FC = () => {
    const { t, language } = useLanguage();
    const [step, setStep] = useState(0);
    const [checked, setChecked] = useState<Record<string, boolean>>({});

    const totalChecked = Object.values(checked).filter(Boolean).length;
    const scorePercent = Math.round((totalChecked / TOTAL_ITEMS) * 100);
    const baseMonths = getBaseMonths(scorePercent);
    const devreadyMonths = baseMonths !== null ? Math.round(baseMonths * 0.75) : null;
    const savings = baseMonths !== null && devreadyMonths !== null ? baseMonths - devreadyMonths : null;

    const toggleItem = (id: string) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const currentCategoryKey = step >= 1 && step <= 7 ? CATEGORY_KEYS[step - 1] : null;

    const getCategoryItems = (key: string): string[] => {
        const items = t(`readinessQuiz.categories.${key}.items`);
        return Array.isArray(items) ? items : [];
    };

    const categorySummary = CATEGORY_KEYS.map(key => {
        const items = getCategoryItems(key);
        const total = items.length;
        const done = items.filter((_, idx) => !!checked[`${key}-${idx}`]).length;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;
        return { key, total, done, pct };
    });

    const seoKeywords = language === 'gr'
        ? "backend developer skills, readiness quiz, πόσο έτοιμος είμαι για developer job, backend roadmap, devready"
        : "backend developer quiz, readiness assessment, backend skills checklist, how ready am I for a developer job, devready";

    const stepLabel = (t('readinessQuiz.steps.stepOf') as string)
        .replace('{current}', String(step))
        .replace('{total}', '7');

    const scoreHeadline = t(`readinessQuiz.results.scoreHeadlines.${getScoreHeadlineKey(scorePercent)}`) as string;
    const scoreColor = getScoreColor(scorePercent);

    return (
        <>
            <SEO
                title={t('readinessQuiz.pageTitle')}
                description={t('readinessQuiz.pageDescription')}
                keywords={seoKeywords}
                canonical="https://www.devready.gr/readiness-quiz"
                language={language}
            />
            <Header />
            <main className="pt-24 min-h-screen bg-gray-50">
                <div className={`container mx-auto px-4 py-12 transition-all duration-300 ${step === 8 ? 'max-w-3xl' : 'max-w-2xl'}`}>

                    {/* Step indicator */}
                    {step >= 1 && step <= 7 && (
                        <div className="flex justify-center gap-2 mb-10">
                            {CATEGORY_KEYS.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                        i + 1 <= step ? 'bg-primary' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Intro */}
                    {step === 0 && (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="intro"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center"
                            >
                                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
                                    {t('readinessQuiz.intro.badge')}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                    {t('readinessQuiz.intro.title')}
                                </h1>
                                <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
                                    {t('readinessQuiz.intro.subtitle')}
                                </p>
                                <Button
                                    size="lg"
                                    className="text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                    onClick={() => setStep(1)}
                                >
                                    {t('readinessQuiz.intro.startButton')}
                                </Button>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {/* Quiz steps */}
                    {step >= 1 && step <= 7 && currentCategoryKey && (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.25 }}
                            >
                                <p className="text-sm text-gray-500 mb-1">{stepLabel}</p>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    {t(`readinessQuiz.categories.${currentCategoryKey}.title`)}
                                </h2>

                                <div className="space-y-3 mb-10">
                                    {getCategoryItems(currentCategoryKey).map((item, idx) => {
                                        const id = `${currentCategoryKey}-${idx}`;
                                        return (
                                            <label
                                                key={id}
                                                htmlFor={id}
                                                className={`flex items-start gap-3 p-4 bg-white rounded-xl border cursor-pointer transition-colors ${
                                                    checked[id]
                                                        ? 'border-primary/50 bg-primary/5'
                                                        : 'border-gray-200 hover:border-primary/30'
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={id}
                                                    checked={!!checked[id]}
                                                    onChange={() => toggleItem(id)}
                                                    className="mt-0.5 w-5 h-5 rounded border-gray-300 accent-primary cursor-pointer shrink-0"
                                                />
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </label>
                                        );
                                    })}
                                </div>

                                <div className="flex justify-between">
                                    <Button variant="outline" onClick={() => setStep(s => s - 1)}>
                                        {t('readinessQuiz.steps.previous')}
                                    </Button>
                                    <Button onClick={() => setStep(s => s + 1)}>
                                        {step === 7 ? t('readinessQuiz.steps.seeResults') : t('readinessQuiz.steps.next')}
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {/* Results */}
                    {step === 8 && (
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* ── Score hero ── */}
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-5">
                                    <ScoreCircle score={scorePercent} label={t('readinessQuiz.results.scoreLabel') as string} color={scoreColor} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">{scoreHeadline}</h2>
                            </div>

                            {/* ── Timeline comparison ── */}
                            {baseMonths !== null ? (
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                                        {t('readinessQuiz.results.timelineTitle')}
                                    </p>

                                    {/* Without DevReady row */}
                                    <div className="mb-4">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <span className="text-sm font-medium text-gray-400">
                                                {t('readinessQuiz.results.withoutDevReady')}
                                            </span>
                                            <span className="text-sm font-bold text-gray-400 tabular-nums">
                                                {baseMonths} {t('readinessQuiz.results.months')}
                                            </span>
                                        </div>
                                        <div className="h-10 w-full bg-gray-100 rounded-lg" />
                                    </div>

                                    {/* With DevReady row */}
                                    <div className="mb-5">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <span className="text-sm font-semibold text-primary">
                                                {t('readinessQuiz.results.withDevReady')}
                                            </span>
                                            <span className="text-sm font-bold text-primary tabular-nums">
                                                {devreadyMonths} {t('readinessQuiz.results.months')}
                                            </span>
                                        </div>
                                        {/* Bar: primary portion + green "saved" portion together = 100% */}
                                        <div className="h-10 w-full bg-gray-100 rounded-lg overflow-hidden flex">
                                            <motion.div
                                                className="h-full bg-primary flex items-center justify-end pr-3 shrink-0"
                                                style={{ width: `${(devreadyMonths! / baseMonths) * 100}%` }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(devreadyMonths! / baseMonths) * 100}%` }}
                                                transition={{ duration: 0.9, ease: 'easeOut' }}
                                            >
                                                <span className="text-white text-xs font-bold whitespace-nowrap hidden sm:block">
                                                    {devreadyMonths} {t('readinessQuiz.results.months')}
                                                </span>
                                            </motion.div>
                                            {savings !== null && savings > 0 && (
                                                <motion.div
                                                    className="h-full bg-green-400 flex items-center justify-center shrink-0"
                                                    style={{ width: `${(savings / baseMonths) * 100}%` }}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(savings / baseMonths) * 100}%` }}
                                                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
                                                >
                                                    <span className="text-white text-xs font-bold whitespace-nowrap hidden sm:block">
                                                        -{savings}
                                                    </span>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Savings callout */}
                                    {savings !== null && savings > 0 && (
                                        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-4">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="text-green-700 font-semibold text-sm">
                                                {(t('readinessQuiz.results.savingsBadge') as string).replace('{months}', String(savings))}
                                            </p>
                                        </div>
                                    )}

                                    {/* Legend */}
                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <div className="w-3 h-3 rounded-sm bg-primary" />
                                            <span>{t('readinessQuiz.results.withDevReady')}</span>
                                        </div>
                                        {savings !== null && savings > 0 && (
                                            <div className="flex items-center gap-1.5 text-xs text-green-600">
                                                <div className="w-3 h-3 rounded-sm bg-green-400" />
                                                <span>{(t('readinessQuiz.results.savingsBadge') as string).replace('{months}', String(savings))}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Disclaimer */}
                                    <p className="text-xs text-gray-400 italic leading-relaxed">
                                        * {t('readinessQuiz.results.disclaimer')}
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-5 text-center">
                                    <p className="text-2xl font-bold text-green-700">{t('readinessQuiz.results.readyNow')}</p>
                                </div>
                            )}

                            {/* ── Category breakdown ── */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
                                <h3 className="text-base font-bold text-gray-900 mb-5">
                                    {t('readinessQuiz.results.breakdown.title')}
                                </h3>
                                <div className="space-y-4">
                                    {categorySummary.map(({ key, done, total, pct }) => {
                                        const barColor = pct >= 80 ? 'bg-green-500' : pct >= 40 ? 'bg-amber-400' : 'bg-red-400';
                                        const textColor = pct >= 80 ? 'text-green-600' : pct >= 40 ? 'text-amber-600' : 'text-red-500';
                                        return (
                                            <div key={key}>
                                                <div className="flex justify-between items-center mb-1.5">
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {t(`readinessQuiz.categories.${key}.title`)}
                                                    </span>
                                                    <span className={`text-sm font-bold tabular-nums ${textColor}`}>
                                                        {done}/{total}
                                                    </span>
                                                </div>
                                                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`h-full rounded-full ${barColor}`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${pct}%` }}
                                                        transition={{ duration: 0.7, delay: 0.1 }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ── Beyond technical ── */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                                <h3 className="text-base font-bold text-gray-900 mb-1">
                                    {t('readinessQuiz.results.beyondTech.title')}
                                </h3>
                                <p className="text-sm text-gray-500 mb-5">
                                    {t('readinessQuiz.results.beyondTech.subtitle')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {/* Branding */}
                                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
                                        <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                            {t('readinessQuiz.results.beyondTech.brandingTitle')}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {t('readinessQuiz.results.beyondTech.brandingDesc')}
                                        </p>
                                    </div>
                                    {/* CV */}
                                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                                        <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                            {t('readinessQuiz.results.beyondTech.cvTitle')}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {t('readinessQuiz.results.beyondTech.cvDesc')}
                                        </p>
                                    </div>
                                    {/* Interviews */}
                                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                                        <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                            {t('readinessQuiz.results.beyondTech.interviewsTitle')}
                                        </h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            {t('readinessQuiz.results.beyondTech.interviewsDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ── CTA ── */}
                            <div className="text-center">
                                <Link to="/contact">
                                    <Button
                                        size="lg"
                                        className="text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                                    >
                                        {t('readinessQuiz.results.ctaButton')}
                                    </Button>
                                </Link>
                                <p className="text-gray-500 mt-3 text-sm">
                                    {t('readinessQuiz.results.ctaSubtext')}
                                </p>
                            </div>
                        </motion.div>
                    )}

                </div>
            </main>
            <Footer />
        </>
    );
};

interface ScoreCircleProps {
    score: number;
    label: string;
    color: string;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, label, color }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width="200" height="200" className="-rotate-90" aria-hidden="true">
                <circle cx="100" cy="100" r={radius} stroke="#e5e7eb" strokeWidth="14" fill="none" />
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    stroke={color}
                    strokeWidth="14"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-gray-900">{score}%</span>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</span>
            </div>
        </div>
    );
};

export default ReadinessQuiz;
