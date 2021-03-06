import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intervalId: null,
  marbleAmount: 0,
  thrownAmount: 0,
  saveFeature: false,
  loadFeature: false,
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
    throwMarbles: (state, action) => {
      if (state.marbleAmount >= action.payload) {
        state.thrownAmount += action.payload;
        state.marbleAmount -= action.payload;
      }
    },
    addSaveFeature: (state, action) => {
      if (state.marbleAmount >= action.payload) {
        state.marbleAmount -= action.payload;
        state.saveFeature = true;
      }
    },
    addLoadFeature: (state, action) => {
      if (state.marbleAmount >= action.payload) {
        state.marbleAmount -= action.payload;
        state.loadFeature = true;
      }
    },
  },
});

export const {
  incrementMarbleAmount,
  resetMarbleAmount,
  storeIntervalId,
  throwMarbles,
  addLoadFeature,
  addSaveFeature,
} = counterSlice.actions;

export const startCounter = () => (dispatch) => {
  const intervalId = setInterval(() => {
    dispatch(incrementMarbleAmount());
  }, 1000);

  dispatch(storeIntervalId(intervalId));
};

export const stopCounter = () => (_, getState) => {
  clearInterval(getState().counter.intervalId);
};

export const selectCounter = (state) => state.counter;

export default counterSlice.reducer;
