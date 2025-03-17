"use client"

import { useState } from "react"
import Navbar from "@/components/navBar"
import CommentBox from "@/components/commentBox"

const page = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fffff")
  const [comment, setComment] = useState("")
  
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <h1 className="text-2xl font-bold text-center mb-6">Pipoquinha na manteiga hoje?</h1>
      <Navbar onColorChange={setBackgroundColor} />
      <div className="mt-2 pt-2 border-t border-gray-100">
        <CommentBox comment={comment} setComment={setComment} />
      </div>
    </main>
  )
}

export default page