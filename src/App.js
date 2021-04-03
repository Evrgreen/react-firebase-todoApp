import React, { useState } from 'react';
import {
  List,
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');



  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div>
      <h1>"Hello World"</h1>
      <form action='submit'>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          disabled={!input.length}
          type='Submit'
          variant='contained'
          color='primary'
          onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <p>{todos.length}</p>
      <List className='todo__list'>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </List>
    </div>
  );
}

export default App;
