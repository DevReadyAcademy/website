import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { reportWebVitals } from '@/utils/reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);

// Report Web Vitals to Google Analytics
reportWebVitals();