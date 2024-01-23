// store.ts
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/reducer/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>