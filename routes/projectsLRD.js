const express = require('express');
const router = express.Router();

const ProjectsController = require('../controllers/projectsLRDController');

router.get('/', ProjectsController.getAllProjectsLRD);

module.exports = router;
