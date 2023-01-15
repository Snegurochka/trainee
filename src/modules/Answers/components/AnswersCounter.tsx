import { useSelector } from "react-redux";

import { QUIZ_PER_ROUND } from "../../Quiz/services/quiz-const";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "../services/answers-selector";

import { FlexBox } from "../../../components/Base";

export const AnswersCounter = () => {
  const correct = useSelector(selectCorrectAnswers);
  const total = useSelector(selectTotalAnswers);
  return (
    <FlexBox>
      <span>
        Correct: {correct.length}/ {total}
      </span>
      <span>Total: {QUIZ_PER_ROUND}</span>
    </FlexBox>
  );
};
