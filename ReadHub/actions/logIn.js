import * as types from '../types/logIn';

export const startLogin = (email, password) => ({
  type: types.LOGIN_STARTED,
  payload: {email, password},
});

export const completeLogin = (token, email) => ({
  type: types.LOGIN_COMPLETED,
  payload: {token, email},
});

export const failLogin = error => ({
  type: types.LOGIN_FAILED,
  payload: {error},
});
