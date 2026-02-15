import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Feature/Authentication';

const mainStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default mainStore;
