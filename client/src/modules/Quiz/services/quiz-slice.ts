import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "./quiz-mock";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    index: 0,
    isToggled: false,
    question: quiz[0],
    quiz,
  },
  reducers: {
    nextQuestion: (state, action) => {
      const nextIndex = action.payload;
      state.index = nextIndex;
      state.question = state.quiz[nextIndex];
      state.isToggled = false;
    },
    setQuizByCategory: (state, action) => {
      const name = action.payload;

      state.quiz = quiz.filter((q) => q.category === name);

      state.index = 0;
      state.question = state.quiz[0];
      state.isToggled = false;
    },
    toggleAnswer: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { nextQuestion, setQuizByCategory, toggleAnswer } = quizSlice.actions;