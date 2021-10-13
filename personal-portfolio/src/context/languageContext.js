import React, { useContext, useState } from 'react';
//Languages
import { hungarian } from '../languages/hungarian';
import { english } from '../languages/english';

const defaultLanguage = navigator.language === 'hu-HU' ? hungarian : english;
const LanguageContext = React.createContext(defaultLanguage);

export const LanguageProvider = ({ children }) => {
  const [displayLanguage, setDisplayLanguage] = useState(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ displayLanguage, setDisplayLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
