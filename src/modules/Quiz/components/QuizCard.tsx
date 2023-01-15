import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";
import { useQuiz } from "../services/quiz-hook";

const CardContentWrapper = styled(CardContent)`
  white-space: pre-line;
`;

const CardWrapper = styled(Card)`
  cursor: pointer;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 34px;
  padding: 0 16px 6px;
`;

export const QuizCard = () => {
  const { question, toggleAnswerHandler, isToggled } = useQuiz();

  return (
    <CardWrapper onClick={toggleAnswerHandler}>
      <CardContentWrapper>
        {!isToggled ? question.question : question.answer}
      </CardContentWrapper>
      <CardBottom>{question.category}</CardBottom>
    </CardWrapper>
  );
};
