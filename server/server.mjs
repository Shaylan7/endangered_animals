import express from "express";
import mime from "mime-types";

import individualsRouter from "./individualsRouter.mjs";
import sightingsRouter from "./sightingsRouter.mjs"; 
import taskRouter from "./taskRouter.mjs";
import speciesRouter from "./speciesRouter.mjs";

const app = express();

app.use("/api/tasks", taskRouter);

app.use("/api/sightings", sightingsRouter);

app.use("/api/individuals", individualsRouter);

app.use("/api/species", speciesRouter); 

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);


if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
