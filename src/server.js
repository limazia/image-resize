const express = require("express");

const app = express();

const routes = require("./routes");

app.use(routes);

app.listen(3333, () => {
  console.log(`Server running in http://localhost:3333`);
});