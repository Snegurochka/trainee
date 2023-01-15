import { createSlice } from "@reduxjs/toolkit";
import { categories } from "./filters-mock";

const initialState = {
  categories,
  currentCategory: categories[0].id,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory } = filtersSlice.actions;

