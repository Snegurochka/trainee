import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { answersSlice } from "../../modules/Answers/services/answers-slice";
import { filtersSlice } from "../../modules/Quiz/Filters/services/filters-slice";
import { quizSlice } from "../../modules/Quiz/services/quiz-slice";
import { userSlice } from "../../modules/User/services/user-slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  filters: filtersSlice.reducer,
  quiz: quizSlice.reducer,
  answers: answersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
