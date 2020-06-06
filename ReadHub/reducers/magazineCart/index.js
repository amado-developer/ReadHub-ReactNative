import {combineReducers} from 'redux';
import * as types from '../../types/magazineCart';
import * as buyTypes from '../../types/magazineStore'
const cart = (state = [], action) => {
  switch (action.type) {
    case types.ADDING_MAGAZINE_TO_CART: {
      return [...state, action.payload.magazines];
    }
    case types.REMOVING_MAGAZINE_FROM_CART: {
      return [...state].filter(index => index !== action.payload.magazines);
    }
    case buyTypes.MAGAZINE_BUYING_COMPLETED: {
      return [];
    }
  }
  return state;
};

export default combineReducers({
  cart,
});

export const getCart = state => state.cart;
