import React from 'react'

const Todo = ({ todo }) => {
  return (
        <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">
                ({todo.category})
              </p>
            </div>
            <button>Completar</button>
            <button>x</button>
        </div>
  )
}

export default Todo