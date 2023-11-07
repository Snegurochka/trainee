import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correctAnswers: [] as number[],
    total: 0,
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        pushCorrectAnswer: (state, payload) => {
            state.correctAnswers.push(payload.payload)
        },
        incrementTotalAnswers: (state) => {
            state.total += 1
        }
    }
});

export const { incrementTotalAnswers, pushCorrectAnswer } = answersSlice.actions;
export default answersSlice.reducer;