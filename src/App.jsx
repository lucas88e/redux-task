import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import  {addTask,removeTask}  from './redux/todoSlice.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './App.css';


function App() {
  const [task, setTask] = useState("")
  const todos = useSelector((state)=>state.todos)
  const dispatch = useDispatch()

  const handleInputChange = (e)=>{
    setTask(e.target.value)
  }
  const handleAddTodo = ()=>{
    if(task){

      dispatch(addTask(task))
      setTask("")
    }
  }

  const handleRemove = (id) =>{
   
     dispatch(removeTask(id))  
    
   

  }
 
  return (
    <div>
      <h1>Lista de tareas </h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Lista</InputGroup.Text>
        <Form.Control
          placeholder="Tareas"
          value={task}
          onChange={handleInputChange}
        />
      </InputGroup>
      <Button onClick={handleAddTodo}>Add Tarea</Button>
      <ul>

        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}
          <Button variant='danger' onClick={()=>handleRemove(todo.id)}>Borrar tarea</Button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;