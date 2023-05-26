import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';

import rootReducer from './slices';

let enhancers = [applyMiddleware(promise)];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
  enhancers: [...enhancers],
});

const persistor = persistStore(store);

export default store;
export { persistor };
