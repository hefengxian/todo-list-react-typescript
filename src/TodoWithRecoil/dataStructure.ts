import { atom, RecoilState } from 'recoil'

export type RTodoState = 'all' | 'active' | 'completed'

export interface RTodo {
  id: string,
  bodyText: string,
  completed: boolean,
}

export type RTodoListType = RTodo[]

export interface RAppState {
  todoList: RTodoListType,
  filter: RTodoState,
}

export enum LSKey {
  APP_STATE = 'R_APP_STATE'
}

function loadAppStateFromLocalStorage(): RAppState {
  const stringifyJSON: string | null = localStorage.getItem(LSKey.APP_STATE)
  let loadedAppState: RAppState = {
    todoList: [],
    filter: 'all',
  }
  if (typeof stringifyJSON === 'string') {
    loadedAppState = JSON.parse(stringifyJSON)
  }
  return loadedAppState
}

export const recoilState: RecoilState<RAppState> = atom({
  key: 'initAppState',
  default: loadAppStateFromLocalStorage(),
})
