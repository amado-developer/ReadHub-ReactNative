import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login, * as loginSelectors from './login/index';
import * as types from '../types/logIn';

const reducer = combineReducers({
  login,
  form: formReducer,
});

export default reducer;

export const loadToken = token => ({type: types.LOGIN_COMPLETED(token)});

export const getToken = state => loginSelectors.getToken(state.login);
export const getIsLogingIn = state => loginSelectors.getIsLogingIn(state.login);
export const getError = state => loginSelectors.getError(state.login);
