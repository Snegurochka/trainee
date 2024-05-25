import { AnswerWrapper, AnswersBox } from "./Answers.styled";

type TAnswersListProps = {
  answers: number[];
};

export const AnswersListShort = ({ answers }: TAnswersListProps) => {
  return (
    <AnswersBox>
      {answers.map((question) => (
        <AnswerWrapper key={question}>{question}</AnswerWrapper>
      ))}
    </AnswersBox>
  );
};
