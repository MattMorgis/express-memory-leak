const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.end("{}");
});

server.listen(3000);
