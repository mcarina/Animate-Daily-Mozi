"use client"

import { useState } from "react"
import Colors from "@/components/Colors"
import CommentBox from "@/components/commentBox"

const page = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fffff")
  const [comment, setComment] = useState("")
  
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <h1 className="text-2xl font-bold text-center mb-6">
        {backgroundColor === "#f8edeb" && "Frutinhas Naturais? 🍓"}
        {backgroundColor === "#d0e8f2" && "Lanche?! ☁️"}
        {backgroundColor === "#d8f3dc" && "Vitamina de Banana ou Abacate?! 🍃"}
        {backgroundColor === "#fcf6bd" && "Pipoquinha com manteiga?! 🍿"}
        {backgroundColor === "#e0c3fc" && "Suco Natural?! 🍇"}
      </h1>
      
      <Colors onColorChange={setBackgroundColor} />
      <div className="mt-2 pt-2 border-t border-gray-100">
        <CommentBox comment={comment} setComment={setComment} />
      </div>
    </main>
  )
}

export default page