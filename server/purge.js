import { db } from "./server.js";

//!DELETES ALL DATA IN THE TABLE
//!DO NOT RUN THIS FILE UNLESS WE NEED TO CLEAR THE DUMMY DATA FROM THE DATABASE!!!!!
db.query(`DELETE FROM leaderboard`);
