import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCategory } from "./filters-selectors";
import { setCurrentCategory } from "./filters-slice";

export const useFilters = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCurrentCategory);

  const setCurrentCategoryHandler = useCallback(
    (id: string) => {
      dispatch(setCurrentCategory(id));
    },
    [dispatch]
  );

  return {
    currentCategory,
    setCurrentCategoryHandler,
  };
};
