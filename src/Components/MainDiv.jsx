import React from "react"

const MainDiv = () => {
  return (
    <div className="lg:w-[900px] lg:h-[calc(100%-56px)] mx-auto flex items-center justify-center bg-green-300">
      <div className="bg-orange-400 w-full py-10 flex flex-col items-center">
        <h1>Text</h1>
        <button>Start</button>
      </div>
    </div>
  )
}

export default MainDiv
