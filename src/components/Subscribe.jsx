import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { toast } from '@/components/ui/use-toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to subscribe.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Subscription failed');
      }

      toast({
        title: "✅ You're on the list!",
        description: "Thanks for joining the waitlist. We'll be in touch soon!",
      });

      setEmail('');
      setName('');
    } catch (err) {
      toast({
        title: "Subscription failed",
        description: err.message || "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribe" className="py-24 sm:py-32 px-4 bg-muted/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Start?</h2>
          <p className="text-lg text-muted-foreground mb-8">Be the first to know when we launch.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-bold bg-gradient-primary text-primary-foreground hover:shadow-lg transition-shadow duration-300 rounded-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Join Now
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Subscribe;
