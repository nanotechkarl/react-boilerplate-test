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

const selectSamplePage = state => state.samplePage || initialState;

const makeSelectUsernameSample = () =>
  createSelector(
    selectSamplePage,
    sampleState => sampleState.username,
  );

const makeCatsSelector = () =>
  createSelector(
    selectSamplePage,
    sampleState => sampleState.cats,
  );

export { selectSamplePage, makeSelectUsernameSample, makeCatsSelector };

export default makeSelectSamplePage;
export { selectSamplePageDomain };
