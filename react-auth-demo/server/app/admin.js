const express = require("express");
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const router = express.Router();
const secretStr = "sdfsjfklsjfiewjwoieow";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zqy19970114",
  database: "blog",
});

// 验证 token 中间件
const verifyToken = (req, res, next) => {
  const token = req.header("access-token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, secretStr);
    console.log("verified--->", verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

router.post("/register", function (req, res) {
  const { email, password, username } = req.body;
  const query = "SELECT * FROM user WHERE email = ?";
  connection.query(query, email, (error, results) => {
    if (error) {
      res.status(500).json({ error: "查询失败" });
      return;
    }
    if (results.length !== 0) {
      res.status(401).json({ error: "用户已存在" });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const insertQuery =
      "INSERT INTO user (email, password, username) VALUES (?, ?, ?)";
    connection.query(
      insertQuery,
      [email, hashedPassword, username],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: "查询失败" });
          return;
        }
        res.json({
          data: result.insertId,
          msg: "注册成功",
          status: true,
        });
      }
    );
  });
});

router.post("/login", function (req, res) {
  const { email, password } = req.body;
  const query = "SELECT * FROM user WHERE email = ?";
  connection.query(query, email, (error, results) => {
    if (error) {
      res.status(500).json({ error: "查询失败" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "密码或邮箱错误" });
      return;
    }

    const user = results[0];
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: "密码或邮箱错误" });
      return;
    }

    const token = jwt.sign({ userId: user.id }, secretStr, {
      expiresIn: "30s",
    });
    res.json({ token, msg: "", status: true });
  });
});

router.get("/search", verifyToken, function (req, res) {
  res.send({ data: "查询成功", msg: "", status: true });
});

module.exports = router;
