import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../services/store";

export const selectNearestXpThreshold = createSelector(
  (state: RootState) => state.xp.xpThresholds,
  (state: RootState) => state.user.user?.level || 0,
  (xpThresholds, level) =>
    xpThresholds[level]
);
