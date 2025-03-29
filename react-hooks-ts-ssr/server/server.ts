import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../client/app";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// 设置静态文件目录
server.use("/", express.static(path.join(__dirname, "static")));
server.use("/images", express.static(path.join(__dirname, "static/images")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);
const assets = JSON.parse(manifest);

// 处理所有路由，支持客户端路由
server.get("*", (req, res) => {
  // 使用App组件单独渲染，不包括路由
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
