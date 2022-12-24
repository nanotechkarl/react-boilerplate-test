import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the samplePage state domain
 */

const selectSamplePageDomain = state => state.samplePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SamplePage
 */

const makeSelectSamplePage = () =>
  createSelector(
    selectSamplePageDomain,
    substate => substate,
  );

export default makeSelectSamplePage;
export { selectSamplePageDomain };
