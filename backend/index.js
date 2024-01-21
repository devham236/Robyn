const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(cors())

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on Port: ${process.env.PORT}`)
})
