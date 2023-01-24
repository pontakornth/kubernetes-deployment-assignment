const express = require("express");
const app = express();

if (!process.env.PORT) {
  throw new Error("PORT must be specified!");
}

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// This endpoint crashes the server.
app.get("/goodbye", (req, res) => {
  res.send("Goodbye, world.");
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(
    `Microservice running on ${PORT}. Crash it at "http://localhost:${PORT}/goodbye"`
  );
});
