import { useSelector } from "react-redux";
import {
  selectChallengeActive,
  selectChallengeDateStart,
  selectChallengeLastCheckIn,
} from "../services/challenge-selector";
import { daysRender } from "../services/challenge-utils";



export const ChallengeDays = () => {
  const isActive = useSelector(selectChallengeActive);
  const dateStart = useSelector(selectChallengeDateStart);
  const lastCheckIn = useSelector(selectChallengeLastCheckIn);

  return isActive ? <div>{daysRender(dateStart, lastCheckIn)}</div> : null;
};
