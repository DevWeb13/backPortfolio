const ProjectLRD = require('../models/ProjectLRD');

exports.getAllProjectsLRD = (_req, res) => {
  ProjectLRD.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};
