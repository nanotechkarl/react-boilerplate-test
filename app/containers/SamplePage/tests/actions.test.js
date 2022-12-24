// REVIEW to specifically test by folder use: npm test <path>
import { defaultAction } from '../actions';
import { DEFAULT_ACTION } from '../constants';

describe('SamplePage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
