/**
 *
 * Asynchronously loads the component for SamplePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
