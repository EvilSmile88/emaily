const express = require("express");

const PORT = process.env.PORT = process.argv[2] || 8080
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, (err, res) => {
  console.log(`Server is running on ${PORT}`);
});
