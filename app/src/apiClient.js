export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });

export const getSightings = () => _get("/api/sightings");

export const addSighting = (individual_id) =>
  _post("/api/sightings", { individual_id });

const _get = async (url) => (await fetch(url)).json();

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
