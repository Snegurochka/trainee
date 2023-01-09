import { createSlice } from "@reduxjs/toolkit";
import { categories } from "./menu-mock";

const initialState = {
  categories,
  currentCategory: categories[0].id,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory } = menuSlice.actions;
