import * as React from "react";

import * as apiClient from "./apiClient";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);
  console.log(sightings);

  const loadSightings = async () =>
    setSightings(await apiClient.getSightings());

  React.useEffect(() => {
    loadSightings();
  }, []);

  return (
    <section>
      <SightingList sightings={sightings} />
    </section>
  );
};

const SightingList = ({ sightings }) => (
  <ul>
    {sightings.map(({ id, location_name }) => (
      <li key={id}>{location_name}</li>
    ))}
  </ul>
);

export default Sightings;
