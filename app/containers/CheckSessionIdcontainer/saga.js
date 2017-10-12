import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  CHECK_SESSION_ID_REQUEST,
} from './constants';

import {
  checkSession
} from '../../api';

import {
  checkSessionSuccess
} from './actions';

export default function* watchCheckSessionIDRequest() {
  console.log('hello saga');
  yield takeLatest(CHECK_SESSION_ID_REQUEST, fetchCheckSessionID);
}

function* fetchCheckSessionID(action) {
  try {
    const result = yield call (checkSession, action.sessionID);
    yield put(checkSessionSuccess(result.response));
  } catch(e) {
    console.log(e)
  }
}