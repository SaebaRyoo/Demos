import { message } from "antd";
import { useEffect } from "react";
import { matchRoutes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/typedHooks";
import routers from "./routes";

const AuthRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const menuLists = useAppSelector((state) => state.login.menuLists);
  const token = localStorage.getItem("access_token") || "";
  const mathchs = matchRoutes(routers, location);
  const isExist = mathchs?.some((item) => item.pathname == location.pathname);

  useEffect(() => {
    // 用户未登录
    if (token === "") {
      message.error("token 过期，请重新登录!");
      navigate("/login");
    }

    // 已登录，根据后台传的当前用户对应角色的可访问列表做过滤
    if (token && !menuLists.includes(location.pathname)) {
      message.error("暂无访问权限,请联系管理员");
      navigate("/unauthorized", { replace: true });
    }

    // 已登录
    if (token && isExist) {
      // 已登录需要通过logout来控制退出登录或者是token过期返回登录界面
      if (location.pathname == "/login") {
        navigate("/");
      } else {
        // 如果是其他路由就跳到其他的路由
        navigate(location.pathname);
      }
    }
  }, [token, location.pathname]);

  return children;
};
export default AuthRoute;
