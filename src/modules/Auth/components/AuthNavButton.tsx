import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { RoutesApp } from "../../../services/routes/const";
import { useAuth } from "../services/auth-hook";

export const AuthNavButton = () => {
  const { isAuth, logOut } = useAuth();

  if (isAuth) {
    return (
      <Button variant="outlined" onClick={logOut}>
        LogOut
      </Button>
    );
  }

  return (
    <Link to={RoutesApp.AUTH}>
      <Button color="secondary" variant="contained">
        Login
      </Button>
    </Link>
  );
};
