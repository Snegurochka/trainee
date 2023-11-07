import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../services/user-selectors";

import { questionsCount } from "../../Questions/services/questions-selector";
import { selectCompletedTotal } from "../services/user-selectors";

export const UserAnswersTotal = () => {
  const total = useSelector(selectCompletedTotal);
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return null;
  }
  return (
    <Box>
      Total {total}/ {questionsCount}
    </Box>
  );
};
