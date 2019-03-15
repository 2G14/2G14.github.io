"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

const whitelist = [
  "/index.html",
  "/css/index.css",
  "/dist/bundle.js",
  "/img/favicon.ico",
  "/img/Twitter_Logo_Blue.png",
  "/img/GitHub-Mark-Light-120px-plus.png"
];

const server = http.createServer();
server.on("request", function(request, response) {
  console.log(request.url);

  let lookup = url.parse(decodeURI(request.url)).pathname;
  lookup = path.normalize(lookup);
  const filePath = lookup === "/" ? "/index.html" : lookup;
  
  if (whitelist.indexOf(filePath) === -1) {
    response.writeHead(404);
    response.end("page not found");
    return;
  }
  
  const fullPath = path.join(__dirname, filePath);
  
  response.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(fullPath)]
  });
  let file = null;
  switch (path.extname(fullPath)) {
    case ".html":
    case ".css":
    case ".js":
      file = fs.readFileSync(fullPath, "UTF-8");
      response.end(file);
      break;
    case ".ico":
    case ".png":
      file = fs.readFileSync(fullPath, "binary");
      response.end(file, "binary");
      break;
  }
});
server.listen(8080);

console.log("Server runnning at localhost:8080");
