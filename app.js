require('dotenv').config({ path: './config.env' });
const express = require("express");


const connectToDB = require("./db/connect");
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const taskRoutes = require('./routes/tasks')

// MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());

// ROUTES
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectToDB(process.env.DB_URI);
        app.listen(PORT, console.log(`[SERVER] started listening on port ${PORT}...`));
    } catch (err) {
        console.log(err);
    }
}

start();