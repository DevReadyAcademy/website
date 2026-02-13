import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsletterProps {
  variant?: 'default' | 'compact';
}

const Newsletter: React.FC<NewsletterProps> = ({ variant = 'default' }) => {
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Use messageKey to get translated message
        if (data.messageKey === 'alreadySubscribed') {
          setMessage(t('newsletter.alreadySubscribed'));
        } else {
          setMessage(t('newsletter.successMessage'));
        }
        setEmail('');
      } else {
        setStatus('error');
        setMessage(t('newsletter.errorMessage'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('newsletter.errorMessage'));
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-card rounded-xl border border-border/50 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">{t('newsletter.title')}</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {t('newsletter.description')}
        </p>
        
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <CheckCircle className="w-4 h-4" />
            <span>{message}</span>
          </div>
        ) : status === 'error' ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4" />
              <span>{message}</span>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={t('newsletter.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={status === 'loading'}
              />
              <Button 
                type="submit" 
                disabled={status === 'loading'}
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder={t('newsletter.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={status === 'loading'}
            />
            <Button 
              type="submit" 
              disabled={status === 'loading'}
              className="flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('newsletter.title')}
        </h2>
        <p className="text-lg opacity-90 mb-8">
          {t('newsletter.description')}
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-3 text-lg bg-white/20 p-4 rounded-lg">
            <CheckCircle className="w-6 h-6" />
            <span>{message}</span>
          </div>
        ) : (
          <>
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={t('newsletter.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-foreground"
                disabled={status === 'loading'}
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={status === 'loading'}
                className="bg-white text-primary hover:bg-white/90"
              >
                {status === 'loading' ? t('newsletter.subscribing') : t('newsletter.subscribe')}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-sm bg-red-500/20 p-3 rounded-lg mt-4">
                <AlertCircle className="w-4 h-4" />
                <span>{message}</span>
              </div>
            )}
          </>
        )}
        
        <p className="text-sm opacity-75 mt-4">
          {t('newsletter.privacyNote')}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
