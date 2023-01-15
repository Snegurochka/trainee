import { TCategoriesNames } from "../Filters/services/filters-types";

export type TQuiz = {
  id: number;
  question: string;
  answer: string;
  category: TCategoriesNames;
};
