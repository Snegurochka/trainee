import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateCompleted } from "../../../services/firebase";

import { TUser } from "./user-types";

const initialState = {
  user: null as TUser | null,
  isAuth: false,
};

export const setResult = createAsyncThunk(
  "user/setResult",
  async (payload: { completed: string[]; idDoc: string }) => {
    const { completed, idDoc } = payload;
    await updateCompleted(idDoc, completed);
    return payload;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setResult.fulfilled, (state, action) => {
      const { completed } = action.payload;
      state.user?.completed.push(...completed);
    });
  },
});

export const { setUser, removeUser, setAuth } = userSlice.actions;
