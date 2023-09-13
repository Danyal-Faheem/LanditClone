import {
  ADD_USER,
  IAuthAction,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
} from '../actions';
import {ADD_USER_SUCCESS} from '../actions/authActions';
import {loginState, user} from '../interfaces';
import {asyncStorage} from '../utils';

interface IAuthReducerState {
  user: user;
  state: loginState;
}

const initialState = {
  user: {email: '', password: ''} as user,
  state: 'logged_out' as loginState,
};

const authReducer = (
  state = initialState,
  action: IAuthAction,
): IAuthReducerState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, state: 'logged_in', user: action.payload};
    case LOGOUT_SUCCESS:
      return {...state, state: 'logged_out', user: action.payload};
    case ADD_USER_SUCCESS:
      return {...state, state: 'logged_in', user: action.payload};
    default:
      return state;
  }
};

export default authReducer;
