import React, { useState } from "react"
import { apiKey } from "./Utils/apiKey"
import Navbar from "./Components/Navbar"
import MainDiv from "./Components/MainDiv"
import axios from "axios"

const App = () => {
  const [input, setInput] = useState("")

  const checkTweet = async () => {
    const body = {
      model: "gpt-3.5-turbo",
      prompt: "Whats is the sentiment of this tweet? " + input,
      messages: [],
      temperature: 0,
      max_tokens: 256,
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-300">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={checkTweet}>Check</button>
      <Navbar />
      <MainDiv />
    </div>
  )
}

export default App
