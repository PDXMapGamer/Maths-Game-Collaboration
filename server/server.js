import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const app = express();
const dbConnectionSrting = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionSrting,
});

app.use(express.json());
app.use(cors());
const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Server is running, I repeat Server is running on PORT ${8080}!`);
});

app.get("/", (request, response) => {
  response.json({
    message: "Welcome",
  });
});

app.get("/get-leaderboard", async (request, response) => {
  const result = await db.query(`SELECT * FROM leaderboard`);
  response.json(result.rows);
});

app.post("/submitUserName", async (request, response) => {
  const { user_name } = request.body;
  console.log(user_name);
  // console.log(addition_score);
  console.log(request.body);
  try {
    await db.query(`INSERT INTO leaderboard (user_name) VALUES ($1)`, [user_name]);
    response.status(200).json({ success: true });
  } catch (error) {
    response.status(500).json({ success: false });
    console.log("/submitUserScore had an error", error);
  }

  response.json({
    message: "sending data to the leaderboard",
  });
});
