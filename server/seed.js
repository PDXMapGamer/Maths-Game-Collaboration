import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS leaderboard(
    id SERIAL PRIMARY KEY,
    user_name TEXT,
    addition_score SMALLINT,
    subtraction_score SMALLINT,
    multiplication_score SMALLINT,
    division_score SMALLINT,
    random_score SMALLINT
)`);

db.query(
  `INSERT INTO leaderboard (user_name, addition_score) VALUES ('Musa','2' )`
);
