"use strict";

// core module
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// mime tyeps
const mimeTypes = require("./serverContent/mimetypes");
// white list
const whitelist = require("./serverContent/whitelist");

// server
const server = http.createServer();
server.on("request", onRequest);
server.listen(8080); // server listen 8080 port

console.log("Server runnning at localhost:8080");

/* -------------------------------------------------------*/

// callback function : on request
function onRequest(request, response) {
  console.log(request.url);

  // request file path
  let pathName = url.parse(decodeURI(request.url)).pathname;
  pathName = path.normalize(pathName);
  pathName = pathName === "/" ? "/index.html" : pathName;

  // check white list
  if (whitelist.indexOf(pathName) === -1) {
    // response
    response.writeHead(404);
    response.end("file not found");
    return;
  }

  // file full path
  const fullPath = path.join(__dirname, pathName);

  // response
  response.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(fullPath)]
  });
  // callback function : file upload
  function fileUpload(err, data) {
    if (err) throw err;
    response.write(data);
    response.end();
  }
  // file upload : encode UTF-8 or binary
  switch (path.extname(fullPath)) {
    case ".html":
    case ".css":
    case ".js":
      fs.readFile(fullPath, "UTF-8", fileUpload); // encode UTF-8
      break;
    case ".ico":
    case ".png":
      fs.readFile(fullPath, fileUpload); // encode binary
      break;
  }
}
