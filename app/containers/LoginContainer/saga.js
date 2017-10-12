import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { takeLatest } from 'redux-saga';
import { LOGIN_REQUEST } from './constants';
import {
  loginSuccess,
} from './actions';


import {
  authLogin,
} from '../../api';

export default function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, fetchLogin);
}

function* fetchLogin(action) {
  console.log(action.data)
  try {
    const result = yield call(authLogin, action.data);
    yield put(loginSuccess(result));
  } catch (e) {
    console.log(e);
  }
}