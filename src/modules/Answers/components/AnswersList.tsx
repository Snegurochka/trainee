import styled from "@emotion/styled";
import { FlexBox } from "../../../components/Base";

const AnswersBox = styled(FlexBox)`
  justify-content: start;
  flex-wrap: wrap;
  justify-content: center;
`;

const AnswerWrapper = styled.div`
  padding: 4px;
  border: 1px solid #68bc9d;
  margin: 2px;
  min-width: 30px;
  text-align: center;
  border-radius: 4px;
`;

type TAnswersListProps = {
  answers: number[];
};

export const AnswersList = ({ answers }: TAnswersListProps) => {
  return (
    <AnswersBox>
      {answers.map((answer, ind) => (
        <AnswerWrapper key={ind}>{answer}</AnswerWrapper>
      ))}
    </AnswersBox>
  );
};
