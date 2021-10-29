require('dotenv').config({ path: './config.env' });
const express = require("express");


const connectToDB = require("./db/connect");
const app = express();

const taskRoutes = require('./routes/tasks')

// MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

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