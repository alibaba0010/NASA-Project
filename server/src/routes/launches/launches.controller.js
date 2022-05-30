const {
  getAllLaunches,
  addNewLaunches,
  existingLaunch,
  abortLaunchbyId,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  //  Array.from convert the map, object into an array for json to read it
  return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunches(req, res) {
  // Can only read date in json and not in js object, so it has to be modified, so launche was equated to the body so as to modify the date
  const launche = req.body;
  // Input Validation to avoid empty requests
  if (!launche.mission || !launche.launchDate || !launche.target) {
    return res.status(400).json({
      error: "Invalid Input when filling the field",
    });
  }
  launche.launchDate = new Date(launche.launchDate);
  //  to check the date
  if (isNaN(launche.launchDate)) {
    res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunches(launche);
  return res.status(201).json(launche);
}
function httpAbortLaunches(req, res) {
  // trying to get flightNumber(id)
  const launch = req.params.id;
  // if launch doesn't exist
  if (!existingLaunch(launcheId)) {
    return res.status(400).json({
      error: "Launch doesn't exist",
    });
  }

  return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunches,
};
