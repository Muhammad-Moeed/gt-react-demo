import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import App from './App.jsx';
import { GTProvider } from 'gt-react';


function Root() {
  const [language, setLanguage] = useState('en');

  return (
    <GTProvider
      language={language}   
    >
      <App setLanguage={setLanguage} />  
    </GTProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
