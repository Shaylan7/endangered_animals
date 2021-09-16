import * as React from "react";

import * as apiClient from "./apiClient";

const Individuals = () => {
  const [individuals, setIndividuals] = React.useState([]);
  console.log(individuals);

  const loadIndividuals = () => apiClient.getIndividuals().then(setIndividuals);
  React.useEffect(() => {
    loadIndividuals();
  }, []);

  // const addSighting = (sighting) =>
  //   apiClient.addSighting(sighting).then(loadSightings);
  //don't need "addIndividuals"

  return (
    <section>
      <IndividualList individuals={individuals} />
    </section>
  );
};

const IndividualList = ({ individuals }) => (
  <ul>
    {individuals.map(({ id, nickname, species }) => (
      <li key={id}>
        {nickname} {species}
      </li>
    ))}
  </ul>
);

// const [name, setName] = useState('');
// const [id, setID] = useState('');
// const [email, setEmail] = useState('');
// console.log(id)
// const clearForm = () => {
//     setName('');
//     setID('');
//     setEmail('')
// }
// const onSubmit = e => {
//     e.preventDefault();
//     const newUser = { id: id, name: name, email: email };
//     setUsers([...users, newUser]);
//     clearForm()
// };

export default Individuals;
