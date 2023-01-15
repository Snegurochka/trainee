import { RootState } from "../../../services/store";

export const selectCorrectAnswers = (state: RootState) => state.answers.correctAnswers
export const selectTotalAnswers = (state: RootState) => state.answers.total;