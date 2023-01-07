import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { answersCounterSlice } from "../../modules/AnswersCounter/services/answers-counter-slice";
import { menuSlice } from "../../modules/Menu/service/menu-slice";
import { quizSlice } from "../../modules/Quiz/services/quiz-slice";
import { userSlice } from "../../modules/User/services/user-slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  menu: menuSlice.reducer,
  quiz: quizSlice.reducer,
  answersCounter: answersCounterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
