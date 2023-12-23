import express from "express";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
import {App} from "../App.tsx";
import '../styles/index.scss';

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  res.send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Sekibuuun</title>
          <link href="/style.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
      </html>
    `
  );
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});
