import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import { selectUser } from "../../User/services/user-selectors";
import { removeUser } from "../../User/services/user-slice";

export const useAuth = () => {
  const { email, token } = useSelector(selectUser);

  const dispatch = useAppDispatch();

  const logOut = useCallback(() => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  }, [dispatch]);

  return {
    isAuth: !!token,
    email,
    logOut,
  };
};
