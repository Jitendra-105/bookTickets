import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parseData: [],
};

export const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setParseData: (state, action) => {
      state.parseData = action.payload;
    },
  },
});

export const { setParseData } = summarySlice.actions;

export default summarySlice.reducer;
