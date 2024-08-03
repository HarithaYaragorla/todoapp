const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Supabase will manage passwords, but you can store other user data here
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
