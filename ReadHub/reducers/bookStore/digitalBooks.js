import {combineReducers} from 'redux';
import * as types from '../../types/bookStore';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.RETRIEVING_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.RETRIEVING_STARTED: {
      return {};
    }

    case types.BUYING_COMPLETED: {
      return {};
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.RETRIEVING_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.RETRIEVING_STARTED: {
      return [];
    }
    case types.BUYING_COMPLETED: {
      return [];
    }
  }
  return state;
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.RETRIEVING_STARTED: {
      return true;
    }
    case types.RETRIEVING_COMPLETED: {
      return false;
    }
    case types.RETRIEVING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.RETRIEVING_FAILED: {
      return action.payload.error;
    }
    case types.RETRIEVING_STARTED: {
      return null;
    }
    case types.RETRIEVING_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getDigitalBook = (state, id) => state.byId[id];
export const getDigitalBooks = state =>
  state.order.map(id => getDigitalBook(state, id));
export const getOrderedBooks = state => state.order;
export const isFetchingDigitalBooks = state => state.isFetching;
export const getError = state => state.error;
