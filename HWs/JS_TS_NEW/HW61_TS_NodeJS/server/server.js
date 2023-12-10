const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Server was successfully created!");
});

server.listen(3000);
