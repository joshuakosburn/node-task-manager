require('dotenv').config({ path: "./config.env" });
const express = require("express");
const connectToDB = require("./db/connect");

const app = express();
const PORT = 3000 || process.env.PORT;

try {
    connectToDB(process.env.DB_URI);
    app.listen(PORT, console.log(`[SERVER] started listening on port ${PORT}...`));
} catch (err) {
    console.log(err);
}