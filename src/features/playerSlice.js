import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventory: { marbleContainer: "Cheap Bag" },
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    editInventory: {
      reducer: (state, action) => {
        state.inventory = {
          ...state.inventory,
          [action.payload.itemType]: action.payload.itemName,
        };
      },
      prepare: (itemType, itemName) => ({ payload: { itemType, itemName } }),
    },
  },
});

export const { editInventory } = playerSlice.actions;
export default playerSlice.reducer;
