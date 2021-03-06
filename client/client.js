import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo'
  }],
  user: {
    username: 'test user',
    id: 3
  }
}

// configure and create our store
let store = configureStore(initialState)
// var store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
