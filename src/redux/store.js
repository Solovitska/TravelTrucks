import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import campersReducer from './campers/slice.js';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['campers'],
};

const persistedCampersReducer = persistReducer(
  persistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
