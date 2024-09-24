import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS leaderboard(
    id SERIAL PRIMARY KEY,
    name TEXT,
    score SMALLINT
);`);