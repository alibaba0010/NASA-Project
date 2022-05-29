const { Router } = require("express");
const launchesRouter = Router();
const getAllLaunches = require("./launches.controller")
launchesRouter.get("/launches", getAllLaunches);

module.exports = {
  launchesRouter,
};
