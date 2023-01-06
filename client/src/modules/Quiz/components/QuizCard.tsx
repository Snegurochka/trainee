import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";
import { useQuiz } from "../services/quiz-hook";

const CardContentWrapper = styled(CardContent)`
  white-space: pre-line;
`;

const CardWrapper = styled(Card)`
  cursor: pointer;
  min-height: 200px;
`;

export const QuizCard = () => {
  const { question, toggleAnswerHandler, isToggled } = useQuiz();

  return (
    <CardWrapper onClick={toggleAnswerHandler}>
      <CardContentWrapper>
        {!isToggled ? question.question : question.answer}
      </CardContentWrapper>
    </CardWrapper>
  );
};
