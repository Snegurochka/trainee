import { Container } from "@mui/material";
import { AnswersCounter } from "../../AnswersCounter/components/AnswersCounter";

import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";

export const Quiz = () => {
  return (
    <Container maxWidth="sm">
      <QuizCard />
      <QuizControls />
      <AnswersCounter />
    </Container>
  );
};
