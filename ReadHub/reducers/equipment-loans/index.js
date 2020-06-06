import {combineReducers} from 'redux';
import * as types from '../../types/audiovisuals';
import { getEquipments } from '../audiovisuals';

const byId = (state = {}, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_COMPLETED: {
            const {entities, order} = action.payload;
            const newState = {...state};
            order.forEach(id => {
              newState[id] = {
                ...entities[id],
              };
            });
            return newState;
        }
        case types.RETURN_EQUIPMENT_COMPLETED: {
            const omit_state = omit(state, action.payload.equipment);
            const newState = [...omit_state];

            return {
                newState
            };
        }
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED:{
            return {};
        }
    }
    return state;
};
const order = (state = [], action) => {
    switch(action.type){
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_COMPLETED:{
            return [...state, ...action.payload.order];
        }
        case types.RETURN_EQUIPMENT_COMPLETED: {
         return [...state].filter(index => index !== action.payload.equipment);
        }
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED:{
            return [];
        }
    }
    return state;
};

const isFetching = (state = false, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED:{
            return true;
        }
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_COMPLETED: {
            return false;
        }

        case types.FECTHING_LOAN_EQUIPMENT_COLLECTION_FAILED: {
            return false;
        }
    }
    return state;
};

const error = (state = null, action) => {
    switch(action.type){
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_STARTED: {
            return null;
        }
        case types.FETCHING_LOAN_EQUIPMENT_COLLECTION_COMPLETED:{
            return null;
        }
        case types.FECTHING_LOAN_EQUIPMENT_COLLECTION_FAILED:{
            return action.payload.error;
        }
    }
    return state;
};

const Equipmentloans = combineReducers({
    byId,
    order,
    isFetching,
    error
});

export default Equipmentloans;

//SELECTORS
export const getEquipmentLoan = (state, id) => state.byId[id];
export const geEquipmentLoans = state => state.order.map(id => getEquipments(state, id));
export const getOrderedEquipmentLoans = state => state.order;
export const getIsFetchingEquipment = state => state.isFetching;
export const getErrorEquipmentLoan = state => state.error;