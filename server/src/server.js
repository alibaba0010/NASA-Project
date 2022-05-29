const { createServer } = require("http");
const app = require("./app");
// const {loadPlanetsDataa} = require("./models/planets.model.js");
const obj = require("./models/planets.model.js");
const PORT = process.env.PORT || 3050;
const server = createServer(app);

async function startServer() {
  await obj.loadPlanetsDataa();
  server.listen(PORT, () => console.log(`Listening to port ${PORT}`));
}
startServer();
