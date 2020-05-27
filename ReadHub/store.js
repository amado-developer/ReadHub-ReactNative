import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import reducer from './reducers';
import mainSaga from './sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['login'],
    },
    reducer,
  );

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);

  return {store, persistor};
};
