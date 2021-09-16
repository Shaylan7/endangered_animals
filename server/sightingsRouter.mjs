import express from "express";

import * as db from "./db.mjs";

const sightingsRouter = express.Router();

sightingsRouter.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  response.json(sightings);
});

sightingsRouter.use(express.json());
sightingsRouter.post("/", async (request, response) => {
  console.log('viz', request.body)
  const sighting = await db.addSighting(request.body.id, request.body.individual_id, request.body.date_seen);
  response.status(201).json(sighting);
});

export default sightingsRouter;
