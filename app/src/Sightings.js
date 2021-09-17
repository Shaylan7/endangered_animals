import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";

import * as apiClient from "./apiClient";
import background from "./zoombackground.jpeg";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);
  console.log(sightings);

  const loadSightings = () => apiClient.getSightings().then(setSightings);
  React.useEffect(() => {
    loadSightings();
  }, []);

  const addSighting = (id, individual_id, date_seen) =>
    apiClient.addSighting(id, individual_id, date_seen).then(loadSightings);

  return (
    <section>
      <SightingList sightings={sightings} />

      <AddSighting {...{ addSighting }} />
    </section>
  );
};

const SightingList = ({ sightings }) => (
  <div>
    {sightings.map(({ id, location_seen, nickname, image_url }) => (
      <span>
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{nickname}</Card.Title>
              {location_seen}
            </Card.Body>
          </Card>
        </CardColumns>
      </span>
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

const AddSighting = ({ addSighting }) => {
  const [individual_id, setIndividualId] = React.useState("");
  const [date_seen, setDateSeen] = React.useState("");
  const [location_seen, setLocationSeen] = React.useState("");
  // const [location_seen, setLocationSeen] = React.useState("");
  const [sighting, setSighting] = React.useState("");

  const canAdd = individual_id !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      setIndividualId(individual_id);
      setDateSeen(date_seen);
      setLocationSeen(location_seen);
      addSighting(individual_id, date_seen, location_seen);
      setSighting("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Individual ID:{" "}
        <input
          type="integer"
          onChange={(e) => setIndividualId(e.currentTarget.value)}
          value={individual_id}
        />
      </label>
      <label>
        Date:{" "}
        <input
          type="date"
          onChange={(e) => setDateSeen(e.currentTarget.value)}
          value={date_seen}
        />
      </label>
      <label>
        Location:{" "}
        <input
          type="text"
          onChange={(e) => setLocationSeen(e.currentTarget.value)}
          value={location_seen}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Sightings;
