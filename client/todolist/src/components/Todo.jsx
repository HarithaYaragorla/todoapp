import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const response = await axios.get(`/todo/getTodos`, { headers: { userId: user.id } });
    setTodos(response.data);
  };

  const addTodo = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const response = await axios.post('/todo/addTodo', { task, status: 'pending' }, { headers: { userId: user.id } });
    setTodos([...todos, response.data.todo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
