const API_URL = "http://localhost:3050/v1";
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
  // To catch response or cors issue
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      // The content-type in the header has to be specified
      headers: { "Content-Type": "application/json" },
      // It's suppose to be launch but launch is an object in useLaunches, therefore ut has to be stringified but it can be used
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      // Failure sound is ran
      ok: false,
    };
  }

  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(err)
    return {
      // Failure sound is ran
      ok: false,
    };
  }
  // Delete launch with given ID.(id used is the flightNumber)
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
