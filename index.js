/* ====== create node.js server with core 'http' module ====== */
// dependencies
const http = require("http");

// PORT
const PORT = 3000;

// server create
const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("This is home page.");
      res.end();
   } else if (req.url === "/about" && req.method === "GET") {
      res.write("This is about page.");
      res.end();
   } else {
      res.write("Not Found!");
      res.end();
   }
});

// server listen port
server.listen(PORT);

console.log(`Server is running on PORT: ${PORT}`);

/* ========== *** ========== */

/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("This is home page.");
});

app.post("/", (req, res) => {
   res.send("This is home page with post request.");
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});


// ======== Instructions ========
// save this as index.js
// you have to download and install node.js on your machine
// open terminal or command prompt
// type node index.js
// find your server at http://localhost:3000


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});