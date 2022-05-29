const { parse } = require("csv-parse");
const path = require("path");
const fs = require("fs");
const habitablePlanets = [];
function isHabitatablePlanets(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
//  Using Promise to solve async issues to load the data before exporting
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitatablePlanets(data)) {
          habitablePlanets.push(data);
        }
      })

      .on("error", (err) => {
        // console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve(`${habitablePlanets.length} total found`);

        resolve();
      });
  });
}

async function load() {
  const found = await loadPlanetsData();
  console.log(found);
}
const loadPlanetsDataa = () => load();
module.exports = {
  loadPlanetsDataa,

  planets: habitablePlanets,
};
