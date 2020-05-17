import { createStore } from 'redux';
import reducer from './reducers';

export const configureStore = createStore(reducer);