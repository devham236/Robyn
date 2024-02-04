import React from "react"

const App = () => {
  const array = new Array(4).fill("test")

  /*
  - Die Array enthält ein object, jedes object hat eine frage, eine id und vielleicht ein type
  - iterate über die array und render eine Komponente
  - die komponente enthält die frage und ein input feld
  */

  return (
    <div className="w-[100dvw] h-[100dvh] bg-slate-800">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem optio
      sapiente excepturi fugiat ullam earum nihil! Est, reiciendis ea possimus
      deleniti minus et corporis dolor reprehenderit quibusdam, sapiente sunt
      voluptatem.
    </div>
  )
}

export default App
