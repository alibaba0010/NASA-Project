const launches = new Map();
// let was used because it was used in a function
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Alibaba",
  rocket: "Explorer IS1",
  launchDate: new Date("September 7, 2022"), //A Good starting point when working with date
  target: "Kepler-442b",
  customers: ["NASA", "Ali"],
  upcoming: true,
  success: true,
};
// .set(key, value)
launches.set(launch.flightNumber, launch);
// instead of launches.get(key) we expored the key(e.g 100)

// To check if a launch still exists
function existingLaunch(launchId) {
  return launches.has(launchId);
}

// Bringing it back to model from controller
function getAllLaunches() {
  return Array.from(launches.values());
}
function addNewLaunches(launches) {
  //  constant Data that can't be inputed

  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      upcoming: true,
      success: true,
      customers: ["Ali", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

// Aborting Launches
function abortLaunchbyId(launchId) {
  return
}
module.exports = {
  getAllLaunches,
  addNewLaunches,
  existingLaunch,
  abortLaunchbyId,
};
