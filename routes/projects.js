const router = require('express').Router();
const Projects = require('../models/Projects');

/* projects */
/* This is a route that will return all the projects in the database. */
router.get('/', (_req, res) => {
  Projects.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
});

/* Creating a new project in the database. */
router.post('/', (req, res) => {
  const project = new Projects({
    ...req.body,
  });
  project
    .save()
    .then(() => res.status(201).json({ message: 'project added successfully' }))
    .catch((error) => res.status(400).json({ error }));
});

/* Deleting a project from the database. */
router.delete('/', (req, res) => {
  Projects.deleteOne({ id: req.body.id.toString() })
    .then(() =>
      res.status(200).json({ message: 'project deleted successfully' })
    )
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
