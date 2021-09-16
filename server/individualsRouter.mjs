import express from "express";

import * as db from "./db.mjs";

const individualsRouter = express.Router();

individualsRouter.get("/", async (request, response) => {
  const individuals = await db.getIndividuals();
  response.json(individuals);
});

individualsRouter.use(express.json());

//don't need an "add individual feature"
// individualsRouter.post("/", async (request, response) => {
//   const individuals = await db.addSighting(request.body.id);
//   response.status(201).json(sighting);
// });

export default individualsRouter;
