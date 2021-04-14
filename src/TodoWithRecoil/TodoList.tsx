import { useRecoilState } from 'recoil'
import { recoilState } from './dataStructure'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [appState, setAppState] = useRecoilState(recoilState)
  const { todoList, filter } = appState

  const markAllComplete = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAppState({
      ...appState,
      todoList: todoList.map((t) => ({ ...t, completed: e.target.checked })),
    })
  }

  return (
    <section>
      <label>
        <input type="checkbox" onChange={markAllComplete} /> Mark all as
        complete
      </label>

      <ul>
        {todoList.filter((t) => {
          switch (filter) {
            case 'all':
              return true
            case 'active':
              return !t.completed
            case 'completed':
              return t.completed
          }
          return true
        }).map((t): React.ReactNode => <TodoItem key={t.id} todo={t} />)}
      </ul>

    </section>
  )
}

export default TodoList