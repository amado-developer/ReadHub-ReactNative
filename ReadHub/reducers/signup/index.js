/* eslint-disable */
import { combineReducers } from 'redux';
import * as types from '../../types/signup';

const register = (state= null, action) => {
    switch(action.type)
    {
        case types.SIGNUP_STARTED:
            {
           return null;
        }
        case types.SIGNUP_COMPLETED: 
        {
            return action.payload.register
        }
        case types.SIGNUP_FAILED:
            {
           return null;
        }
          
    }
    return state;
}

const isSignup = (state= false,action)=>{
    switch(action.type){
        case types.SIGNUP_STARTED:{
           return true;
        }
        case types.SIGNUP_COMPLETED: {
            return false;
        }
        case types.SIGNUP_FAILED:{
           return false;
        }   
    }
    return state;

}

const error =  (state=null, action) => {
    switch(action.type){
        case types.SIGNUP_STARTED:{
           return null;
        }
        case types.SIGNUP_COMPLETED: {
            return null;
        }
        case types.SIGNUP_FAILED:{
           return action.payload.error;
        } 
    }
    return state;
 }
//Combine reducers, todos metiditos en uno
 const signup = combineReducers({
     register,
     isSignup,
     error
 })
//se exporta el combine reducer
 export default signup;
 
 // gets, se exportan

 export const getRegister = state =>state.register;
 export const getIsSignUp = state => state.isSignup;
 export const getErrorSignup = state => state.error;
