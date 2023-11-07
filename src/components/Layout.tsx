import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import { SideBar } from "../modules/SideBar/components/SideBar";

export const Layout = () => {
  return (
    <Grid container spacing={2} mt={4} gap={8}>
      <Grid item xs={3} ml={3}>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};
