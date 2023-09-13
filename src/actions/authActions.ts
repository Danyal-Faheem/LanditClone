import {user} from '../interfaces';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';

export const login = (user: user) => {
  return {
    payload: user,
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    payload: {user: '', password: ''},
    type: LOGOUT,
  };
};

export const loginSuccess = (user: user) => {
  return {
    payload: user,
    type: LOGIN_SUCCESS,
  };
};

export const logoutSuccess = () => {
  return {
    payload: {user: '', password: ''},
    type: LOGOUT_SUCCESS,
  };
};

export const addUser = (user: user) => {
  return {
    payload: user,
    type: ADD_USER,
  };
};

export const addUserSuccess = (user: user) => {
  return {
    payload: user,
    type: ADD_USER_SUCCESS,
  };
};

export interface IAuthAction {
  type:
    | 'LOGIN'
    | 'LOGOUT'
    | 'LOGIN_SUCCESS'
    | 'LOGOUT_SUCCESS'
    | 'ADD_USER'
    | 'ADD_USER_SUCCESS';
  payload: user;
}
