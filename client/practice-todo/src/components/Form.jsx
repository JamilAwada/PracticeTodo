import React, { useState, useEffect } from 'react'

function Form(props) {


    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo('');
        props.handleAddTodo(todo);
    }

    const handleChange = (e) => {  
        setTodo(e.target.value);
        console.log(todo);
    }
    
    useEffect(() => {
        console.log('useEffect ran');
    }, [])

  return (
    <form className='mt-5'>
        <input type='text' placeholder='Enter todo' className='rounded p-2' value={todo} onChange={handleChange} />
        <button type='submit' className='rounded bg-blue-500 text-white p-2 ml-3' onClick={handleSubmit}>Submit</button>

    </form>
  )
}

export default Form