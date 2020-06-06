import {combineReducers} from 'redux';
import * as types from '../../types/audiovisuals';
import * as actions from '../../actions/audiovisuals';

const byId = (state = {}, action) => {
    switch(action.type){
        case types.FETCHING_EQUIPMENT_COMPLETED: {
            const {entities, order} = action.payload;
            const newState = {...state};
            order.forEach(id => {
              newState[id] = {
                ...entities[id],
              };
            });
            return newState;
        }
        case types.FETCHING_EQUIPMENT_STARTED: {
            return {};
        }
        case types.LOAN_EQUIPMENT_STARTED:{
            return {};
        }
    }
    return state;
};
const order = (state = [], action) => {
    switch(action.type){
        case types.FETCHING_EQUIPMENT_COMPLETED:{
            return [...state, ...action.payload.order];
        }

        case types.FETCHING_EQUIPMENT_STARTED: {
            return []
        }

        case types.LOAN_EQUIPMENT_STARTED:{
            return {};
        }
    }
    return state;
};

const isFetching = (state = false, action) => {
    switch(action.type){
        case types.FETCHING_EQUIPMENT_STARTED:{
            return true;
        }
        case types.FETCHING_EQUIPMENT_COMPLETED: {
            return false;
        }

        case types.FETCHING_EQUIPMENT_FAILED: {
            return false;
        }
    }
    return state;
};

const error = (state = null, action) => {
    switch(action.type){
        case types.FETCHING_EQUIPMENT_STARTED: {
            return null;
        }
        case types.FETCHING_EQUIPMENT_COMPLETED:{
            return null;
        }
        case types.FETCHING_EQUIPMENT_FAILED:{
            return action.payload.error;
        }
    }
    return state;
};

const audiovisuals = combineReducers({
    byId,
    order,
    isFetching,
    error
});

export default audiovisuals;


//SELECTORS
export const getEquipment = (state, id) => state.byId[id];
export const getEquipments = state => state.order.map(id => getBook(state, id));
export const getOrderedEquipment = state => state.order;
export const getIsFetchingAudiovisuals = state => state.isFetching;
export const getErrorAudiovisuals = state => state.error;