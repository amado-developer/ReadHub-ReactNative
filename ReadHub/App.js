import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeRouter, Switch, Route} from 'react-router-native';

import {View} from 'react-native';
import {configureStore} from './store';
import reduxForm from './components/LogIn/ReduxForm';
import profilePicture from './components/ProfilePicture';
const {store, persistor} = configureStore();

export default (App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <View>
          <Route path="/" exact component={reduxForm} />
          <Route path="/profile" component={profilePicture} />
          {/* <Route path="/test" component={test} /> */}
        </View>
      </NativeRouter>
    </PersistGate>
  </Provider>
));
