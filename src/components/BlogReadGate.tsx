import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';

/** localStorage key: when set, user has already given email and can read full posts */
export const BLOG_ACCESS_KEY = 'devready_blog_access';

interface BlogReadGateProps {
  onUnlock: () => void;
}

const BlogReadGate: React.FC<BlogReadGateProps> = ({ onUnlock }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
        setStatus('success');
        setMessage(data.messageKey === 'alreadySubscribed' ? t('newsletter.alreadySubscribed') : t('devpress.blogGateSuccess'));
        setEmail('');
        localStorage.setItem(BLOG_ACCESS_KEY, '1');
        onUnlock();
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
    <div className="my-10 rounded-2xl border border-border/50 bg-card/80 backdrop-blur p-8 md:p-10 text-center" role="region" aria-label={t('devpress.blogGateTitle')}>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
        <Mail className="w-7 h-7" aria-hidden />
      </div>
      <h2 className="text-2xl font-bold mb-2">{t('devpress.blogGateTitle')}</h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto whitespace-pre-line">
        {t('devpress.blogGateDescription')}
      </p>

      {status === 'success' ? (
        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg max-w-md mx-auto">
          <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden />
          <span>{message}</span>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              {status === 'loading' ? t('newsletter.subscribing') : t('devpress.blogGateButton')}
              <Send className="w-4 h-4 ml-2" aria-hidden />
            </Button>
          </form>
          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mt-4 max-w-md mx-auto">
              <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden />
              <span>{message}</span>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-4">{t('devpress.blogGatePrivacy')}</p>
        </>
      )}
    </div>
  );
};

export default BlogReadGate;
