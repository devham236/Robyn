import React from "react"
import { useState } from "react"
import elements from "./Utils/testArray"

const App = () => {
  const [currentEl, setCurrentEl] = useState(0)
  const [answers, setAnswers] = useState([])
  const [input, setInput] = useState("")

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
        <button className="px-3 py-2 text-white bg-slate-500">Finish</button>
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
