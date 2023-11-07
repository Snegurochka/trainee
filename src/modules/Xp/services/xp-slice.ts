import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xpThresholds: [0, 91, 273, 485],
};

const xpSlice = createSlice({
  name: "xp",
  initialState,
  reducers: {},
});

export default xpSlice.reducer;
