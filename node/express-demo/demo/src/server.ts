import * as express from "express";

const app = express();

app.post("/upload", (request, response) => {
  response.send("Hello world!");
});

app.listen(5001);
