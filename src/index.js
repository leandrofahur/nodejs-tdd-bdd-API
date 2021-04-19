const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    method: "GET",
    status: "200",
    message: "Hello World",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
