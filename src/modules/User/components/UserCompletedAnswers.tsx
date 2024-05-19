import { useSelector } from "react-redux";
import { AnswersList } from "../../Answers/components/AnswersList";

import { selectSortedCompleted } from "../services/user-selectors";
import { UserAnswersTotal } from "./UserAnswersTotal";
import { FlexColumnBox } from "../../../components/Base";

export const UserCompletedAnswers = () => {
  const completedAnswers = useSelector(selectSortedCompleted);
  return (
    <FlexColumnBox gap={2}>
      <h4>Answers list</h4>
      <UserAnswersTotal />
      <AnswersList answers={completedAnswers} />
    </FlexColumnBox>
  );
};
