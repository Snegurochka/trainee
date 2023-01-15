import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";

import type { TQuiz } from "../../Quiz/services/quiz-type";

const AccordionDetailsWrapper = styled(AccordionDetails)`
    border-top: 1px solid #e0e0e0;
`;

type TQuestionsItemProps = {
  quiz: TQuiz;
};

export const QuestionsItem = ({ quiz }: TQuestionsItemProps) => {
  const { id, question, answer, category } = quiz;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<div>+</div>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack sx={{ width: "100%" }}>
          <pre>
            {category}: {id}. {question}
          </pre>
        </Stack>
      </AccordionSummary>
      <AccordionDetailsWrapper>
        <pre>{answer}</pre>
      </AccordionDetailsWrapper>
    </Accordion>
  );
};
