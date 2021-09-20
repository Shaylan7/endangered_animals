import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Individuals from "./Individuals";
import Sightings from "./Sightings";
import Species from "./Species";
import "./App.css";

const App = () => (
  <main>
    <nav>
      <Link to="species">Species</Link> |{" "}
      <Link to="individuals">Individuals</Link> |{" "}
      <Link to="sightings">Recent Sightings</Link>
    </nav>
    <Routes>
      <Route path="/species" element={<Speciess />} />
      <Route path="/individuals" element={<Individualss />} />
      <Route path="/sightings" element={<More />} />
    </Routes>
  </main>
);
const More = () => (
  <>
    <h1>Sightings</h1>

    <Sightings />
  </>
);

const Speciess = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Species />
  </>
);

const Individualss = () => (
  <>
    <h1>Meet our Family</h1>
    <Individuals />
  </>
);

export default App;
