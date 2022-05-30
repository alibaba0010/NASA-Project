const {
  getAllLaunches,
  addNewLaunches,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //  Array.from convert the map, object into an array for json to read it
  return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunches(req, res) {
  // Can only read date in json and not in js object, so it has to be modified, so launche was equated to the body so as to modify the date
  const launche = req.body;
  launche.launchDate = new Date(launch.launchDate);
  addNewLaunches(launche);
  return res.status(201).json(launche);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunches,
};
