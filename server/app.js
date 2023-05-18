const express = require("express");

const PORT = 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Todoist Server listening on port ${PORT}`);
});
