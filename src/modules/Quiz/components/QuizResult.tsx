import { Card, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { AnswersList } from "../../Answers/components/AnswersList";
import { selectCorrectAnswers } from "../../Answers/services/answers-selector";
import { QuizWinCard } from "./QuizWinCard";
import { ChallengeWinCard } from "../../Challenge/components/ChallengeWinCard";

const CardWrapper = styled(Card)`
  padding: 24px;
`;

export const QuizResult = () => {
  const correctAnswers = useSelector(selectCorrectAnswers);
  return (
    <CardWrapper>
      <h3>Quiz Result</h3>
      <AnswersList answers={correctAnswers} />
      <ChallengeWinCard />
      {correctAnswers.length > 3 && <QuizWinCard />}
    </CardWrapper>
  );
};
