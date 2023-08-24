const express = require('express');
const router = express.Router();

const EmailsController = require('../controllers/emailsController');

router.get('/', EmailsController.getAllEmails);
router.post('/', EmailsController.sendEmail);

module.exports = router;
