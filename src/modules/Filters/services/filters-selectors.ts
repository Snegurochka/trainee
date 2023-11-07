import { RootState } from "../../../services/store";
import { createSelector } from "reselect";

export const selectCategories = createSelector(
  (state: RootState) => state.filters.categories,
  (categories) => categories
);
export const selectCurrentCategory = createSelector(
  (state: RootState) => state.filters.currentCategory,
  (currentCategory) => currentCategory
);
