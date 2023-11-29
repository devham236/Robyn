import React from "react"

const Navbar = () => {
  return (
    <div className="lg:w-full lg:h-14 bg-slate-700 flex items-center justify-center">
      <div className="lg:w-[900px] h-full bg-red-500 flex items-center justify-between">
        <div>Logo</div>
        <div>Title</div>
        <div>Darkmode</div>
      </div>
    </div>
  )
}

export default Navbar
