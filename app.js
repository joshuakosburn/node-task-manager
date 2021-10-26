require('dotenv').config({ path: './config.env' });
const express = require("express");


const connectToDB = require("./db/connect");
const app = express();

// MIDDLEWARE
app.use(express.json());

const PORT = 3000 || process.env.PORT;

const start = async () => {
    try {
        await connectToDB(process.env.DB_URI);
        app.listen(PORT, console.log(`[SERVER] started listening on port ${PORT}...`));
    } catch (err) {
        console.log(err);
    }
}

start();