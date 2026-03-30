import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';
import { Input } from '../components/ui/input';
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import Header from '../components/Header';
// @ts-ignore
import Footer from '../components/Footer';
// @ts-ignore
import SEO from '../components/SEO';
import { BLOG_ACCESS_KEY } from '../components/BlogReadGate';

const BehaviouralQuestions: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [unlocked, setUnlocked] = useState(() => {
    try {
      return !!localStorage.getItem(BLOG_ACCESS_KEY);
    } catch {
      return false;
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem(BLOG_ACCESS_KEY, '1');
        setStatus('success');
        setTimeout(() => setUnlocked(true), 1500);
      } else {
        setStatus('error');
        setMessage(t('newsletter.errorMessage'));
      }
    } catch {
      setStatus('error');
      setMessage(t('newsletter.errorMessage'));
    }
  };

  const questions: string[] = t('behaviouralQuestions.questions');

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t('behaviouralQuestions.pageTitle')}
        description={t('behaviouralQuestions.pageDescription')}
        keywords="behavioural interview questions, interview preparation, software engineer interview, common interview questions"
        canonical="https://www.devready.gr/behavioural-questions"
        language={language}
      />
      <Header />
      <main id="main-content" className="flex-grow px-4 py-16 pt-28">
        {!unlocked ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-md rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <Mail className="w-7 h-7" aria-hidden="true" />
              </div>
              <h1 className="text-2xl font-bold mb-2">{t('behaviouralQuestions.gateTitle')}</h1>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {t('behaviouralQuestions.gateDescription')}
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg w-full">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{t('behaviouralQuestions.gateSuccess')}</span>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder={t('devpress.blogGatePlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                      disabled={status === 'loading'}
                      aria-label={t('devpress.blogGatePlaceholder')}
                    />
                    <Button type="submit" disabled={status === 'loading'} className="flex-shrink-0">
                      {status === 'loading' ? t('newsletter.subscribing') : t('behaviouralQuestions.gateButton')}
                      <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </form>
                  {status === 'error' && (
                    <div className="flex items-center justify-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mt-4">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{message}</span>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-4">{t('devpress.blogGatePrivacy')}</p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto pt-8">
            <h1 className="text-3xl font-bold mb-2 text-center">{t('behaviouralQuestions.contentTitle')}</h1>
            <p className="text-muted-foreground mb-8 text-center">
              {t('behaviouralQuestions.contentDescription')}
            </p>
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-6 md:p-8">
              <ol className="space-y-4">
                {questions.map((question: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BehaviouralQuestions;
