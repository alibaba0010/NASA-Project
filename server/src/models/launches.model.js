const launches = new Map();
const launch = {
  flightNumber: 100,
  missionName: "Alibaba",
  rocketType: "Explorer IS1",
  launchDate: new Date("September 7, 2022"),
  destinationExoplanet: "Kepler-442b",
  customers: ["NASA", "Ali"],
  upcoming: true,
  success: true,
};
// .set(key, value)
launches.set(launch.flightNumber, launch);
// instead of launches.get(key) we expored the key(e.g 100)
module.exports = {
  launches,
};
