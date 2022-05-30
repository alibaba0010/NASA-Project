const { Router } = require("express");
const httpGetAllPlanets = require("./planets.controller");
const planetsRouter = Router();
planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = planetsRouter;
