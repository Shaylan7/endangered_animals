import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Form } from "react-bootstrap";
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";

import * as apiClient from "./apiClient";
import background from "./zoombackground.jpeg";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);
  console.log(sightings);

  const loadSightings = () => apiClient.getSightings().then(setSightings);
  React.useEffect(() => {
    loadSightings();
  }, []);

  const addSighting = (individual_id, date_seen, location_seen) =>
    apiClient
      .addSighting(individual_id, date_seen, location_seen)
      .then(loadSightings);

  return (
    <div>
      <SightingList sightings={sightings} />
      <AddSighting {...{ addSighting }} />
    </div>
  );
};

const SightingList = ({ sightings }) => (
  <div>
    <Row xs={1} md={2} className="g-4">
      {sightings.map(
        ({ id, location_seen, nickname, image_url, date_seen }) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image_url} />
              <Card.Body>
                <Card.Title>{nickname}</Card.Title>
                <GrLocationPin />
                {location_seen}
                <br></br>
                <FaRegCalendarAlt />
                {date_seen}
              </Card.Body>
            </Card>
          </Col>
        ),
      )}
    </Row>
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
  const [healthy, setHealth] = React.useState("");
  console.log(location_seen);
  // const [location_seen, setLocationSeen] = React.useState("");
  const [sighting, setSighting] = React.useState("");

  const canAdd = individual_id !== "";
  // const [isChecked, setChecked] = React.useState(false);
  // const [healthy, setHealth] = React.useState(true);

  // const toggle = (value) => {
  //   return !value;
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      setIndividualId(individual_id);
      setDateSeen(date_seen);
      setLocationSeen(location_seen);
      setHealth(healthy);
      // setHealth(toggle);
      addSighting(individual_id, date_seen, location_seen, healthy);
      setSighting("");
    }
  };

  return (
    <div>
      <h4>Report a Sighting</h4>
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
        <label htmlFor="healthy">Healthy: </label>
        <select
          onBlur={(e) => setHealth(e.currentTarget.value)}
          id="healthy"
          name="healthy"
          value={healthy}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button disabled={!canAdd}>Add</button>
      </form>
    </div>
  );
};

export default Sightings;

{
  /* <label for="healthy">
          Healthy?:</label>
          <select value="healthy" onChange={(e) => setLocationSeen(e.currentTarget.value)>
            <option value="yes">Yes</option>
            <option value="no">No</option> 
            </select></select> */
}
