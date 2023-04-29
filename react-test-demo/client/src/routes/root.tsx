import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Todo from "../features/todo/Todo";
import App from "../features/app/App";
import TestPage from "../features/test-page/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
