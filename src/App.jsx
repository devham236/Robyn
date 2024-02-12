import React from "react"
import { useState } from "react"
import elements from "./Utils/testArray"
import axios from "axios"

const App = () => {
  const [currentEl, setCurrentEl] = useState(0)
  const [answers, setAnswers] = useState([])
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const nextElement = () => {
    if (currentEl === elements.length - 1) {
      setCurrentEl(0)
      setAnswers((prev) => [
        ...prev,
        { question: elements[currentEl].question, answer: input },
      ])
      return
    }
    setAnswers((prev) => [
      ...prev,
      { question: elements[currentEl].question, answer: input },
    ])
    setCurrentEl(currentEl + 1)
    setInput("")
  }

  const prevElement = () => {
    if (currentEl === 0) {
      setCurrentEl(elements.length - 1)
      return
    }
    setCurrentEl(currentEl - 1)
  }

  const getGifts = async () => {
    setLoading(true)
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/gifts",
        answers
      )
      console.log(data)
      setResult(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(result)

  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[1000px] h-[600px] bg-slate-900 flex items-center justify-center flex-col relative">
        <div
          className={`w-1/2 h-1/2 border-2 border-slate-400 flex items-center justify-center flex-col mb-4`}
        >
          <p className="text-white text-center font-bold text-2xl mb-4">
            {elements[currentEl].question}
          </p>
          <input
            type="text"
            value={input}
            placeholder="..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={getGifts}
          className="px-3 py-2 mt-4 text-white bg-slate-500"
        >
          Finish
        </button>
        {loading && <p className=" text-center mt-4 text-white">Loading...</p>}
        <p className=" text-center mt-4 text-white"></p>
        <div onClick={nextElement}>
          <i className="fa-solid fa-circle-chevron-right text-white absolute top-[50%] right-0 text-xl"></i>
        </div>
        <div onClick={prevElement}>
          <i className="fa-solid fa-circle-chevron-left text-white absolute top-[50%] left-0 text-xl"></i>
        </div>
      </div>
    </main>
  )
}

export default App
