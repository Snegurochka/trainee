import { useCallback } from "react";
import { useSelector } from "react-redux";
import { setAuthByToken } from "../../../services/firebase";

import { useAppDispatch } from "../../../services/hooks/redux";

import { selectIsAuth, selectUid } from "../../User/services/user-selectors";
import { setAuth } from "../../User/services/user-slice";

export const useAuth = () => {
  const isAuth = useSelector(selectIsAuth);
  const uid = useSelector(selectUid);

  const dispatch = useAppDispatch();

  const checkAuth = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    if (!uid) {
      setAuthByToken(token);
    }
    dispatch(setAuth(true));
  }, [dispatch, uid]);

  return {
    isAuth,
    checkAuth,
  };
};
