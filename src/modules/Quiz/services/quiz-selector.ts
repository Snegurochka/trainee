import { RootState } from "../../../services/store";

export const selectQuestion = (state: RootState) => state.quiz.question;
export const selectQuiz = (state: RootState) => state.quiz.quiz;
export const selectIsToggled = (state: RootState) => state.quiz.isToggled;
export const selectIsResultCard = (state: RootState) => state.quiz.isResultCard;
