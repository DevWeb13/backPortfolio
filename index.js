require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

const app = express();
app.disable("x-powered-by");

const PORT = process.env.PORT || 5000;
const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const Projects = require('./models/Projects');
const Comments = require('./models/Comments');
const Emails = require('./models/Emails');

/* Connecting to the MongoDB database. */
mongoose.connect(process.env.MONGODB_URI || "",
  {
    // @ts-ignore
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/* Parsing the body of the request. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Allowing the frontend to access the backend. */
app.use(cors({
  origin: 'https://www.lareponsedev.com/*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


app.get('/', (req, res) => {
  res.send("Hello World !!");
})

/* projects */
/* This is a route that will return all the projects in the database. */
app.get('/projects', (_req, res) => {
  Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(error => res.status(400).json({ error }));
});

/* Creating a new project in the database. */
app.post('/projects', (req, res) => {
  const project = new Projects({
    ...req.body
  });
  project.save()
    .then(() => res.status(201).json({ message: 'project added successfully' }))
    .catch(error => res.status(400).json({ error }));
});

/* Deleting a project from the database. */
app.delete('/projects', (req, res) => {
  Projects.deleteOne({ id: req.body.id.toString() })
    .then(() => res.status(200).json({ message: 'project deleted successfully' }))
    .catch(error => res.status(400).json({ error }));
})

/* comments */
app.get('/comments', (_req, res) => {
  Comments.find()
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
});

app.post('/comments', (req, res) => {
  const comment = new Comments({
    ...req.body
  });
  comment.save()
    .then(() => res.status(201).json({ message: 'project added successfully' }))
    .catch(error => res.status(400).json({ error }));
});

/* email */
const contactEmail = nodemailer.createTransport({
  host: "smtp.sfr.fr",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
});

app.get('/emails', (_req, res) => {
  Emails.find()
    .then(emails => res.status(200).json(emails))
    .catch(error => res.status(400).json({ error }));
});

app.post('/emails', (req, res) => {
  const email = new Emails({
    ...req.body
  });
  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: `Message de ${email.prenom} ${email.nom}`,
    text: `Message de ${email.prenom} ${email.nom} (${email.email})\n\n${email.message}\n\nTéléphone: ${email.tel}\n\nIP: ${email.ip.ip}`
  };
  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT));

module.exports = app;