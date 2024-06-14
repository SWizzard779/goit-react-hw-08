import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReducer from './auth/slice';

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

