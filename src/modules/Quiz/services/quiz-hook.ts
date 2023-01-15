import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../services/hooks/redux";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "../../Answers/services/answers-selector";
import {
  pushCorrectAnswer,
  incrementTotalAnswers,
} from "../../Answers/services/answers-slice";
import {
  selectCompleted,
  selectIdDoc,
} from "../../User/services/user-selectors";
import { setResult } from "../../User/services/user-slice";
import { QUIZ_PER_ROUND } from "./quiz-const";
import { selectIsToggled, selectQuestion, selectQuiz } from "./quiz-selector";
import { isResultCard, nextQuestion, toggleAnswer } from "./quiz-slice";
import { getRandomInt } from "./quiz-utils";

const getNetIndex = (length: number, completed: string[]): number => {
  const nextIndex = getRandomInt(length);
  return completed.includes(nextIndex.toString())
    ? getNetIndex(length, completed)
    : nextIndex;
};

export const useQuiz = () => {
  const dispatch = useAppDispatch();

  const quiz = useSelector(selectQuiz);
  const question = useSelector(selectQuestion);
  const isToggled = useSelector(selectIsToggled);
  const total = useSelector(selectTotalAnswers);
  const completedQuiz = useSelector(selectCompleted);
  const correctAnswers = useSelector(selectCorrectAnswers);
  const idDoc = useSelector(selectIdDoc);

  const setNewQuestion = useCallback(() => {
    if (total === QUIZ_PER_ROUND) {
      const completed = [...completedQuiz, ...correctAnswers];
      dispatch(isResultCard());

      if (!idDoc) return;

      dispatch(setResult({ completed, idDoc }));
    } else {
      const nextIndex = getNetIndex(quiz.length, completedQuiz);

      dispatch(nextQuestion(nextIndex));
      dispatch(incrementTotalAnswers());
    }
  }, [dispatch, quiz.length, total, completedQuiz, correctAnswers, idDoc]);

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
