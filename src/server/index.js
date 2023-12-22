import express from "express";
import "core-js/stable";
import "regenerator-runtime/runtime";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});
