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

export const logout = () => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = () => ({
  type: types.TOKEN_REFRESH_STARTED,
});

export const completeTokenRefresh = newToken => ({
  type: types.TOKEN_REFRESH_COMPLETED,
  payload: { newToken },
});

export const failTokenRefresh = error => ({
  type: types.TOKEN_REFRESH_FAILED,
  payload: { error },
});
