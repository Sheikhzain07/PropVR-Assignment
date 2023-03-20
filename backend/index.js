const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("prop assignment");
});

app.listen(8080, () => {
  console.log("server has started");
});
