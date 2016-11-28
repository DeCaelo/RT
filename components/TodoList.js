import React, { Component } from 'react'

class TodoList extends Component {
//loop for todos with id & text
  render() {
    return (
      <ul>

        {
          this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
          })
        }

      </ul>
    )
  }

}

export default TodoList
