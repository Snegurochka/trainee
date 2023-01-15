import { Link } from "react-router-dom";
import { RoutesApp } from "../../../services/routes/const";
import { useAuth } from "../services/use-auth-hook";
import { useLogin } from "../services/use-login-hook";

import { Button } from "@mui/material";

export const AuthNavButton = () => {
  const { logOut } = useLogin();
  const { isAuth } = useAuth();

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
