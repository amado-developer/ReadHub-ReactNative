import * as types from '../types/equipmentLoanCart';

export const addToCart = equipments => ({
  type: types.ADDING_TO_EQUIPMENT_LOAN_CART,
  payload: {equipments},
});

export const removeFromCart = equipments => ({
  type: types.REMOVING_FROM_EQUIPMENT_LOAN_CART,
  payload: {equipments},
});