const express = require('express');
const TodoModel = require('../models/Todo');
const supabase = require('../supabaseClient');

const router = express.Router();

router.post('/addTodo', async (req, res) => {
  const { task, status, deadline } = req.body;
  const userId = req.user.id; // Assume user is authenticated, and we have the user ID

  const newTodo = new TodoModel({ userId, task, status, deadline });
  await newTodo.save();

  res.json({ message: 'Todo added successfully', todo: newTodo });
});

router.get('/getTodos', async (req, res) => {
  const userId = req.user.id;
  const todos = await TodoModel.find({ userId });

  res.json(todos);
});

