import { UUID } from './functions'
import { useRecoilState } from 'recoil'
import { recoilState, RTodo } from './dataStructure'
import React, { createRef } from 'react'

const NewTodoInput = () => {
  const [appState, setAppState] = useRecoilState(recoilState)
  const textInput: React.RefObject<HTMLInputElement> = createRef()

  function addTodo (e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) return
    if (e.key === 'Enter' && textInput.current.value.trim().length > 0) {
      const todo: RTodo = {
        id: UUID(),
        bodyText: textInput.current.value.trim(),
        completed: false,
      }
      setAppState({ ...appState, todoList: [todo, ...appState.todoList] })
      textInput.current.value = ''
    }
  }

  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        ref={textInput}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
        autoFocus
      />
    </div>
  )
}

export default NewTodoInput