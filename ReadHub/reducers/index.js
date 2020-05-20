/* eslint-disable */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login, * as loginSelectors from './login/index';
import signup, * as signupSelector from './signup/index';
import * as types from '../types/logIn';

const reducer = combineReducers({
  login,
  signup,
  form: formReducer,
});

export default reducer;

//LOGIN SELECTORS
//export const loadToken = token => ({type: types.LOGIN_COMPLETED(token)});
export const getToken = state => loginSelectors.getToken(state.login);
export const getIsLogingIn = state => loginSelectors.getIsLogingIn(state.login);
export const getError = state => loginSelectors.getError(state.login);

//Signup SELECTORS
export const getRegister = state => signupSelectors.getRegister(state.signup);
export const getIsSignUp = state => signupSelectors.getIsSignUp(state.signup);
export const getErrorSignup = state => signupSelectors.getErrorSignup(state.signup);


