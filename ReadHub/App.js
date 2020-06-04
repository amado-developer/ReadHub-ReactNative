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
import signUp from './components/SignUp';
import magazines from './components/MagazineStore';
import TokenRefresh from './components/TokenRefresh';
<<<<<<< HEAD
import equipment from './components/audiovisuals';
import returns from './components/returns';

=======
import Payment from './components/Payment';
import PaymentForm from './components/Payment/paymentForm';
import Library from './components/Library';
import Loans from './components/Loans';
>>>>>>> e0d0319938a822bd8e0fd444dfcfbc55e3f71e0a

const {store, persistor} = configureStore();

export default (App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <View>
          <Route path="/" exact component={reduxForm} />
          <Route path="/profile" component={profile} />
          <Route path="/home" component={home} />
          <Route path="/signUp" component={signUp} />
          <Route path="/books" component={bookStore} />
          <Route path="/magazines" component={magazines} />
<<<<<<< HEAD
          <Route path="/audiovisuals" component={equipment}/>
          <Route path="/returns" component={returns} />
=======
          <Route path="/payment" component={Payment} />
          <Route path="/paymentForm" component={PaymentForm} />
          <Route path="/library" component={Library} />
          <Route path="/loans" component={Loans} />
>>>>>>> e0d0319938a822bd8e0fd444dfcfbc55e3f71e0a
          {/* <Route path="/test" component={test} /> */}
        </View>
      </NativeRouter>
      <TokenRefresh reviewTime={85000}/>
    </PersistGate>
  </Provider>
));
