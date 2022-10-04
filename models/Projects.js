const mongoose = require('mongoose');

/* This is creating a schema for the project model. */
const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    technologies: { type: Array, required: true },
    gitHub: { type: String, required: true },
    date: { type: String, required: true },
    categorie: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);