require('dotenv').config();
const mongoose = require('mongoose');

const Projects = require('./models/Projects');
const data = require('./projects.js');


// Replace process.env.MONGODB_URI with YOUR mongodb url !!!!!
const cleAPI = process.env.MONGODB_URI || '';

async function start() {
  /* Connecting to the MongoDB database. */
  try {
    await mongoose.connect(cleAPI,
      {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log('Connexion à MongoDB réussie !');
    for (const fixture in data) {
      console.log(fixture);
      const project = new Projects(data[fixture]);
      await project.save();
      console.log('Project added successfully')
    }
  }
  catch (error) {
    console.log(error);
  }
}

start();