import * as types from '../types/logIn'

export const startLogin = (email, password) => ({
    type: types.LOGIN_STARTED,
    payload: { email, password},
})

export const compleLogin = token => ({
    type: types.LOGIN_COMPLETED,
    payload: { token }
})

export const failLogin = error => ({
    type: types.LOGIN_FAILED,
    payload: { error }
});