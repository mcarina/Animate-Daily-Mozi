"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"

export default function CommentBox({ comment, setComment }:CommentBoxProps){
    const [isOpen, setIsOpen] = useState(false);
    const [tempComment, setTempComment] = useState(comment)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setComment(tempComment)
        setIsOpen(false)
    }
    
    return (
        <div className="space-y-2">
            <AnimatePresence mode="wait">
            {!isOpen ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key="comment-button">
                    <Button variant="ghost" onClick={() => setIsOpen(true)} 
                    className="w-full text-primary hover:text-primary/80">
                    Alguma resposta?
                    </Button>
                </motion.div>
            ) : (
                <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 w-80"
                    key="comment-form"
                >
                    <Textarea 
                        placeholder="Algum Comentário?" 
                        value={tempComment} 
                        onChange={(e) => setTempComment(e.target.value)}
                        className="w-full min-h-[100px] resize-none"
                        autoFocus
                    />

                    <div className="flex gap-2 justify-end">
                        <Button type="button" variant="outline" size="sm"
                        onClick={() => { setTempComment(comment)
                            setIsOpen(false)
                        }}
                        >
                        Cancelar
                        </Button>
                        <Button type="submit" size="sm" variant="outline">Salvar</Button>
                    </div>
                </motion.form>
            )}
            {!isOpen && comment && (
                <div className="bg-gray-50 rounded-md p-2">
                <div className="flex justify-between items-start mb-2 w-80">
                    <h3 className="text-sm font-medium">Comentário:</h3>
                    <button onClick={() => setIsOpen(true)} className="text-xs text-primary hover:underline">
                    Editar
                    </button>
                </div>
                <p className="text-sm text-gray-600">{comment}</p>
                </div>
            )}
            </AnimatePresence>
    
        </div>
    )

}