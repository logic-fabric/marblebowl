import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => state,
  },
});

export const store = configureStore({
  name: "counter",
  initialState: initialState,
  reducer: {
    counter: counterSlice.reducer,
  },
});
