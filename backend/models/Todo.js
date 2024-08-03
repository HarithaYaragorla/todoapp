const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  task: { type: String, required: true },
  status: { type: String, default: 'pending' },
  deadline: { type: Date },
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
