/*
 *
 * CheckSessionIdcontainer actions
 *
 */

import {
  CHECK_SESSION_ID_REQUEST,
  CHECK_SESSION_ID_SUCCESS,
  CHECK_SESSION_ID_FAILURE
} from './constants';

export function checkSessionRequest(sessionID) {
  return {
    type: CHECK_SESSION_ID_REQUEST,
    sessionID
  }
}

export function checkSessionSuccess(data) {
  return {
    type: CHECK_SESSION_ID_SUCCESS,
    data
  }
}

export function checkSessionFailure() {
  return {
    type: CHECK_SESSION_ID_FAILURE
  }
}