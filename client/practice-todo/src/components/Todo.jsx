import React from 'react'

function Todo(props) {
  return (

    <div className='mt-5 bg-gray-300 p-4 rounded flex justify-between'>
        <p className='p-2'>{props.title}</p>
        <div>
            <button className='p-2 mx-1 bg-red-600 rounded text-white' onClick={props.deleteTodo}>Delete</button>
            <button className='p-2 mx-1 bg-yellow-600 rounded text-white'>Edit</button>
        </div>
        
    </div>
    
  )
}

export default Todo