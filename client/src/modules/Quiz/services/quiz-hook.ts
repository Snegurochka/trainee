import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import {
  incrementCorrectAnswers,
  incrementTotalAnswers,
} from "../../AnswersCounter/services/answers-counter-slice";
import { selectIsToggled, selectQuestion, selectQuiz } from "./quiz-selector";
import { nextQuestion, toggleAnswer } from "./quiz-slice";
import { getRandomInt } from "./quiz-utils";

export const useQuiz = () => {
  const dispatch = useAppDispatch();

  const quiz = useSelector(selectQuiz);
  const question = useSelector(selectQuestion);
  const isToggled = useSelector(selectIsToggled);

  const setNewQuestion = useCallback(() => {
    const nextIndex = getRandomInt(quiz.length);
    dispatch(nextQuestion(nextIndex));
    dispatch(incrementTotalAnswers(question.id));
  }, [dispatch, quiz.length, question.id]);

  const nextQuestionHandler = useCallback(() => {
    setNewQuestion();

    dispatch(incrementCorrectAnswers());
  }, [dispatch, setNewQuestion]);

  const wrongAnswerHandler = useCallback(() => {
    setNewQuestion();
  }, [setNewQuestion]);

  const toggleAnswerHandler = useCallback(() => {
    dispatch(toggleAnswer());
  }, [dispatch]);

  return {
    question,
    isToggled,
    nextQuestionHandler,
    wrongAnswerHandler,
    toggleAnswerHandler,
  };
};
