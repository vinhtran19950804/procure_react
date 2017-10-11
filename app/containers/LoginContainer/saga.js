import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { LOGIN_REQUEST } from './constants';
import {
  loginSuccess,
} from './actions';


import {
  login,
} from '../../api';

export default function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, fetchLogin);
}

function* fetchLogin(action) {
  try {
    const result = yield call(login, action.data);
    yield put(loginSuccess(result));
  } catch (e) {
    console.log(e);
  }
}