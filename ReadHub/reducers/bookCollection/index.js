import {combineReducers} from 'redux';
import * as types from '../../types/bookCollection';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.VIEW_BOOK_COLLECTION_COMPLETED: {
      const {entities, order} = action.payload;
      const newState = {...state};
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
        };
      });
      return newState;
    }
    case types.VIEW_BOOK_COLLECTION_STARTED: {
      return {};
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.VIEW_BOOK_COLLECTION_COMPLETED: {
      return [...state, ...action.payload.order];
    }
    case types.VIEW_BOOK_COLLECTION_STARTED: {
      return [];
    }
  }
  return state;
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.VIEW_BOOK_COLLECTION_STARTED: {
      return true;
    }
    case types.VIEW_BOOK_COLLECTION_COMPLETED: {
      return false;
    }
    case types.VIEW_BOOK_COLLECTION_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case types.VIEW_BOOK_COLLECTION_FAILED: {
      return action.payload.error;
    }
    case types.VIEW_BOOK_COLLECTION_STARTED: {
      return null;
    }
    case types.VIEW_BOOK_COLLECTION_COMPLETED: {
      return null;
    }
    default: {
      return state;
    }
  }
};

const isButtonPressed = (state = false, action) => {
  switch (action.type) {
    case types.BUTTON_PRESSED: {
      return true;
    }
    case types.BUTTON_UNPRESSED: {
      return false;
    }
  }
  return state;
};

const pdfBook = (state = null, action) => {
  switch (action.type) {
    case types.PDF_FETCHING_COMPLETED: {
      return action.payload;
    }
  }
  return state;
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
  isButtonPressed,
  pdfBook,
});

export const getDigitalBook = (state, id) => state.byId[id.id];
export const getDigitalBooks = state =>
  state.order.map(id => getDigitalBook(state, id));
export const getOrderedBooks = state => state.order;
export const isFetchingDigitalBooks = state => state.isFetching;
export const getError = state => state.error;
export const getIsButtonPressed = state => state.isButtonPressed;
export const getPDF = state => state.pdfBook;
