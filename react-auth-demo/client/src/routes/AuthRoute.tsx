import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/typedHooks";

// 无需权限认证的白名单
// 一般是前端的一些报错页
const DONT_NEED_AUTHORIZED_PAGE = ["/unauthorized", "/*"];

const AuthRoute = ({ children, path }: any) => {
  // 该flag用于控制 受保护页面的渲染时机，需要等待useEffect中所有的权限验证条件完成后才表示可以渲染
  const [canRender, setRenderFlag] = useState(false);
  const navigate = useNavigate();
  const menuLists = useAppSelector((state) => state.login.menuLists);
  const menuUrls = menuLists.map((menu) => menu.url);
  const token = localStorage.getItem("access_token") || "";

  // 在白名单中的无需验证，直接跳转
  if (DONT_NEED_AUTHORIZED_PAGE.includes(path)) {
    return children;
  }

  useEffect(() => {
    // 用户未登录
    if (token === "") {
      message.destroy();
      message.error("token 过期，请重新登录!");
      navigate("/login");
    }

    // 已登录
    if (token) {
      // 已登录需要通过logout来控制退出登录或者是token过期返回登录界面
      if (location.pathname == "/login") {
        navigate("/");
      }

      // 已登录，根据后台传的可访问列表做判断
      if (!menuUrls.includes(location.pathname)) {
        navigate("/unauthorized", { replace: true });
      }
    }

    // 当上面的权限控制通过后，再渲染受保护的页面
    setRenderFlag(true);
  }, [token, location.pathname]);

  if (!canRender) return null;
  return children;
};
export default AuthRoute;
