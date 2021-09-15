import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");
// getSightings = SELECT * FROM sightings JOIN on animals (depending on what we need from the other table)
export const getSightings = () => db.any("SELECT * FROM sightings");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });
  // reportSightings = INSERT INTO 

export const addSighting = (individual_id) =>
db.one("INSERT INTO sightings(name) VALUES(${name}) RETURNING *", { individual_id }); 

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
