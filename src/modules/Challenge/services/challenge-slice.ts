import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateLastCheckIn } from "../../../services/firebase";

const initialState = {
  isActive: false,
  idChallenge: "",
  dateStart: 0,
  lastCheckIn: 0,
  challengeDays: [] as number[],
};

export const setLastCheckIn = createAsyncThunk(
  "challenge/setLastCheckIn",
  async (payload: { idChallenge: string; lastCheckIn: number }) => {
    await updateLastCheckIn(payload);
    return payload;
  }
);

const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    startChallenge(state) {
      state.isActive = true;
      state.dateStart = Date.now();
    },
    setChallenge(state, action) {
      state.isActive = true;
      state.dateStart = action.payload.dateStart;
      state.lastCheckIn = action.payload.lastCheckIn;
    },
    addDayToChallenge(state, action) {
      state.challengeDays.push(action.payload);
    },
    addLastCheckIn(state, action) {
      state.lastCheckIn = action.payload.lastCheckIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLastCheckIn.fulfilled, (state, action) => {
      if (state.lastCheckIn) {
        state.lastCheckIn = action.payload.lastCheckIn;
      }
    });
  },
});

export const { startChallenge, addDayToChallenge, setChallenge } =
  challengeSlice.actions;
export default challengeSlice.reducer;
