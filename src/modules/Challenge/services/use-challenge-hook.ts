import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import { selectChallengeActive, selectChallengeDateStart, selectIdChallenge } from "./challenge-selector";
import { setLastCheckIn, startChallenge } from "./challenge-slice";
import { selectUid } from "../../User/services/user-selectors";
import { daysInterval } from "./challenge-utils";

const currentDate = Date.now();

export const useChallenge = () => {
  const UID = useSelector(selectUid);
  const idChallenge = useSelector(selectIdChallenge);
  const isChallengeActive = useSelector(selectChallengeActive);
  const dateStart = useSelector(selectChallengeDateStart);

  const dispatch = useAppDispatch();

  const startChallengeHandler = useCallback(() => {
    dispatch(startChallenge());
  }, [dispatch]);

  const updateLastCheckIn = useCallback(() => {
    if (!UID || !idChallenge) return;
    dispatch(setLastCheckIn({  idChallenge, lastCheckIn: currentDate }));
  }, [dispatch, UID, idChallenge]);

  const currentDay = daysInterval(dateStart);

  return {
    isChallengeActive,
    startChallengeHandler,
    updateLastCheckIn,
    currentDay
  };
};
