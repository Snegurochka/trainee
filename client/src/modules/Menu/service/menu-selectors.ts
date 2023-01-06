import { RootState } from "../../../services/store";
import { createSelector } from "reselect";

export const selectCategories = createSelector(
  (state: RootState) => state.menu.categories,
  (categories) => categories
);
export const selectCurrentCategory = createSelector(
  (state: RootState) => state.menu.currentCategory,
  (currentCategory) => currentCategory
);
