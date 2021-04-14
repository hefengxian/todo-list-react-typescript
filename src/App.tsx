import React, { useState } from 'react'
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm'
import { Counter } from './Counter'
import { TryRecoil } from './TryRecoil'
import TodoWithRecoil from './TodoWithRecoil'

const initTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Write an App',
        complete: true,
    },
]

function App() {
    const [todos, setTodos] = useState(initTodos)

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo: Todo = { text, complete: false }
        setTodos([...todos, newTodo])
    }

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo} />
            <Counter />
            <TryRecoil />
            <TodoWithRecoil />
        </>
    )
}

export default App;
