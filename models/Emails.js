const mongoose = require('mongoose');

/* This is creating a schema for the email model. */
const emailSchema = new mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  ip: { type: Object, required: true },
  tel: { type: String },
});

module.exports = mongoose.model('Email', emailSchema);