import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

/**
 * Reports Web Vitals metrics to Google Analytics
 * 
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): Loading performance - should be ≤2.5s
 * - INP (Interaction to Next Paint): Interactivity - should be ≤200ms
 * - CLS (Cumulative Layout Shift): Visual stability - should be ≤0.1
 * 
 * Additional metrics:
 * - FCP (First Contentful Paint): First render
 * - TTFB (Time to First Byte): Server response time
 */

const sendToGoogleAnalytics = (metric: Metric) => {
  // Send to Google Analytics 4 if gtag is available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag;
    
    gtag('event', metric.name, {
      // Use `event_category` for GA4
      event_category: 'Web Vitals',
      // Google Analytics metrics must be integers, so round the value
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      // Use `event_label` to identify the metric
      event_label: metric.id,
      // Use `non_interaction` to avoid affecting bounce rate
      non_interaction: true,
      // Send metric delta for debugging
      metric_delta: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      // Rating: good, needs-improvement, or poor
      metric_rating: metric.rating,
    });
  }
};

export const reportWebVitals = () => {
  // Core Web Vitals
  onCLS(sendToGoogleAnalytics);
  onINP(sendToGoogleAnalytics);
  onLCP(sendToGoogleAnalytics);
  
  // Additional metrics
  onFCP(sendToGoogleAnalytics);
  onTTFB(sendToGoogleAnalytics);
};

export default reportWebVitals;
