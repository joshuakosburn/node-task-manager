// This file was created so that we can pass Express as 'app' to our test suite without app.listen() being called.
// We stil define and setup Express, but listen() is explicitly called in index.js

//REQUIRES
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

//SET UP EXPRESS
const app = express()

//CONFIGURE EXPRESS
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app