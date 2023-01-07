import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../../pages/HomePage";
import { AuthPage } from "../../pages/AuthPage";
import { QuizPage } from "../../pages/QuizPage";
import { Layout } from "../../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/quiz", element: <QuizPage /> },
      { path: "/auth", element: <AuthPage /> },
    ],
  },
]);
