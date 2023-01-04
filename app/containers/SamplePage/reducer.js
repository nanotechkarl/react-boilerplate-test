/*
 *
 * SamplePage reducer
 * Redux States is modified through reducers
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
  GET_CATS_FETCH,
  GET_CATS_SUCCESS,
} from './constants';

export const initialState = {
  username: '',
  cats: [],
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
      case GET_CATS_FETCH:
        break;
      case GET_CATS_SUCCESS:
        draft.cats = action.cats;
        break;
    }
  });

export default samplePageReducer;
