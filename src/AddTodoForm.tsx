import React, { useState } from 'react'

interface Props {
    addTodo: AddTodo,
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('')
    return (
        <form>
            <input
                value={text}
                type="text"
                onChange={e => {
                    setText(e.target.value)
                }}
            />
            <button
                onClick={e => {
                    e.preventDefault()
                    addTodo(text)
                    setText('')
                }}
                type="submit"
            >Add Todo</button>
        </form>
    )
}