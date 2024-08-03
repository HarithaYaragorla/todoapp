const express = require('express');
const UserModel = require('../models/User');
const supabase = require('../client'); 

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    const newUser = new UserModel({ email });
    await newUser.save();

    res.json({ message: 'User registered successfully', user: data.user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    res.json({ message: 'Login successful', token: data.session.access_token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
