import { useCallback } from "react";
import { useAppDispatch } from "../../../services/hooks/redux";
import { useNavigate } from "react-router-dom";

import { removeUser, setAuth, setUser } from "../../User/services/user-slice";
import { authUser, getUserInfo } from "../../../services/firebase";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = useCallback(() => {
    dispatch(removeUser());
    dispatch(setAuth(false));
    localStorage.removeItem("token");
  }, [dispatch]);

  const logIn = useCallback(
    async (email: string, password: string) => {
      const user = await authUser(email, password);
      dispatch(setAuth(true));
      localStorage.setItem("token", user.refreshToken);

      const userData = await getUserInfo(user.uid);

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          name: userData.name,
          completed: userData.completed || [],
          token: user.refreshToken,
          idDoc: userData.idDoc,
        })
      );
     
      navigate("/");
    },
    [dispatch, navigate]
  );

  return {
    logOut,
    logIn,
  };
};
