import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';
import mainSaga from './sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
<<<<<<< HEAD
      whitelist: [''],
=======
      whitelist: ['login', 'profile', 'bookCollection', 'payment', 'loans'],
>>>>>>> e0d0319938a822bd8e0fd444dfcfbc55e3f71e0a
    },
    reducer,
  );

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return {store, persistor};
};
