import React, { useEffect, useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';
import { Input } from '../components/ui/input';
// @ts-ignore
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import Header from '../components/Header';
// @ts-ignore
import Footer from '../components/Footer';
import { BLOG_ACCESS_KEY } from '../components/BlogReadGate';

const CANVA_URL =
  'https://www.canva.com/design/DAG6u0hwUEE/Worswuy8qs5cBxWDhLAt5Q/edit?utm_content=DAG6u0hwUEE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';

const TemplatePage: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem(BLOG_ACCESS_KEY) === '1') {
      window.location.href = CANVA_URL;
    }
  }, []);

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
        setTimeout(() => {
          window.location.href = CANVA_URL;
        }, 1500);
      } else {
        setStatus('error');
        setMessage(t('newsletter.errorMessage'));
      }
    } catch {
      setStatus('error');
      setMessage(t('newsletter.errorMessage'));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16 pt-28">
        <div className="w-full max-w-md rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-8 md:p-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
            <Mail className="w-7 h-7" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold mb-2">{t('templateGate.title')}</h1>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {t('templateGate.description')}
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg w-full">
                <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
                <span>{t('templateGate.success')}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t('templateGate.redirecting')}</p>
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
                  {status === 'loading' ? t('newsletter.subscribing') : t('templateGate.button')}
                  <Send className="w-4 h-4 ml-2" aria-hidden />
                </Button>
              </form>
              {status === 'error' && (
                <div className="flex items-center justify-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mt-4">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span>{message}</span>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-4">{t('devpress.blogGatePrivacy')}</p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatePage;
