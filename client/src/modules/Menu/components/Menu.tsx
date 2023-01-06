import { useSelector } from "react-redux";
import { selectCategories } from "../service/menu-selectors";

import { Stack } from "@mui/material";
import MenuItem from "./MenuItem";

export const Menu = () => {
  const categories = useSelector(selectCategories);

  return (
    <Stack spacing={2}>
      {categories.map((category) => (
        <MenuItem key={category.id} id={category.id} name={category.name} />
      ))}
    </Stack>
  );
};
