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
  `INSERT INTO leaderboard (user_name, addition_score, subtraction_score, multiplication_score, division_score, random_score) values('thomas', '30', '28', 20, 11, 19) `
);
db.query(
  `INSERT INTO leaderboard (user_name, addition_score, subtraction_score, multiplication_score, division_score, random_score) values('sam', '29', '25', 20, 12, 17) `
);
db.query(
  `INSERT INTO leaderboard (user_name, addition_score, subtraction_score, multiplication_score, division_score, random_score) values('anu', '25', '20', 16, 9, 14) `
);
db.query(
  `INSERT INTO leaderboard (user_name, addition_score, subtraction_score, multiplication_score, division_score, random_score) values('musa', '27', '28', 20, 11, 21) `
);

// db.query(`ALTER TABLE leaderboard ALTER COLUMN addition_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN subtraction_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN multiplication_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN division_score SET DEFAULT 0;`);
// db.query(`ALTER TABLE leaderboard ALTER COLUMN random_score SET DEFAULT 0;`);
// db.query(`INSERT INTO leaderboard (user_name, addition_score, subtraction_score) VALUES ('Thomas','11','10')`);

// let operator = "division_score";
// let score = "8";
// let username = "Thomas";
// db.query(`UPDATE leaderboard
//     SET ${operator} = ${score}
//     WHERE user_name = '${username}'`);
// let operator = "multiplication_score";
// let score = "11";
// let username = "Thomas";
// db.query(`UPDATE leaderboard
//     SET ${operator} = ${score}
//     WHERE user_name = '${username}'`);
