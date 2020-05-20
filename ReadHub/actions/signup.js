/* eslint-disable */
import * as types from '../types/signup'
/*
    email           = models.EmailField(unique=True)
    first_name      = models.CharField(max_length=50, null=False)
    last_name       = models.CharField(max_length=50, null=False)
    profile_picture = models.ImageField(max_length=50, null=True)
    age             = models.IntegerField(null=True)
    gender          = models.CharField(max_length=50, null=True)
    occupation      = models.CharField(max_length=50, null=True)
    address_line_1  = models.CharField(max_length=50, null=True)
    address_line_2  = models.CharField(max_length=50, null=True)
    phone_number    = models.CharField(max_length=50, null=False)
    description     = models.CharField(max_length=50, null=True)
*/ 
export const startSignup = (email, first_name, last_name, profile_pircture, age, gender, occupation,
    address_line1, address_line2, phone_number,password1, password2) => ({

    type: types.SIGNUP_STARTED,
    payload: { email, first_name, last_name,profile_pircture, age, gender, occupation,
        address_line1, address_line2, phone_number, password1, password2 },
});

export const completeSignup = Response => ({
    type: types.SIGNUP_COMPLETED,
    payload: { Response }
});

export const failSignup = error => ({
    type: types.SIGNUP_FAILED,
    payload: { error }
});