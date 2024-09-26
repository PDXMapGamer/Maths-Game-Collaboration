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

// db.query(`ALTER TABLE leaderboard ALTER COLUMN addition_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN subtraction_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN multiplication_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN division_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN random_score SET DEFAULT 0;`);
db.query(`INSERT INTO leaderboard (user_name, addition_score, subtraction_score) VALUES ('Thomas','11','10')`);
