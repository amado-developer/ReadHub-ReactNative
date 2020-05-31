import {combineReducers} from 'redux';
import * as types from '../../types/magazineCart';

const cart = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case types.ADDING_MAGAZINE_TO_CART: {
      return [...state, action.payload.magazines];
    }
    case types.REMOVING_MAGAZINE_FROM_CART: {
      return [...state].filter(index => index !== action.payload.magazines);
    }
  }
  return state;
};

export default combineReducers({
  cart,
});

export const getCart = state => state.cart;
