import { NavLink } from "react-router-dom";
import { navigationLinks } from "../service/menu-mock";

import { Stack } from "@mui/material";

export const Menu = () => {
  return (
    <Stack spacing={2}>
      {navigationLinks.map((navItem) => (
        <NavLink key={navItem.id} to={navItem.path}>
          {navItem.name}
        </NavLink>
      ))}
    </Stack>
  );
};
