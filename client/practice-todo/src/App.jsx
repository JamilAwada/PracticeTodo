import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'


function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos([...todos, todo]);
  };

    const deleteTodo = (index) => {
        console.log("OMMAK")
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  return (
    <>
    <div className='flex flex-col items-center mt-20'>
      <h1 className='text-3xl'>Todo List</h1>
      <p>Simple app using React and MongoDB</p>
      <Form handleAddTodo={addTodo} />
      <List todos={todos} handleDeleteTodo={deleteTodo}/>
    </div>
    
    
    </>
    

  )
}

export default App
