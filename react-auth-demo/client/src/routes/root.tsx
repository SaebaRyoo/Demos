import React, { ReactElement } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import routers, { RoutesType } from "./routes";

const Root = () => {
  // 创建一个有子节点的Route
  const CreateHasChildrenRoute = (route: RoutesType) => {
    return (
      <Route path={route.path} key={route.path}>
        <Route
          index
          element={
            <AuthRoute key={route.path} path={route.path}>
              {route.element}
            </AuthRoute>
          }
        />
        {route?.children && RouteAuthFun(route.children)}
      </Route>
    );
  };

  // 创建一个没有子节点的Route
  const CreateNoChildrenRoute = (route: RoutesType) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <AuthRoute path={route.path} key={route.path}>
            {route.element}
          </AuthRoute>
        }
      />
    );
  };

  // 处理我们的routers
  const RouteAuthFun = (routeList: any) => {
    return routeList.map((route: RoutesType) => {
      let element: ReactElement | null = null;
      if (route.children && !!route.children.length) {
        element = CreateHasChildrenRoute(route);
      } else {
        element = CreateNoChildrenRoute(route);
      }
      return element;
    });
  };

  return (
    <BrowserRouter>
      <Routes>{RouteAuthFun(routers)}</Routes>
    </BrowserRouter>
  );
};
export default Root;
