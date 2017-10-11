/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

const initialState = fromJS({});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    default:
      return state;
  }
}

export default loginContainerReducer;
