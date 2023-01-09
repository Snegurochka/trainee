import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answers: [] as string[],
    correctAnswers: 0,
}

export const answersCounterSlice = createSlice({
    name: 'answersCounter',
    initialState,
    reducers: {
        incrementTotalAnswers: (state, payload) => {
            const id = payload.payload
            state.answers.push(id)
        },
        incrementCorrectAnswers: (state) => {
            state.correctAnswers += 1
        }
    }
});

export const { incrementTotalAnswers, incrementCorrectAnswers } = answersCounterSlice.actions;