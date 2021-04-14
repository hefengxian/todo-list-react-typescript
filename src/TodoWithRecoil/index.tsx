import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import Copyright from './Copyright'
import NewTodoInput from './NewTodoInput'
import TodoList from './TodoList'
import { LSKey, RAppState, recoilState } from './dataStructure'
import UnderBar from './UnderBar'

const App = () => {
  const appState: RAppState = useRecoilValue(recoilState)

  useEffect(() => {
    // 如果 appState 变化，就存储到 localStorage 中去
    localStorage.setItem(LSKey.APP_STATE, JSON.stringify(appState))
  }, [appState])

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px' }}>
      <NewTodoInput />
      <TodoList />
      <UnderBar />
      <Copyright />
    </div>
  )
}

export default App