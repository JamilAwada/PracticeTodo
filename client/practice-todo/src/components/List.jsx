import React from 'react'
import Todo from './Todo'

function List(props) {
  return (

    <div className='bg-gray-200 p-5 mt-10 w-1/2 rounded'>
        <h1 className='text-2xl text-center'>Todo List</h1>
        <ul>
        <ul>
            {Object.values(props.todos).map((todo, index) => (
              <Todo key={index} title={todo} deleteTodo={props.handleDeleteTodo} />
            ))}
        </ul>
        </ul>
    </div>
  )
}

export default List