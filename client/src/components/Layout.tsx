import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import { Menu } from "../modules/Menu/components/Menu";

export const Layout = () => {
  return (
    <Grid container spacing={2} mt={4}>
      <Grid item xs={3} ml={4}>
        <Menu />
      </Grid>
      <Outlet />
    </Grid>
  );
};
