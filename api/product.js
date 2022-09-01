const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  try{
    res.json({
      status: 200,
      message: 'Welcome to the API'
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send('Server Error')
  }
})

module.exports = router;