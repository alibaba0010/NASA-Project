const { Router } = require("express");
const launchesRouter = Router();
const {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunches,
} = require("./launches.controller");
//  Router can be taken to app.js if complication wants to occur as in this case its going to match /planets/ route also
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunches);
launchesRouter.delete("/:id", httpAbortLaunches);

module.exports = {
  launchesRouter,
};

