import React from 'react';
import { Provider } from 'react-redux';

import {configureStore} from './store';
import ReduxForm from './components/LogIn/ReduxForm'
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer)

export default App = () => (
  <Provider store={store}>
    <ReduxForm/>
  </Provider>
);
