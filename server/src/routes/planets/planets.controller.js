const planets = require("../../models/planets.model");
module.exports = function getAllPlanets(req, res) {
  // Good to use in all cases
  // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  return res.status(200).json(planets);
};
