import * as types from '../types/library';

export const startFetchingBook = books =>({
    type: types.FETCHING_BOOKS_STARTED,
    payload: {books}
});

export const completeFetchingBook = (entities, order)=>({
    type: types.FETCHING_BOOKS_COMPLETED,
    payload: {
        entities,
        order
    }
});

export const failFetchingBook = error =>({
    type: types.FETCHING_BOOKS_FAILED,
    payload: {error}
});

export const startLoaningBook = book =>({
    type: types.LOAN_A_BOOK_STARTED,
    payload: {book}
});

export const completeLoaningBook = book =>({
    type: types.LOAN_A_BOOK_COMPLETED,
    payload: {book}
});

export const failLoaningBook= error =>({
    type: types.LOAN_A_BOOK_FAILED,
    payload: {error}
});

export const startReturningBook = book =>({
    type: types.RETURN_A_BOOK_STARTED,
    payload: {book}
});

export const completeReturningBook= book =>({
    type: types.RETURN_A_BOOK_COMPLETED,
    payload: {book}
});

export const failReturningBook = error =>({
    type: types.RETURN_A_BOOK_FAILED,
    payload: {error}
});

export const startFetchingLoans = () =>({
    type: types.FETCHING_LOAN_COLLECTION_STARTED,
});

export const completeFetchingLoans = (entities, order) =>({
    type: types.FETCHING_LOAN_COLLECTION_COMPLETED,
    payload: { 
        entities,
        order
    }
});

export const failFetchingLoans = error =>({
    type: types.FECTHING_LOAN_COLLECTION_FAILED,
    payload: {error}
});