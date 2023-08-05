const express = require("express");

const app = express();
const port = 8081;

// 引入路由中间件
const routerAdmin = require("./app/admin");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 加载路由模块
app.use("/api", routerAdmin);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
