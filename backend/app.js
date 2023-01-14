const express = require("express");
const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  console.log("Let's go guys");
  res.send("let's go guys");
});

app.listen(PORT, () => {
  console.log("Server is running on port 80");
});
