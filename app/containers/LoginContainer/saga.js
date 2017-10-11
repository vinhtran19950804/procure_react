import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOGIN_REQUEST } from './constants';

import * as api from '../../api';

function* watchLoginRequest() {
  yield* takeLatest(LOGIN_REQUEST, login);
}

function* login(action) {
  try {
    const result = yield call(api.login, action.data);
    console.log(result);
  } catch(e) {
    console.log(e)
  }
}

export default [
  watchLoginRequest
]
