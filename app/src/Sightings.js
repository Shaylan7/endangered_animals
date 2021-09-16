import * as React from "react";

import * as apiClient from "./apiClient";

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
  <ul>
    {sightings.map(({ id, location_seen }) => (
      <li key={id}>{location_seen}</li>
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

const AddSighting = ({ addSighting }) => {
  const [id, setID] = React.useState("");
  const [individual_id, setIndividualId] = React.useState("");
  const [date_seen, setDateSeen] = React.useState("");
  // const [location_seen, setLocationSeen] = React.useState("");
  const [sighting, setSighting] = React.useState("");

  const canAdd = id !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      setID(id);
      setIndividualId(individual_id);
      setDateSeen(date_seen);
      addSighting(id, individual_id, date_seen);
      setSighting("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        ID:{" "}
        <input
          type="integer"
          onChange={(e) => setID(e.currentTarget.value)}
          value={id}
        />
      </label>
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
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Sightings;
