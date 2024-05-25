import { Card, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCorrectAnswers } from "../../Answers/services/answers-selector";
import { QuizWinCard } from "./QuizWinCard";
import { ChallengeWinCard } from "../../Challenge/components/ChallengeWinCard";
import { AnswersListShort } from "../../Answers/components/AnswersListShort";

const CardWrapper = styled(Card)`
  padding: 24px;
  text-align: center;
`;

export const QuizResult = () => {
  const correctAnswers = useSelector(selectCorrectAnswers);
  return (
    <CardWrapper>
      <h3>Quiz complete!</h3>
      <p>Quiz results:</p>
      <AnswersListShort answers={correctAnswers} />
      <ChallengeWinCard />
      {correctAnswers.length > 3 && <QuizWinCard />}
    </CardWrapper>
  );
};
