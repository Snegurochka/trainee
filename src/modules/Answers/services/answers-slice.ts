import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    correctAnswers: [] as string[],
    total: 0,
}

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        pushCorrectAnswer: (state, payload) => {
            const id = payload.payload
            state.correctAnswers.push(id)
        },
        incrementTotalAnswers: (state) => {
            state.total += 1
        }
    }
});

export const { incrementTotalAnswers, pushCorrectAnswer } = answersSlice.actions;