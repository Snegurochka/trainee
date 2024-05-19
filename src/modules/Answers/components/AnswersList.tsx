import styled from "@emotion/styled";
import { FlexBox } from "../../../components/Base";
import { questionsCount } from "../../Questions/services/questions-selector";

const AnswersBox = styled(FlexBox)`
  justify-content: start;
  flex-wrap: wrap;
  justify-content: center;
`;

const AnswerWrapper = styled.div`
  padding: 4px;
  border: 1px solid var(--success);
  background-color: var(--success);
  margin: 2px;
  min-width: 30px;
  text-align: center;
  border-radius: 4px;
`;

const QWrapper = styled.div`
  padding: 4px;
  border: 1px solid #7d7d7d;
  margin: 2px;
  min-width: 30px;
  text-align: center;
  border-radius: 4px;
`;

type TAnswersListProps = {
  answers: number[];
};

export const AnswersList = ({ answers }: TAnswersListProps) => {
  const totalArr = new Array(questionsCount).fill(' ');
  return (
    <AnswersBox>
      {totalArr.map((q, ind) => {
        return answers.includes(ind) 
        ? <AnswerWrapper key={ind}>{ind}</AnswerWrapper>
        : <QWrapper key={ind}>{ind}</QWrapper>
      })}
    </AnswersBox>
  );
};
