import React from "react"
import { useState } from "react"
import elements from "./Utils/testArray"

const App = () => {
  const [currentEl, setCurrentEl] = useState(0)

  const nextElement = () => {
    if (currentEl === elements.length - 1) {
      setCurrentEl(0)
      return
    }
    setCurrentEl(currentEl + 1)
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
      <div className="w-[1000px] h-[600px] bg-slate-900 flex items-center justify-center relative">
        <div className={`w-1/2 h-1/2 bg-[${elements[currentEl].color}]`}></div>
        <div onClick={nextElement}>
          <i className="fa-solid fa-circle-chevron-right text-white absolute top-[50%] right-0"></i>
        </div>
        <div onClick={prevElement}>
          <i className="fa-solid fa-circle-chevron-left text-white absolute top-[50%] left-0"></i>
        </div>
      </div>
    </main>
  )
}

export default App
