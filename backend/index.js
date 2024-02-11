const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(cors())
server.use(express.json())

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "Explain AI to me like i am 5 years old" },
    ],
    max_tokens: 100,
  }),
}

server.post("/api/v1/gifts", (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: "works" })
})

server.listen(8000, () => {
  console.log(`Server is listening on Port: 8000`)
})
