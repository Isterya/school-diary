import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';

export const store = configureStore({
   reducer: {
      notes: notesReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
});
