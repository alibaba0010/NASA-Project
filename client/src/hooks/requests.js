const API_URL = "http://localhost:3050";
async function httpGetPlanets() {
  // TODO: Once API is ready
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready
  // Load lauches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`);
  //  Sort flight number
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready
  return await fetch(`${API_URL}/launches`, {
    method: "post",
    // The content-type in the header has to be specified
    headers: { "Content-Type": "application/json" },
    // It's suppose to be launch but launch is an object in useLaunches, therefore ut has to be stringified but it can be used
    body: JSON.stringify(launch),
  });

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
