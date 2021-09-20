import * as React from "react";

import * as apiClient from "./apiClient";

const Species = () => {
  const [species, setSpecies] = React.useState([]);
  console.log(species);

  const loadSpecies = () => apiClient.getSpecies().then(setSpecies);
  React.useEffect(() => {
    loadSpecies();
  }, []);

  // const loadSpecies = async () => setSpecies(await apiClient.getSpecies());
  // React.useEffect(() => {
  //   loadSpecies();
  // }, []);

  return (
    <section>
      <SpeciesList species={species} />
    </section>
  );
};

const SpeciesList = ({ species }) => (
  <div>
    {species.map(
      ({ id, common_name, number_living, conservation_status_code }) => (
        <div>
          {common_name} {number_living} {conservation_status_code}
        </div>
      ),
    )}
    <p>hello {species} </p>
  </div>
);

export default Species;
