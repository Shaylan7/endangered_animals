import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");
// getSightings = SELECT * FROM sightings JOIN on animals (depending on what we need from the other table)
export const getSightings = () => db.any("SELECT * FROM sightings LEFT JOIN individuals on individuals.id = sightings.individual_id");

export const getIndividuals = () => db.any("SELECT * FROM individuals");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });
  // reportSightings = INSERT INTO 

export const addSighting = (individual_id, date_seen, location_seen) =>
db.one("INSERT INTO sightings(individual_id, date_seen, location_seen) VALUES(${individual_id}, ${date_seen}, ${location_seen}) RETURNING *", {individual_id, date_seen, location_seen }, ); 

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
