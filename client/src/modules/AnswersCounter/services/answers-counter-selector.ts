import { RootState } from "../../../services/store";

export const correctAnswersSelector = (state: RootState) => state.answersCounter.correctAnswers;
export const answersSelector = (state: RootState) => state.answersCounter.answers;
export const totalAnswersSelector = (state: RootState) => state.answersCounter.answers.length;