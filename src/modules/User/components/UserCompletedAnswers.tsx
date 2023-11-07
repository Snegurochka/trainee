import { useSelector } from "react-redux";
import { AnswersList } from "../../Answers/components/AnswersList";

import { selectSortedCompleted } from "../services/user-selectors";
import { UserAnswersTotal } from "./UserAnswersTotal";

export const UserCompletedAnswers = () => {
  const completedAnswers = useSelector(selectSortedCompleted);
  return (
    <div>
      <h4>Answers list</h4>
      <UserAnswersTotal />

      <AnswersList answers={completedAnswers} />
    </div>
  );
};
