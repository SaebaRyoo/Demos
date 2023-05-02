import React, { ReactElement } from "react";
import Login from "../pages/login";
import Foo from "../pages/foo";
import Home from "../pages/home";
import Protected from "../pages/protected";
import UnauthorizedPage from "../pages/error/UnauthorizedPage";
import NotFound from "../pages/error/404";
import MyAuthButtonPage from "../pages/foo/auth-button";

export type RoutesType = {
  path: string;
  element: ReactElement;
  children?: RoutesType[];
};

const routers: RoutesType[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/foo",
    element: <Foo />,
    children: [
      {
        path: "/foo/auth-button",
        element: <MyAuthButtonPage />,
      },
    ],
  },
  {
    path: "/protected",
    element: <Protected />,
  },

  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },

  // 配置404，需要放在最后
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routers;
