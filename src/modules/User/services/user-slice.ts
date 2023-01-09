import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, token } = action.payload;
      state.id = id;
      state.email = email;
      state.token = token;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;