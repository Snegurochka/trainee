import { Button } from "@mui/material";
import { useChallenge } from "../services/use-challenge-hook";

const days = new Array(30).fill("");

export const Challenge = () => {
  const { isActive, startChallengeHandler } = useChallenge();

  return (
    <div>
      Challenge
      {isActive ? (
        "table"
      ) : (
        <Button onClick={startChallengeHandler}>Start Challenge</Button>
      )}
    </div>
  );
};
