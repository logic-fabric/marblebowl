import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intervalId: null,
  marbleAmount: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementMarbleAmount: (state) => {
      state.marbleAmount += 1;
    },
    resetMarbleAmount: () => initialState,
    storeIntervalId: (state, action) => {
      state.intervalId = action.payload;
    },
  },
});

export const { incrementMarbleAmount, resetMarbleAmount, storeIntervalId } =
  counterSlice.actions;

export const startCounter = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(incrementMarbleAmount());
  }, 1000);

  dispatch(storeIntervalId(intervalId));
};

export const stopCounter = () => (_, getState) => {
  clearInterval(getState().counter.intervalId);
};

export const selectMarbleAmount = (state) => state.counter.marbleAmount;

export default counterSlice.reducer;
