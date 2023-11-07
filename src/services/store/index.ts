import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "../../modules/User/services/user-slice";
import quiz from "../../modules/Quiz/services/quiz-slice";
import filters from "../../modules/Filters/services/filters-slice";
import answers from "../../modules/Answers/services/answers-slice";
import challenge from "../../modules/Challenge/services/challenge-slice";
import xp from "../../modules/Xp/services/xp-slice";

const rootReducer = combineReducers({
  user,
  quiz,
  filters,
  answers,
  xp,
  challenge
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
