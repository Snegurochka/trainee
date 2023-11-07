import { useSelector } from "react-redux";
import { selectXp } from "../../User/services/user-selectors";
import { selectNearestXpThreshold } from "../services/xp-select";

export const Xp = () => {
  const nearestXpThreshold = useSelector(selectNearestXpThreshold);
  const currentXp = useSelector(selectXp);
  return (
    <div>
      {currentXp} xp/ {nearestXpThreshold} xp
    </div>
  );
};
