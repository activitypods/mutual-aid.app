import polyglotI18nProvider from 'ra-i18n-polyglot';
import raEnglishMessages from 'ra-language-english';
import raFrenchMessages from 'ra-language-french';
import { frenchMessages as authFrenchMessages, englishMessages as authEnglishMessages } from '@semapps/auth-provider';
import frAppMessages from './messages/app/fr';
import enAppMessages from './messages/app/en';
import frResourcesMessages from './messages/resources/fr';
import enResourcesMessages from './messages/resources/en';

const getMessages = (lang) => {
  if (lang === 'en') {
    return {
      ...raEnglishMessages,
      ...authEnglishMessages,
      ...enAppMessages,
      ...enResourcesMessages,
    };
  } else if (lang === 'fr') {
    return {
      ...raFrenchMessages,
      ...authFrenchMessages,
      ...frAppMessages,
      ...frResourcesMessages,
    };
  } else {
    throw new Error('Language not handled: ' + lang);
  }
};

const i18nProvider = polyglotI18nProvider(getMessages, process.env.REACT_APP_LANG);

export default i18nProvider;
