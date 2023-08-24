const Comments = require('../models/Comments');

exports.getAllComments = (_req, res) => {
  Comments.find()
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
};

exports.createComment = (req, res) => {
  const comment = new Comments({
    ...req.body,
  });
  comment
    .save()
    .then(() => res.status(201).json({ message: 'Comment added successfully' }))
    .catch((error) => res.status(400).json({ error }));
};
