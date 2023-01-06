import {Button } from "@mui/material";
import { FlexBox } from "../../../components/Base";
import { useQuiz } from "../services/quiz-hook";

export const QuizControls = () => {
  const { nextQuestionHandler, wrongAnswerHandler } = useQuiz();
  return (
    <FlexBox>
      <Button variant="contained"
      onClick={wrongAnswerHandler}
      >I don't know</Button>
      <Button variant="contained" color="success" onClick={nextQuestionHandler}>
        I know
      </Button>
    </FlexBox>
  );
};
