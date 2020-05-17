import { combineReducers } from 'redux';
import login, * as loginSelectors from './login/index';

const reducer = combineReducers({
    login,
})

export default reducer;

export const getToken = state => loginSelectors.getToken(state.login);
export const getIsLogingIn = state => loginSelectors.getIsLogingIn(state.login);
export const getError = state => loginSelectors.getError(state.login);

