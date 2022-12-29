/*
 *
 * SamplePage actions
 *
 */

import { DEFAULT_ACTION, CHANGE_USERNAME } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
