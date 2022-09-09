//Access packages
const express = require('express')
const cors = require(`cors`)

//Create app instance
const app = express()

//Setup middleware
app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors())

//endpoints
const {createMessage} = require(`./controller`)

app.post(`/api/messages`, createMessage)

//Start Server
app.listen(4004, () => console.log('Server running on 4004'))