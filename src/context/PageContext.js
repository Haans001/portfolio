import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = React.createContext({});

export const PageContextProvider = ({ value: { lang }, children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  return <PageContext.Provider value={lang}>{children}</PageContext.Provider>;
};

export const usePageContext = () => React.useContext(PageContext);
