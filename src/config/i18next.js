import i18n from 'i18next';
import hero from './translations/hero.json';
import about from './translations/about.json';
import projects from './translations/projects.json';
import footer from './translations/footer.json';

i18n.init({
  resources: {
    en: {
      hero: hero.en,
      about: about.en,
      projects: projects.en,
      footer: footer.en,
    },
    pl: {
      hero: hero.pl,
      about: about.pl,
      projects: projects.pl,
      footer: footer.pl,
    },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
