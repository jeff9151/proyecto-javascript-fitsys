var nodemailer = require('nodemailer');
var mailConfig = require('./../config/mail.js');

var transporter = nodemailer.createTransport({
  service: mailConfig.mailService,
  auth: {
    user: mailConfig.email,
    pass: mailConfig.password
  }
});

var mailOptions = {
  from: mailConfig.from,
  to: 'myfriend@yahoo.com',
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