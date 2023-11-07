import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCategory } from "../services/filters-selectors";

import { Button } from "@mui/material";

import { setCurrentCategory } from "../services/filters-slice";
import { setQuizByCategory } from "../../Quiz/services/quiz-slice";

type FilterCategoriesProps = {
  id: string;
  name: string;
};

export const FiltersCategoryItem = ({ id, name }: FilterCategoriesProps) => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCurrentCategory);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const id = evt.currentTarget.id;
    dispatch(setCurrentCategory(id));
    dispatch(setQuizByCategory(name));
  };
  return (
    <Button
      onClick={handleClick}
      id={id}
      variant={id === currentCategory ? "contained" : "outlined"}
    >
      {name}
    </Button>
  );
};
