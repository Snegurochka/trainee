import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AnswersCounter } from "../../Answers/components/AnswersCounter";
import { Filters } from "../../Filters/components/Filters";

import { selectIsResultCard } from "../services/quiz-selector";

import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";
import { QuizResult } from "./QuizResult";
import { FlexColumnBox } from "../../../components/Base";

export const Quiz = () => {
  const isResult = useSelector(selectIsResultCard);
  return (
    <Grid container spacing={2} gap={2} sx={{ height: "100%" }}>
      <Grid item md={8}>
        {!isResult ? (
          <FlexColumnBox gap={3}>
            <QuizCard />
            <QuizControls />
            <AnswersCounter />
          </FlexColumnBox>
        ) : (
          <QuizResult />
        )}
      </Grid>
      <Grid item md={3}>
        <Filters />
      </Grid>
    </Grid>
  );
};
