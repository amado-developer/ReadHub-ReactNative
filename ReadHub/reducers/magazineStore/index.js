import {combineReducers} from 'redux';
import * as types from '../../types/magazineStore';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.MAGAZINE_RETRIEVING_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.MAGAZINE_RETRIEVING_STARTED: {
      return {};
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.MAGAZINE_RETRIEVING_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.MAGAZINE_RETRIEVING_STARTED: {
      return [];
    }
  }
  return state;
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.MAGAZINE_RETRIEVING_STARTED: {
      return true;
    }
    case types.MAGAZINE_RETRIEVING_COMPLETED: {
      return false;
    }
    case types.MAGAZINE_RETRIEVING_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.MAGAZINE_RETRIEVING_FAILED: {
      return action.payload.error;
    }
    case types.MAGAZINE_RETRIEVING_STARTED: {
      return null;
    }
    case types.MAGAZINE_RETRIEVING_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const magazineCollection = (state = [], action) => {
  switch (action.type) {
    case types.MAGAZINE_BUYING_COMPLETED: {
      return [...state, action.payload.magazines];
    }
  }

  return state;
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
  magazineCollection,
});

export const getMagazine = (state, id) => state.byId[id];
export const getMagazines = state =>
  state.order.map(id => getMagazine(state, id));
export const getOrderedMagazines = state => state.order;
export const isFetchingMagazines = state => state.isFetching;
export const getError = state => state.error;
export const getMagazineCollection = state => state.digitalBooksCollection;
