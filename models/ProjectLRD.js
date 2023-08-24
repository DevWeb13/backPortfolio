const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pageSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  features: { type: Array, required: true },
});

const projectLRDSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  pages: [pageSchema],
  github: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  technologies: { type: Array, required: true },
  logo: { type: String, required: true },
});

module.exports = mongoose.model('ProjectLRD', projectLRDSchema);
