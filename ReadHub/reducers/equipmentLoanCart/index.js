import {combineReducers} from 'redux';
import * as types from '../../types/equipmentLoanCart';
import * as equipmentTypes from  '../../types/audiovisuals';

const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADDING_TO_EQUIPMENT_LOAN_CART: {
      return [...state, action.payload.equipments];
    }
    case types.REMOVING_FROM_EQUIPMENT_LOAN_CART: {
      return [...state].filter(index => index !== action.payload.equipments);
    }
    case equipmentTypes.LOAN_EQUIPMENT_COMPLETED:{
      return [];
    }
  }
  return state;
};

const equipmentLoanCart = combineReducers({
  cart,
});

export const getEquipmentCart = state => state.cart;
export default equipmentLoanCart;