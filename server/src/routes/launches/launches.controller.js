const {
  getAllLaunches,
  scheduleNewLaunches,
  existingLaunch,
  abortLaunchbyId,
} = require("../../models/launches.model");

const getPagination = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);
  const launch = await getAllLaunches(skip, limit);
  return res.status(200).json(launch);
}

async function httpAddNewLaunches(req, res) {
  const launche = req.body;
  if (!launche.mission || !launche.launchDate || !launche.target) {
    return res.status(400).json({
      error: "Invalid Input when filling the field",
    });
  }

  launche.launchDate = new Date(launche.launchDate);
  if (isNaN(launche.launchDate)) {
    res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  await scheduleNewLaunches(launche);
  return res.status(201).json(launche);
}
async function httpAbortLaunches(req, res) {
  const launchId = Number(req.params.id);

  const existLaunch = await existingLaunch(launchId);

  if (!existLaunch) {
    return res.status(404).json({
      error: "Launch doesn't exist",
    });
  }
  const aborted = await abortLaunchbyId(launchId);
  if (!aborted) {
    return res.status(400).json({
      error: "Launch not aborted",
    });
  }
  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunches,
};
