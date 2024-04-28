import { useEffect } from "react";
import { useChallenge } from "../services/use-challenge-hook";
import { ChallengeProgressBar } from "./ChallengeProgressBar";
import { Box } from "@mui/material";

export const ChallengeWinCard = () => {
  const { isChallengeActive, currentDay, updateLastCheckIn } = useChallenge();

  useEffect(() => {
    updateLastCheckIn();
  }, [updateLastCheckIn]);
  
  if (!isChallengeActive) {
    return null;
  }

  return <Box mt={2}>
    <div>{currentDay} days</div>
    <ChallengeProgressBar days={currentDay} />
    </Box>;
};
