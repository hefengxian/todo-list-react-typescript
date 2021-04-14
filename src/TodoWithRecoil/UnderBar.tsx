import { useRecoilState } from 'recoil'
import { recoilState, RTodoState } from './dataStructure'
import React from 'react'

const UnderBar = () => {
  const [appState, setAppState] = useRecoilState(recoilState)
  const { filter, todoList } = appState
  const doneCount: number = todoList.filter((t) => t.completed).length
  const activeCount: number = todoList.filter((t) => !t.completed).length

  const setFilter = (filter: RTodoState): void => {
    setAppState({ ...appState, filter })
  }

  const buttonStyle = (state: RTodoState): React.CSSProperties => {
    return {
      color: filter === state ? 'green' : 'inherit'
    }
  }

  const clearCompleted = (): void => {
    setAppState({ ...appState, todoList: todoList.filter((t) => !t.completed)})
  }

  return (
    <div>
      <div>{activeCount} item left</div>
      <div>
        <button style={buttonStyle('all')} onClick={() => setFilter('all')}>all</button>
        <button style={buttonStyle('active')} onClick={() => setFilter('active')}>active</button>
        <button style={buttonStyle('completed')} onClick={() => setFilter('completed')}>completed</button>
      </div>
      {
        doneCount > 0 && (
          <button onClick={clearCompleted}>clear completed</button>
        )
      }
    </div>
  )
}

export default UnderBar