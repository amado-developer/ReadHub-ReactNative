import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeRouter, Switch, Route} from 'react-router-native';

import {View} from 'react-native';
import {configureStore} from './store';
import reduxForm from './components/LogIn/ReduxForm';
import profile from './components/Profile';
import home from './components/Home';
import bookStore from './components/BookStore';
import signUp from './components/SignUp'

const {store, persistor} = configureStore();

export default (App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <View>
          <Route path="/" exact component={reduxForm} />
          <Route path="/profile" component={profile} />
          <Route path="/home" component={home} />
          <Route path = "/signUp" component = {signUp} />
          <Route path="/books" component={bookStore} />
          {/* <Route path="/test" component={test} /> */}
        </View>
      </NativeRouter>
    </PersistGate>
  </Provider>
));
