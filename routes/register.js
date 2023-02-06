const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* users */
router.post('/', async (req, res) => {
  const user = req.body;

  // check if username or email has been taken by another user already
  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    res.json({ message: 'Ce nom d"utilisateur ou cet email est déja pris' });
  } else {
    // hash password
    user.password = await bcrypt.hash(req.body.password, 10);

    // create new user
    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });

    // save user to database
    dbUser.save();
    res.json({ message: 'Utilisateur créé avec success' });
  }
});

module.exports = router;
