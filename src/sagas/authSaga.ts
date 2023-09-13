import {put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects';
import {
  ADD_USER,
  IAuthAction,
  LOGIN,
  LOGOUT,
  addUser,
  addUserSuccess,
  loginSuccess,
  logoutSuccess,
} from '../actions';
import {asyncStorage} from '../utils';
import axios, {AxiosResponse} from 'axios';

function* handleLogin({payload: user}: IAuthAction) {
  const response: AxiosResponse = yield axios.get(
    'http://localhost:3000/users',
    {
      params: {
        email: user.email,
      },
    },
  );
  if (response.data[0].password === user.password) {
    yield asyncStorage.saveString('user', user.email);
    yield put(loginSuccess(user));
  }
}

function* handleLogout() {
  yield asyncStorage.saveString('user', 'logged_out');
  yield put(logoutSuccess());
}

function* handleAddUser({payload: user}: IAuthAction) {
  yield axios
    .post('http://localhost:3000/users', user)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  yield put(addUserSuccess(user));
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, handleLogout);
}

export function* watchLogin() {
  yield takeEvery(LOGIN, handleLogin);
}

export function* watchAddUser() {
  yield takeLatest(ADD_USER, handleAddUser);
}
