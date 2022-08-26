require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;




const Projects = require('./models/Projects');


// Replace process.env.MONGODB_URI with YOUR mongodb url !!!!!
const cleAPI = process.env.MONGODB_URI||'';


/* Connecting to the MongoDB database. */

mongoose.connect(cleAPI, 
  {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();


/* Parsing the body of the request. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Allowing the frontend to access the backend. */
app.use(cors({
  origin: '*'
}));
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.get('/', (req, res) => {
  res.send("Hello World !!");
})



/* This is a route that will return all the projects in the database. */
app.get('/projects', (_req, res) => {
  Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(400).json({ error }));
});



/* Creating a new project in the database. */
app.post('/projects', (req, res) => {
  const project = new Projects({
    ...req.body
  });
  project.save()
    .then(() => res.status(201).json({ message: 'project added successfully' }))
    .catch(error => res.status(400).json({ error }));
});

/* Deleting a project from the database. */
app.delete('/projects', (req, res) => {
  Projects.deleteOne({ id: req.body.id.toString() })
    .then(() => res.status(200).json({ message: 'project deleted successfully' }))
    .catch(error => res.status(400).json({ error }));
})

app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT));

module.exports = app;