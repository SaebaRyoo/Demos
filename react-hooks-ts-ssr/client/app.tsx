import React from "react";
import { Layout } from "./components/Layout";

export const App: React.FC = () => {
  return (
    <Layout isServer={true}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>欢迎访问梦幻酒店</h1>
        <p>页面正在加载中...</p>
      </div>
    </Layout>
  );
};
