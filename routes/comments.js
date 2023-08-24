const express = require('express');
const router = express.Router();

const CommentsController = require('../controllers/commentsController');

router.get('/', CommentsController.getAllComments);
router.post('/', CommentsController.createComment);

module.exports = router;
