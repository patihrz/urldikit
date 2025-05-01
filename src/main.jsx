import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Pastikan import ini ada dan benar:
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pastikan App dibungkus oleh BrowserRouter seperti ini: */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);