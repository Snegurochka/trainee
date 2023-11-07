import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import { selectChallengeActive } from "./challenge-selector";
import { setLastCheckIn, startChallenge } from "./challenge-slice";
import { selectUid } from "../../User/services/user-selectors";

const currentDate = Date.now();

export const useChallenge = () => {
  const UID = useSelector(selectUid);
  const  idChallenge = '1';
  const isActive = useSelector(selectChallengeActive);
  const dispatch = useAppDispatch();

  const startChallengeHandler = useCallback(() => {
    dispatch(startChallenge());
  }, [dispatch]);

  const updateLastCheckIn = useCallback(() => {
    if (!UID) return;
    dispatch(setLastCheckIn({  idChallenge, lastCheckIn: currentDate }));
  }, [dispatch, UID]);

  return {
    isActive,
    startChallengeHandler,
    updateLastCheckIn,
  };
};
