const express = require("express")
const cors = require("cors")
require("dotenv").config()

const server = express()
server.use(cors())
server.use(express.json())

//Rainforest API
//API funktioniert, du kannst nach bestimmten produkte suchen. Du musst also die Vorschläge von der OpenAI API extrahieren und dann nur nach den Porduktnamen mit der Rainforest API suchen, diese gibt dir dann einen Link, Bilder, Preise und weitere Informationen, diese schickst du dann ans FE zurück.
//Google mal nach effizienten wegen um über eine array zu iterieren und für jedes element ein fetch call an eine api zu machen

server.post("/api/v1/gifts", async (req, res) => {
  try {
    console.log(req.body)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate 3 Gift Recommendations, don't add any explanations, just give me a list of Gifts for the following Person: 
          ${req.body.map((el) => `${el.type} ${el.answer}`).toString()}`,
          },
        ],
        max_tokens: 100,
      }),
    }
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    )
    const data = await response.json()
    console.log(data)
    res.status(200).json({ ai_response: data.choices[0].message.content })
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" })
  }
})

server.listen(8000, () => {
  console.log(`Server is listening on Port: 8000`)
})
