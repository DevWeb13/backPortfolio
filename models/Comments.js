const mongoose = require('mongoose');

/* This is creating a schema for the project model. */
const commentSchema = new mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);