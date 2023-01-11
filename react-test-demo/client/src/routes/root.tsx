import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Todo from "../features/todo/Todo";
import App from "../features/app/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/todo",
    element: <Todo/>,
  },
]);

export default router
