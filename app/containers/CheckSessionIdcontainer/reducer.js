/*
 *
 * CheckSessionIdcontainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHECK_SESSION_ID_SUCCESS
} from './constants';

const initialState = fromJS({});

function checkSessionIdcontainerReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_SESSION_ID_SUCCESS:
    console.log('hello reducer');
    return action.data;
    default:
      return state;
  }
}

export default checkSessionIdcontainerReducer;
