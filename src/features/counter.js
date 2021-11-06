import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intervalId: null,
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
    resetCounter: () => initialState,
    storeIntervalId: (state, action) => {
      state.intervalId = action.payload;
    },
  },
});

export const { incrementCounter, resetCounter, storeIntervalId } =
  counterSlice.actions;

export const startCounter = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(incrementCounter());
  }, 1000);

  dispatch(storeIntervalId(intervalId));
};

export const stopCounter = () => (_, getState) => {
  clearInterval(getState().counter.intervalId);
};

export const selectCounterValue = (state) => state.counter.value;

export default counterSlice.reducer;
