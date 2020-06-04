import {combineReducers} from 'redux';
import * as types from '../../types/library';

const byId = (state = {}, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_COLLECTION_COMPLETED: {
            const {entities, order} = action.payload;
            const newState = {...state};
            order.forEach(id => {
              newState[id] = {
                ...entities[id],
              };
            });
            return newState;
        }
        case types.RETURN_A_BOOK_COMPLETED: {
               const newState = {...state};
               delete newState[action.payload.book];
            return newState;
        }
        case types.FETCHING_LOAN_COLLECTION_STARTED:{
            return {};
        }
    }
    return state;
};
const order = (state = [], action) => {
    switch(action.type){
        case types.FETCHING_LOAN_COLLECTION_COMPLETED:{
            return [...state, ...action.payload.order];
        }
        case types.RETURN_A_BOOK_COMPLETED: {
         return [...state].filter(index => index !== action.payload.books);
        }
        case types.FETCHING_LOAN_COLLECTION_STARTED:{
            return [];
        }
    }
    return state;
};

const isFetching = (state = false, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_COLLECTION_STARTED:{
            return true;
        }
        case types.FETCHING_LOAN_COLLECTION_COMPLETED: {
            return false;
        }

        case types.FECTHING_LOAN_COLLECTION_FAILED: {
            return false;
        }
    }
    return state;
};

const error = (state = null, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_COLLECTION_STARTED: {
            return null;
        }
        case types.FETCHING_LOAN_COLLECTION_COMPLETED:{
            return null;
        }
        case types.FECTHING_LOAN_COLLECTION_FAILED:{
            return action.payload.error;
        }
    }
    return state;
};

const loans = combineReducers({
    byId,
    order,
    isFetching,
    error
});

export default loans;

//SELECTORS
export const getLoan = (state, id) => state.byId[id];
export const getLoans = state => state.order.map(id => getBook(state, id));
export const getOrderedLoans = state => state.order;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;