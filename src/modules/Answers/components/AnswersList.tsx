import { quiz } from "../../Quiz/services/quiz-mock";
import { AnswerWrapper, AnswersBox, QuestionWrapper } from "./Answers.styled";

type TAnswersListProps = {
  answers: number[];
};

export const AnswersList = ({ answers }: TAnswersListProps) => {
  return (
    <AnswersBox>
      {quiz.map((question) => {
        const { id } = question;
        return answers.includes(id) 
        ? <AnswerWrapper key={id}>{id}</AnswerWrapper>
        : <QuestionWrapper key={id}>{id}</QuestionWrapper>
      })}
    </AnswersBox>
  );
};
