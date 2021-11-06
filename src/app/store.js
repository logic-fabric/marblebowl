import { configureStore } from '@reduxjs/toolkit';
import counter from '../features/counter';

export const store = configureStore({
  reducer: {
    counter: counter,
  },
});
