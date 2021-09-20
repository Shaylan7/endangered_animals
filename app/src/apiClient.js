export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getSightings = () => _get("/api/sightings");

export const addSighting = (individual_id, date_seen, location_seen) =>
  _post("/api/sightings", { individual_id, date_seen, location_seen });

export const getIndividuals = () => _get("/api/individuals");
export const getSpecies = () => _get("/api/species");

const _get = async (url) => (await fetch(url)).json();
//_get a way to use get over and over for different endpoints

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
