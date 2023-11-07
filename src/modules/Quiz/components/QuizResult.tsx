import { Card, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { AnswersList } from "../../Answers/components/AnswersList";
import { selectCorrectAnswers } from "../../Answers/services/answers-selector";
import confettiGif from "../assets/confetti-gradient.gif";

const CardWrapper = styled(Card)`
  padding: 24px;
`;

export const QuizResult = () => {
  const correctAnswers = useSelector(selectCorrectAnswers);
  return (
    <CardWrapper>
      <h3>Quiz Result</h3>
      <AnswersList answers={correctAnswers} />
      {correctAnswers.length > 3 && <img src={confettiGif} alt="confetti" />}
    </CardWrapper>
  );
};
