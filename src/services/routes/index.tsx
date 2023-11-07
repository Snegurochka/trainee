import { createBrowserRouter } from "react-router-dom";
import { RoutesApp } from "./const";

import { HomePage } from "../../pages/HomePage";
import { AuthPage } from "../../pages/AuthPage";
import { QuizPage } from "../../pages/QuizPage";
import { Layout } from "../../components/Layout";
import { QuestionsPage } from "../../pages/QuestionsPage";
import { AccountPage } from "../../pages/AccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: RoutesApp.QUIZ, element: <QuizPage /> },
      { path: RoutesApp.AUTH, element: <AuthPage /> },
      { path: RoutesApp.QUESTIONS, element: <QuestionsPage /> },
      { path: RoutesApp.ACCOUNT, element: <AccountPage /> },
      { path: "*", element: <div>Not found</div>}
    ],
  },
]);
