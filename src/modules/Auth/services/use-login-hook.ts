import { useCallback } from "react";
import { useAppDispatch } from "../../../services/hooks/redux";
import { useNavigate } from "react-router-dom";

import { removeUser, setAuth, setUser } from "../../User/services/user-slice";
import {
  authUser,
  getChallengeInfo,
  getUserInfo,
} from "../../../services/firebase";
import { setChallenge } from "../../Challenge/services/challenge-slice";

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
      const userData = await getUserInfo(user.uid);

      if (!userData) {
        return;
      }

      dispatch(setAuth(true));
      localStorage.setItem("token", user.refreshToken);

      dispatch(
        setUser({
          id: user.uid,
          email: user.email,
          name: userData.name,
          completed: userData.completed || [],
          level: userData.level || 0,
          xp: userData.xp || 0,
          token: user.refreshToken,
          idDoc: userData.idDoc,
        })
      );

      const challenge = await getChallengeInfo(user.uid);
      if (challenge) {
        dispatch(setChallenge({ ...challenge }));
      }

      navigate("/");
    },
    [dispatch, navigate]
  );

  return {
    logOut,
    logIn,
  };
};
