import express from "express";

import * as db from "./db.mjs";

const speciesRouter = express.Router();

speciesRouter.get("/", async (request, response) => {
  const species = await db.getSpecies();
  response.json(species);
});

speciesRouter.use(express.json());

//don't need an "add individual feature"
// individualsRouter.post("/", async (request, response) => {
//   const individuals = await db.addSighting(request.body.id);
//   response.status(201).json(sighting);
// });

export default speciesRouter;
