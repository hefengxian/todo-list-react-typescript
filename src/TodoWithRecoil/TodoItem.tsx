import { recoilState, RTodo, RTodoListType } from './dataStructure'
import React, { createRef, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

interface Props {
  todo: RTodo,
}

interface State {
  onEdit: boolean,
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const [appState, setAppState] = useRecoilState(recoilState)
  const editInput = createRef<HTMLInputElement>()
  const init: State = { onEdit: false }
  const [state, setState] = useState(init)

  const onDoubleClick = (): void => {
    setState({ onEdit: true })
  }

  const removeItem = (id: RTodo['id']): void => {
    const removed: RTodoListType = appState.todoList.filter(
      (t): boolean => t.id !== id)
    setAppState({ ...appState, todoList: removed })
  }

  const toggleTodoState = (todo: RTodo): void => {
    const toggled: RTodoListType = appState.todoList.map((t): RTodo => {
      if (todo === t) {
        return { ...t, completed: !t.completed }
      }
      return t
    })
    setAppState({ ...appState, todoList: toggled })
  }

  const onSubmitTodoEdit = (
    e: React.KeyboardEvent<HTMLInputElement>): void => {
    // keypress 无法捕捉 Escape
    if (e.key === 'Enter' || e.key === 'Escape') {
      if (e.currentTarget.value.trim().length > 0) {
        setState({ onEdit: false })
      }
    }
  }

  const onTodoTextChange = (
    e: React.ChangeEvent<HTMLInputElement>, todo: RTodo): void => {
    setAppState({
      ...appState,
      todoList: appState.todoList.map((t) => {
        if (todo === t) {
          return { ...t, bodyText: e.target.value }
        }
        return t
      }),
    })
  }

  // 处理双击之后，表单不聚焦的问题
  useEffect(() => {
    if (state.onEdit && editInput.current != null) {
      editInput.current.focus()
    }
  }, [editInput, state.onEdit])

  return (
    <li>
      <div style={{
        display: state.onEdit ? 'none' : 'block',
      }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoState(todo)}
        />
        <label
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onDoubleClick={onDoubleClick}
        >{todo.bodyText}</label>
        <button onClick={() => removeItem(todo.id)}>x</button>
      </div>
      <input
        ref={editInput}
        style={{
          display: state.onEdit ? 'block' : 'none',
        }}
        value={todo.bodyText}
        onChange={(e) => onTodoTextChange(e, todo)}
        onKeyDown={onSubmitTodoEdit}
        type="text"
      />
    </li>
  )
}

export default TodoItem