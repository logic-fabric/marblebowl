import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intervalId: null,
  marbleAmount: 0,
  thrownAmount: 0,
  saveFeature: false,
  loadFeature: false,
  cheapBagEvent: undefined,
  marbleContainer: { name: "poche", capacity: 35 },
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementMarbleAmount: (state) => {
      if (state.marbleAmount < state.marbleContainer.capacity)
        state.marbleAmount += 1;
      else state.thrownAmount += 1;
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
    updateMarbleContainer: (state, action) => {
      state.marbleContainer = action.payload;
      if (state.marbleAmount > action.payload.capacity) {
        state.thrownAmount += state.marbleAmount - action.payload.capacity;
        state.marbleAmount = action.payload.capacity;
      }
    },
    updateCheapBagEvent: (state, action) => {
      state.cheapBagEvent = action.payload;
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
  updateMarbleContainer,
  updateCheapBagEvent,
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
