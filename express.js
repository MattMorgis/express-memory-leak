const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.json({});
});

app.listen(3000);
