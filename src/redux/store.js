import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import contacts from './contacts/contact-reducer';
import { contactApi } from './contacts/contactsApi';
import authSlice from './auth/authSlise';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
];

const persistConfigContacts = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfigContacts, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contacts,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware,
});

export const persistor = persistStore(store);
