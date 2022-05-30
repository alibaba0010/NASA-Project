const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  missionName: "Alibaba",
  rocketType: "Explorer IS1",
  launchDate: new Date("September 7, 2022"), //A Good starting point when working with date
  destinationExoplanet: "Kepler-442b",
  customers: ["NASA", "Ali"],
  upcoming: true,
  success: true,
};
// .set(key, value)
launches.set(launch.flightNumber, launch);
// instead of launches.get(key) we expored the key(e.g 100)

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
module.exports = {
  getAllLaunches,
  addNewLaunches,
};
