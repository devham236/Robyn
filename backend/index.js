const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(cors())
server.use(express.json())

server.post("/api/v1/gifts", async (req, res) => {
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
  try {
    console.log(req.body)
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    )
    const data = await response.json()
    res.status(200).json({ ai_response: data.choices[0].message.content })
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" })
  }
})

server.listen(8000, () => {
  console.log(`Server is listening on Port: 8000`)
})
