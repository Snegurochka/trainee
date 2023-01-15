import { Stack } from "@mui/material";
import { quiz } from "../../Quiz/services/quiz-mock";
import { QuestionsItem } from "./QuestionsItem";

export const QuestionsList = () => {
  return (
    <Stack gap={4}>
        {quiz.map((item) => <QuestionsItem key={item.id} quiz={item} />)}
    </Stack>
  )
}
