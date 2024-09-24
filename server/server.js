import express, { request, response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"
dotenv.config()


const app = express()
const dbConnectionSrting = process.env.DATABASE_URL;
export const db = new pg.Pool({
    connectionString: dbConnectionSrting,
})


app.use(express.json())
app.use(cors())
app.listen(8080, function () {
    console.log("Server is running, I repeat Server is running!")
})

app.get('/', (request, response) => {
    response.json({
        message: "Welcome"
    })
})

app.get('/get-leaderboard', (request, response) =>{
    response.json({
        message: "this is the leaderboard"
    })
})

app.post('/send-data', (request, response) => {
    response.json({
        message: "sending data to the leaderboard"
    })
})

