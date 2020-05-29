import {combineReducers} from 'redux';
import * as types from '../../types/cart';

const byId = (state = {}, action) => {
  console.log('al menos si llega a by id: ' + action.type);
  switch (action.type) {
    case types.ADDING_TO_CART: {
      return [];
    }
  }
  return state;
};

const order = (state = [], action) => {
  console.log('al menos si llega a by order');
  switch (action.type) {
    case types.ADDING_TO_CART: {
      return [];
    }
  }
  return state;
};

export default combineReducers({
  byId,
  order,
});

export const getCartElement = (state, id) => state.byId[id];
export const getCart = state =>
  state.order.map(id => getCartElement(state, id));
