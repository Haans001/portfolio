import React from 'react';
import { useTranslation } from 'react-i18next';

const PageContext = React.createContext({});

export const PageContextProvider = ({ value: { lang }, children }) => {
  const { i18n } = useTranslation();

  i18n.changeLanguage(lang);

  return <PageContext.Provider value={lang}>{children}</PageContext.Provider>;
};

export const usePageContext = () => React.useContext(PageContext);
