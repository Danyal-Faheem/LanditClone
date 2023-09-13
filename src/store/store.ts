import {applyMiddleware, createStore} from 'redux';
import {authReducer} from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import {watchLogin} from '../sagas/authSaga';

const saga = createSagaMiddleware();
const store = createStore(authReducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store;
