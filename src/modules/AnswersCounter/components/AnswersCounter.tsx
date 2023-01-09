import { useSelector } from "react-redux";

import { QUIZ_PER_ROUND } from "../../Quiz/services/quiz-const";
import {
  correctAnswersSelector,
  totalAnswersSelector,
} from "../services/answers-counter-selector";

import { FlexBox } from "../../../components/Base";

export const AnswersCounter = () => {
  const correct = useSelector(correctAnswersSelector);
  const total = useSelector(totalAnswersSelector);
  return (
    <FlexBox>
      <span>
        Correct: {correct}/ {total}
      </span>
      <span>Total: {QUIZ_PER_ROUND}</span>
    </FlexBox>
  );
};
