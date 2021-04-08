import React, { createContext, useReducer, useContext } from 'react'

interface StateType {
    count: number
}

interface ActionType {
    type: string
}

interface InitContextType {
    children: React.ReactNode
}

const initialState: StateType = { count: 0 }

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count + 1 }
        default:
            throw new Error()
    }
}

const Context = createContext({})

function useStore() {
    return useContext(Context)
}

function StoreProvider({ children }: InitContextType) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export { useStore, StoreProvider }