const { getAllPlanets } = require("../../models/planets.model");
module.exports = async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets());
};
