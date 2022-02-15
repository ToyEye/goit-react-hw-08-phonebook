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

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
];

const persistConfigContacts = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfigContacts, contacts);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware,
});

export const persistor = persistStore(store);
