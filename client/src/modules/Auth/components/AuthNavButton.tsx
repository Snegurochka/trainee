import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RoutesApp } from "../../../services/routes/const";

export const AuthNavButton = () => {
  return (
    <Link to={RoutesApp.AUTH}>
      <Button color="secondary" variant="contained">Login</Button>
    </Link>
  );
};
