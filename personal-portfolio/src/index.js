import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.min.css';
import App from './App';
import { LanguageProvider } from './context/languageContext';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
