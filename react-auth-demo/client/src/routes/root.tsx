import React, { ReactElement } from "react";
import { Routes, Route, BrowserRouter, matchRoutes } from "react-router-dom";
import AuthRoute from "./AuthRouter";
import routers, { RoutesType } from "./routes";

// 不需要权限认证即可访问的页面
// 一般是前端的一些报错页，不用在权限当中配置
const DONT_NEED_AUTHORIZED_PAGE = ["/unauthorized", "/*"];

const Root = () => {
  // 创建一个有字节点的Route
  const CreateHasChildrenRoute = (route: RoutesType) => {
    return (
      <Route path={route.path} key={route.path}>
        <Route
          index
          element={
            DONT_NEED_AUTHORIZED_PAGE.includes(route.path) ? (
              route.element
            ) : (
              <AuthRoute key={route.path}>{route.element}</AuthRoute>
            )
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
          DONT_NEED_AUTHORIZED_PAGE.includes(route.path) ? (
            route.element
          ) : (
            <AuthRoute key={route.path}>{route.element}</AuthRoute>
          )
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
