const express = require("express");
const fs = require("fs");
const app = express();

if (!process.env.PORT) {
  throw new Error("PORT must be specified!");
}

const PORT = process.env.PORT;

app.get("/video", (req, res) => {
  //
  // Original video from here:
  // https://sample-videos.com
  //
  const path = "./videos/SampleVideo_1280x720_1mb.mp4";
  fs.stat(path, (err, stats) => {
    if (err) {
      console.error("An error occurred ");
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(path).pipe(res);
  });
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
