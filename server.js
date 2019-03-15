"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const mimeTypes = require("./server/mimetypes");
const whitelist = require("./server/whitelist");

const server = http.createServer();
server.on("request", function(request, response) {
  console.log(request.url);

  let pathName = url.parse(decodeURI(request.url)).pathname;
  pathName = path.normalize(pathName);
  pathName = (pathName === "/") ? "/index.html" : pathName;
  
  if (whitelist.indexOf(pathName) === -1) {
    response.writeHead(404);
    response.end("page not found");
    return;
  }
  
  const fullPath = path.join(__dirname, pathName);
  
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
