import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Individuals from "./Individuals";
import Sightings from "./Sightings";
import Tasks from "./Tasks";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="individuals">Individuals</Link> |{" "}
      <Link to="sightings">More</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
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

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Tasks />
  </>
);

const Individualss = () => (
  <>
    <h1>Animals We are Tracking</h1>
    <Individuals />
  </>
);

export default App;
