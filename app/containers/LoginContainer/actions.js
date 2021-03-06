/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants';

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    message,
  }
}
