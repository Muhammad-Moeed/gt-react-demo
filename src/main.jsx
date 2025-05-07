import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import App from './App.jsx';
import { GTProvider } from 'gt-react';
import en from './gt/en.json'; 
import es from './gt/es.json';
import ur from './gt/ur.json';

const translations = {
  en,
  es,
  ur,
};

const config = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'ur'],
};

function Root() {
  const [language, setLanguage] = useState('en');

  return (
    <GTProvider
      language={language}
      config={config} 
      translations={translations}
    >
      <App setLanguage={setLanguage} />
    </GTProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
