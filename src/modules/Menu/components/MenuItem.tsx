import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCategory } from "../service/menu-selectors";
import { quizSlice } from "../../Quiz/services/quiz-slice";
import { menuSlice } from "../service/menu-slice";
import { Button } from "@mui/material";

type MenuItemProps = {
  id: string;
  name: string;
};

export const MenuItem = ({ id, name }: MenuItemProps) => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectCurrentCategory);
  const { setCurrentCategory } = menuSlice.actions;
  const { setQuizByCategory } = quizSlice.actions;

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

export default MenuItem;
