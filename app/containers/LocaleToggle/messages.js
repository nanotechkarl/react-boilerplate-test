/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LocaleToggle';

// REVIEW setup translation
export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  de: {
    id: `${scope}.de`,
    defaultMessage: 'de',
  },
  fr: {
    id: `${scope}.fr`,
    defaultMessage: 'fr',
  },
});
