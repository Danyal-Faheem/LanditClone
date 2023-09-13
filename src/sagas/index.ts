import {all, fork, spawn} from 'redux-saga/effects';
import {watchAddUser, watchLogin, watchLogout} from './authSaga';

export default function* rootSaga() {
  yield spawn(watchLogin);
  yield spawn(watchLogout);
  yield spawn(watchAddUser);
}
