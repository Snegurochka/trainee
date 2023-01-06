import { TCategoriesNames } from "../../Menu/service/menu-types";

export type TQuiz = {
  id: number;
  question: string;
  answer: string;
  category: TCategoriesNames;
};
