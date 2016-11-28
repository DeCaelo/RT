import { createStore } from 'redux'
import reducer from './reducer'

// TODO: Add middleware

export default function configureStore(initialState = { todos: [] }) {
  return createStore(reducer, initialState)
}
