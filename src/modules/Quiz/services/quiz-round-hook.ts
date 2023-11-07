import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "../../Answers/services/answers-selector";
import { selectIdDoc } from "../../User/services/user-selectors";
import { isResultCard } from "./quiz-slice";
import { removeDuplicates } from "./quiz-utils";
import { setResult } from "../../User/services/user-slice";
import { useXp } from "../../Xp/services/use-xp-hook";
import { useChallenge } from "../../Challenge/services/use-challenge-hook";
import { useAppDispatch } from "../../../services/hooks/redux";
import { QUIZ_PER_ROUND } from "./quiz-const";

const getCompleted = (completedQuiz: number[], correctAnswers: number[]) => {
  const uniqueCompleted = removeDuplicates([
    ...completedQuiz,
    ...correctAnswers,
  ]);
  return uniqueCompleted.sort((a, b) => a - b);
};

export const useQuizRound = () => {
  const idDoc = useSelector(selectIdDoc);
  const correctAnswers = useSelector(selectCorrectAnswers);
  const total = useSelector(selectTotalAnswers);

  const dispatch = useAppDispatch();

  const { updateLastCheckIn } = useChallenge();
  const updateXp = useXp();

  const endOfTheRound = useCallback(
    (completedQuiz: number[]) => {
      dispatch(isResultCard());

      if (!idDoc) return;
      const completed = getCompleted(completedQuiz, correctAnswers);
      dispatch(setResult({ completed, idDoc }));

      if (correctAnswers.length < 3) return;
      updateXp(correctAnswers.length, idDoc);
      updateLastCheckIn();
    },
    [dispatch, correctAnswers, idDoc, updateXp, updateLastCheckIn]
  );

  const isLastQuestion = useCallback(() => {
    return total === QUIZ_PER_ROUND;
  }, [total]);

  return { endOfTheRound, isLastQuestion };
};
