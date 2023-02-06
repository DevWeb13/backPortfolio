require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT || 5000;

/* Connecting to the MongoDB database. */
mongoose
  .connect(process.env.MONGODB_URI || '', {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/* Parsing the body of the request. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Allowing the frontend to access the backend. */
app.use(
  cors({
    origin: ['https://www.lareponsedev.com', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);

/* Routes */
app.use('/', require('./routes/index'));
app.use('/register', require('./routes/register'));
app.use('/projects', require('./routes/projects'));
app.use('/comments', require('./routes/comments'));
app.use('/emails', require('./routes/emails'));

app.listen(PORT, () =>
  console.log('Server started at http://localhost:' + PORT)
);

module.exports = app;
