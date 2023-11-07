import { useSelector } from "react-redux";
import {
  selectChallengeActive,
  selectChallengeDateStart,
  selectChallengeLastCheckIn,
} from "../services/challenge-selector";
import { daysInterval } from "../services/challenge-utils";

const daysRender = (dateStart: number, lastCheckIn: number) => {
  const daysFromLastCheckIn = daysInterval(lastCheckIn);
  if (daysFromLastCheckIn > 1)
    return `You missed ${daysFromLastCheckIn - 1} days`;
  const days = daysInterval(dateStart);
  return days > 0 ? `Challenge Days : ${days}` : "Just start";
};

export const ChallengeDays = () => {
  const isActive = useSelector(selectChallengeActive);
  const dateStart = useSelector(selectChallengeDateStart);
  const lastCheckIn = useSelector(selectChallengeLastCheckIn);

  return isActive ? <div>{daysRender(dateStart, lastCheckIn)}</div> : null;
};
