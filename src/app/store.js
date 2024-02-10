import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "../features/summary/summarySlice";

export const store = configureStore({
  reducer: {
    summary: summaryReducer,
  },
});
