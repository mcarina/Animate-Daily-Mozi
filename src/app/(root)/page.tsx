"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"

const page = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fffff")
  
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
        <Navbar onColorChange={setBackgroundColor} />
    </main>
  )
}

export default page