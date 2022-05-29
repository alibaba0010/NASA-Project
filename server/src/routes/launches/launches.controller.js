const { launches } = require("../../models/launches.model");

module.exports = function getAllLaunches(req, res) {
  //  Array.from convert the object into an array for json to read it
  return res.status(200).json(Array.from(launches.values()));
};
 