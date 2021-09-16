export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getSightings = () => _get("/api/sightings");

export const addSighting = (id, individual_id, date_seen) =>
  _post("/api/sightings", { id, individual_id, date_seen });

export const getIndividuals = () => _get("/api/individuals");

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
