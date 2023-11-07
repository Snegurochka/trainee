import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../services/store";

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUid = (state: RootState) => state.user.user?.id;
export const selectIdDoc = (state: RootState) => state.user.user?.idDoc;
export const selectCompleted = createSelector(selectUser, (user) => user?.completed || []);
export const selectCompletedTotal = createSelector(selectCompleted, (completed) => completed.length);
export const selectSortedCompleted = createSelector(selectCompleted, (completed) => [...completed].sort((a, b) => a - b));
export const selectLevel = createSelector(selectUser, (user) => user?.level || 0);
export const selectXp = createSelector(selectUser, (user) => user?.xp || 0);