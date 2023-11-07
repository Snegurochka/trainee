import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateCompleted, updateXp } from "../../../services/firebase";

import { TUser } from "./user-types";

const initialState = {
  user: null as TUser | null,
  isAuth: false,
};

export const setResult = createAsyncThunk(
  "user/setResult",
  async (payload: { completed: number[]; idDoc: string }) => {
    const { completed, idDoc } = payload;
    await updateCompleted(idDoc, completed);
    return payload;
  }
);

export const addXp = createAsyncThunk(
  "user/addXp",
  async (payload: { xp: number; idDoc: string }) => {
    const { xp, idDoc } = payload;
    await updateXp(idDoc, xp);
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
      if (state.user) {
        state.user.completed = action.payload.completed;
      }
    });
    builder.addCase(addXp.fulfilled, (state, action) => {
      if (state.user) {
        state.user.xp = action.payload.xp;
      }
    });
  },
});

export const { setUser, removeUser, setAuth } = userSlice.actions;
export default userSlice.reducer;
