// server.mjs
const { createServer } = require("http");

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\nMinh dz vcl");
});

// starts a simple http server locally on port 3000
server.listen(5000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:5000");
});

// run with `node server.mjs`
