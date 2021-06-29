/* eslint import/prefer-default-export: 0 */

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/config/i18next';
import { PageContextProvider } from './src/context/PageContext';

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContextProvider value={props.pageContext}>{element}</PageContextProvider>
  );
};
