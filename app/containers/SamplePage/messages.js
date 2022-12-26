/*
 * SamplePage Messages
 *
 * This contains all the text for the SamplePage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SamplePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  subHeader: {
    id: `${scope}.subheader`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
