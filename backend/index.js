const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(cors())

server.get("/api/v1/gifts", (req, res) => {
  console.log("works")
  res.status(200).json({ message: "works" })
})

server.listen(8000, () => {
  console.log(`Server is listening on Port: 8000`)
})
