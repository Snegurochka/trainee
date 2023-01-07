import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCategories } from "../service/menu-selectors";
import { navigationLinks } from "../service/menu-mock";

import { Stack } from "@mui/material";
import MenuItem from "./MenuItem";
import { LoginNavButton } from "../../Login/components/LoginNavButton";

export const Menu = () => {
  const categories = useSelector(selectCategories);

  return (
    <Stack spacing={4}>
      <LoginNavButton />

      <Stack spacing={2}>
        {navigationLinks.map((navItem) => (
          <NavLink key={navItem.id} to={navItem.path}>{navItem.name}</NavLink>
        ))}
      </Stack>

      <h3>Quiz Categories</h3>

      <Stack spacing={2}>
        {categories.map((category) => (
          <MenuItem key={category.id} id={category.id} name={category.name} />
        ))}
      </Stack>
    </Stack>
  );
};
