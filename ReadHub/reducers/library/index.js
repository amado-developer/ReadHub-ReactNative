import {combineReducers} from 'redux';
import * as types from '../../types/library';
import * as actions from '../../actions/library';

const byId = (state = {}, action) => {
    switch(action.type){
        case types.FETCHING_BOOKS_COMPLETED: {
            const {entities, order} = action.payload;
            const newState = {...state};
            order.forEach(id => {
              newState[id] = {
                ...entities[id],
              };
            });
            return newState;
        }
        case types.FETCHING_BOOKS_STARTED: {
            return {}
        }
    }
    return state;
};
const order = (state = [], action) => {
    switch(action.type){
        case types.FETCHING_BOOKS_COMPLETED:{
            return [...state, ...action.payload.order];
        }

        case types.FETCHING_BOOKS_STARTED: {
            return []
        }
    }
    return state;
};

const isFetching = (state = false, action) => {
    switch(action.type){
        case types.FETCHING_BOOKS_STARTED:{
            return true;
        }
        case types.FETCHING_BOOKS_COMPLETED: {
            return false;
        }

        case types.FETCHING_BOOKS_FAILED: {
            return false;
        }
    }
    return state;
};

const error = (state = null, action) => {
    switch(action.type){
        case types.FETCHING_BOOKS_STARTED: {
            return null;
        }
        case types.FETCHING_BOOKS_COMPLETED:{
            return null;
        }
        case types.FETCHING_BOOKS_FAILED:{
            return action.payload.error;
        }
    }
    return state;
};

const library = combineReducers({
    byId,
    order,
    isFetching,
    error
});

export default library;


//SELECTORS
export const getBook = (state, id) => state.byId[id];
export const getBooks = state => state.order.map(id => getBook(state, id));
export const getOrderedBooks = state => state.order;
export const getIsFetching = state => state.isFetching;
export const getError = state => state.error;
