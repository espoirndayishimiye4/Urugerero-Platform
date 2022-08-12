const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'espoirndayishimiye4@gmail.com',
    pass: ''
  }
});

const mailOptions = {
  from: 'espoirndayishimiye4@gmail.com',
  to: 'joenkusi01@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});