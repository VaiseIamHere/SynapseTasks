// <-------------------------- You are in the server -------------------------->

// Importing necessary Things to create Server
const express = require('express')
const system = require('./system.js')
const app = express()
const PORT = 1234

// middlewares
app.use(express.json())

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server started and Listening at: http://localhost:${PORT}`)
    console.log("Connected to Database.")
})

app.get('/', (req, res) => {
    res.send("Server is Listening...")
})

app.get('/password', system.sendPassword)
app.get('/task1', system.task1)