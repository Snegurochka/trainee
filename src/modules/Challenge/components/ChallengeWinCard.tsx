import { useEffect } from "react";
import { useChallenge } from "../services/use-challenge-hook";

export const ChallengeWinCard = () => {
  const { isChallengeActive, currentDay, updateLastCheckIn } = useChallenge();

  useEffect(() => {
    updateLastCheckIn();
  }, [updateLastCheckIn]);

  return isChallengeActive ? <div>{currentDay} days</div> : null;
};
