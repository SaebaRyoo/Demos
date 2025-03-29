// client/client.tsx
import React from "react";
import ReactDOM from "react-dom";
import { ClientApp } from "./ClientApp";

// 使用hydrate方法，确保SSR的内容可以正确地水合为交互式组件
ReactDOM.hydrate(
  <React.StrictMode>
    <ClientApp />
  </React.StrictMode>,
  document.getElementById("root")
);
