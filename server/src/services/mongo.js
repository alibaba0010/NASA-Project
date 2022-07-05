const mongoose = require("mongoose");

// brought from server.js
const MONGO_URL =
  "mongodb+srv://nasa-api:QsOMK5leUgi69xDo@nasacluster.xxss1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => console.log("MongoDB connected"));
mongoose.connection.on("error", (err) => console.error(err));

//   function to connect mongo to server
async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect() {
  await mongoose.disconnect();
}
module.exports = { mongoConnect, mongoDisconnect };
