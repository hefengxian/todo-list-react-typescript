import React from 'react'

interface TypeState {
    count: number
}

const initialState = { count: 0 }

const reducer = (state: TypeState, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}

export const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        &nbsp;
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </>
}