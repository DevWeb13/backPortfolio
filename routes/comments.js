const router = require('express').Router();
const Comments = require('../models/Comments');

/* comments */
router.get('/', (_req, res) => {
  Comments.find()
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
});

router.post('/', (req, res) => {
  const comment = new Comments({
    ...req.body,
  });
  comment
    .save()
    .then(() => res.status(201).json({ message: 'project added successfully' }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
