import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AnswersCounter } from "../../Answers/components/AnswersCounter";
import { QuizFilters } from "../Filters/components/QuizFilters";
import { selectIsResultCard } from "../services/quiz-selector";

import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";
import { QuizResult } from "./QuizResult";

export const Quiz = () => {
  const isResult = useSelector(selectIsResultCard);
  return (
    <Grid container spacing={2} gap={2} sx={{ height: "100%" }}>
      <Grid item md={8}>
        {!isResult ? (
          <>
            <QuizCard />
            <QuizControls />
            <AnswersCounter />
          </>
        ) : (
          <QuizResult />
        )}
      </Grid>
      <Grid item md={3}>
        <QuizFilters />
      </Grid>
    </Grid>
  );
};
