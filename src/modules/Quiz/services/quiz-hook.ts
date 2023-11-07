import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import {
  pushCorrectAnswer,
  incrementTotalAnswers,
} from "../../Answers/services/answers-slice";
import { selectCompleted } from "../../User/services/user-selectors";
import { useQuizRound } from "./quiz-round-hook";
import { selectIsToggled, selectQuestion, selectQuiz } from "./quiz-selector";
import { nextQuestion, toggleAnswer } from "./quiz-slice";
import { TQuiz } from "./quiz-type";
import { getRandomInt } from "./quiz-utils";

const getNetIndex = (quiz: TQuiz[], completed: number[]): number => {
  const nextIndex = getRandomInt(quiz.length);
  const questionId = quiz[nextIndex].id;
  return completed.includes(questionId)
    ? getNetIndex(quiz, completed)
    : nextIndex;
};

export const useQuiz = () => {
  const quiz = useSelector(selectQuiz);
  const question = useSelector(selectQuestion);
  const isToggled = useSelector(selectIsToggled);
  const completedQuiz = useSelector(selectCompleted);

  const dispatch = useAppDispatch();
  const { isLastQuestion, endOfTheRound } = useQuizRound();

  const setNewQuestion = useCallback(() => {
    if (isLastQuestion()) {
      endOfTheRound(completedQuiz);
    } else {
      const nextIndex = getNetIndex(quiz, completedQuiz);

      dispatch(nextQuestion(nextIndex));
      dispatch(incrementTotalAnswers());
    }
  }, [dispatch, quiz, completedQuiz, endOfTheRound, isLastQuestion]);

  const correctAnswerHandler = useCallback(() => {
    setNewQuestion();
    dispatch(pushCorrectAnswer(question.id));
  }, [dispatch, setNewQuestion, question.id]);

  const wrongAnswerHandler = useCallback(() => {
    setNewQuestion();
  }, [setNewQuestion]);

  const toggleAnswerHandler = useCallback(() => {
    dispatch(toggleAnswer());
  }, [dispatch]);

  return {
    question,
    isToggled,
    correctAnswerHandler,
    wrongAnswerHandler,
    toggleAnswerHandler,
  };
};
