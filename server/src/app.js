const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const planetsRouter = require("./routes/planets/planets.router");
const { launchesRouter } = require("./routes/launches/launches.router");
var app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app
  .use(morgan("combined"))
  .use(express.json())
  .use(express.static(path.join(__dirname, "..", "public")))
  .use(planetsRouter)
  .use(launchesRouter)
  .get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

module.exports = app;
