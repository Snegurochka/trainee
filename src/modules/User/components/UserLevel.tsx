import { useSelector } from "react-redux";

import { selectLevel } from "../services/user-selectors";

export const UserLevel = () => {
  const level = useSelector(selectLevel);
  if (!level) return null;
  return <div>Level {level}</div>;
};
