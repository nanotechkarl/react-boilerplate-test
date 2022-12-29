/*
 *
 * SamplePage reducer
 * Redux States is modified through reducers
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_USERNAME } from './constants';

export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const samplePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

export default samplePageReducer;
