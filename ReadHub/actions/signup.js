/* eslint-disable */
import * as types from '../types/signup'

export const startSignup = (email, first_name, last_name,  age, gender, occupation,
    address_line_1, address_line_2, phone_number,password, password2) => ({

    type: types.SIGNUP_STARTED,
    payload: { email, first_name, last_name, age, gender, occupation,
        address_line_1, address_line_2, phone_number, password, password2 },
});

export const completeSignup = () => ({
    type: types.SIGNUP_COMPLETED,
   
});

export const failSignup = error => ({
    type: types.SIGNUP_FAILED,
    payload: { error }
});