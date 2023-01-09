import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCategory } from "../service/menu-selectors";
import { setCurrentCategory } from "../service/menu-slice";

export const useMenu = () => {
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
