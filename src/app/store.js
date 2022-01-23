import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter";
import player from "../features/playerSlice";

export const store = configureStore({
  reducer: {
    counter,
    player,
  },
});
