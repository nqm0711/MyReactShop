import {compose, } from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import {rootReducer} from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
  enhancers: composeEnhancer;
});


export const persistor = persistStore(store);
