const nodemailer = require('nodemailer');
const Emails = require('../models/Emails');

const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const contactEmail = nodemailer.createTransport({
  host: 'smtp.sfr.fr',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

exports.getAllEmails = (_req, res) => {
  Emails.find()
    .then((emails) => res.status(200).json(emails))
    .catch((error) => res.status(400).json({ error }));
};

exports.sendEmail = (req, res) => {
  const email = new Emails({
    ...req.body,
  });
  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: `Message de ${email.prenom} ${email.nom}`,
    text: `Message de ${email.prenom} ${email.nom} (${email.email})\n\n${email.message}\n\nTéléphone: ${email.tel}\n\nIP: ${email.ip.ip}`,
  };
  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});
