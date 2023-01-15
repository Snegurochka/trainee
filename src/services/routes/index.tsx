import { createBrowserRouter } from "react-router-dom";
import { RoutesApp } from "./const";

import { HomePage } from "../../pages/HomePage";
import { AuthPage } from "../../pages/AuthPage";
import { QuizPage } from "../../pages/QuizPage";
import { Layout } from "../../components/Layout";
import { QuestionsPage } from "../../pages/QuestionsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutesApp.QUIZ, element: <QuizPage /> },
      { path: RoutesApp.AUTH, element: <AuthPage /> },
      { path: RoutesApp.QUESTIONS, element: <QuestionsPage /> },
      { path: "*", element: <div>Not found</div>}
    ],
  },
]);
