const { Router } = require("express");
const launchesRouter = Router();
const {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunches,
} = require("./launches.controller");
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunches);
launchesRouter.delete("/:id", httpAbortLaunches);

module.exports = launchesRouter;
c