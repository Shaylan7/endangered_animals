import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

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
  <div>
    {individuals.map(({ id, nickname, species, image_url }) => (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          {nickname} {species}
        </Card.Body>
      </Card>
    ))}
  </div>
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
