"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript"
};

const server = http.createServer();
server.on("request", function(req, res) {
  const filePath = req.url == "/" ? "/index.html" : req.url;
  const fullPath = path.join(__dirname, filePath);

  res.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(fullPath)] || "text/plain"
  });
  fs.readFile(fullPath, "UTF-8", function(err, data) {
    if (err) throw err;
    else res.end(data, "UTF-8");
  });
});
server.listen(8080);

console.log("Server runnning at localhost:8080");