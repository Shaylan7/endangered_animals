import express from "express";

import * as db from "./db.mjs";

const sightingsRouter = express.Router();

sightingsRouter.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  response.json(sightings);
});

sightingsRouter.use(express.json());
sightingsRouter.post("/", async (request, response) => {
  const sighting = await db.addSighting(request.body.id);
  response.status(201).json(sighting);
});

export default sightingsRouter;
